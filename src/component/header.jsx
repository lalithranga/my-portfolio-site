import { useState } from "react";
import MobileMenu from "./headerMobile";
import { TbBrandGithub } from "react-icons/tb";


function Header({ onProjectClick, onSkillClick, onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full text-gray-300 p-4 relative shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center flex-1 relative w-full">
          <div>
            <ul className="flex flex-row gap-16 lg:gap-24 xl:gap-32 mt-4 text-[16px] lg:text-[20px]">
              <li className="hover:text-green-400 hover:underline cursor-pointer">
                Home
              </li>
              <li
                className="hover:text-green-400 hover:underline cursor-pointer"
                onClick={onProjectClick}
              >
                Projects
              </li>
              <li
                className="hover:text-green-400 hover:underline cursor-pointer"
                onClick={onSkillClick}
              >
                Skills
              </li>
              <li
                className="hover:text-green-400 hover:underline cursor-pointer"
                onClick={onContactClick}
              >
                Contact
              </li>
            </ul>
          </div>
          <div className="absolute flex flex-row items-center justify-center right-1 text-[14px] md:text-[15px] lg:text-[16px] gap-8 mt-4 cursor-pointer">
            {/* GitHub Icon in a circle */}
            <a
              href="https://github.com/lalithranga/my-portfolio-site"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:text-blue-500 hover:underline hover:border-blue-500 transition-all"
            >
              <TbBrandGithub size={22} />
            </a>

            {/* Address Book Icon in a circle */}
           

            {/* CV Download Button */}
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

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <MobileMenu
          onProjectClick={onProjectClick}
          onSkillClick={onSkillClick}
          onContactClick={onContactClick}
          closeMenu={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;
