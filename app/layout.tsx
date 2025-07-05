import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quote Generator',
  description: 'Discover inspiring quotes tailored to your interests. Enter any topic and get three carefully curated quotes to motivate and inspire your journey.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
