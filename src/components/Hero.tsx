import React from 'react'
import localFont from 'next/font/local'

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

const Hero = (props: Props) => {
  return (
    <section className='bg-slate-900 bg-cover bg-center bg-no-repeat h-screen w-full' style={{backgroundImage: 'url("/images/contact-header.jpg")'}}>
        <div className='bg-transparent/40 w-full h-full  flex items-center justify-center'>
            <div className={`${mondwest.variable} font-mondwest max-w-7xl w-full px-2 sm:px-6 lg:px-8 flex flex-col items-center gap-4 md:items-start text-white text-6xl md:text-7xl`}>     
                <h1>The Next</h1>
                <h1>Rev¤lution</h1>
                <h1>in Software</h1>
                <h1>Engineering</h1>   
            </div>
        </div>
    </section>
  )
}

export default Hero