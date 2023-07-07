import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/layouts/NavBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nirvana-Search for Breaking News ',
  description: 'news application that gives users acess to breaking news happening in the United States of America.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <div className='mt-24'>
          {children}
        </div>
        </body>
    </html>
  )
}
