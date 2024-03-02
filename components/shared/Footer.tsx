import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineMail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-[#1d1d1f] w-full flex flex-col justify-center items-center h-56'>
      <p className='text-6xl font-bold text-center text-gradient'>Mili Srivastava</p>
      <div className="flex gap-3 items-center justify-center z-50 py-2">
        <Link href="https://www.linkedin.com/in/mili-srivastav/">
          <Image
            src="/linkedin.svg"
            width={500}
            height={500}
            className="w-8 cursor-pointer transform hover:scale-150 transition duration-200 ease-in-out "
            alt="linkedin-image"
          />
        </Link>

        <Link href="https://www.instagram.com/milii_____/">
          <Image
            src="/instagram.svg"
            width={500}
            height={500}
            className="w-8 cursor-pointer transform hover:scale-150 transition duration-200 ease-in-out"
            alt="instagram-image"
          />
        </Link>

        <Link href="https://github.com/mili-srivastava">
          <Image
            src="/github.svg"
            width={500}
            height={500}
            className="w-8 cursor-pointer transform hover:scale-150 transition duration-200 ease-in-out"
            alt="github-image"
          />
        </Link>
        <Link href="mailto:milisrivastava42@gmail.com">
          <MdOutlineMail className="text-3xl text-yellow-600 cursor-pointer transform hover:scale-150 transition duration-200 ease-in-out" />
        </Link>
      </div>
    </div>
  )
}

export default Footer