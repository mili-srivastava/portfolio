import SkillsBox from "@/template/SkillsBox";
import Image from "next/image";

type SkillsProps = {
  skillName: string;
  logo: string;
};

const Skills = () => {
  return (
    <div className="bg-black text-white">
      <div className="border-l-2 border-white z-50 flex mx-auto w-2 h-24"></div>
      <div className="p-3">
        <p className="text-xl text-center pt-5">Skills</p>
        <p className="text-5xl mb-16 font-bold text-center">
          Current Skill Set
        </p>

        <div className="grid place-items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 lg:grid-cols-5 lg:gap-0 ">
          <SkillsBox
            name="Next Js"
            logo="/images/nextjs.png"
            containerClass="hover:bg-[#556B2F]"
          />
          <SkillsBox
            name="React Js"
            logo="/images/react.png"
            containerClass="hover:bg-[#1B7B8C]"
          />
          <SkillsBox
            name="Tailwind CSS"
            logo="/images/tailwind.png"
            containerClass="hover:bg-[#E2725B]"
            class="w-16"
          />
          <SkillsBox
            name="Mongo DB"
            logo="/images/mongodb.png"
            containerClass="hover:bg-[#5E81AC] md:hidden lg:flex"
            
          />
          <SkillsBox
            name="Node Js"
            logo="/images/nodejs.png"
            containerClass="hover:bg-[#483D84] hidden lg:flex"
          />
        </div>
        <div className="bg-[#1d1d1f]  h-28 rounded-xl grid place-content-center mt-5 mx-5  hover:bg-[#7550a6]">
          <div className="">
            <Image
              src="/images/dsa.png"
              alt="dsa"
              width={500}
              height={500}
              className="w-12 h-12 mx-auto "
            />
            <p className="text-xl">Data Structures And Algorithms</p>
          </div>
        </div>

        <div className="grid place-items-center pb-20 grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:gap-0 lg:grid-cols-5 my-5">
        <SkillsBox
            name="Mongo DB"
            logo="/images/mongodb.png"
            containerClass="hover:bg-[#5E81AC] hidden lg:hidden md:flex"
            
          />
          <SkillsBox
            name="Node Js"
            logo="/images/nodejs.png"
            containerClass="hover:bg-[#483D84] lg:hidden "
          />

          <SkillsBox
            name="Express Js"
            logo="/images/expressjs.png"
            containerClass="hover:bg-[#528899] lg:hidden"
            class="w-20 h-10"
          />

          <SkillsBox
            name="Javascript"
            logo="/images/js.png"
            containerClass="hover:bg-[#2C476B]"
            class="h-10"
          />
          <SkillsBox
            name="CSS"
            logo="/images/css.png"
            containerClass="hover:bg-[#B7410E]"
            class="w-8 h-8"
          />
          <SkillsBox
            name="HTML"
            logo="/images/html.png"
            containerClass="hover:bg-[#D4AF37]"
          />
          <SkillsBox
            name="GIT"
            logo="/images/git.png"
            containerClass="hover:bg-[#5F9F6E]"
            class="w-10  h-8"
          />
          <SkillsBox
            name="GitHub"
            logo="/images/github.png"
            containerClass="hover:bg-[#B23D38]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
