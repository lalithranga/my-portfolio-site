import { AnimatePresence, motion } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { TbBrandGithub } from "react-icons/tb";
import {
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

function HomeContent() {
  const talents = ["Software Developer", "Web Developer", "Freelancer"];
  const [currentTalentIndex, setCurrentTalentIndex] = useState(0);
  const projectRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTalentIndex((prev) => (prev + 1) % talents.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const typingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: "auto", transition: { duration: 0.1 } },
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:my-24 lg:my-20 mt-14 ">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[26px] font-extrabold text-gray-500 lg:text-[40px] lg:my-6">
          Hello, it's me
        </h1>
        <p className="text-[30px] lg:text-[35px] mb-2 font-extrabold font-roboto text-gray-200">
          Lalith Wijesiri
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full mx-auto gap-y-3 lg:gap-y-0">
  <p className="text-[20px] lg:text-[25px] w-full lg:w-[100px] text-center lg:ml-[100px] lg:mr-4">
    And I'm
  </p>

  <AnimatePresence mode="wait">
   <motion.p
  key={currentTalentIndex}
  variants={typingVariants}
  initial="hidden"
  animate="visible"
  exit="hidden"
  className="text-[25px] lg:text-[31px] font-semibold w-full lg:w-[400px] text-center lg:text-left
             bg-gradient-to-r from-[#54ebc3] to-[#36c8f4] bg-clip-text text-transparent"
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
          <div className="w-full flex flex-col text-gray-400 gap-2">
            {[
              "I’m a passionate software developer",
              "I have a solid background in computer science ",
              "Clean code and quality work are key values for me",
              "I’m a team player and love to collaborate",
              "I focus on detail and believe",
              "I’m always learning new",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center justify-center text-center">
                <p className="text-[17px] lg:text-[20px] font-extrabold px-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <section className="flex w-full justify-center items-center mb-6 px-4">
        <div className="flex flex-wrap justify-center gap-10 lg:gap-20 w-full max-w-[600px]">
          {[
            {
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
              className={`border-4 border-green-900 rounded-full p-2 text-[20px] lg:text-[30px] text-gray-200 ${hover}`}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </section>

      {/* Profile Image */}
      <section className="flex flex-col items-center justify-center mt-10 lg:mt-[150px] px-4">
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full border-2 border-green-900 object-cover shadow-lg"
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
