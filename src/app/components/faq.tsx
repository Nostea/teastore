'use client'
import Link from 'next/link'
import Image from 'next/image'
import DropdownItem from '../components/dropdownItem'

export default function Faq() {
    return (
        <section>
            <h2>Frequently Asked Questions</h2>

            <div data-cy="faq-overall">
                <h3>Overall</h3>
                <div className="grid grid-cols-1 gap-2">
                    <DropdownItem question="What are the benefits of having a membership?" answer="You will receive special offers" />
                    <DropdownItem question="Is the membership free?" answer="Yes, the membership is free." />
                    <DropdownItem
                        question="How can I cancel my membership?"
                        answer="Simply login and delete your membership from your account settings page."
                    />
                </div>
            </div>
            <div data-cy="faq-memberpoints">
                <h3>Member Points</h3>
                <div className="grid grid-cols-1 gap-2">
                    <DropdownItem question="What are the benefits of having a membership?" answer="You will receive special offers" />
                    <DropdownItem question="Is the membership free?" answer="Yes, the membership is free." />
                    <DropdownItem
                        question="How can I cancel my membership?"
                        answer="Simply login and delete your membership from your account settings page."
                    />
                </div>
            </div>
        </section>
    )
}
