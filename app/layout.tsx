import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Camp Area',
  description: 'UI/UX App For Camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar></Navbar>
        <main className='relative mx-6 overflow-hidden max-container padding-container '>
          {children}
        </main>
      </body>
    </html>
  )
}
