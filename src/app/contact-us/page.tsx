'use client'
import Header from '@/components/Header'
import { document } from 'postcss'
import React, { useLayoutEffect, useRef } from 'react'
import { SocialIcon } from 'react-social-icons'
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { gsap } from "gsap";
import ContactForm from '@/app/contact-us/ContactForm'


type Props = {}

const Contact = (props: Props) => {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    gsap.from(boxRef.current, {
      duration:2, y:150, opacity:0, stagger:0.25
    });
  });

  
  const [isDivVisible, setDivVisible] = useState(false);
  const handleButtonClick = () => {
    gsap.to("#ui", {duration:2})
    gsap.from(".social", {duration:2, y:150, opacity:0, stagger:0.25})
    setDivVisible(!isDivVisible);
  };

  return (
    <div  className='min-h-[100vh]'>
      <div className="w-full h-screen flex items-center bg-white">
        
        <Transition
      appear={true}
      show={isDivVisible}
      enter="transition-opacity duration-75"
      enterFrom="-transform-x"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className='w-full justify-left flex items-center'>
          <ContactForm className='form'/>   
        </div>
    </Transition>
    <div id="ui" className='bg-slate-900 bg-cover bg-center bg-no-repeat h-full w-full' style={{backgroundImage: 'url("/images/contact-header.jpg")'}}>
          <div className='bg-transparent/40 w-full h-full  flex items-center justify-center'>
              <div className={`font-mondwest max-w-7xl w-full px-2 sm:px-6 lg:px-8 flex flex-col items-center gap-4 md:items-start text-white text-6xl md:text-7xl`}>     
                  <h1 className='words'>Ready to reinvent the status quo together?</h1>
                  <div className="cursor-pointer px-5 py-2 text-sm border text-gray-500 hover:bg-gray-100 rounded border-gray-300" onClick={handleButtonClick} >Get In Touch</div>
                  <div className="flex items-center gap-4" id="socials" ref={boxRef}>
                    <SocialIcon className= "social" fgColor='white' bgColor='transparent' style={{height: 80, width: 50}} url="https://twitter.com/turntablio" />
                    <SocialIcon className= "social" fgColor='blue' bgColor='transparent' style={{height: 80, width: 50}} url="https://www.linkedin.com/company/turntabl" />
                    <SocialIcon className= "social" fgColor='red' bgColor='transparent' style={{height: 80, width: 50}} url="https://www.youtube.com/@turntablgh" />
                  </div>
              </div>
          </div>
          </div>
        
        </div>
      <section className='h-screen w-full'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.554318805258!2d-0.2402619250998234!3d5.632603994348533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9954d603e5b3%3A0xd24eb41c04c54f63!2sturntabl!5e0!3m2!1sen!2sgh!4v1688898578571!5m2!1sen!2sgh"className='w-full h-full' allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
    
  )
}

export default Contact