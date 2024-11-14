'use client'

import Image from 'next/image'
import Link from 'next/link'

import { defineQuery } from 'next-sanity'

import { sanityClient } from '@/sanity/client'
import Categories from './components/ui/categories'

const options = { next: { revalidate: 60 } }

export default function Home() {
    return (
        <div className=" bg-slate-200 min-h-screen pb-20 ">
            <main className="flex flex-col gap-8 row-start-2 items-center mb-8">
                <Categories />
                <p>Hello</p>
                <p>I am groot</p>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/" target="_blank" rel="noopener noreferrer">
                    Link 1
                </Link>
                <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/" target="_blank" rel="noopener noreferrer">
                    Link2
                </Link>
            </footer>
        </div>
    )
}
