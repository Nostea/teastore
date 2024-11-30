'use client'
import Link from 'next/link'

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import CartProductCard from './cartProductCard'

export default function ShoppingCart() {
    return (
        <Sheet>
            <SheetTrigger className="border-none p-0 m-0">Cart</SheetTrigger>
            <SheetContent side="right" className="w-full">
                <SheetHeader className="mb-8">
                    <SheetTitle className="p-0 m-0 ">Your Cart</SheetTitle>
                </SheetHeader>
                <div className="bg-green-200">
                    <p>This is your cart right now</p>

                    <CartProductCard />

                    <button type="button">Buy</button>
                </div>
            </SheetContent>
        </Sheet>
    )
}
