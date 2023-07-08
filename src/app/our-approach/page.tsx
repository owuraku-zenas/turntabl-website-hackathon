import Header from '@/components/Header'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='min-h-[100vh]'>
      <Header 
      title='Our Approach'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      image='contact-header.jpg'
      />
      
      Our Approach</div>
  )
}

export default page