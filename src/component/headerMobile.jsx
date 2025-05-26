import { useEffect } from "react";

function MobileMenu({
  onProjectClick,
  onSkillClick,
  onContactClick,
  onEducationClick,
  closeMenu,
  activeSection,
}) {
  useEffect(() => {
    const handleScroll = () => closeMenu();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [closeMenu]);

  const getNavItemClass = (section) =>
    `cursor-pointer text-lg transition-all duration-300 ${
      activeSection === section
        ? 'bg-gradient-to-r from-[#54ebc3] to-[#36c8f4] bg-clip-text text-transparent underline underline-offset-4'
        : 'hover:bg-gradient-to-r hover:from-[#54ebc3] hover:to-[#36c8f4] hover:bg-clip-text hover:text-transparent hover:underline hover:underline-offset-4'
    }`;

  return (
    <div className="fixed top-[60px] pt-10 left-0 right-0 z-50 bg-black bg-opacity-95 text-gray-300 px-8 py- md:hidden animate-slide-down">
      <ul className="flex flex-col gap-6 text-[18px]">
        <li className={getNavItemClass('home')} onClick={closeMenu}>
          Home
        </li>
        <li
          className={getNavItemClass('projects')}
          onClick={() => {
            onProjectClick();
            closeMenu();
          }}
        >
          Projects
        </li>
        <li
          className={getNavItemClass('skills')}
          onClick={() => {
            onSkillClick();
            closeMenu();
          }}
        >
          Skills
        </li>
        <li
          className={getNavItemClass('education')}
          onClick={() => {
            onEducationClick();
            closeMenu();
          }}
        >
          Education
        </li>
        <li
          className={getNavItemClass('contact')}
          onClick={() => {
            onContactClick();
            closeMenu();
          }}
        >
          Contact
        </li>
      </ul>

      {/* Divider */}
      <hr className="my-6 border-gray-600" />

      {/* Code & Resume Buttons */}
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/lalithranga/my-portfolio-site"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full border border-gray-400 hover:text-blue-400 hover:border-blue-400 transition-all"
        >
          Code
        </a>

        <a
          href="/cv.pdf"
          download
          className="px-4 py-2 rounded-full border border-gray-400 hover:text-blue-400 hover:border-blue-400 transition-all"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;
