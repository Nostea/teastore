'use client'
import Link from 'next/link'
import ShoppingCart from './shoppingCart'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export default function NavbarM() {
    return (
        <nav className=" min-w-screen py-4 flex flex-row justify-between items-center px-4">
            <div className="flex flex-row gap-2">
                <Link className="hover:text-purple-400" href="/" data-cy="menu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                        <path d="M160-269.23v-40h640v40H160ZM160-460v-40h640v40H160Zm0-190.77v-40h640v40H160Z" />
                    </svg>
                </Link>

                <Sheet data-cy="search-button">
                    <SheetTrigger className="border-0 p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M779.38-153.85 528.92-404.31q-30 25.54-69 39.54t-78.38 14q-96.1 0-162.67-66.53-66.56-66.53-66.56-162.57 0-96.05 66.53-162.71 66.53-66.65 162.57-66.65 96.05 0 162.71 66.56Q610.77-676.1 610.77-580q0 41.69-14.77 80.69t-38.77 66.69l250.46 250.47-28.31 28.3ZM381.54-390.77q79.61 0 134.42-54.81 54.81-54.8 54.81-134.42 0-79.62-54.81-134.42-54.81-54.81-134.42-54.81-79.62 0-134.42 54.81-54.81 54.8-54.81 134.42 0 79.62 54.81 134.42 54.8 54.81 134.42 54.81Z" />
                        </svg>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader className="flex flex-row gap-1 items-center mb-6">
                            <img src="/search_24.svg" alt="search" />
                            <input type="text" name="search-input" id="search-input" className=" bg-white px-2 py-1" placeholder="What are you looking for?" />
                        </SheetHeader>

                        <div className="flex flex-col gap-4">
                            <Link href="/">Tea</Link>
                            <Link href="/">Accessories</Link>
                            <Link href="/">Sale</Link>
                            <Link href="/">Discover</Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <Link href="/" className=" text-3xl uppercase font-bold">
                Teavana
            </Link>
            <div className="flex flex-row gap-2">
                <Link className="hover:text-purple-400" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                        <path d="m480-146.93-44.15-39.69q-99.46-90.23-164.5-155.07-65.04-64.85-103.08-115.43-38.04-50.57-53.15-92.27Q100-591.08 100-634q0-85.15 57.42-142.58Q214.85-834 300-834q52.38 0 99 24.5t81 70.27q34.38-45.77 81-70.27 46.62-24.5 99-24.5 85.15 0 142.58 57.42Q860-719.15 860-634q0 42.92-15.12 84.61-15.11 41.7-53.15 92.27-38.04 50.58-102.89 115.43Q624-276.85 524.15-186.62L480-146.93Zm0-81.07q96-86.38 158-148.08 62-61.69 98-107.19t50-80.81q14-35.3 14-69.92 0-60-40-100t-100-40q-47.38 0-87.58 26.88-40.19 26.89-63.65 74.81h-57.54q-23.85-48.31-63.85-75Q347.38-774 300-774q-59.62 0-99.81 40Q160-694 160-634q0 34.62 14 69.92 14 35.31 50 80.81t98 107q62 61.5 158 148.27Zm0-273Z" />
                    </svg>
                </Link>
                <Link className="hover:text-purple-400" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                        <path d="M480-492.31q-57.75 0-98.87-41.12Q340-574.56 340-632.31q0-57.75 41.13-98.87 41.12-41.13 98.87-41.13 57.75 0 98.87 41.13Q620-690.06 620-632.31q0 57.75-41.13 98.88-41.12 41.12-98.87 41.12ZM180-187.69v-88.93q0-29.38 15.96-54.42 15.96-25.04 42.66-38.5 59.3-29.07 119.65-43.61 60.35-14.54 121.73-14.54t121.73 14.54q60.35 14.54 119.65 43.61 26.7 13.46 42.66 38.5Q780-306 780-276.62v88.93H180Zm60-60h480v-28.93q0-12.15-7.04-22.5-7.04-10.34-19.11-16.88-51.7-25.46-105.42-38.58Q534.7-367.69 480-367.69q-54.7 0-108.43 13.11-53.72 13.12-105.42 38.58-12.07 6.54-19.11 16.88-7.04 10.35-7.04 22.5v28.93Zm240-304.62q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Zm0 384.62Z" />
                    </svg>
                </Link>
                <ShoppingCart />
            </div>
        </nav>
    )
}
