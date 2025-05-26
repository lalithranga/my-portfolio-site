import { useState, useEffect } from "react";
import MobileMenu from "./headerMobile";
import { TbBrandGithub } from "react-icons/tb";

function Header({
  onProjectClick,
  onSkillClick,
  onContactClick,
  onEducationClick,
  onHeaderClick,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));
    
    return () => observer.disconnect();
  }, []);

  const getNavItemClass = (section) =>
    `cursor-pointer transition-all duration-300 ${
      activeSection === section
        ? 'bg-gradient-to-r from-[#54ebc3] to-[#36c8f4] bg-clip-text text-transparent underline underline-offset-4'
        : 'hover:bg-gradient-to-r hover:from-[#54ebc3] hover:to-[#36c8f4] hover:bg-clip-text hover:text-transparent hover:underline hover:underline-offset-4'
    }`;

  const handleNavClick = (section, clickHandler) => {
    setActiveSection(section);
    clickHandler();
  };

  return (
    <header className="w-full text-gray-300 relative shadow-md px-4">
      <div className="fixed max-w-6xl mx-auto flex items-center justify-between w-full z-20 bg-black bg-opacity-90 px-4 h-[60px]">
        
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="text-3xl text-gray-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="fixed top-0 left-0 w-full bg-black bg-opacity-95 z-10">
          <div className="hidden md:flex items-center justify-center relative w-full py-4">
            <div>
              <ul className="flex flex-row gap-10 lg:gap-16 xl:gap-20 mt-4 text-[16px] lg:text-[20px]">
                <li 
                  className={getNavItemClass('home')} 
                  onClick={() => handleNavClick('home', onHeaderClick)}
                >
                  Home
                </li>
                <li 
                  className={getNavItemClass('projects')} 
                  onClick={() => handleNavClick('projects', onProjectClick)}
                >
                  Projects
                </li>
                <li 
                  className={getNavItemClass('skills')} 
                  onClick={() => handleNavClick('skills', onSkillClick)}
                >
                  Skills
                </li>
                <li 
                  className={getNavItemClass('contact')} 
                  onClick={() => handleNavClick('contact', onContactClick)}
                >
                  Contact
                </li>
                <li 
                  className={getNavItemClass('education')} 
                  onClick={() => handleNavClick('education', onEducationClick)}
                >
                  Education
                </li>
              </ul>
            </div>

            {/* Right Side Icons */}
            <div className="absolute md:right-4 lg:right-12 xl:right-20 flex flex-row items-center gap-8 mt-4">
              <a
                href="https://github.com/lalithranga/my-portfolio-site"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:text-blue-500 hover:underline hover:border-blue-500 transition-all"
              >
                <TbBrandGithub size={22} />
              </a>
              <a
                href="/cv.pdf"
                download
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:text-blue-500 hover:underline hover:border-blue-500 transition-all"
                title="Download CV"
              >
                <span className="text-sm font-semibold">CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <MobileMenu
          onProjectClick={() => {
            handleNavClick('projects', onProjectClick);
            setMenuOpen(false);
          }}
          onSkillClick={() => {
            handleNavClick('skills', onSkillClick);
            setMenuOpen(false);
          }}
          onContactClick={() => {
            handleNavClick('contact', onContactClick);
            setMenuOpen(false);
          }}
          onEducationClick={() => {
            handleNavClick('education', onEducationClick);
            setMenuOpen(false);
          }}
          closeMenu={() => setMenuOpen(false)}
          activeSection={activeSection}
        />
      )}
    </header>
  );
}

export default Header;