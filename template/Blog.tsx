import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = (props:any) => {
  return (
    <div className=" w-full h-full">
    <div className="max-w-sm h-[28rem] rounded-xl bg-[#1d1d1f] shadow mx-auto">
      <Link href="#">
        <Image
          className="w-full h-40"
          width={500}
          height={500}
          src={props.image}
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
            {props.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-sm text-gray-300 ">
          {props.description}
        </p>
        <Link
          href={props.link}
          className="inline-flex absolute rounded-xl top-50 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Blog;
