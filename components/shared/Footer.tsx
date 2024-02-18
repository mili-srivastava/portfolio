import Image from 'next/image'
import React from 'react'
import { MdOutlineMail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-[#1d1d1f] w-full flex flex-col justify-center items-center h-56'>
        <p className='text-6xl font-bold text-center text-gradient'>Mili Srivastava</p>
        <div className="flex gap-3 items-center justify-center z-50 py-2">
            <Image
              src="/linkedin.svg"
              width={500}
              height={500}
              className="w-8 cursor-pointer transform hover:scale-150 transition duration-200 ease-in-out "
              alt="linkedin-image"
            />
            <Image
              src="/instagram.svg"
              width={500}
              height={500}
              className="w-8 cursor-pointer transform hover:scale-150 transition duration-200 ease-in-out"
              alt="instagram-image"
            />
            <Image
              src="/github.svg"
              width={500}
              height={500}
              className="w-8 cursor-pointer transform hover:scale-150 transition duration-200 ease-in-out"
              alt="github-image"
            />
            <MdOutlineMail className="text-3xl text-yellow-600 cursor-pointer transform hover:scale-150 transition duration-200 ease-in-out" />
          </div>
    </div>
  )
}

export default Footer