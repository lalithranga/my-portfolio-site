import { AnimatePresence, motion } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { TbBrandGithub } from "react-icons/tb";
import {

  TiSocialInstagram,
  
  TiSocialLinkedin,
} from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
function HomeContent() {
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
    <div>
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
              <section className="flex w-full justify-center items-center mb-6">
        <div className="flex flex-row justify-evenly w-[400px] lg:w-[600px]">
          {[ {
              href: "https://www.linkedin.com/in/lalith-wijesiri-60a340166",
              icon: <TiSocialLinkedin />,
              delay: 0.7,
              hover: "hover:text-blue-900",
            },
            {
              href: "https://github.com/lalithranga",
              icon: <TbBrandGithub />,
              delay: 0.3,
              hover: "hover:text-blue-900",
            },
            {
              href: "https://support.google.com/mail/answer/8494?hl=en&co=GENIE.Platform%3DDesktop",
              icon: <BiLogoGmail />,
              delay: 0.1,
              hover: "hover:text-blue-900",
            },
            
            {
              href: "https://www.instagram.com/lalith_wijesiri/",
              icon: <TiSocialInstagram />,
              delay: 0.5,
              hover: "hover:text-blue-900",
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
     
    </div>
  );
}
export default HomeContent;