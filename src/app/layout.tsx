import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import NavbarM from './components/ui/navbarM'
import ShopPerks from './components/ui/shopPerks'
import Footer from './components/ui/footer'

export const metadata: Metadata = {
    title: 'Teavana Store',
    description: 'Online tea store'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <NavbarM />
                {children}
                <ShopPerks />
                <Footer />
            </body>
        </html>
    )
}
