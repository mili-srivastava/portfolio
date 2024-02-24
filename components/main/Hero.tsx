"use client"
import Image from "next/image";


const Hero = () => {
  return (
    <div className="bg-gradient z-0 ">
         
      <div className="p-3 relative ">
        <Image
          src="/images/me.png"
          width={500}
          height={500}
          alt="profilePicture"
          className="w-60 h-72 sm:w-64 md:h-96 md:w-96 object-cover mx-auto my-16 rounded-2xl border-4 shadow-lg shadow-white border-white z-0"
        />

        <div className="absolute top-1/2 lg:left-[20%]  transform -translate-x-1/2 -translate-y-1/2 bg px-3 lg:py-3 py-2 rounded-xl md:text-xl sm:px-5 sm:py-2 md:w-fit w-40 sm:w-44 move-up-animation sm:left-[10%] font-medium z-0 ">
          Hello!👋 I am Mili
        </div>
        <div className="absolute top-24 left-[58%] lg:left-[60%] sm:left-[60%] transform -translate-x-1/2  bg px-3 rounded-xl py-2 md:py-3 md:text-lg sm:px-5 sm:py-2 w-40 md:w-fit sm:w-44 move-up-animation font-medium z-0">
          Tech Enthusiast👩‍💻
        </div>
        <div className="absolute top-2/3 left-[58%] lg:left-[60%] sm:left-[65%]  transform -translate-x-1/2 bg px-3 py-2 lg:py-3 rounded-xl md:text-lg sm:px-5 sm:py-2 md:w-fit w-40 sm:w-44 move-up-animation font-medium z-0">
          I Write Articles📝
        </div>
      </div>
      <p className="text-5xl text-white text-center font-bold "> Hey, I am Mili Srivastava!</p>
      <p className="text-white text-xl mx-auto text-center py-5 md:w-[50rem] px-5">Welcome to my corner of the internet! Crafting code and content, I&apos;m a full stack developer and a article writer.Explore my portfolio for a glimpse into my dynamic skill set.</p>
       <div className="border-l-2 border-white z-50 flex mx-auto w-2 h-32"></div>
      
    </div>
  );
};

export default Hero;
