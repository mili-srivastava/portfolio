"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaFileCode } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
import { IoMenuOutline } from "react-icons/io5";
import { MdHome, MdOutlineMail } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={isScrolled ? `text-white z-50 fixed w-full bg-[#00000080] px-5 py-2 flex justify-between items-center` : `text-white z-50 fixed w-full bg-black px-5 py-2 flex justify-between items-center`}>
      <div>
        <div className="flex gap-2 items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={500}
            height={500}
            className="w-10 mx-auto h-10 rounded-full object-cover"
          />
          <h1 className="text-gradient1 text-2xl font-light">
            Mili Srivastava
          </h1>
        </div>
        <div
          className={
            menu
              ? ` bg-black z-50 absolute h-screen top-0 right-0 w-[60%] py-5`
              : `hidden `
          }
        >
          <div className="">
            <RxCross2
              className="text-3xl absolute end-2.5 top-2.5 cursor-pointer"
              onClick={closeMenu}
            />
            <Image
              src="/images/logo.png"
              alt="logo"
              width={500}
              height={500}
              className="w-36 mx-auto h-36 rounded-full object-cover"
            />
          </div>

          <p className="text-2xl font-medium text-center pt-3 pb-2">
            Mili Srivastava
          </p>

          <div className="flex gap-3 items-center justify-center py-3 z-50">
            <Link href="nkedin.com/in/mili-srivastav/">
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
            <Link href="mailto:milisrivastava42@gmail.com"> <MdOutlineMail className="text-3xl text-yellow-600 cursor-pointer transform hover:scale-150 transition duration-200 ease-in-out" /></Link>
          </div>
          <div className="grid px-5 gap-3 justify-center py-5 space-y-4">
            <div className="flex gap-3 items-center hover:bg-slate-500 hover:rounded-xl transition-all hover:scale-125 px-5  cursor-pointer ">
              <MdHome className="text-2xl" />
              <Link href="/" onClick={closeMenu} className="text-2xl text-white ">Home</Link>
            </div>
            <div className="flex gap-3 items-center transition-all hover:scale-125 hover:bg-gray-500 hover:rounded-xl px-5  cursor-pointer">
              <BsFillInfoCircleFill className="text-2xl" />
              <Link href="/" onClick={closeMenu} className="text-2xl text-white ">About</Link>
            </div>
            <div className="flex gap-3 items-center transition-all hover:scale-125 hover:bg-gray-500 hover:rounded-xl px-5  cursor-pointer">
              <GiStarFormation className="text-2xl" />
              <Link href="#skills" onClick={closeMenu} className="text-2xl text-white">Skills</Link>
            </div>
            <div className="flex gap-3 items-center transition-all hover:scale-125 hover:bg-gray-500 hover:rounded-xl px-5  cursor-pointer">
              <FaFileCode className="text-2xl" />
              <Link href="#project" onClick={closeMenu} className="text-2xl text-white">Projects</Link>
            </div>
            <div className="flex gap-3 items-center transition-all hover:scale-125 hover:bg-gray-500 hover:rounded-xl px-5  cursor-pointer">
              <TfiWrite className="text-2xl" />
              <Link href="/blogs" onClick={closeMenu} className="text-2xl text-white ">My blogs</Link>
            </div>
          </div>
          <div className="flex justify-center mx-10 my-5">
            <Link href="#contact" className="bg-blue-500 w-full px-3 text-lg font-medium py-2 rounded-xl">
              Get In Touch
            </Link>
          </div>
        </div>

      </div>

      <div className=" gap-5 hidden md:flex">
        <Link
          href="/"
          className="hover:bg-gray-700 hover:font-medium text-lg rounded-xl px-3 transition-all hover:scale-125 "
        >
          Home
        </Link>
        <Link
          href="/"
          className="hover:bg-gray-700 hover:font-medium text-lg rounded-xl px-3 transition-all hover:scale-125 "
        >
          About
        </Link>
        <Link
          href="#skills"
          className="hover:bg-gray-700 hover:font-medium text-lg rounded-xl px-3 transition-all hover:scale-125 "
        >
          Skills
        </Link>
        <Link
          href="#project"
          className="hover:bg-gray-700 hover:font-medium text-lg rounded-xl px-3 transition-all hover:scale-125 "
        >
          Projects
        </Link>
        <Link
          href="/blogs"
          className="hover:bg-gray-700 hover:font-medium text-lg rounded-xl px-3 transition-all hover:scale-125 "
        >
          My Blogs
        </Link>
      </div>
      <div className="">
        <Link href="#contact" className="bg-blue-500 hidden md:flex  px-3 py-1  rounded-xl">
          Get In Touch
        </Link>
      </div>
      <IoMenuOutline
        onClick={openMenu}
        className="cursor-pointer flex md:hidden text-3xl"
      />
    </div>
  );
};

export default Navbar;
