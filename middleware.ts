import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting map (in-memory, resets on deployment)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Configuration
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10 // 10 requests per minute for forms
const BLOCKED_IPS: string[] = [] // Add malicious IPs here if needed

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
  const url = request.nextUrl.pathname

  // Block known malicious IPs
  if (BLOCKED_IPS.includes(ip)) {
    return new NextResponse('Access Denied', { status: 403 })
  }

  // Apply rate limiting to API routes
  if (url.startsWith('/api/')) {
    const now = Date.now()
    const userRateLimit = rateLimitMap.get(ip)

    if (userRateLimit) {
      if (now < userRateLimit.resetTime) {
        if (userRateLimit.count >= MAX_REQUESTS_PER_WINDOW) {
          return new NextResponse('Too Many Requests', {
            status: 429,
            headers: {
              'Retry-After': String(Math.ceil((userRateLimit.resetTime - now) / 1000))
            }
          })
        }
        userRateLimit.count++
      } else {
        // Reset the rate limit window
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
      }
    } else {
      // First request from this IP
      rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    }

    // Clean up old entries periodically (every 100 requests)
    if (Math.random() < 0.01) {
      const cutoffTime = now - RATE_LIMIT_WINDOW * 2
      for (const [key, value] of rateLimitMap.entries()) {
        if (value.resetTime < cutoffTime) {
          rateLimitMap.delete(key)
        }
      }
    }
  }

  // Add security headers for API responses
  if (url.startsWith('/api/')) {
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-XSS-Protection', '1; mode=block')
  }

  // Prevent clickjacking for all pages
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')

  // Add request ID for tracking
  response.headers.set('X-Request-ID', crypto.randomUUID())

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}