'use client'
import Link from 'next/link'

export default function ShopPerks() {
    return (
        <section className="bg-green-200 py-4 flex flex-col items-start px-4">
            <h2>Your perks at TEAVANA</h2>
            <div className="grid grid-cols-1 gap-2 ">
                <div className="flex flex-row gap-4">
                    <p>Image</p>
                    <div>
                        <p>Free shipping</p>
                        <p>For all orders above 39$</p>
                    </div>
                </div>
                <div className="flex flex-row  gap-4">
                    <p>Image</p>
                    <div>
                        <p>30 days return</p>
                        <p>Simply return what you didn't enjoy</p>
                    </div>
                </div>
                <div className="flex flex-row  gap-4">
                    <p>Image</p>
                    <div>
                        <p>Exclusive gifts</p>
                        <p>Become a member and receive exclusive gifts</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
