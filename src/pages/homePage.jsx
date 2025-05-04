import Header from "../component/header";
import Project from "./projectPage";
import Footer from "../component/footer";
import Skill from "../component/skill";
import ContactMe from "../component/contect";
import ScatterText from "../component/playing";
import "@fontsource/roboto";
import HomeContent from "./HomeContent";
import { useRef } from "react";

function HomePage() {
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);

  const handleProjectClick = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSkillClick = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <Header
        onProjectClick={handleProjectClick}
        onSkillClick={handleSkillClick}
        onContactClick={handleContactClick}
      />

      <div>
        <HomeContent />
      </div>

      {/* Project Section */}
      <section ref={projectRef} className="flex items-center justify-center px-4 py-[100px]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl w-full">
          <Project />
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillRef}>
        <Skill />
      </section>

      {/* Contact Me Section */}
      <section ref={contactRef} className="flex flex-col lg:flex-row w-full justify-evenly mx-auto my-[70px]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <ScatterText />
        </div>
        <div className="w-full lg:w-1/2 max-w-xl text-[15px] text-justify mt-5 lg:mt-0">
          <ContactMe />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mt-10 mb-10">
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
