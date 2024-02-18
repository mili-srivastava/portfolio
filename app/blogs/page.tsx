import Blog from "@/template/Blog";
import React from "react";

const page = () => {
  return (
    <div className="bg-black w-full h-full px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
      <Blog
        title="Asynchronous Flow Control Techniques"
        description="Let's dive into Asynchronous Flow and let us understand what techniques we can use to do asynchrounous programming in JavaScript, so let's simplify it and understand how it works together!"
        image="/images/blog3.png"
      />

      <Blog
        title="Asynchrounous Flow Control And Event Loop"
        description="Let's dive into Asynchronous Flow and the Event Loop in JavaScript! 🚀 They're the keys to making code efficient and responsive. I'm learning too, so let's simplify it and understand how it works together!"
        image="/images/blog1.png"
      />

      <Blog
        title="REST API"
        description="We've all heard of APIs, those nifty tools that make our lives easier. One of them, REST API, is a game-changer for simplifying and scaling our projects. In this article, let's dive into #RESTAPI in plain and simple language."
        image="/images/blog2.jpg"
      />

      <Blog
        title="What is Node js and How it works?"
        description="Let's dive into Node js and discuss what Node Js is and the architecture of Node Js, so let's simplify it and understand how it works together!"
        image="/images/blog4.png"
      />

      <Blog
        title="Monorepo vs. Polyrepo and How CI/CD Pipelines Work in Both Cases?"
        description="In this blog let's discuss about Monorepo and Polyrepo and how CI/CD pipelines work in both cases."
        image="/images/blog5.jpg"
      />

      <Blog
        title="CI/CD Pipelines for Microservices"
        description="CI/CD pipelines for microservices automate integration, and deployment. They ensure continuous delivery, scalability, and reliability, facilitating rapid development microservices architecture."
        image="/images/blog6.png"
      />

      <Blog
        title="Monolithic Architecture Vs Microservices"
        description="Microservices is the way of software development where software is composed of small components also known as services that communicate through APIs."
        image="/images/blog7.png"
      />

      <Blog
        title="Static And Dynamic Websites"
        description="Static websites present fixed content, best for showcasing information. Dynamic websites offer interactive elements, changing content based on user input, ideal for engaging blogs and real-time updates."
        image="/images/blog8.jpg"
      />

      <Blog
        title="Understanding the Client-Server Architecture"
        description="In this blog we'll discuss in detail about Client-Server architecture, Web Server and types of HTTP methods, so let's simplify it and understand how it works together!"
        image="/images/blog9.jpg"
      />
    </div>
  );
};

export default page;
