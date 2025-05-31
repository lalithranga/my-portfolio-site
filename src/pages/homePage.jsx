import { useRef, useCallback } from "react";
import Header from "../component/header";
import Project from "./projectPage";
import Footer from "../component/footer";
import Skill from "../component/skill";
import ContactMe from "../component/contect";
import HomeContent from "./HomeContent";
import EducationCards from "../component/education";
import "@fontsource/roboto";

// Configuration
const SCROLL_MARGIN_TOP = "scroll-mt-16 md:scroll-mt-28";

const SECTIONS = {
  home: {
    id: "home",
    Component: HomeContent,
    className: "min-h-screen md:min-h-fit md:py-4 md:px-4",
    wrapperClassName: "",
  },
  projects: {
    id: "projects",
    Component: Project,
    className: "min-h-screen md:min-h-fit md:pt-4 mb-28 px-4 mt-16 md:mt-12",
    wrapperClassName: "flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl w-full",
  },
  skills: {
    id: "skills",
    Component: Skill,
    className: "min-h-screen md:min-h-fit px-4",
    wrapperClassName: "max-w-6xl w-full",
  },
  education: {
    id: "education",
    Component: EducationCards,
    className: "min-h-screen md:min-h-fit mt-20 mb-12 px-4",
    wrapperClassName: "flex flex-col items-center justify-center gap-10 max-w-6xl w-full mx-auto",
  },
  contact: {
    id: "contact",
    Component: ContactMe,
    className: "min-h-screen md:min-h-fit py-1 mt-4 md:mt-10 px-4",
    wrapperClassName: "flex flex-col lg:flex-row items-center justify-center max-w-screen-lg mx-auto text-center",
  },
};

const Section = ({ id, Component, className, wrapperClassName, refProp }) => (
  <section
    id={id}
    ref={refProp}
    className={`flex items-center justify-center ${className} ${SCROLL_MARGIN_TOP}`}
  >
    {wrapperClassName ? (
      <div className={wrapperClassName}>
        <Component />
      </div>
    ) : (
      <Component />
    )}
  </section>
);

function HomePage() {
  const refs = {
    header: useRef(null),
    project: useRef(null),
    skill: useRef(null),
    contact: useRef(null),
    education: useRef(null),
  };

  const handleScroll = useCallback((refKey) => {
    refs[refKey].current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const headerProps = {
    onHeaderClick: () => handleScroll("header"),
    onProjectClick: () => handleScroll("project"),
    onSkillClick: () => handleScroll("skill"),
    onContactClick: () => handleScroll("contact"),
    onEducationClick: () => handleScroll("education"),
  };

  return (
    <div className="w-full text-white font-roboto">
      <Header {...headerProps} />

      {Object.entries(SECTIONS).map(([key, section]) => (
        <Section
          key={section.id}
          {...section}
          refProp={refs[key]}
        />
      ))}

      <section className="py-10 flex items-center justify-center">
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
