import localFont from 'next/font/local'
import React from 'react'




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

type Props = {
    title: string;
    description: string;
    image: string;
}

const Header = (props: Props) => {
  return (
    <div className='h-[360px]  flex items-center justify-center w-full bg-cover bg-no-repeat'  style={{backgroundImage: `url("/images/${props.image}")`}}>
        <div className=' flex items-center justify-center w-full h-full bg-transparent/60'>
            <div className='max-w-7xl w-full flex flex-col gap-4 justify-start text-white'>
                <h1 className={`${mondwest.variable} font-mondwest text-7xl font-bold`}> {props.title} </h1>
                <p className='text-sm max-w-3xl'>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Header