import Image from "next/image";
import React from "react";

const SkillsBox = (props: any) => {
  return (
    <div
      className={`bg-[#1d1d1f] w-48 h-28 rounded-xl flex justify-center items-center my-5  ${props.containerClass}`}
    >
      <div className="text-center">
        <Image
          src={props.logo}
          alt={props.skillName}
          width={500}
          height={500}
          className={`w-10 h-10 mx-auto ${props.class}`}
        />
        <p className="text-xl">{props.name}</p>
      </div>
    </div>
  );
};

export default SkillsBox;
