import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";
import { GlobalContext } from "../context/context";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const { showSideBar, setShowSideBar } = useContext(GlobalContext);

  const toggleSideBar = () => {
    setShowSideBar((prev) => !prev);
  };
  const navigate = useNavigate();
  const handleClick = () => { 
    navigate("/");
  };

  return (
    <header className="bg-black text-white p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center justify-start space-x-4">
          <FaBars
            onClick={toggleSideBar}
            className="text-white cursor-pointer "
            size={24}
          />
          <img
            onClick={() => handleClick()}
            src="https://imgs.search.brave.com/3drONenldx-Q6uAxHypy3k_rhof_qIfwKHwEpGQ3tpE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzE5/NS9QTkcvOTYvWW91/VHViZV8yMzM5Mi5w/bmc"
            alt="YouTube Logo"
            className="h-8 w-auto flex-shrink-0 hover:cursor-pointer"
          />
          <h1 onClick={() => handleClick()} className="text-xl font-bold hover:cursor-pointer">
            Youtube
          </h1>
        </div>

        {/* Center section */}
        <div className="flex-grow flex justify-center md:justify-center lg:justify-start">
          <Search />
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile Picture"
            className="h-8 w-8 rounded-full cursor-pointer"
          />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`sidebar fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${
          showSideBar ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ marginTop: "4rem" }}
      >
        <SideBar />
      </div>
    </header>
  );
};

export default Headers;
