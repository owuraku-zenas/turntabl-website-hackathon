"use client";
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
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
  const [text, count] = useTypewriter({
    words: ["Akwaaba :) We are Turntabl", "The Next Rev¤lution in Software Engineering", "We have a desire to craft something"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className='bg-slate-900 bg-cover bg-center bg-no-repeat h-screen w-full' style={{backgroundImage: 'url("/images/contact-header.jpg")'}}>
        <div className='bg-transparent/50 w-full h-full  flex items-center md:items-end justify-center'>
            <div className={`${mondwest.variable} font-mondwest md:mb-[16%] max-w-4xl w-full px-2 sm:px-6 lg:px-8 flex items-center gap-4 justify-center text-white text-5xl md:text-7xl`}>     
                <h1 className='text-center'>{text}<Cursor cursorColor="white"/></h1>
                
            </div>
        </div>
    </section>
  )
}

export default Hero