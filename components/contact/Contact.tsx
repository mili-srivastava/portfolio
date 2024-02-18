import Image from "next/image";
import React from "react";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-black h-fit w-full pt-10 pb-20 px-16">
      <div className="text-center">
        <p className="text-gray-200 text-lg">Connect With Me</p>
        <p className="text-4xl md:text-5xl font-bold text-white">
          Get in Touch With Me
        </p>
      </div>

      <div className="lg:w-[100%] rounded-xl mx-auto bg-gradient gap-10 md:flex py-10 px-16 items-center mt-16">
        <div className="lg:w-[60%] md:w-full lg:px-10">
          <section className="">
            <div className="mx-auto max-w-screen-md">
              
              <form action="#" className="space-y-5">
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
                  />
                  <label
                    htmlFor="email"
                    className="block  mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    className="shadow-sm text-sm  w-full p-2.5 rounded-xl bg-[#FFFFFF66] placeholder:text-black focus:outline-none focus:border-4 focus:border-[#FFFFFF66]"
                    placeholder="name@example.com"
                    required
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
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white bg-blue-600 rounded-xl mx-auto flex"
                >
                  Send message
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
        <p className="text-center text-xl text-gray-300">Connect With me on</p>
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
    </div>
  );
};

export default Contact;
