function Header({ onProjectClick, onSkillClick, onContactClick }) {
  return (
    <header>
      <div className="flex flex-row items-center justify-center w-full h-[50px] shadow-md mb-[50px] mt-5">
        <div className="flex justify-center w-full h-[50px] shadow-md">
          <div className="w-[400px] lg:w-[700px] flex justify-between items-center text-gray-100">
            <ul className="flex flex-row w-full justify-between px-6">
              <li className="text-[16px] lg:text-[25px] hover:text-green-400 hover:underline cursor-pointer">
                Home
              </li>
              <li
                className="text-[16px] lg:text-[25px] hover:text-green-400 hover:underline cursor-pointer"
                onClick={onProjectClick}
              >
                Projects
              </li>
              <li
                className="text-[16px] lg:text-[25px] hover:text-green-400 hover:underline cursor-pointer"
                onClick={onSkillClick}
              >
                Skills
              </li>
              <li
                className="text-[16px] lg:text-[25px] hover:text-green-400 hover:underline cursor-pointer"
                onClick={onContactClick}
              >
                Contact
              </li>
              <li className="text-[16px] lg:text-[25px] hover:text-green-400 hover:underline cursor-pointer">
                Code
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
