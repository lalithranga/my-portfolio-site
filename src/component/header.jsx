import { useState, useEffect } from "react";
import MobileMenu from "./headerMobile";
import { TbBrandGithub } from "react-icons/tb";

// Navigation items configuration
const navItems = [
  { id: 'home', label: 'Home', onClick: 'onHeaderClick' },
  { id: 'projects', label: 'Projects', onClick: 'onProjectClick' },
  { id: 'skills', label: 'Skills', onClick: 'onSkillClick' },
  { id: 'contact', label: 'Contact', onClick: 'onContactClick' },
  { id: 'education', label: 'Education', onClick: 'onEducationClick' }
];

// Social links configuration
const socialLinks = [
  {
    href: "https://github.com/lalithranga/my-portfolio-site",
    icon: <TbBrandGithub size={22} />,
    label: "GitHub"
  },
  {
    href: "/cv.pdf",
    icon: <span className="text-sm font-semibold">CV</span>,
    label: "Download CV",
    download: true
  }
];

const NavItem = ({ id, label, isActive, onClick }) => (
  <li
    className={`cursor-pointer transition-all duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-[#54ebc3] to-[#36c8f4] bg-clip-text text-transparent underline underline-offset-4'
        : 'hover:bg-gradient-to-r hover:from-[#54ebc3] hover:to-[#36c8f4] hover:bg-clip-text hover:text-transparent hover:underline hover:underline-offset-4'
    }`}
    onClick={onClick}
  >
    {label}
  </li>
);

const SocialIcon = ({ href, icon, label, download }) => (
  <a
    href={href}
    target={download ? "_self" : "_blank"}
    rel={download ? "" : "noopener noreferrer"}
    download={download}
    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:text-blue-500 hover:underline hover:border-blue-500 transition-all"
    title={label}
  >
    {icon}
  </a>
);

function Header({ onProjectClick, onSkillClick, onContactClick, onEducationClick, onHeaderClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
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

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (section, clickHandler) => {
    setActiveSection(section);
    clickHandler();
  };

  const clickHandlers = {
    onHeaderClick,
    onProjectClick,
    onSkillClick,
    onContactClick,
    onEducationClick
  };

  return (
    <header className="w-full text-gray-300 relative shadow-md px-4">
      <div className="fixed max-w-6xl mx-auto flex items-center justify-between w-full z-20 bg-black bg-opacity-90 px-4 h-[60px]">
        <div className="md:hidden flex items-center">
          <button
            className="text-3xl text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className="fixed top-0 left-0 w-full bg-black bg-opacity-95 z-10">
          <div className="hidden md:flex items-center justify-center relative w-full py-4">
            <div>
              <ul className="flex flex-row gap-10 lg:gap-16 xl:gap-20 mt-4 text-[16px] lg:text-[20px]">
                {navItems.map(({ id, label, onClick }) => (
                  <NavItem
                    key={id}
                    id={id}
                    label={label}
                    isActive={activeSection === id}
                    onClick={() => handleNavClick(id, clickHandlers[onClick])}
                  />
                ))}
              </ul>
            </div>

            <div className="absolute md:right-4 lg:right-12 xl:right-20 flex flex-row items-center gap-8 mt-4">
              {socialLinks.map((link, index) => (
                <SocialIcon key={index} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <MobileMenu
          onProjectClick={() => handleNavClick('projects', onProjectClick)}
          onSkillClick={() => handleNavClick('skills', onSkillClick)}
          onContactClick={() => handleNavClick('contact', onContactClick)}
          onEducationClick={() => handleNavClick('education', onEducationClick)}
          closeMenu={() => setMenuOpen(false)}
          activeSection={activeSection}
        />
      )}
    </header>
  );
}

export default Header;