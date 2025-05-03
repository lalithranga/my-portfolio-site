function Header({ onProjeectClick }) {
  return (
    <header>
      <div className="flex flex-row items-center justify-center w-full h-[50px] shadow-md mb-[50px] mt-5 ">
        <div className="flex justify-center w-full h-[50px] shadow-md">
          <div className="w-[400px] flex justify-between items-center text-gray-100 ">
            <ul className="flex flex-row w-full justify-between px-6">
              <li className="text-[16px] hover:text-gray-400 hover:underline cursor-pointer">Home</li>
              <li
                className="text-[16px] hover:text-gray-400 hover:underline cursor-pointer"
                onClick={onProjeectClick}
              >
                Projects
              </li>
              <li className="text-[16px] hover:text-gray-400 hover:underline cursor-pointer">Contact</li>
              <li className="text-[16px] hover:text-gray-400 hover:underline cursor-pointer">Code</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
