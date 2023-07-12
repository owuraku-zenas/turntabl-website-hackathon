import Link from 'next/link'
import React from 'react'

type Props = {}

const BlogItem = (props: Props) => {
    return (
        <div className='flex flex-col items-center md:items-start gap-1 p-4 w-4/5  md:w-[220px]'>
                <img src="/images/_MG_3880.jpg" className='w-full hover:scale-105 ease-in-out duration-500 cursor-pointer' alt="" />
                <p className='text-gray-700 text-sm'>2 May, 2023</p>
                <h2 className={`text-lg font-bold`}>Software Consultancy</h2>
                <p className='text-sm'>We listen to your issues first. After that, you get industry-leading services from a professional solutions team.</p>
                <Link href="https://medium.com/@turntabl.io" target="_blank" className='text-sm underline'>Read more...</Link>
            </div>
    )
}

export default BlogItem