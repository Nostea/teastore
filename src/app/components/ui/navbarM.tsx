'use client'
import Link from 'next/link'
import ShoppingCart from './shoppingCart'

export default function NavbarM() {
    return (
        <nav className=" min-w-screen py-4 flex flex-row justify-between items-center px-4">
            <div className="flex flex-row gap-2">
                <Link className="hover:text-purple-400" href="/">
                    Pie
                </Link>
                <Link className="hover:text-purple-400" href="/">
                    Sea
                </Link>
            </div>
            <Link href="/" className=" text-3xl uppercase font-bold">
                Teavana
            </Link>
            <div className="flex flex-row gap-2">
                <Link className="hover:text-purple-400" href="/">
                    Fav
                </Link>
                <Link className="hover:text-purple-400" href="/">
                    Acc
                </Link>
                <ShoppingCart />
            </div>
        </nav>
    )
}
