'use client'
import Link from 'next/link'

export default function ProductCardM({ title, img, category, description, price, link }: ProductCardProps) {
    return (
        <div className="flex flex-col" data-cy="productCardM">
            <Link href={link}>
                <img src="/tea1.jpg" alt="tea" />
            </Link>
            <div>
                <small>{category}</small>
                <h3 className=" uppercase">{title}</h3>
                <p>{description}</p>
                <p className=" text-xl font-bold">{price}$</p>
            </div>
        </div>
    )
}

type ProductCardProps = {
    title: string
    img: string
    category: string
    description: string
    price: number
    link: string
}
