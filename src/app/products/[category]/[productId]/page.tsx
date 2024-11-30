'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function ProductDetailPage({ img, prodCategory, title, description, highlights }: ProductDetails) {
    const params: MyPathParams = useParams()
    const productId = params.productId
    const category = params.category
    console.log(params)
    console.log(category)
    console.log(productId)

    return (
        <section className="min-h-screen flex flex-col" data-cy="product-section">
            <img src={img} alt="tea preview" className=" min-h-[400px] object-cover mb-4" />

            <div className="mx-4" data-cy="product-info">
                <p className="text-sm" data-cy="product-category">{prodCategory}</p>
                <h2>{title}</h2>
                <div className="flex flex-row gap-2 items-center mb-4">
                    <span>Star</span>
                    <p className="font-semibold" data-cy="product-rating">4.7</p>
                    <p className="font-light" data-cy="review-counter">31 Reviews</p>
                </div>
                <p data-cy="product-description">{description}</p>
                <ul className=" indent-4" data-cy="product-highlights">
                    {highlights?.map((highlight) => <li key={productId}>{highlight}</li>)}
                    </ul>
            </div>
        </section>
    )
}

type MyPathParams = {
    category: string
    productId: string
}

type ProductDetails = {
    img: string
    prodCategory: string
    title: string
    description: string
    highlights: string[]
}
