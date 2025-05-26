import { useRef } from "react";
import Header from "../component/header";
import Project from "./projectPage";
import Footer from "../component/footer";
import Skill from "../component/skill";
import ContactMe from "../component/contect";
import HomeContent from "./HomeContent";
import EducationCards from "../component/education";
import "@fontsource/roboto";

// Keep scroll-mt responsive: 64px (mobile), 112px (desktop)
const SCROLL_MARGIN_TOP = "scroll-mt-16 md:scroll-mt-28";

function HomePage() {
  const headerRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);
  const educationRef = useRef(null);

  const handleHeaderClick = () => {
    headerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectClick = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSkillClick = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEducationClick = () => {
    educationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full text-white font-roboto">
      <Header
        onHeaderClick={handleHeaderClick}
        onProjectClick={handleProjectClick}
        onSkillClick={handleSkillClick}
        onContactClick={handleContactClick}
        onEducationClick={handleEducationClick}
      />

      {/* Home Section */}
      <section
        id="home"
        ref={headerRef}
        className={`min-h-screen md:min-h-fit md:py-4 md:px-4 flex items-center justify-center ${SCROLL_MARGIN_TOP}`}
      >
        <HomeContent />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectRef}
        className={`min-h-screen md:min-h-fit md:pt-4 mb-28 px-4 flex items-center justify-center ${SCROLL_MARGIN_TOP}`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl w-full">
          <Project />
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillRef}
        className={`min-h-screen md:min-h-fit px-4 flex items-center justify-center ${SCROLL_MARGIN_TOP}`}
      >
        <div className="max-w-6xl w-full">
          <Skill />
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        ref={educationRef}
        className={`min-h-screen md:min-h-fit mt-20 mb-12 px-4 flex flex-col items-center justify-center gap-10 max-w-6xl w-full mx-auto ${SCROLL_MARGIN_TOP}`}
      >
        <EducationCards />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className={`min-h-screen md:min-h-fit py-1 mt-4 md:mt-10 px-4 flex flex-col lg:flex-row items-center justify-center max-w-screen-lg mx-auto text-center ${SCROLL_MARGIN_TOP}`}
      >
        <ContactMe />
      </section>

      {/* Footer */}
      <section className="py-10 flex items-center justify-center">
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
