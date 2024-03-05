import Education from "@/template/Education"
import Link from "next/link"
import { GrDocumentDownload } from "react-icons/gr"

const About = () => {
    return (
        <div id="about" className="w-full h-fit p-3 bg-black text-white">
            <p className="text-5xl font-bold text-center">About Me</p>
            <p className="px-5 py-3 lg:mx-36 text-gray-300 text-center">
                I&rsquo;m Mili Srivastava, a B.Tech. Undergrad focusing on Web Development. Proficient in Next.js, Tailwind CSS, and MongoDB, I specialize in crafting dynamic web applications. With a commitment to excellence, I constantly seek opportunities to enhance my skills and contribute meaningfully to projects.</p>
            <p className="text-4xl font-medium lg:mx-16 my-8 md:mx-10">Experience</p>
            <div className="lg:px-16 md:px-10">
                <Education course="Web Tech Intern" institute="Softmation Innovation Lucknow, Uttar Pradesh" description="Worked as a Web Tech Intern at Softmation Innovation. I was responsible for developing and maintaining the website, as well as creating new features and functionality. I also worked on the front-end  of the website, using Next.js, Tailwind CSS, and MongoDB." />
            </div>
            <p className="text-4xl font-medium lg:mx-16 mb-8 mt-10 md:mx-10">Educational Qualifications</p>
            <div className="grid space-y-8 my-5 lg:mx-16 md:mx-10">
                <Education course="B.Tech in Information Technology" institute="Veer Bahadur Singh Purvanchal University (2020-2024)" description="Persuing bachelor’s Of Technology from Veer bahadur singh Purvanchal University in Jaunpur, Uttar pradesh" />

                <Education course="Senior Secondary" institute="Holy Child Academy (2018-2020)" description="Completed my Senior Secondary School from Holy Child Academy in Jaunpur, Uttar Pradesh with PCM." />

                <Education course="High School" institute="Holy Child Academy (2018-2016)" description="Completed my High School from Holy Child Academy in Jaunpur, Uttar Pradesh." />
            </div>

            <Link href="/resume.pdf" download="resume.pdf">

                <button  className="bg-blue-600 text-lg items-center gap-2 px-5 py-2 text-white mx-auto w-fit rounded-xl flex my-8">Download My Resume
                <GrDocumentDownload className="text-2xl animate-bounce" />
                </button>
            </Link>
        </div>
    )
}

export default About