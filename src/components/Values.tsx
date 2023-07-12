import localFont from 'next/font/local'
import React from 'react'


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

const Values = (props: Props) => {
    return (
        <section className='w-full bg-white'>
            <div className="max-w-7xl flex justify-around md:justify-center gap-12 md:gap-6 mx-auto py-16 flex-wrap">
                <div className='flex flex-col items-center gap-4 text-center w-4/5  md:w-[300px]'>
                    <img src="/images/innovative.svg" className='w-20' alt="" />
                    <h2 className={`text-2xl ${mondwest.variable} font-mondwest font-bold`}>Innovative</h2>
                    <p className='text-xs'>Turntabl is changing the way the world thinks about software development. Turntabl is known for building brilliant software and for elevating the talent of Ghana to the world stage thanks to their innovative culture. Turntabl is one-of-a-kind, and reinventing the industry to a new standard.</p>
                </div>
                <div className='flex flex-col items-center gap-4 text-center w-4/5  md:w-[300px]'>
                <img src="/images/innovative.svg" className='w-20' alt="" />
                    <h2 className={`text-2xl ${mondwest.variable} font-mondwest font-bold`}>Ingenuity</h2>
                    <p className='text-xs'>Turntabl has considerable experience in delivering successful projects. Having worked with companies from investment banks to FX brokerages, Turntabl is already building a wealth of experience across a variety of technologies. Turntabl associates go through TLC, a 12-week intensive associate program taught by the very best instructors from around the world.</p>
                </div>
                <div className='flex flex-col items-center gap-4 text-center w-4/5  md:w-[300px]'>
                <img src="/images/innovative.svg" className='w-20' alt="" />
                    <h2 className={`text-2xl ${mondwest.variable} font-mondwest font-bold`}>Building a Better Future</h2>
                    <p className='text-xs'>Turntabl is built on the ideal of contributing towards creating a better future for everyone they come across. Clients, team members, communities, even countries. Turntabl is an equal opportunities employer and spends considerable time working to close the gap between women and men in technology. Turntabl will be an employee-owned business, which creates pathways for talented individuals to build software for some of the biggest companies in the world, and all whilst growing their home country as a pre-eminent tech hub.</p>
                </div>
                <div className='flex flex-col items-center gap-4 text-center w-4/5  md:w-[300px]'>
                <img src="/images/innovative.svg" className='w-20' alt="" />
                    <h2 className={`text-2xl ${mondwest.variable} font-mondwest font-bold`}>Security</h2>
                    <p className='text-xs align-middle'>Turntabl is a unique software agency that is based in London and Accra, Ghana. Turntabl is committed to offering world-leading training to their associates in Ghana before engaging in client projects. When you work with Turntabl you take an active part in the development of junior engineers from a developing nation. By hiring Turntabl associates you benefit from their unique drive and passion whilst contributing to their futures.</p>
                </div>
            </div>
        </section>
    )
}

export default Values