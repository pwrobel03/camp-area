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
      <body>
        <Navbar></Navbar>
        <main className='relative overflow-hidden'>
          {children}
        </main>
      </body>
    </html>
  )
}
