import { useState } from "react";
import MobileMenu from "./headerMobile";


function Header({ onProjectClick, onSkillClick, onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full  text-gray-300 p-4 relative shadow-md">
      {/* Resume Link */}
      <div className="absolute right-4 top-4 md:top-7 text-[16px] md:text-[18px] lg:text-[20px] hover:text-green-400 border-b-2 border-green-400 cursor-pointer">
        My Resume
      </div>

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
      <div className="hidden md:flex flex-col items-center justify-center">
        <ul className="flex flex-row gap-16 xl:gap-32 mt-4 text-[16px] lg:text-[20px]">
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
          <a
            href="https://github.com/lalithranga/my-portfolio-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="hover:text-green-400 hover:underline cursor-pointer">
              Code
            </li>
          </a>
        </ul>
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
