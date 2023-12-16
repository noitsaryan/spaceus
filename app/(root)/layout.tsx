import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { Source_Sans_3 } from "next/font/google"
import { Toaster } from 'react-hot-toast'
export const metadata: Metadata = {
  title: 'Spaceus - Complete home interior solutions.',
  description: 'Spaceus excels in complete home interior solutions which offers complete concept to contruction services.',
}
const font = Source_Sans_3({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className='md:hidden'>
          <Header />
          {children}
        </main>
        <Toaster position="bottom-center"
          reverseOrder={false} />
      </body>
    </html>
  )
}
