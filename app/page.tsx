"use client";
import Image from "next/image";
import { useRef } from "react";
import { Folder, Briefcase, Database, Lightbulb, Check, ExternalLink, Github, Download, Mail, Phone, MapPin, Linkedin, Copyright, ArrowUpCircleIcon } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_323nags",
        "template_5i61mbf",
        form.current,
        "FqL1kn7fcYUawNZZk"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error);
        }
      );
  };
  return (
    <div>
      <div className="flex justify-between items-center w-full fixed bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="ml-36 m-4 mb-2">
          <h1 className="text-2xl font-bold">Swamini Raut</h1>
        </div>
        <div className="flex justify-evenly items-center w-5xl">
          <a href="#hero" className="font-bold hover:underline">Hero</a>
          <a href="#about" className="font-bold hover:underline">About</a>
          <a href="#skills" className="font-bold hover:underline">Skills</a>
          <a href="#projects" className="font-bold hover:underline">Projects</a>
          <a href="#resume" className="font-bold hover:underline">Resume</a>
          <a href="#contact" className="font-bold hover:underline">Contact</a>
        </div>
      </div>
      <main className="flex flex-col justify-center items-center">
        <section className="h-screen bg-gradient-to-r from-gray-900 to-purple-900 w-full flex justify-center items-center" id="hero">
          <div>
            <h1 className="text-6xl font-extrabold">Swamini Raut</h1>
            <h2 className="text-4xl font-bold text-cyan-500 mt-4 mb-4 ">Full Stack Developer | Aspiring Software Engineer</h2>
            <p className="text-2xl mb-4">Building scalable and user-friendly web applications from frontend to backend.</p>
            <a href="#projects"><button className="h-8 bg-cyan-600 text-white rounded-sm pl-4 pr-4 font-bold mr-4 hover:bg-cyan-800">View Projects</button></a>
            <a href="/SwaminiRaut_InternshalaResume (1).pdf" download><button className="h-8 bg-white text-black rounded-sm pl-4 pr-4 font-bold hover:bg-gray-500">Download Resume</button></a>
          </div>
          <div className="w-[300px] h-[300px] rounded-full overflow-hidden shadow-lg ml-10 outline-2 outline-white">
            <Image src={"/s.jpeg"} alt="swamini" width={300} height={300} className="object-cover w-full h-full" />
          </div>
        </section>
        <section className="h-screen flex justify-evenly items-center bg-gray-900 w-full pr-7 pl-10 py-24 px-10" id="about">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              About Me
            </h2>
            <h1 className="text-4xl font-bold" >Hello, I'm Swamini Raut</h1>
            <h3 className="text-2xl font-semibold text-gray-300">Software Engineer</h3>
            <p className="text-[18px]">I'm an Electronics & Telecommunication Engineering student and aspiring Software Engineer with a strong foundation in Full Stack Web Development.</p>
            <p className="text-[18px]">I specialize in building modern, responsive, and scalable applications using React.js, Next.js, Node.js, Express.js, and MongoDB. My experience spans frontend development, backend architecture, and database design, allowing me to develop complete end-to-end solutions.</p>
            <p className="text-[18px]">Through my internships at CODTECH IT SOLUTION and NullClass, I gained hands-on experience in developing production-level applications, collaborating in team environments, and following professional coding standards.</p>
            <p className="text-[18px]">I am passionate about problem-solving, writing clean and maintainable code, and continuously strengthening my data structures, algorithms, and system-level understanding.</p>
            <p className="text-[18px]">To begin my career as a Software Engineer where I can contribute to impactful projects, work across diverse technologies, and grow in a challenging and innovation-driven environment.</p>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex justify-evenly items-center w-[500px]">
              <div className="w-[220px] h-[100px] border-2 border-gray-700/60 rounded-xl flex flex-col justify-center items-start pl-4 bg-gradient-to-r from-gray-950 to-gray-800 gap-3 hover:border-purple-500 
hover:scale-105 transition duration-300 shadow-lg shadow-black">
                <h1 className="text-[18px] font-bold">Projects Built</h1>
                <div className="flex">
                  <Folder className="mr-2" />
                  <h3>10+ Web Applications</h3>
                </div>
              </div>
              <div className="w-[220px] h-[100px] border-2 border-gray-700/60 rounded-xl flex flex-col justify-center items-start pl-4 bg-gradient-to-r from-gray-950 to-gray-800 gap-3 hover:border-purple-500 
hover:scale-105 transition duration-300 shadow-lg shadow-black">
                <h1 className="text-[18px] font-bold">Industry Experiences</h1>
                <div className="flex">
                  <Briefcase className="mr-2" />
                  <h3>4 Internships</h3>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly items-center w-[500px]">
              <div className="w-[220px] h-[100px] border-2 border-gray-700/60 rounded-xl flex flex-col justify-center iitems-start pl-4 bg-gradient-to-r from-gray-950 to-gray-800 gap-3 hover:border-purple-500 
hover:scale-105 transition duration-300 shadow-lg shadow-black">
                <h1 className="text-[18px] font-bold">Tech Stack</h1>
                <div className="flex">
                  <Database className="mr-2" />
                  <h3>MERN + Next.js</h3>
                </div>
              </div>
              <div className="w-[220px] h-[100px] border-2 border-gray-700/60 rounded-xl flex flex-col justify-center items-start pl-4 bg-gradient-to-r from-gray-950 to-gray-800 gap-3 hover:border-purple-500 
hover:scale-105 transition duration-300 shadow-lg shadow-black">
                <h1 className="text-[18px] font-bold">Core Strength</h1>
                <div className="flex">
                  <Lightbulb className="mr-2" />
                  <h3>Problem Solving</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 via-gray-900 to-purple-950 w-full" id="skills">
          <h1 className="text-[35px] font-bold mb-10 mt-28 text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</h1>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-10 gap-10">
              <div className="w-[400px] h-[170px] border-2 border-gray-700/60 shadow-lg shadow-black flex flex-col justify-center bg-gradient-to-r from-gray-950 to-gray-800 rounded-3xl p-5 hover:scale-105
transition duration-300">
                <h1 className="ml-3 text-[20px] font-bold">Frontend Development</h1>
                <div className="flex flex-wrap gap-3 mt-4 ml-3">
                  <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>React.js</p>
                  </div>
                  <div className="flex pr-1 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>Next.js</p>
                  </div>
                  <div className="flex pr-1 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>Tailwind CSS</p>
                  </div>
                  <div className="flex pr-1 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>HTML5</p>
                  </div>
                  <div className="flex pr-1 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>CSS3</p>
                  </div>
                  <div className="flex pr-1 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>JavaScript</p>
                  </div>
                </div>
              </div>
              <div className="w-[400px] h-[170px] border-2 border-gray-700/60 shadow-lg shadow-black flex flex-col bg-gradient-to-r from-gray-950 to-gray-800 rounded-3xl p-5 hover:scale-105
transition duration-300">
                <h1 className="ml-3 text-[20px] font-bold mt-2">Backend Development</h1>
                <div className="flex flex-wrap gap-3 mt-4 ml-3">
                  <div className="flex pr-1.5 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>Node.js</p>
                  </div>
                  <div className="flex pr-1.5 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>Express.js</p>
                  </div>
                  <div className="flex pr-1.5 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>Rest APIs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-10">
              <div className="w-[400px] h-[170px] border-2 border-gray-700/60 shadow-lg shadow-black flex flex-col justify-center bg-gradient-to-r from-gray-950 to-gray-800 rounded-3xl p-5 hover:scale-105
transition duration-300">
                <h1 className="ml-3 text-[20px] font-bold">Database & Tools</h1>
                <div className="flex flex-wrap gap-3 mt-4 ml-3">
                  <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>MongoDB</p>
                  </div>
                  <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>Git</p>
                  </div>
                  <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>GitHub</p>
                  </div>
                  <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>Postman</p>
                  </div>
                </div>
              </div>
              <div className="w-[400px] h-[170px] border-2 border-gray-700/60 shadow-lg shadow-black flex flex-col justify-center bg-gradient-to-r from-gray-950 to-gray-800 rounded-3xl p-5 hover:scale-105
transition duration-300">
                <h1 className="ml-3 text-[20px] font-bold">Core CS Concepts</h1>
                <div className="flex flex-wrap gap-3 mt-4 ml-3">
                  <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>Data Structures & Algorithms</p>
                  </div>
                  <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>OOP</p>
                  </div>
                  <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>DBMS Basics</p>
                  </div>
                  <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition">
                    <Check className="mr-2" />
                    <p>Problem Solving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center bg-gray-900 w-full" id="projects">
          <h1 className="mt-4 mb-4 text-[35px] font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Projects</h1>
          <div className="w-[1200px] border-2 border-gray-700/60 rounded-3xl p-4 shadow-lg shadow-black hover:border-purple-700">
            <h1 className="text-[25px] font-bold">YouTube Clone - Smart Streaming Platform</h1>
            <p className="text-gray-300">A full-stack video streaming platform with multilingual comment translation, tier-based subscription control, Razorpay payment integration, gesture-based custom video player, and real-time VoIP screen-sharing capabilities.
            </p>
            <div className="flex flex-wrap justify-evenly">
              <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                <Check className="mr-2" />
                <p>React.js</p>
              </div>
              <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                <Check className="mr-2" />
                <p>React.js</p>
              </div>
              <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                <Check className="mr-2" />
                <p>React.js</p>
              </div>
              <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                <Check className="mr-2" />
                <p>React.js</p>
              </div>
              <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                <Check className="mr-2" />
                <p>React.js</p>
              </div>
              <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                <Check className="mr-2" />
                <p>React.js</p>
              </div>
              <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                <Check className="mr-2" />
                <p>React.js</p>
              </div>
              <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                <Check className="mr-2" />
                <p>React.js</p>
              </div>
              <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                <Check className="mr-2" />
                <p>React.js</p>
              </div>
            </div>
            <h2 className="text-[18px] font-bold">Key Features:</h2>
            <div className="flex flex-col gap-1.5 text-gray-300">
              <p>Built multilingual comment system with real-time translation, auto-moderation (dislike-based deletion & filtering), and geolocation-based personalization</p>
              <p>Implemented tier-based subscription system (Free, Bronze, Silver, Gold) with backend-enforced watch-time restrictions and download limits</p>
              <p>Integrated Razorpay payment gateway with automated invoice email generation for premium upgrades</p>
              <p>Designed secure OTP authentication (Email/SMS) with region-based logic handling</p>
              <p>Developed custom gesture-based video player and integrated WebRTC-powered video calling with screen sharing</p>
            </div>
            <div className="flex gap-6">
              <div className="border-2 border-purple-700/60 bg-gradient-to-r from-purple-950 via-purple-800 to-purple-600 w-[130px] flex mt-4 mb-4 hover:from-pink-950 hover:via-pink-700 hover:to-pink-500 transition duration-300">
                <ExternalLink className="mr-2" />
                <button>Live Demo</button>
              </div>
              <div className="border-2 border-purple-700/60 bg-gradient-to-r from-purple-950 via-purple-800 to-purple-600 w-[130px] flex mt-4 mb-4 hover:from-pink-950 hover:via-pink-700 hover:to-pink-500 transition duration-300">
                <Github className="mr-2" />
                <a href="https://github.com/SwaminiRaut/Yourtube2.0"><button>GitHub</button></a>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly gap-7 w-[1200px] mt-7 mb-7">
            <div className="border-2 border-gray-700/60 rounded-3xl p-4 shadow-lg shadow-black hover:border-purple-700">
              <h1 className="text-[25px] font-bold">AI Resume Builder</h1>
              <p className="text-gray-300">A dynamic resume generation web application that allows users to input personal and professional details, preview their resume in real-time, and download a professionally formatted PDF instantly.</p>
              <div className="flex flex-wrap justify-evenly">
                <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                  <Check className="mr-2" />
                  <p>Next.js</p>
                </div>
                <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                  <Check className="mr-2" />
                  <p>React.js</p>
                </div>
                <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                  <Check className="mr-2" />
                  <p>TypeScript</p>
                </div>
                <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                  <Check className="mr-2" />
                  <p>Tailwind CSS</p>
                </div>
                <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                  <Check className="mr-2" />
                  <p>jsPDF</p>
                </div>
              </div>
              <h2 className="text-[18px] font-bold">Key Features:</h2>
              <div className="flex flex-col gap-1.5 text-gray-300">
                <p>Built a dynamic form system with controlled components using React state management</p>
                <p>Implemented real-time resume preview rendering before PDF generation</p>
                <p>Integrated jsPDF to generate structured downloadable resumes programmatically</p>
                <p>Designed clean and structured resume layout with formatted sections (Personal Details, Education, Skills, Experience, Projects)</p>
                <p>Ensured client-side PDF rendering without backend dependency</p>
                <p>Used TypeScript for improved type safety and maintainable code structure</p>
                <p>Created reusable form components and responsive layout using Tailwind CSS</p>
              </div>
              <div className="flex gap-6">
                <div className="border-2 border-purple-700/60 bg-gradient-to-r from-purple-950 via-purple-800 to-purple-600 w-[130px] flex mt-4 mb-4 hover:from-pink-950 hover:via-pink-700 hover:to-pink-500 transition duration-300">
                  <ExternalLink className="mr-2" />
                  <button>Live Demo</button>
                </div>
                <div className="border-2 border-purple-700/60 bg-gradient-to-r from-purple-950 via-purple-800 to-purple-600 w-[130px] flex mt-4 mb-4 hover:from-pink-950 hover:via-pink-700 hover:to-pink-500 transition duration-300">
                  <Github className="mr-2" />
                  <a href="https://github.com/SwaminiRaut/ai_resume_builder"><button>GitHub</button></a>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-700/60 rounded-3xl p-4 shadow-lg shadow-black hover:border-purple-700">
              <h1 className="text-[25px] font-bold">Real-Time Chat Application</h1>
              <p className="text-gray-300">A real-time messaging web application enabling multiple users to communicate instantly using WebSocket-based architecture with live message broadcasting and chat history synchronization.</p>
              <div className="flex flex-wrap justify-evenly">
                <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-2">
                  <Check className="mr-2" />
                  <p>HTML</p>
                </div>
                <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-2">
                  <Check className="mr-2" />
                  <p>CSS</p>
                </div>
                <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-2">
                  <Check className="mr-2" />
                  <p>JavaScript</p>
                </div>
                <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-2">
                  <Check className="mr-2" />
                  <p>Node.js</p>
                </div>
                <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-2">
                  <Check className="mr-2" />
                  <p>Express.js</p>
                </div>
                <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                  <Check className="mr-2" />
                  <p>Socket.io</p>
                </div>
                <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                  <Check className="mr-2" />
                  <p>HTTP Servers</p>
                </div>
                <div className="flex pr-2 text-gray-200 bg-gray-700/60 rounded-sm p-0.5 border-purple-400/20 hover:bg-purple-600/20 transition mt-4 mb-4">
                  <Check className="mr-2" />
                  <p>CORS</p>
                </div>
              </div>
              <h2 className="text-[18px] font-bold">Key Features:</h2>
              <div className="flex flex-col gap-1.5 text-gray-300">
                <p>Implemented real-time bidirectional communication using Socket.io</p>
                <p>Designed event-driven architecture for sending and receiving live messages</p>
                <p>Built chat history synchronization to load previous messages when a new user connects</p>
                <p>Structured backend using Express.js + HTTP server with CORS configuration</p>
                <p>Dynamically rendered messages on the client side using DOM manipulation</p>
                <p>Implemented message validation to prevent empty username and message submission</p>
                <p>Managed message storage using in-memory data structure (extendable to database integration)</p>
              </div>
              <div className="flex gap-6">
                <div className="border-2 border-purple-700/60 bg-gradient-to-r from-purple-950 via-purple-800 to-purple-600 w-[130px] flex mt-4 mb-4 hover:from-pink-950 hover:via-pink-700 hover:to-pink-500 transition duration-300">
                  <ExternalLink className="mr-2" />
                  <button>Live Demo</button>
                </div>
                <div className="border-2 border-purple-700/60 bg-gradient-to-r from-purple-950 via-purple-800 to-purple-600 w-[130px] flex mt-4 mb-4 hover:from-pink-950 hover:via-pink-700 hover:to-pink-500 transition duration-300">
                  <Github className="mr-2" />
                  <a href="https://github.com/SwaminiRaut/chat_application"><button>GitHub</button></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-screen flex justify-center items-center bg-gradient-to-b from-gray-900 to-purple-950/20 w-full" id="resume">
          <div className="flex flex-col justify-center items-center w-[1000px] border-[1px] border-purple-800/30 rounded-3xl gap-1.5 shadow-[0_0_60px_rgba(168,85,247,0.18)] bg-[#14141f] hover:scale-[1.02] transition duration-300 hover:shadow-[0_0_70px_rgba(168,85,247,0.25)]">
            <h1 className="text-[35px] font-bold bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent mt-7">Resume</h1>
            <p className="text-[20px] text-gray-400">Want a detailed overview of my experience and technical skills?</p>
            <p className="text-[20px] text-gray-400">Download my resume below to learn more about my work and achievements</p>
            <div className="flex items-center gap-2 px-6 py-3 rounded-xl
  bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600
  text-white font-medium
  shadow-[0_8px_20px_rgba(168,85,247,0.35)]
  hover:shadow-[0_10px_35px_rgba(168,85,247,0.65)]
  transition-all duration-300 mt-10 mb-14">
              <Download />
              <a href="/SwaminiRaut_InternshalaResume (1).pdf" download><button className="text-[20px]">Download Resume</button></a>
            </div>
          </div>
        </section>
        <section className="h-screen flex flex-col justify-center items-center bg-purple-950/20 w-full" id="contact">
          <div className="flex flex-col justify-center items-center w-[900px] border-1 border-purple-900 gap-4 rounded-3xl pt-10 pb-12">
            <h1 className="text-[35px] font-bold bg-gradient-to-b from-pink-400  to-purple-600 bg-clip-text text-transparent">Contact Me</h1>
            <p className="text-[18px] text-gray-300">Have a project in mind? I'd love to hear from you.</p>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center items-center gap-5">
              <input name="name" placeholder="Your Name" className="border-1 border-gray-500 rounded-lg w-[600px] h-[40px] pl-3" />
              <input name="email" placeholder="Your Email" className="border-1 border-gray-500 rounded-lg w-[600px] h-[40px] pl-3" />
              <textarea name="message" placeholder="Your Message" className="border-1 border-gray-500 rounded-lg w-[600px] h-[100px] pl-3 pt-2" />
              <button className="border-1 bg-gradient-to-r from-purple-800 via-purple-800 to-pink-500 rounded-4xl p-1.5 w-[200px] text-[17px] mt-3 border-purple-950 hover:scale-[1.03] transition duration-300 hover: from-purple-300 to-pink-100 transition duration-300">Send Message</button>
            </form>
          </div>
        </section>
        <footer className="flex flex-col w-full bg-purple-950/20">
          <div className="flex justify-evenly w-full">
            <div className="flex flex-col gap-4">
              <h1 className="text-[20px] font-bold">Contact</h1>
              <div className="flex text-gray-300">
                <Mail className="mr-3" />
                <p className="hover:underline">rautswamini55@gmail.com</p>
              </div>
              <div className="flex text-gray-300">
                <Phone className="mr-3" />
                <p className="hover:underline">+91 7620210249</p>
              </div>
              <div className="flex text-gray-300">
                <MapPin className="mr-3" />
                <p className="hover:underline">Pune, India</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-[20px] font-bold">Follow Me</h1>
              <div className="flex text-gray-300">
                <Linkedin className="mr-3" />
                <a href="https://www.linkedin.com/in/swaminiraut/"><p className="hover:underline">LinkedIn</p></a>
              </div>
              <div className="flex text-gray-300">
                <Github className="mr-3" />
                <a href="https://github.com/SwaminiRaut?tab=repositories"><p className="hover:underline">GitHub</p></a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-[20px] font-bold">Quick Links</h1>
              <a href="#hero" className="hover:underline">Hero</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#skills" className="hover:underline">Skills</a>
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#resume" className="hover:underline">Resume</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </div>
          <div className="flex justify-evenly mt-7">
            <div className="flex">
              <Copyright className="mr-3" />
              <p>2026 Swamini Dinesh Raut.</p>
              <p className="text-gray-400">All rights reserved</p>
            </div>
            <div className="text-[18px] font-semibold">
              <p>Crafting code & creativity</p>
            </div>
            <div className="flex">
              <p className="mr-3">Privacy Policy</p>
              <div className="flex">
                <p>Terms</p>
                <ArrowUpCircleIcon />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
