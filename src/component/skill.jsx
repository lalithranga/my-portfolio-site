import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skill() {
  const headerControls = useAnimation();
  const frontendControls = useAnimation();
  const backendControls = useAnimation();
  const databaseControls = useAnimation();
  const cloudControls = useAnimation();
  const toolsControls = useAnimation();
  const profileControls = useAnimation();

  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [frontendRef, frontendInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [backendRef, backendInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [databaseRef, databaseInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [cloudRef, cloudInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [toolsRef, toolsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [profileRef, profileInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (headerInView) headerControls.start("visible");
    if (frontendInView) frontendControls.start("visible");
    if (backendInView) backendControls.start("visible");
    if (databaseInView) databaseControls.start("visible");
    if (cloudInView) cloudControls.start("visible");
    if (toolsInView) toolsControls.start("visible");
    if (profileInView) profileControls.start("visible");
  }, [
    headerInView,
    frontendInView,
    backendInView,
    databaseInView,
    cloudInView,
    toolsInView,
    profileInView,
    headerControls,
    frontendControls,
    backendControls,
    databaseControls,
    cloudControls,
    toolsControls,
    profileControls,
  ]);

  return (
    <div className="font-sans">
      <h1 className="text-3xl pb-10 md:text-4xl lg:text-5xl xl:text-5xl font-bold text-center text-transparent bg-gradient-to-r from-[#54ebc3] to-green-600 bg-clip-text">
        My Skills
      </h1>
      <p className="text-sm lg:text-lg text-center text-gray-400 mb-12">
        Here are some of the technologies and tools I work with, along with a
        brief overview of my journey as a Full Stack Developer
      </p>
      <div className="flex flex-col md:flex-row w-full justify-center items-center md:items-start lg:my-[100px]">
        <div className="max-w-3xl lg:mr-[50px] w-full md:px-0 mb-12 md:mb-0">
          <motion.div
            ref={headerRef}
            className="flex items-center mb-8" // ← This "flex" affects child alignment
            variants={titleVariants}
            initial="hidden"
            animate={headerControls}
          >
            <h1 className="text-[19px] lg:text-[21px] font-bold text-gray-200 text-center">
              My Tech Toolbox
            </h1>
          </motion.div>

          <Section
            title="Frontend"
            ref={frontendRef}
            animate={frontendControls}
            icons={[
              "/javaScript.svg",
              "/typeScript.svg",
              "/react.svg",
              "/css.svg",
              "/html.svg",
              "/figma.svg",
            ]}
          />
          <Section
            title="Backend"
            ref={backendRef}
            animate={backendControls}
            icons={["/node.svg", "/springboot.svg", "/java.svg"]}
          />
          <Section
            title="Database"
            ref={databaseRef}
            animate={databaseControls}
            icons={["/mysql.svg", "/mongodb.svg"]}
          />
          <Section
            title="Cloud & DevOps"
            ref={cloudRef}
            animate={cloudControls}
            icons={["/Docker.svg", "/azure.svg"]}
          />
          <Section
            title="Tools"
            ref={toolsRef}
            animate={toolsControls}
            icons={["/postman.svg", "/git.svg", "/vs.svg"]}
          />

          <motion.div
            ref={profileRef}
            className="flex items-center"
            variants={titleVariants}
            initial="hidden"
            animate={profileControls}
          ></motion.div>
        </div>

        <div className=" max-w-xl text-justify w-full md:px-4 lg:px-0">
          <h2 className="text-[19px] text-center lg:text-[22px] font-bold mb-12 text-gray-200 w-fit rounded-md ">
            About me
          </h2>
          <h3 className="text-gray-400 text-[13px] lg:text-[16px] mb-4">
            As a Full Stack Developer, I specialize in building
            high-performance, scalable web applications using modern JavaScript
            technologies and Java. My front-end expertise lies in creating
            dynamic and responsive user interfaces with React, while on the back
            end, I work extensively with Node.js and Spring Boot to develop
            robust APIs and server-side logic. I am proficient in both MongoDB
            and MySQL, ensuring efficient data management for a wide range of
            applications. Through my recent training in the Digital Technology
            Product Solution (NZQA Level 5) program at Mission Ready Institute,
            I have deepened my understanding of agile methodologies, cloud-based
            architectures, and end-to-end product development. I take a
            performance-focused, adaptable, and collaborative approach to every
            project, making me a valuable asset for both front-end and back-end
            development roles.
          </h3>
        </div>
      </div>
    </div>
  );
}

function Section({ title, icons, ref, animate }) {
  return (
    <motion.div
      ref={ref}
      className="mb-8"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      initial="hidden"
      animate={animate}
    >
      <motion.h2
        variants={{
          hidden: { x: 50, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        }}
        className="text-sm lg:text-[16px] font-semibold text-gray-200 mb-6"
      >
        {title}
      </motion.h2>
      <div className="flex flex-wrap gap-3">
        {icons.map((src, index) => (
          <motion.img
            key={index}
            variants={{
              hidden: { x: 100, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  duration: 1.2,
                },
              },
            }}
            src={src}
            alt={src.split("/")[1].split(".")[0]}
            title={src.split("/")[1].split(".")[0]}
            className="w-16 h-16 rounded-lg cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-lg"
          />
        ))}
      </div>
    </motion.div>
  );
}

const titleVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default Skill;
