import React from 'react'
import localFont from 'next/font/local'
import Link from 'next/link'
import BlogItem from './BlogItem'

type Props = {}

const mondwest = localFont({
    src: [
        {
            path: '../../public/fonts/Mondwest-Full/PPMondwest-Regular.ttf',
            weight: '400'
        },
        {
            path: '../../public/fonts/Mondwest-Full/PPMondwest-Bold.ttf',
            weight: '700'
        }
    ],
    variable: '--font-mondwest'
})



const Blog = (props: Props) => {
        return (

            <section className='w-full'>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-16 flex flex-col gap-10">
                    <div className="flex flex-col mx-auto items-center text-center max-w-lg">
                        <h1 className={`text-3xl md:text-5xl ${mondwest.variable} font-mondwest font-bold`}>Take a Look at our blog</h1>
                        <p className=''>Get the latest from turntabl</p>
                        <p className=''>Where we delve into the fascinating world of software development, exploring the latest trends, best practices, and insights that shape the industry.</p>
                    </div>
                    <div className="flex justify-around md:justify-center gap-12 md:gap-8  flex-wrap">
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Link href='https://medium.com/@turntabl.io' target="_blank" className='p-3 bg-[#b8ffee] hover:bg-[#b0b0ff] font-bold rounded shadow mt-3'> Get more from turntabl </Link>
                    </div>
                </div>
            </section>
        )
}

export default Blog