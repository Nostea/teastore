import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import NavbarM from './components/ui/navbarM'
import ShopPerks from './components/ui/shopPerks'

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
            </body>
        </html>
    )
}
