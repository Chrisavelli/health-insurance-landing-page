import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Get Health Insurance Quotes - Fast & Easy',
  description: 'Compare health insurance quotes from top providers. Get personalized quotes in minutes.',
  openGraph: {
    title: 'Get Health Insurance Quotes',
    description: 'Compare health insurance quotes from top providers.',
    url: 'https://yoursite.com',
    siteName: 'Health Insurance Quotes',
    images: [
      {
        url: 'https://yoursite.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/hcaptcha@1/dist/hcaptcha.js"
        ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
