"use client"

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);



  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handlesubmit = async (e: any) => {    
    e.preventDefault();
    if (email === "" || name === "" || subject === "" || message === "") {
      return toast.error('Please fill all the fields');

    }

    //check for valid email
    if (!emailRegex.test(email)) {
      return toast.error('Please enter a valid email');
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/contact", {
        email,
        name,
        subject,
        message,
      });
      if (response.status === 201) {
        toast.success('Form submitted successfully');
        setLoading(false);
        setEmail("");
        setName("");
        setSubject("");
        setMessage("");

      }

      if (response.status === 500) {
        toast.error('Something went wrong. Please try again later.');
      }

    } catch (error: any) {

      toast.error('Something went wrong. Please try again later.');

    }

    finally {
      setLoading(false);
    }

  }
  return (
    <div id="contact" className="bg-black h-fit w-full pt-10 pb-20 md:px-16 px-5">
      <div className="text-center">
        <p className="text-gray-200 text-lg">Connect With Me</p>
        <p className="text-4xl md:text-5xl font-bold text-white">
          Get in Touch With Me
        </p>
      </div>

      <div className="lg:w-[100%] rounded-xl mx-auto bg-gradient gap-10 md:flex py-10 md:px-16 px-5 items-center mt-16">
        <div className="lg:w-[60%] md:w-full lg:px-10">
          <section className="">
            <div className="mx-auto max-w-screen-md">

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm text-sm  w-full p-2.5 rounded-xl bg-[#FFFFFF66] placeholder:text-black focus:outline-none focus:border-4 focus:border-[#FFFFFF66]"
                    placeholder="name@example.com"
                    required
                    onChange={(e) => { setEmail(e.target.value) }}
                  />
                  <label
                    htmlFor="email"
                    className="block  mt-5 text-sm font-medium text-gray-900 "
                  >
                    Your Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    className="shadow-sm text-sm  w-full p-2.5 rounded-xl bg-[#FFFFFF66] placeholder:text-black focus:outline-none focus:border-4 focus:border-[#FFFFFF66]"
                    placeholder="name@example.com"
                    required
                    onChange={(e) => { setName(e.target.value) }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 rounded-xl bg-[#FFFFFF66] placeholder:text-black focus:outline-none focus:border-4 focus:border-[#FFFFFF66]"
                    placeholder="Let me know how I can help you"
                    required
                    onChange={(e) => { setSubject(e.target.value) }}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="block p-2.5 w-full text-sm text-gray-900  rounded-xl bg-[#FFFFFF66] placeholder:text-black focus:outline-none focus:border-4 focus:border-[#FFFFFF66]"
                    placeholder="Leave a comment..."
                    required
                    onChange={(e) => { setMessage(e.target.value) }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onClick={handlesubmit}
                  className="py-3 px-5 text-sm font-medium text-center text-white bg-blue-600 rounded-xl mx-auto flex"
                >
                  {loading ? "Loading..." : "Send Message"}
                </button>
              </form>
            </div>
          </section>
        </div>
        <div className="lg:w-[40%] hidden lg:flex lg:-mt-8 md:-mt-10">
          <Image src="/images/photo.jpg" width={500} height={500} alt="mili-image" className=" rounded-xl border-4 " />
        </div>
      </div>
      <div className="w-2 h-32 mx-auto -mt-8 border-l-2 border-white"></div>
      <div>
        <p className="text-center text-xl  text-gray-300">Connect With me on</p>
        <div className="flex gap-3 items-center justify-center z-50 py-3">
          <Link href="https://www.linkedin.com/in/mili-srivastav/">
            <Image
              src="/linkedin.svg"
              width={500}
              height={500}
              className="w-12 cursor-pointer transform hover:scale-150 transition duration-200 ease-in-out "
              alt="linkedin-image"
            />
          </Link>
          <Link href="https://www.instagram.com/milii_____/">
            <Image
              src="/instagram.svg"
              width={500}
              height={500}
              className="w-12 cursor-pointer transform hover:scale-150 transition duration-200 ease-in-out"
              alt="instagram-image"
            />
          </Link>
          <Link href="https://github.com/mili-srivastava">
            <Image
              src="/github.svg"
              width={500}
              height={500}
              className="w-12 transition cursor-pointer transform hover:scale-150  ease-in-out"
              alt="github-image"
            />
          </Link>
          <Link href="mailto:milisrivastava42@gmail.com"><MdOutlineMail className="text-5xl text-yellow-600 cursor-pointer transform hover:scale-150 transition duration-200 ease-in-out" /></Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
