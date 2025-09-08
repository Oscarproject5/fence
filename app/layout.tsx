import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rio Grande Valley Fencing - Professional Fence Installation & Repair',
  description: 'Professional fence installation and repair for homes, ranches, and businesses across Brownsville, McAllen, Harlingen, and the Rio Grande Valley.',
  keywords: 'fence installation, fence repair, Rio Grande Valley, Brownsville, McAllen, Harlingen, wood fence, chain link fence, wrought iron fence, ranch fencing',
  openGraph: {
    title: 'Rio Grande Valley Fencing - Strong, Reliable Fences',
    description: 'Professional fence installation and repair services in the Rio Grande Valley',
    type: 'website',
    locale: 'en_US',
    siteName: 'RGV Fencing',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50">
        {children}
      </body>
    </html>
  )
}