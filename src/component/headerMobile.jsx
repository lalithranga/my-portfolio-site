import { useEffect } from "react";

function MobileMenu({ onProjectClick, onSkillClick, onContactClick, closeMenu }) {
  useEffect(() => {
    const handleScroll = () => closeMenu();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [closeMenu]);

  return (
    <div className="fixed top-[60px] left-6 right-0 z-50 bg-gray-800 text-gray-300 p-4 gap-4 animate-slide-down flex flex-col md:hidden text-[18px]">
      <ul className="list-none flex flex-col gap-4">
        <li className="hover:text-green-400 cursor-pointer" onClick={closeMenu}>
          Home
        </li>
        <li
          className="hover:text-green-400 cursor-pointer"
          onClick={() => {
            onProjectClick();
            closeMenu();
          }}
        >
          Projects
        </li>
        <li
          className="hover:text-green-400 cursor-pointer"
          onClick={() => {
            onSkillClick();
            closeMenu();
          }}
        >
          Skills
        </li>
        <li
          className="hover:text-green-400 cursor-pointer"
          onClick={() => {
            onContactClick();
            closeMenu();
          }}
        >
          Contact
        </li>
      </ul>

      {/* Code & Resume Links */}
      <div className="mt-6 flex justify-center gap-6 text-sm">
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
