import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Skill() {
  // Animation controls for each section
  const headerControls = useAnimation();
  const frontendControls = useAnimation();
  const backendControls = useAnimation();
  const databaseControls = useAnimation();
  const cloudControls = useAnimation();
  const toolsControls = useAnimation();
  const profileControls = useAnimation();

  // Refs for intersection observer
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [frontendRef, frontendInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [backendRef, backendInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [databaseRef, databaseInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [cloudRef, cloudInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [toolsRef, toolsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [profileRef, profileInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (headerInView) {
      headerControls.start('visible');
    }
    if (frontendInView) {
      frontendControls.start('visible');
    }
    if (backendInView) {
      backendControls.start('visible');
    }
    if (databaseInView) {
      databaseControls.start('visible');
    }
    if (cloudInView) {
      cloudControls.start('visible');
    }
    if (toolsInView) {
      toolsControls.start('visible');
    }
    if (profileInView) {
      profileControls.start('visible');
    }
  }, [
    headerInView, frontendInView, backendInView, databaseInView, 
    cloudInView, toolsInView, profileInView,
    headerControls, frontendControls, backendControls, databaseControls, 
    cloudControls, toolsControls, profileControls
  ]);

  // Slower, smoother animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,  // Lower stiffness for slower animation
        damping: 15,    // Higher damping for smoother animation
        duration: 1.2   // Longer duration for slower animation
      }
    }
  };

  const titleVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconStyle = "w-16 h-16 rounded-lg cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-lg";

  return (
    <div className="font-sans ">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="flex items-center mb-8"
          variants={titleVariants}
          initial="hidden"
          animate={headerControls}
        >
          <h1 className="text-2xl font-bold text-gray-200">My Tech Toolbox</h1>
        </motion.div>

        {/* Frontend Section */}
        <motion.div 
          ref={frontendRef}
          className="mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={frontendControls}
        >
          <motion.h2 variants={titleVariants} className="text-lg font-semibold text-gray-200 mb-4">Frontend</motion.h2>
          <div className="flex flex-wrap gap-3">
            <motion.img variants={itemVariants} src="/Js.svg" alt="JavaScript" title="JavaScript" className={iconStyle} />
            <motion.img variants={itemVariants} src="/typeScript.svg" alt="TypeScript" title="TypeScript" className={iconStyle} />
            <motion.img variants={itemVariants} src="/react.svg" alt="React" title="React" className={iconStyle} />
            <motion.img variants={itemVariants} src="/css.svg" alt="CSS" title="CSS" className={iconStyle} />
            <motion.img variants={itemVariants} src="/html.svg" alt="HTML" title="HTML" className={iconStyle} />
            <motion.img variants={itemVariants} src="/figma.svg" alt="Figma" title="Figma" className={iconStyle} />
          </div>
        </motion.div>

        {/* Backend Section */}
        <motion.div 
          ref={backendRef}
          className="mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={backendControls}
        >
          <motion.h2 variants={titleVariants} className="text-lg font-semibold text-gray-200 mb-4">Backend</motion.h2>
          <div className="flex flex-wrap gap-3">
            <motion.img variants={itemVariants} src="/nodejs.svg" alt="Node.js" title="Node.js" className={iconStyle} />
            <motion.img variants={itemVariants} src="/springboot.svg" alt="Spring" title="Spring" className={iconStyle} />
            <motion.img variants={itemVariants} src="/java.svg" alt="Java" title="Java" className={iconStyle} />
          </div>
        </motion.div>

        {/* Database Section */}
        <motion.div 
          ref={databaseRef}
          className="mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={databaseControls}
        >
          <motion.h2 variants={titleVariants} className="text-lg font-semibold text-gray-200 mb-4">Database</motion.h2>
          <div className="flex flex-wrap gap-3">
            <motion.img variants={itemVariants} src="/mysql.svg" alt="MySQL" title="MySQL" className={iconStyle} />
            <motion.img variants={itemVariants} src="/mongodb.svg" alt="MongoDB" title="MongoDB" className={iconStyle} />
          </div>
        </motion.div>

        {/* Cloud & DevOps Section */}
        <motion.div 
          ref={cloudRef}
          className="mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={cloudControls}
        >
          <motion.h2 variants={titleVariants} className="text-lg font-semibold text-gray-200 mb-4">Cloud & DevOps</motion.h2>
          <div className="flex flex-wrap gap-3">
            <motion.img variants={itemVariants} src="/Docker.svg" alt="Docker" title="Docker" className={iconStyle} />
            <motion.img variants={itemVariants} src="/azure.svg" alt="Azure" title="Azure" className={iconStyle} />
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div 
          ref={toolsRef}
          className="mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={toolsControls}
        >
          <motion.h2 variants={titleVariants} className="text-lg font-semibold text-gray-200 mb-4">Tools</motion.h2>
          <div className="flex flex-wrap gap-3">
            <motion.img variants={itemVariants} src="/postman.svg" alt="Postman" title="Postman" className={iconStyle} />
            <motion.img variants={itemVariants} src="/git.svg" alt="Git" title="Git" className={iconStyle} />
            <motion.img variants={itemVariants} src="/vs.svg" alt="VS Code" title="VS Code" className={iconStyle} />
          </div>
        </motion.div>

        {/* Profile Views */}
        <motion.div 
          ref={profileRef}
          className="flex items-center"
          variants={titleVariants}
          initial="hidden"
          animate={profileControls}
        >
          <div className="bg-gray-700 text-white px-3 py-1 rounded-l-md text-sm">
            Profile views
          </div>
          <div className="bg-blue-500 text-white px-3 py-1 rounded-r-md text-sm">
            73
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skill;