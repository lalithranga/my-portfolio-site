import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti";
import Header from "../component/header";
import Project from "./projectPage";

import Footer from "../component/footer";
import Skill from "../component/skill";
import ContactMe from "../component/contect";
import ScatterText from "../component/playing";
import "@fontsource/roboto"; // Imports default weight (400)



function HomePage() {
  const talents = ["Software Developer", "Web Developer"];
  const [currentTalentIndex, setCurrentTalentIndex] = useState(0);
  const projectRef = useRef(null); // 🔹 reference for Project section

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTalentIndex((prev) => (prev + 1) % talents.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
    exit: { opacity: 0 },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      {/* Header with scroll handler */}

      <Header onProjectClick={scrollToProjects} />

      {/* Top Section */}
      <div className="flex flex-col items-center">
        <h1 className="text-[26px] font-bold text-gray-500 lg:text-[50px] my-6 ">Hello, it's me</h1>
        <p className="text-[30px] lg:text-[40px] mb-2 font-extrabold font-roboto text-gray-200">
          Lalith Wijesiri
        </p>

        <div className="flex flex-row items-center justify-center w-full mx-auto">
          <p className="text-[20px] lg:text-[30px] ml-9 w-[80px] lg:w-[100px]">And I'm</p>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentTalentIndex}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-[30px] lg:text-[40px] font-semibold ml-6 text-green-600 w-[400px]"
            >
              {talents[currentTalentIndex].split("").map((char, i) => (
                <motion.span key={i} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col items-center mb-9 py-5">
        <div className="flex items-center justify-center py-3">
          <div className="w-full flex flex-col text-gray-400">
            {[
              "I’m a passionate software developer",
              "I have a solid background in computer science cgfd fhfh",
              "Clean code and quality work are key values",
              "I focus on detail and believe",
              "I’m always learning new",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center text-justify"
              >
                <p className="text-[18px] lg:text-[23px] font-semibold">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links */}
      <section className="flex w-full justify-center items-center mb-6">
        <div className="flex flex-row justify-evenly w-[400px] lg:w-[600px]">
          {[
            {
              href: "https://www.facebook.com/lalith.wijesiri.1",
              icon: <TiSocialFacebook />,
              delay: 0.1,
              hover: "hover:text-blue-600",
            },
            {
              href: "https://github.com/LalithWijesiri",
              icon: <TiSocialGithub />,
              delay: 0.3,
              hover: "hover:text-pink-500",
            },
            {
              href: "https://www.instagram.com/lalith_wijesiri/",
              icon: <TiSocialInstagram />,
              delay: 0.5,
              hover: "hover:text-pink-500",
            },
            {
              href: "https://www.linkedin.com/in/lalith-wijesiri-8a8b4a1b7/",
              icon: <TiSocialLinkedin />,
              delay: 0.7,
              hover: "hover:text-blue-600",
            },
          ].map(({ href, icon, delay, hover }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay }}
              className={`border-4 border-green-900 rounded-full p-1 text-[30px] text-gray-200 mx-2 ${hover}`}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </section>

      {/* Profile Image */}
      <section className="flex flex-row w-full mb-6 mt-[50px] justify-center items-center lg:mt-[150px]">
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          className="w-[350px] h-[350px] rounded-full border-2 border-green-900 object-cover shadow-lg"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Project Section */}
    {/* Project Section */}
<section className="flex items-center justify-center px-4 py-[100px]">
  <div
    ref={projectRef}
    className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl w-full"
  >

      <Project />
    
  </div>
</section>


     {/* skills */}

     <section className="flex items-center justify-center px-4">
  <div className="flex flex-col lg:flex-row gap-10 max-w-6xl w-full">
    
    {/* Skill component */}
    <div className="w-full max-w-xl">
      <Skill />
    </div>
    
    {/* Text content */}
    <div className="w-full max-w-xl text-[15px] text-justify mt-5 lg:mt-0">
      <h2 className="text-2xl lg:text-3xl font-bold mb-8  text-gray-200 w-fit px-4 py-1 rounded-md mx-auto ">
        My Skills
      </h2 >
      <h3 className="text-gray-200 text-[18px] lg:text-[21px] font-semibold mb-4">
      As a Full Stack Developer, I specialize in building high-performance, scalable web applications using modern JavaScript technologies and Java. My front-end expertise lies in creating dynamic and responsive user interfaces with React, while on the back end, I work extensively with Node.js and Spring Boot to develop robust APIs and server-side logic. I am proficient in both MongoDB and MySQL, ensuring efficient data management for a wide range of applications.

Through my recent training in the Digital Technology Product Solution (NZQA Level 5) program at Mission Ready Institute, I have deepened my understanding of agile methodologies, cloud-based architectures, and end-to-end product development. I take a performance-focused, adaptable, and collaborative approach to every project, making me a valuable asset for both front-end and back-end development roles.
      </h3>
     
    </div>
   

  </div>
</section>

     
 

      {/* Contact Me Section */}
      <div className="flex flex-col lg:flex-row w-full justify-evenly mx-auto my-[70px]">
  {/* Left section: ContactMe */}
  <div className="w-full lg:w-1/2 flex justify-center">
 
    <ScatterText />
  </div>

  {/* Right section: ScatterText */}
  <div className="w-full lg:w-1/2 max-w-xl text-[15px] text-justify mt-5 lg:mt-0">
  <ContactMe />
  </div>
</div>

      
      <section className="flex flex-col items-center justify-center mt-10 mb-10">
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
