/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
  },
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://api.web3forms.com https://maps.googleapis.com https://maps.gstatic.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https: blob:;
      connect-src 'self' https://api.web3forms.com https://maps.googleapis.com;
      frame-src 'self' https://maps.google.com https://www.google.com;
      media-src 'self';
      object-src 'none';
      base-uri 'self';
      form-action 'self' https://api.web3forms.com;
      frame-ancestors 'self';
      upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim()
  }
]

const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  // Additional security configurations
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig