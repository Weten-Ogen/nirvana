import NavBar from '@/components/common/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nirvana | News',
  description:'news and headlines update',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-200'>
        <NavBar/>
        <div className='p-4 mt-10 z-10'>
        {children}
        </div>
        </body>
    </html>
  )
}
