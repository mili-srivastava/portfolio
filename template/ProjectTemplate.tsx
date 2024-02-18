"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiExternalLink } from "react-icons/hi";

const ProjectTemplate = (props: any) => {
  const [link, showlink] = useState(false);

  const showLink = () => {};
  return (
    <div className="grid place-content-center relative">
      <div className="relative">
        <Image
          src={props.image}
          width={500}
          height={500}
          alt="project-image"
          className="w-96 h-64"
        />
        <div className="absolute inset-0 hover:bg-[#00000080]  transition-opacity flex justify-center items-center opacity-0 hover:opacity-100">
          <Link href={`${props.link}`} target="blank">
            <HiExternalLink className="absolute top-0 right-0 m-2    rounded text-white text-4xl cursor-pointer" />
          </Link>
          <div className="flex gap-2 items-center ">
            <Image
              src={props.techImg1}
              width={500}
              height={500}
              alt="nextjs-image"
              className="w-16 h-16"
            />
            <Image
              src={props.techImg2}
              width={500}
              height={500}
              alt="nextjs-image"
              className="w-24 h-20 "
            />
            <Image
              src={props.techImg3}
              width={500}
              height={500}
              alt="nextjs-image"
              className={`w-24 h-20 ${props.class}`}
            />
          </div>
        </div>
      </div>

      <p className="py-3 text-2xl font-medium ">{props.title}</p>
    </div>
  );
};

export default ProjectTemplate;
