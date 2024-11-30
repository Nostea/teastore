'use client'

import Image from 'next/image'
import Link from 'next/link'

import { defineQuery } from 'next-sanity'

import { sanityClient } from '@/sanity/client'
import Categories from './components/ui/categories'
import ProductCarousel from './components/ui/productCarousel'

const options = { next: { revalidate: 60 } }

export default function Home() {
    return (
        <div className=" bg-slate-200  pb-20 ">
            <main className="flex flex-col gap-8 row-start-2 items-center mb-8">
                <Categories />
                <ProductCarousel />
            </main>
        </div>
    )
}
