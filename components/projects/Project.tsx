import ProjectTemplate from '@/template/ProjectTemplate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id="project" className='bg-[url("/images/bg.jpg")] bg-no-repeat h-fit w-full bg-cover py-16'>
        <div className='text-white text-center px-5 '>
        <p className='text-lg'>Projects</p>
        <p className='text-5xl font-bold pb-16'>Collection Of My Projects</p>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 space-y-10 lg:px-24'>
            <ProjectTemplate image="/images/project1.png" title="TechMore-A Blog Application" techImg1="/images/nextjs.png" techImg2="/images/tailwind.png" techImg3="/images/mongodb.png" link="https://tech-more.vercel.app/"/>

            <ProjectTemplate image="/images/project2.png" title="Portfolio For Rajni Gupta" techImg1="/images/react.png" techImg2="/images/tailwind.png" class="hidden" link="https://rajni-gupta.vercel.app/" />

            <ProjectTemplate image="/images/project3.png" title="PawPrints" techImg1="/images/react.png" techImg2="/images/tailwind.png"  class="hidden" link="/"/>

            <ProjectTemplate image="/images/project4.png" title="Music Website" techImg1="/images/html.png" techImg2="/images/tailwind.png" techImg3="/images/js.png" class="w-8 h-8" link="/"/>
        </div>
        </div>
        <div className="w-2 h-32 mx-auto  border-l-2 border-white"></div>
        <p className='text-center text-xl text-gray-300 py-5'>Curious About The Process?</p>
        <Link href="https://github.com/mili-srivastava" className='bg-[#1d1d1f] text-lg text-white w-fit rounded-xl gap-2 px-3 mx-auto py-2 flex items-center'>
          Visit My Github
            <Image
              src="/github.svg"
              width={500}
              height={500}
              className="w-10 transition cursor-pointer  animate-bounce  ease-in-out"
              alt="github-image"
            />
          </Link>
    </div>
  )
}

export default Project