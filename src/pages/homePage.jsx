import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { TiSocialFacebook } from "react-icons/ti";

import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import Header from "../component/headre";

function HomePage() {
  const talents = ["Software Developer", "Web Developer"];
  const [currentTalentIndex, setCurrentTalentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTalentIndex((prev) => (prev + 1) % talents.length);
    }, 4000); // change talent every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
    exit: { opacity: 0 },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-2 w-full ">
      {/* Header */}
      <Header />
      {/* top section */}

      <div className="flex flex-col items-center">
        <h1 className="text-[26px] font-bold text-gray-500 ">Hello, it's me</h1>
        <p className="text-[30px] mb-2 font-extrabold font-serif">
          Lalith Wijesiri
        </p>

        <div className="flex flex-row items-center justify-center w-full mx-auto">
          <p className="text-[20px] ml-9 w-[80px]">And I'm</p>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentTalentIndex}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-[30px] font-semibold ml-6 text-green-600 w-[300px]"
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

      {/* Profile Image */}

      <div></div>
      {/* dicription */}

      <div className="flex flex-col items-center mb-9">
        <div className="flex items-center justify-center py-3">
          {/* Background  */}
          <div className="w-full flex flex-col text-gray-400">
            <div className="flex items-center justify-center text-justify">
              <p className="text-[18px] font-semibold">
                I’m a passionate software developer
              </p>
            </div>

            <div className="flex items-center justify-center text-justify">
              <p className="text-[18px] font-semibold">
                I have a solid background in computer science cgfd fhfh
              </p>
            </div>

            <div className="flex items-center justify-center text-justify">
              <p className="text-[18px] font-semibold">
                Clean code and quality work are key values
              </p>
            </div>

            <div className="flex items-center justify-center text-justify">
              <p className="text-[18px] font-semibold">
                I focus on detail and believe
              </p>
            </div>

            <div className="flex items-center justify-center text-justify">
              <p className="text-[18px] font-semibold">
                I’m always learning new
              </p>
            </div>

            <div className="flex items-center justify-center text-justify"></div>
          </div>
        </div>
      </div>
      {/* Links  */}

      <section className="flex flex-row w-[300px] justify-between mb-6">
  <motion.a
    href="https://www.facebook.com/lalith.wijesiri.1"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.4, delay: 0.1 }}
    className="border-2 border-green-900 rounded-full p-1"
  >
    <TiSocialFacebook className="text-[30px] text-gray-200 mx-2 hover:text-blue-600" />
  </motion.a>

  <motion.a
    href="https://github.com/LalithWijesiri"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.4, delay: 0.3 }}
    className="border-2 border-green-900 rounded-full p-1"
  >
    <TiSocialGithub className="text-[30px] text-gray-200 mx-2 hover:text-pink-500" />
  </motion.a>

  <motion.a
    href="https://www.instagram.com/lalith_wijesiri/"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.4, delay: 0.5 }}
    className="border-2 border-green-900 rounded-full p-1"
  >
    <TiSocialInstagram className="text-[30px] text-gray-200 mx-2 hover:text-pink-500" />
  </motion.a>

  <motion.a
    href="https://www.linkedin.com/in/lalith-wijesiri-8a8b4a1b7/"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.4, delay: 0.7 }}
    className="border-2 border-green-900 rounded-full p-1"
  >
    <TiSocialLinkedin className="text-[30px] text-gray-200 mx-2 hover:text-blue-600" />
  </motion.a>
</section>


      


      {/* Profile Image */}

      <div className="relative flex items-center justify-center w-[100px] h-[40px]">
  {/* Animated border layer */}
  <div className="absolute inset-0 bg-border-glow animate-pulse-border blur-lg rounded-md z-0" />

  {/* Button content */}
  
</div>
<section className="flex flex-row w-full mb-6 mt-[50px] justify-center items-center">

<motion.img
  src="/profile.jpg" // replace this later
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

export default HomePage;
