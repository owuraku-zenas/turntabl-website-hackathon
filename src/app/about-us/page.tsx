"use client";
import { motion } from "framer-motion";
import { useState } from "react"

import Header from '@/components/Header'
import React from 'react'
import { FiArrowUpRight, FiLinkedin, FiTwitter } from "react-icons/fi";
import AboutModal from "@/components/AboutModal";
type Props = {}

const people = [
  {
    image: "IMG_9005.jpg",
    name: "Inusa Ibrahim",
    position: "Head of Operations, Ghana",
    bio: "With a background in physics and a passion for tech, Inusa is experienced in STEM education and working with young people, which helps him build strong relationships with team members and navigate complex situations. He is a proud West and Northern African Nomad, influenced by his grandparents. His favorite words are \"practicality\" and \"simplicity, \" and he enjoys a good logistical challenge. At the same time, he finds stimulation in working with international teammates and clients and loves surrounding himself with people of different cultures. Ibrahim is excited to be part of turntabl, and to contribute to creating a unique and dynamic tech community in Ghana.",
    linkedin: "",
    twitter: "",
  },
  {
    image: "IMG_9308.jpg",
    name: "Deborah Asamoah",
    position: "Head of Operations, Ghana",
    bio: "With a background in physics and a passion for tech, Inusa is experienced in STEM education and working with young people, which helps him build strong relationships with team members and navigate complex situations. He is a proud West and Northern African Nomad, influenced by his grandparents. His favorite words are \"practicality\" and \"simplicity, \" and he enjoys a good logistical challenge. At the same time, he finds stimulation in working with international teammates and clients and loves surrounding himself with people of different cultures. Ibrahim is excited to be part of turntabl, and to contribute to creating a unique and dynamic tech community in Ghana.",
    linkedin: "",
    twitter: "",
  },
  {
    image: "IMG_9383.jpg",
    name: "Ekow ",
    position: "Head of Operations, Ghana",
    bio: "With a background in physics and a passion for tech, Inusa is experienced in STEM education and working with young people, which helps him build strong relationships with team members and navigate complex situations. He is a proud West and Northern African Nomad, influenced by his grandparents. His favorite words are \"practicality\" and \"simplicity, \" and he enjoys a good logistical challenge. At the same time, he finds stimulation in working with international teammates and clients and loves surrounding himself with people of different cultures. Ibrahim is excited to be part of turntabl, and to contribute to creating a unique and dynamic tech community in Ghana.",
    linkedin: "",
    twitter: "",
  },
  {
    image: "IMG_9947.jpg",
    name: "Emma",
    position: "Head of Operations, Ghana",
    bio: "With a background in physics and a passion for tech, Inusa is experienced in STEM education and working with young people, which helps him build strong relationships with team members and navigate complex situations. He is a proud West and Northern African Nomad, influenced by his grandparents. His favorite words are \"practicality\" and \"simplicity, \" and he enjoys a good logistical challenge. At the same time, he finds stimulation in working with international teammates and clients and loves surrounding himself with people of different cultures. Ibrahim is excited to be part of turntabl, and to contribute to creating a unique and dynamic tech community in Ghana.",
    linkedin: "",
    twitter: "",
  },
]


