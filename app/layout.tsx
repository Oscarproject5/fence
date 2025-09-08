import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://rgvfencing.com'),
  title: {
    default: 'RGV Fencing - #1 Fence Installation Brownsville, McAllen, Harlingen TX | Free Quote',
    template: '%s | RGV Fencing - Rio Grande Valley Fence Contractors'
  },
  description: '⭐ Top-rated fence installation & repair in Rio Grande Valley. Wood, chain link, wrought iron fencing. Serving Brownsville, McAllen, Harlingen. 24/7 emergency repairs. Free estimates! Call 956-555-FENCE',
  keywords: [
    'fence installation Brownsville TX',
    'fence repair McAllen',
    'chain link fence Harlingen',
    'wood fence Rio Grande Valley',
    'wrought iron fence RGV',
    'fence contractors near me',
    'residential fence installation',
    'commercial fence repair',
    'ranch fencing Texas',
    'fence company Brownsville',
    'affordable fence installation',
    'emergency fence repair RGV',
    'custom gates McAllen',
    'fence replacement Harlingen',
    'storm damage fence repair'
  ].join(', '),
  authors: [{ name: 'RGV Fencing' }],
  creator: 'RGV Fencing',
  publisher: 'RGV Fencing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://rgvfencing.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'RGV Fencing - Professional Fence Installation & Repair in Rio Grande Valley',
    description: 'Top-rated fence contractors serving Brownsville, McAllen, Harlingen. Wood, chain link, wrought iron installation. Free quotes! Call 956-555-FENCE',
    url: 'https://rgvfencing.com',
    siteName: 'RGV Fencing',
    images: [
      {
        url: '/images/hero-fence.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Fence Installation in Rio Grande Valley',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RGV Fencing - #1 Fence Contractors in Rio Grande Valley',
    description: 'Professional fence installation & repair. Serving Brownsville, McAllen, Harlingen. Free quotes!',
    images: ['/images/hero-fence.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://rgvfencing.com/#organization',
  name: 'RGV Fencing',
  image: 'https://rgvfencing.com/images/hero-fence.jpg',
  logo: 'https://rgvfencing.com/logo.png',
  telephone: '956-555-3362',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brownsville',
    addressRegion: 'TX',
    postalCode: '78520',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.9017,
    longitude: -97.4975
  },
  url: 'https://rgvfencing.com',
  sameAs: [
    'https://facebook.com/rgvfencing',
    'https://instagram.com/rgvfencing'
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '19:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '17:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '09:00',
      closes: '16:00'
    }
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Brownsville',
      '@id': 'https://www.wikidata.org/wiki/Q51693'
    },
    {
      '@type': 'City',
      name: 'McAllen',
      '@id': 'https://www.wikidata.org/wiki/Q51697'
    },
    {
      '@type': 'City',
      name: 'Harlingen',
      '@id': 'https://www.wikidata.org/wiki/Q868834'
    },
    {
      '@type': 'City',
      name: 'Edinburg'
    },
    {
      '@type': 'City',
      name: 'Mission'
    },
    {
      '@type': 'City',
      name: 'Pharr'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Fence Installation Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wood Privacy Fence Installation',
          description: 'Custom wood privacy fence installation with cedar, pine, and premium wood options'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Chain Link Fence Installation',
          description: 'Commercial and residential chain link fence installation'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wrought Iron Fence Installation',
          description: 'Custom ornamental iron fence installation with automatic gates'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fence Repair Services',
          description: 'Emergency fence repair, storm damage repair, and maintenance'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '287',
    bestRating: '5',
    worstRating: '1'
  }
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does fence installation cost in Rio Grande Valley?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fence installation costs in RGV typically range from $15-45 per linear foot depending on material. Wood fences average $20-30/ft, chain link $15-25/ft, and wrought iron $30-45/ft. Contact us for a free quote.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does fence installation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential fence installations are completed in 1-3 days. Larger commercial projects may take 3-7 days. Weather and permit requirements can affect timeline.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide emergency fence repair services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer 24/7 emergency fence repair services for storm damage, accidents, and security breaches throughout Brownsville, McAllen, and Harlingen.'
      }
    },
    {
      '@type': 'Question',
      name: 'What areas do you serve in Rio Grande Valley?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all of Rio Grande Valley including Brownsville, McAllen, Harlingen, Edinburg, Mission, Pharr, and surrounding areas within a 50-mile radius.'
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://rgvfencing.com" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Rio Grande Valley" />
        <meta name="geo.position" content="25.9017;-97.4975" />
        <meta name="ICBM" content="25.9017, -97.4975" />
        <Script
          id="json-ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
          strategy="afterInteractive"
        />
        <Script
          id="json-ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd)
          }}
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans bg-gray-50">
        {children}
      </body>
    </html>
  )
}