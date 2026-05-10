import type { Metadata } from 'next'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://clearquotehealth.com')

export const metadata: Metadata = {
  title: 'ClearQuote Health | Compare Health Insurance Plans',
  description:
    'Compare health insurance plans from trusted carriers in minutes. Find affordable coverage for individuals, families, and self-employed households.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Compare Health Insurance Plans in Minutes',
    description:
      'Shop health coverage options side-by-side and speak with a licensed agent to find the right plan.',
    url: '/',
    siteName: 'ClearQuote Health',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  )
}
