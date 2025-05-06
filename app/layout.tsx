import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NOVASTEP',
  description: 'Shoe catalogue'
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
