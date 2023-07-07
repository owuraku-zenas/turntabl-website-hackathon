import Header from '@/components/Header'
import React from 'react'

type Props = {}
import mypic from '../../../public/images/contact-header.jpg'

const page = (props: Props) => {
  return (
    <div className='min-h-[100vh]'>
      <Header 
      title='About Us'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      image='contact-header.jpg'
      />
      About Us</div>
  )
}

export default page