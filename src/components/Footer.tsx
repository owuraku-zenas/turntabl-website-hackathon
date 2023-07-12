import Link from 'next/link'
import React from 'react'
import {SocialIcon} from 'react-social-icons'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='h-20'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-6'>

        <div className='flex items-center justify-around w-full'>
          <div className="flex flex-col md:flex-row py-8 gap-4 text-xs md:text-sm">
          <Link href='/' className='hover:border-b border-black'>Home</Link>
          <Link href='/about-us' className='hover:border-b border-black'>About Us</Link>
          <Link href='/our-services' className='hover:border-b border-black'>Our Services</Link>
          <Link href='/our-approach' className='hover:border-b border-black'>Our Approach</Link>
          <Link href='http://www.google.com' className='hover:border-b border-black'>Blog</Link>
          <Link href='/contact-us' className='hover:border-b border-black'>Contact Us</Link>
          <Link href='/privacy-policy' className='hover:border-b border-black'>Privacy Policy</Link>
          <Link href='/terms-of-service' className='hover:border-b border-black'>Terms of Service</Link>

          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <SocialIcon fgColor='gray' bgColor='transparent' style={{height: 35, width: 35}} url="https://twitter.com/turntablio" />
            <SocialIcon fgColor='gray' bgColor='transparent' style={{height: 35, width: 35}} url="https://www.linkedin.com/company/turntabl" />
            <SocialIcon fgColor='gray' bgColor='transparent' style={{height: 35, width: 35}} url="https://www.youtube.com/@turntablgh" />
          </div>
        </div>

        <div className="flex items-center justify-center border-t-4 py-2 pb-4 text-xs text-center md:text-start text-gray-500">
        © 2023 Developed with 💖 by CodeWave  
        </div>
      </div>
    </div>
  )
}

export default Footer