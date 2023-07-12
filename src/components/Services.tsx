import React from 'react'
import localFont from 'next/font/local'
import Link from 'next/link'

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

const Services = (props: Props) => {
    return (
        <section className='w-full bg-[#efefef]'>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-16 flex flex-col gap-10">
                <div className="flex flex-col mx-auto items-center text-center">
                    <h1 className={`text-3xl md:text-5xl ${mondwest.variable} font-mondwest font-bold`}>What we can do for you</h1>
                    <p className='max-w-sm'>Whatever software your business requires, we are able to design and develop a bespoke solution tailored specifically to your needs.</p>
                </div>
                <div className="flex justify-around md:justify-center gap-12 md:gap-8  flex-wrap">
                    <div className='flex flex-col items-center gap-4 p-4 shadow rounded-lg text-center bg-white w-4/5  md:w-[250px]'>
                        <img src="/images/software-consultancy.svg" className='w-20' alt="" />
                        <h2 className={`text-2xl ${mondwest.variable} font-mondwest font-bold`}>Software Consultancy</h2>
                        <p className='text-sm'>We listen to your issues first. After that, you get industry-leading services from a professional solutions team.</p>
                    </div>
                    <div className='flex flex-col items-center gap-4 p-4 shadow rounded-lg text-center bg-white w-4/5  md:w-[250px]'>
                        <img src="/images/development.svg" className='w-20' alt="" />
                        <h2 className={`text-2xl ${mondwest.variable} font-mondwest font-bold`}>Development</h2>
                        <p className='text-sm'>We can assist you in growing your group. Our personnel are adaptable and resourceful. We chew through JIRAs just as easily as we develop your UX or next generation microservice layer.</p>
                    </div>
                    <div className='flex flex-col items-center gap-4 p-4 shadow rounded-lg text-center bg-white w-4/5  md:w-[250px]'>
                        <img src="/images/partnership.svg" className='w-20' alt="" />
                        <h2 className={`text-2xl ${mondwest.variable} font-mondwest font-bold`}>Partnerships</h2>
                        <p className='text-sm'>Partner with turntabl today and design low-cost, high-quality technology ethically and sustainably.</p>
                    </div>
                    <div className='flex flex-col items-center gap-4 p-4 shadow rounded-lg text-center bg-white w-4/5  md:w-[250px]'>
                        <img src="/images/project-management.svg" className='w-20' alt="" />
                        <h2 className={`text-2xl ${mondwest.variable} font-mondwest font-bold`}>Project Management</h2>
                        <p className='text-sm'>We cooperate with you throughout the project lifecycle in small, committed teams. From inception and definition to delivery, production and maintenance - our style is clean lines, efficient code, empowered users.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className={`text-2xl ${mondwest.variable} font-mondwest font-bold text-center`}>
                        Contact us now for an obligation-free conversation
                    </h2>
                    about how we can help your business.
                    <Link href='/contact-us' className='p-3 bg-[#b8ffee] hover:bg-[#b0b0ff] font-bold rounded shadow mt-3'> Let's chat </Link>
                </div>
            </div>
        </section>
    )
}

export default Services