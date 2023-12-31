import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/app/components/theme.provider'
import NavBar from '@/app/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// Providers wrao around our application and give them access to global state / data.
// We can also use this to wrap our application with a theme provider.
// NextThemesProvider - Give our application access to light / dark mode data.
// Swithch from light mode to dark mode <-- user interaction // needs the client to exist.


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#172554" }}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          {/* <div className=' bg-blue-200'> */}
          <NavBar />
          <main className="flex min-h-screen flex-col items-center  p-12">
            {children}
          </main>
          {/* </div> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
