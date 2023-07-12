import React from 'react'
import localFont from 'next/font/local'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

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

const Banner = (props: Props) => {
  return (
    <section className='w-full bg-[#ccff50]'>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-16 flex flex-col gap-10">
                <div className="flex flex-col mx-auto items-center text-center">
                    <h1 className={`text-3xl md:text-5xl ${mondwest.variable} font-mondwest font-bold`}>Meet Our Clients</h1>
                </div>
                
                <Marquee pauseOnHover className="flex justify-start gap-16 w-full">
                    <div className="my-[30px]">
                        <img className='w-full h-full object-contain' src="/images/finos.png" alt="Finos Logo"/>
                    </div>
                    <div className='my-[30px] w-auto'>
                        <img className='w-full scale-[.6]' src="/images/morgan-stanley.png" alt="" />
                    </div>
                    <div className='mr-[60px] my-[30px]'>
                        <img className='w-full' src="/images/fidelity.png" alt="" />
                    </div>
                </Marquee>
            </div>
        </section>
  )
}

export default Banner