'use client'
import Link from 'next/link'

export default function Categories() {
    return (
        <div className="bg-slate-300 w-full flex flex-row  overflow-scroll gap-4 py-8">
            <div className="min-w-28 min-h-28 rounded-full bg-green-200"></div>
            <div className="min-w-28 min-h-28 rounded-full bg-red-200"></div>
            <div className="min-w-28 min-h-28 rounded-full bg-blue-200"></div>
            <div className="min-w-28 min-h-28 rounded-full bg-violet-200"></div>
        </div>
    )
}
