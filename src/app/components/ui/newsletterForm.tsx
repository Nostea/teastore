'use client'
import Link from 'next/link'

export default function NewsletterForm() {
    return (
        <section className="px-4 py-6 bg-slate-200" data-cy="newsletter">
            <h2>Save 10% off your next offer</h2>
            <p className="mb-4">Subscribe to our newsletter and save 10% on your first order. Get notified when new products launch and seasonal offers.</p>
            <form action="" data-cy="newsletter-form" className="mb-4">
                <input type="email" name="email" id="email-newsletter" placeholder="mail@example.de" className="bg-white" />
                <input type="submit" value="Register" className="bg-slate-900 text-white mb-0" data-cy="newsletter-submit" />
            </form>
            <small data-cy="newsletter-terms">
                * Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque totam harum ea natus incidunt maxime minus in, recusandae provident eveniet!
            </small>
        </section>
    )
}
