'use client'
import Link from 'next/link'

export default function Favorites() {
    return (
        <section className="flex flex-col mb-6 mx-4" data-cy="favorites-section">
            <h2>Wishlist</h2>

            <p className="text-center">Your wishlist is empty</p>

            <button type="button">
                <Link href="/">Discover our products</Link>
            </button>
        </section>
    )
}
