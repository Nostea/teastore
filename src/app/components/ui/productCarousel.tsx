'use client'
import Link from 'next/link'
import ProductCardM from './productCardM'

export default function ProductCarousel() {
    return (
        <section className="flex flex-col px-4 items-start" data-cy="product-carousel">
            <h2>Promotion Title</h2>
            <p>promotion description</p>
            <div className="grid grid-cols-4 gap-2">
                <ProductCardM
                    title="Hibiscus Tea"
                    img="/tea1.jpg"
                    category="fruit"
                    description="A marvellously fruity tea for relaxing moments"
                    price={8}
                    link="./"
                />
                <ProductCardM
                    title="Darjeeling Surprise"
                    img="/tea1.jpg"
                    category="black"
                    description="A marvellously fruity tea for relaxing moments"
                    price={5}
                    link="./"
                />
                <ProductCardM
                    title="Supreme Sencha"
                    img="/tea1.jpg"
                    category="green"
                    description="A marvellously fruity tea for relaxing moments"
                    price={6}
                    link="./"
                />
                <ProductCardM
                    title="White Earl"
                    img="/tea1.jpg"
                    category="white"
                    description="A marvellously fruity tea for relaxing moments"
                    price={7.5}
                    link="./"
                />
            </div>
            <button>
                <Link href="/" className="button-outline">
                    Discover more
                </Link>
            </button>
        </section>
    )
}
