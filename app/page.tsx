
import { Hero } from "@/components/main";
import "./globals.css"
import Skills from "@/components/home/Skills";
import Contact from "@/components/contact/Contact";
import Project from "@/components/projects/Project";
import About from "@/components/about/About";



export default function Home() {
  return (
    <div className="">
     <Hero />
     <Skills />

     <About />
     <Contact />
     <Project />
    
      
    </div>
  );
}
