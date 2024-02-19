

const About = (props:any) => {
  return (
    <div className="w-full py-3 px-3 transition-all hover:shadow hover:shadow-purple-500  bg-[#1d1d1f] h-fit rounded-xl">
      <p className="text-2xl md:text-3xl  font-bold">{props.course}</p>
      <p className="text-gray-400 md:text-xl text-lg mt-2"> {props.institute}</p>
      <div className="border-t text-gray-300 border-white my-2"></div>
      <p>{props.description}</p>
    </div>
  )
}

export default About