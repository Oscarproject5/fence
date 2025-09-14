import { NextResponse } from 'next/server'
import { validateAndSanitizeForm, checkForSpam, isHoneypotTriggered, isFilledTooQuickly } from '@/lib/security'

// IP-based request tracking for additional rate limiting
const requestMap = new Map<string, number[]>()
const MAX_REQUESTS_PER_IP = 5
const TIME_WINDOW = 60 * 60 * 1000 // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const requests = requestMap.get(ip) || []

  // Filter out old requests
  const recentRequests = requests.filter(time => now - time < TIME_WINDOW)

  if (recentRequests.length >= MAX_REQUESTS_PER_IP) {
    return false // Rate limit exceeded
  }

  // Add current request
  recentRequests.push(now)
  requestMap.set(ip, recentRequests)

  // Clean up old entries periodically
  if (Math.random() < 0.01) {
    for (const [key, times] of requestMap.entries()) {
      const recent = times.filter(time => now - time < TIME_WINDOW)
      if (recent.length === 0) {
        requestMap.delete(key)
      } else {
        requestMap.set(key, recent)
      }
    }
  }

  return true
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse request body
    const data = await request.json()

    // Check honeypot field (if included)
    if (isHoneypotTriggered(data.honeypot)) {
      // Silently reject but return success to confuse bots
      console.log('Honeypot triggered from IP:', ip)
      return NextResponse.json({ success: true, message: 'Thank you for your submission' })
    }

    // Check if form was filled too quickly (bot detection)
    if (data.timestamp && isFilledTooQuickly(data.timestamp)) {
      console.log('Form filled too quickly from IP:', ip)
      return NextResponse.json(
        { success: false, message: 'Please take your time to fill out the form.' },
        { status: 400 }
      )
    }

    // Validate and sanitize input
    const { isValid, errors, sanitizedData } = validateAndSanitizeForm(data)

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid input: ' + errors.join(', ') },
        { status: 400 }
      )
    }

    // Check for spam patterns
    const messageToCheck = `${sanitizedData.name} ${sanitizedData.message} ${sanitizedData.email}`
    if (checkForSpam(messageToCheck)) {
      console.log('Potential spam detected from IP:', ip)
      return NextResponse.json(
        { success: false, message: 'Your message has been flagged. Please contact us directly.' },
        { status: 400 }
      )
    }

    // Option 1: Use Web3Forms API
    const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    if (web3FormsKey && web3FormsKey !== 'YOUR_ACCESS_KEY_HERE') {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          subject: `New Fence Quote Request from ${sanitizedData.name}`,
          from_name: 'RGV Fencing Website',
          ...sanitizedData,
          // Add security metadata
          ip_address: ip,
          user_agent: request.headers.get('user-agent') || 'unknown',
          timestamp: new Date().toISOString()
        }),
      })

      const result = await response.json()

      if (result.success) {
        return NextResponse.json({
          success: true,
          message: 'Thank you! We\'ll contact you within 24 hours.'
        })
      } else {
        console.error('Web3Forms error:', result)
        throw new Error('Failed to send email')
      }
    }

    // Option 2: Log to Vercel Functions Log (visible in Vercel dashboard)
    console.log('New Quote Request:', {
      timestamp: new Date().toISOString(),
      ip: ip,
      ...sanitizedData
    })

    // Option 3: You can also integrate with:
    // - SendGrid: process.env.SENDGRID_API_KEY
    // - Resend: process.env.RESEND_API_KEY
    // - Postmark: process.env.POSTMARK_API_KEY
    // - Or save to a database like Vercel Postgres

    return NextResponse.json({
      success: true,
      message: 'Quote request received successfully. We\'ll contact you soon!'
    })

  } catch (error) {
    console.error('Form submission error:', error)

    // Don't expose internal errors to client
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}

// OPTIONS method for CORS preflight
export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production'
        ? 'https://yourdomain.com'
        : '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  })
}