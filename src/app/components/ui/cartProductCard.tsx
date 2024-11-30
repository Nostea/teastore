'use client'
import Link from 'next/link'

export default function CartProductCard() {
    return (
        <div className="flex flex-row gap-4">
            <img src="/tea1.jpg" alt="product img" className="w-32 h-36 object-cover mb-6" />
            <div className="flex flex-col">
                <div className="flex flex-row justify-between gap-4">
                    <div>
                        <h3 className="uppercase">White Earl</h3>
                        <p>Amount of product</p>
                    </div>
                    <span>DELETE</span>
                </div>
                <div className="flex flex-row justify-between">
                    <div>
                        <p>- Counter +</p>
                    </div>
                    <p className="font-bold">$ 18.00</p>
                </div>
            </div>
        </div>
    )
}
