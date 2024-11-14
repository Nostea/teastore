'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Detailpage() {
    return (
        <section className="min-h-screen flex flex-col">
            <img src="/tea1.jpg" alt="tea preview" className=" min-h-[400px] object-cover mb-4" />

            <div className="mx-4">
                <p className="text-sm">category</p>
                <h2>Tea Title</h2>
                <div className="flex flex-row gap-2 items-center mb-4">
                    <span>Star</span>
                    <p className="font-semibold">4.7</p>
                    <p className="font-light">31 Reviews</p>
                </div>
                <p>
                    Here comes product description Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde sapiente hic saepe harum, fugiat
                    reiciendis et repellendus, laudantium fugit magni suscipit sed nulla esse odit consectetur provident, at soluta commodi dolorem iste
                    mollitia explicabo nihil modi? Nostrum ut minus, harum, obcaecati saepe itaque provident laboriosam cupiditate ducimus in a.
                </p>
                <ul className=" indent-4">
                    <li>Calming effect</li>
                    <li>Airtight seal</li>
                    <li>Multiple brews</li>
                </ul>
                
            </div>
        </section>
    )
}
