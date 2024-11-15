'use client'
import Link from 'next/link'
import NewsletterForm from './newsletterForm'

export default function Footer() {
    return (
        <footer>
            <div className="grid  grid-cols-1 bg-black">
                <NewsletterForm />
                <section className="text-white py-6 px-4" data-cy="footer-links">
                    <div className="grid grid-cols-1">
                        <div className="flex flex-col pb-6" data-cy="about">
                            <h3>About us</h3>
                            <Link href="/">About Teavana</Link>
                            <Link href="/">Link</Link>
                        </div>
                        <div data-cy="service" className="pb-6">
                            <h3>Service</h3>
                            <Link href="/">Contact</Link>
                            <Link href="/">FAQ</Link>
                        </div>
                    </div>

                    <div>
                        <div data-cy="social" className="pb-6">
                            <h3>Social Media</h3>
                            <div className="flex flex-row gap-4">
                                <span>1</span>
                                <span>1</span>
                                <span>1</span>
                                <span>1</span>
                            </div>
                        </div>
                        <div data-cy="payment" className="pb-6">
                            <h3>Payment options</h3>
                            <div className="flex flex-row justify-center flex-wrap gap-2">
                                <span>1</span>
                                <span>1</span>
                                <span>1</span>
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                </section>
                <div data-cy="legal" className="border-t-slate-200 px-4 py-4 text-white flex flex-row justify-between gap-4">
                    <div className="flex flex-row flex-wrap gap-4">
                        <Link href="/">Privacy</Link>
                        <Link href="/">Imprint</Link>
                        <Link href="/">Terms of Use</Link>
                    </div>
                    <small>© Teavana</small>
                </div>
            </div>
        </footer>
    )
}
