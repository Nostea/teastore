'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sanityClient } from '@/sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function ProductDetailPage({ img, title, description, highlights }: ProductDetails) {
    const params: MyPathParams = useParams()
    const productId = params.productId
    const [myProduct, setMyProduct] = useState<Product | null>(null) // google how to use usestate with ts react :)

    const mySanityClient = sanityClient
    const builder = imageUrlBuilder(sanityClient)

    function urlFor(source: SanityImageSource) {
        //console.table(source)
        return builder.image(source)
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await sanityClient.fetch(`*[_type == "product" && _id == $id][0]`, { id: productId })
                setMyProduct(response)
            } catch (error) {
                console.error('Error fetching product:', error)
            }
        }

        fetchProduct()
    }, [productId])

    if (!myProduct) return <div>Loading...</div>

    //console.log(params)
    //console.log(productId)
    //console.table(myProduct)

    return myProduct != null ? (
        <section className=" flex flex-col mb-8" data-cy="product-section">
            <img src={urlFor(myProduct.images[0]).width(200).url()} alt={myProduct.name} />
            <div className="px-4" data-cy="product-info">
                <p className="text-sm" data-cy="product-category">
                    Category
                </p>
                <h2>{myProduct.name}</h2>
                <div className="flex flex-row gap-2 items-center mb-4">
                    <span>Star</span>
                    <p className="font-semibold" data-cy="product-rating">
                        4.7
                    </p>
                    <p className="font-light" data-cy="review-counter">
                        31 Reviews
                    </p>
                </div>
                <p data-cy="product-description">{myProduct.description}</p>
                <ul className=" indent-4" data-cy="product-highlights">
                    {myProduct.highlights?.map((highlight) => <li key={productId}>{highlight}</li>)}
                </ul>
            </div>
            <div className="flex flex-col px-4 py-8 bg-slate-100" data-cy="format-picker">
                <p>Choose format and weightt</p>
                <div className="grid grid-cols-1 gap-2 mb-4">
                    <div className="flex flex-row gap-4 items-center bg-white p-2">
                        <img src="/tin.svg" alt="tin size" className="w-12" />
                        <div className="flex flex-col">
                            <p>price Є</p>
                            <p>Tinbox - 40g for 20 cups</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center bg-white p-2">
                        <img src="/refill.svg" alt="refill size" className="w-12" />
                        <div className="flex flex-col">
                            <p>price Є</p>
                            <p>Refill - 250g for 125 cups</p>
                        </div>
                    </div>
                </div>

                <div data-cy="price-info">
                    <p className="font-bold text-xl">{myProduct.price}Є</p>
                    <p>price per kg</p>
                    <p>VAT and shipping included</p>
                </div>
            </div>
            <div>
                <Accordion type="single" orientation="horizontal" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Ingredients</AccordionTrigger>
                        <AccordionContent>Text about ingredients</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    ) : (
        <div>Foo</div>
    )
}

type MyPathParams = {
    productId: string
}

type ProductDetails = {
    img: string
    title: string
    description: string
    highlights: string[]
}

type Product = {
    price: number
    highlights: string[]
    category: string
    name: string | undefined
    description: string
    images: SanityImageSource[]
}
