'use client'
import Link from 'next/link'

export default function DropdownItem({ question, answer }: FAQProps) {
    return (
        <div className="grid grid-cols-1 gap-2" data-cy="dropdown-item">
            <div className="flex flex-row justify-between items-center gap-4">
                <h3>{question}</h3>
                <p data-cy="dropdown-open-icon">^</p>
            </div>
            <p>{answer}</p>
        </div>
    )
}

type FAQProps = {
    question: string
    answer: string
}
