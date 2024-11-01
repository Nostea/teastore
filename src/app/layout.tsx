import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import NavbarM from './ui/navbarM'

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
            </body>
        </html>
    )
}
