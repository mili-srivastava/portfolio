import ProjectTemplate from '@/template/ProjectTemplate'
import React from 'react'

const Project = () => {
  return (
    <div className='bg-[url("/images/bg.jpg")] bg-no-repeat h-fit w-full bg-cover py-16'>
        <div className='text-white text-center'>
        <p className='text-lg'>Projects</p>
        <p className='text-5xl font-bold pb-16'>Collection Of My Projects</p>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 space-y-5 lg:px-24'>
            <ProjectTemplate image="/images/project1.png" title="TechMore-A Blog Application" techImg1="/images/nextjs.png" techImg2="/images/tailwind.png" techImg3="/images/mongodb.png" link="https://tech-more.vercel.app/"/>

            <ProjectTemplate image="/images/project2.png" title="Portfolio For Rajni Gupta" techImg1="/images/react.png" techImg2="/images/tailwind.png" class="hidden" link="https://rajni-gupta.vercel.app/" />

            <ProjectTemplate image="/images/project3.png" title="PawPrints" techImg1="/images/react.png" techImg2="/images/tailwind.png"  class="hidden" link="/"/>

            <ProjectTemplate image="/images/project4.png" title="Music Website" techImg1="/images/html.png" techImg2="/images/tailwind.png" techImg3="/images/js.png" class="w-8 h-8" link="/"/>
        </div>
        </div>
    </div>
  )
}

export default Project