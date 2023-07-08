'use client'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

const navItems = [
    {
        name: "About Us",
        path: "/about-us",
    },
    {
        name: "Our Services",
        path: "/our-services",
    },
    {
        name: "Our Approach",
        path: "/our-approach",
    },
]

const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    window.addEventListener("scroll", function () {
        const stick = document.querySelector("div");
        stick!.classList.toggle('active', window.scrollY > 10)
    })

    return (
        <nav className="sticky top-0 h-0  shadow-md w-full">
            <div className=''>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 '>
                <div className='relative flex h-16 items-center justify-center'>
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" onClick={() => toggleNav()} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex w-full items-center justify-between sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center justify-center w-full sm:w-auto">
                        <Link href="/">
                            <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            <img className="hidden h-8 w-auto lg:block" src="/images/TT Logo.png" alt="Your Company" />
                        </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block w-full">
                            <div className="flex space-x-4 w-full justify-end">

                                {navItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.path}
                                        className="text-gray-300 border-b-2 border-transparent hover:border-b-2 hover:border-white hover:text-white px-3 py-2 text-sm font-bold tracking-widest"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <a
                                        href="https://www.google.com"
                                        target="_blank"
                                        className="text-gray-300 hover:border-b-2 hover:text-white px-3 py-2 text-sm font-bold tracking-widest"
                                    >
                                        Blog
                                    </a>
                                <Link href="/contact-us" className='text-gray-300 hover:border-b-2 hover:text-white px-3 py-2 text-sm font-bold tracking-widest'>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {
                isOpen && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                        {navItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.path}
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-bold"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            <Link
                                         href="https://www.google.com"
                                         target="_blank"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-bold"
                                    >
                                        Blog
                                    </Link>
                                    <Link
                                        href="/contact-us"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-bold"
                                    >
                                        Contact Us
                                    </Link>
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar