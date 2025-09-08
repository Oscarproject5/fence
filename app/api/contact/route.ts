import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
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
          subject: `New Fence Quote Request from ${data.name}`,
          from_name: 'RGV Fencing Website',
          ...data
        }),
      })
      
      const result = await response.json()
      
      if (result.success) {
        return NextResponse.json({ success: true, message: 'Email sent successfully' })
      }
    }
    
    // Option 2: Log to Vercel Functions Log (visible in Vercel dashboard)
    console.log('New Quote Request:', {
      timestamp: new Date().toISOString(),
      ...data
    })
    
    // Option 3: You can also integrate with:
    // - SendGrid: process.env.SENDGRID_API_KEY
    // - Resend: process.env.RESEND_API_KEY
    // - Postmark: process.env.POSTMARK_API_KEY
    // - Or save to a database like Vercel Postgres
    
    return NextResponse.json({ 
      success: true, 
      message: 'Quote request received successfully' 
    })
    
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    )
  }
}