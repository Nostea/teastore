'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Registration() {
    return (
        <section className="mx-4 flex flex-col items-center my-8">
            <h2>Registration</h2>
            <p className="mb-4">Please fill out the form below</p>
            <form action="">
                <input type="text" name="firstname" id="firstname" placeholder="Firstname" required />
                <input type="text" name="lastname" id="lastname" placeholder="Lastname" required />
                <input type="email" name="email" id="email" placeholder="E-Mail" required />
                <input type="password" name="password" id="password" placeholder="Password" required />
                <button type="button">Submit</button>
            </form>
            <p>
                Do you already have an account? <Link href="/account">Log in</Link>
            </p>
        </section>
    )
}
