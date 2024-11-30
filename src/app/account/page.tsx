'use client'
import Link from 'next/link'
import Image from 'next/image'
import DropdownItem from '../components/dropdownItem'
import Faq from '../components/faq'

export default function LoginPage() {
    return (
        <div className="flex flex-col my-6 mx-4">
            <section className="flex flex-col mb-6" data-cy="account-section">
                <h2>Log In</h2>
                <p>To log in, please input your email and password below.</p>
                <form action="" data-cy="login-form">
                    <input type="email" name="email" id="login-email" placeholder="Email" />
                    <input type="password" name="password" id="login-password" placeholder="Password" />
                    <button type="button">Login</button>
                </form>
                <p>
                    You're not registered yet?
                    <Link href="/" className=" underline">
                        Register here
                    </Link>
                </p>
            </section>

            <Faq />
        </div>
    )
}
