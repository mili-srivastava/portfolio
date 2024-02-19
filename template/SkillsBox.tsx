import Image from "next/image";
import React from "react";

const SkillsBox = (props: any) => {
  const playAudio = (index:any) => {
    const audio = new Audio(`/pianoSounds/key${props.index}.mp3`);
    audio.play();
  }
  return (
    
    <div
    onClick={()=>playAudio(1)}
      className={`bg-[#1d1d1f] cursor-pointer w-44 sm:w-48 h-28 rounded-xl flex justify-center items-center  ${props.containerClass}`}
    >
      <div className="text-center">
        <Image
          src={props.logo}
          alt={props.skillName}
          width={500}
          height={500}
          className={`w-10 h-10 mx-auto transition animate-bounce  ${props.class}`}
        />
        <p className="text-xl">{props.name}</p>
      </div>
    </div>
  );
};

export default SkillsBox;
