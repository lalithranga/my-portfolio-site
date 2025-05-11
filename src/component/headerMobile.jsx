import { useEffect } from "react";

function MobileMenu({ onProjectClick, onSkillClick, onContactClick, closeMenu }) {
  // Step 2: auto-close menu on scroll
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
        <a
          href="https://github.com/lalithranga/my-portfolio-site"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          <li className="hover:text-green-400 cursor-pointer">Code</li>
        </a>
      </ul>
    </div>
  );
}

export default MobileMenu;