const page = (props: Props) => {

  const [modal, setModal] = useState(false);
  const [myp, setMyp] = useState();

  const handleModal = () => { setModal(!modal) }
  const handleMyP = (element: any) => { 
    setMyp(element) 
  }


  return (

    <main className='min-h-[100vh] w-full'>
      <Header
        title='About Us'
        description='We Provide Innovative Software Engineering Solutions To Businesses All Over The World.'
        image='IMG_9005.jpg'
      />

      <section className='max-w-7xl mx-auto mt-20 sm:mt-32 px-2 sm:px-6 lg:px-8 flex sm:flex-row flex-col gap-4 sm:gap-0 justify-between items-center'>
        <div className='w-[80%] sm:w-[50%]'>
          <h1 className=' sm:text-[50px] text-[25px]'>We are Ghana's Technology Leaders</h1>

          <p className='w-[100%] pt-4 sm:leading-7 text-[14px] sm:text-sm ' >We provide your company with the best engineering services. Here, the most talented and creative experts work with the world’s leading organizations on initiatives that promote social change. We thrive on advancing global collaboration, developing software, and overcoming obstacles.</p>
        </div>

        <div className='w-[80%] sm:w-[50%] flex items-center' >
          <motion.img
            initial={{
              x: 500,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            viewport={{ once: true }}
            src="/images/BOwusuNyantekyi_turntabl_pre-edits_20220602_022_V2.jpg"
            alt='logo'
            width={500}
            height={500}
            className='object-contain'
          />
        </div>
      </section>

      <section className='max-w-7xl mx-auto mt-20 sm:mt-32 px-2 sm:px-6 lg:px-8 flex sm:flex-row flex-col-reverse gap-4 sm:gap-0 justify-between items-center'>

        <div className='w-[80%] sm:w-[50%] flex items-center' >
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            viewport={{ once: true }}
            src="/images/why-turntabl.png"
            alt='logo'
            width={500}
            height={500}
            className='object-contain'
          />
        </div>

        <div className='w-[80%] sm:w-[50%]'>
          <h1 className=' sm:text-[50px] text-[25px]'>Why Ghana?</h1>

          <p className='w-[100%] pt-4 sm:leading-7 text-[14px] sm:text-sm ' >With our partner, Global Code, turntabl Labs Produces Highly-skilled professionals led by industry veterans Fortune 500-level engineers Diverse and affordable technology services Through its national values of democracy, hard work and online freedom, Ghana’s tech revolution has shattered is your future: today.</p>
        </div>

      </section>


      <section className='max-w-7xl mx-auto mt-20 sm:mt-32 px-2 sm:px-6 lg:px-8 flex sm:flex-row flex-col gap-4 sm:gap-0 justify-between items-center'>
        <div className='w-[80%] sm:w-[50%]'>
          <h1 className=' sm:text-[50px] text-[25px]'>Our Approach</h1>

          <p className='w-[90%] pt-4 sm:leading-7 text-[14px] sm:text-sm ' >Collaboration starts with a shared goal. That means complementary knowledge and mutual understanding. That’s how we work with you. You bring the goals, the aim of making the world better, and an open approach to getting results. We bring the talent, the solutions-oriented approach, and the final results. And Ghana’s capacity for top-tier software consultancy services becomes more and more sustainable. That’s why we work with you. We supply Ghana’s most skilled engineers – veterans of our education partnership with Global Code. They bring years of experience in graduate training for Fortune 500 companies to solve your problems, maximise your efficiency and surpass your goals. By collaborating with you, they see how the world works and the good your organisation does. Together, we get the job done. Together, we’ll create a finer world.</p>
        </div>

        <div className='w-[80%] sm:w-[50%] flex items-center content-end' >
          <motion.img
            initial={{
              x: 500,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            viewport={{ once: true }}
            src="/images/BOwusuNyantekyi_turntabl_pre-edits_20220602_026_V2.jpg"
            alt='logo'
            width={500}
            height={500}
            className='object-contain'
          />
        </div>
      </section>


      <section className='max-w-7xl mx-auto mt-32 px-2 sm:px-6 lg:px-8'>
        <h1 className='text-[50px] my-20 '>Meet
          <span className=' text-[#b0b0ff] '> Our </span>
          People
        </h1>

        <div className='flex flex-row flex-wrap justify-around gap-8 w-full '>
          {people.map(
            (person, index) => (
              <div key={index} className="card" style={{ backgroundImage: `url("/images/${person.image}")` }}>
                <div className="content" >
                  <div className='w-[80%] flex flex-row justify-between items-center my-2'>
                    <h1 className='text-[19px]'>{person.name}</h1>
                    <FiArrowUpRight onClick={() => (handleModal(), handleMyP(person))} />
                  </div>

                  <h1>{person.position}</h1>

                  <div className='flex flex-row items-center mt-4'>
                    <FiLinkedin style={{ height: 17, width: 17, marginRight: 10 }} />
                    <FiTwitter style={{ height: 17, width: 17 }} />
                  </div>
                </div>
              </div>
            )
          )}

        </div>
      </section>


      {modal ?
        <AboutModal
          modal={modal}
          handleModal={handleModal}
          person={myp}
        />
        : null}

    </main>

  )
}

export default page