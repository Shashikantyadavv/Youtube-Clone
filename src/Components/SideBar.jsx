import {
  FaHome,
  FaFire,
  FaSignInAlt,
  FaUser,
  FaCompass,
  FaShoppingBag,
  FaMusic,
  FaFilm,
  FaWifi,
  FaGamepad,
  FaNewspaper,
  FaBook,
  FaTshirt,
  FaPodcast,
  FaHistory as FaHistoryAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/context";
import { useDispatch, useSelector } from "react-redux";
import { Login, LogOut } from "../redux/actions/Auth.action";
import { useNavigate } from "react-router-dom";


const SideBar = () => {
  const { showSideBar, setShowSideBar } = useContext(GlobalContext);
  const [isVisible, setIsVisible] = useState(showSideBar);
  const { accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(Login());
  };

  const handleLogOut = () => {
    dispatch(LogOut());
  };

  useEffect(() => {
    setIsVisible(showSideBar);
  }, [showSideBar, accessToken]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 h-full w-64 mt-16 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto z-[9999]">
      <nav className="flex-1">
        <ul
          className="space-y-4"
          onClick={() => setShowSideBar((prev) => !prev)}
        >
          {/* Main Links */}
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer" onClick={() => navigate('/')}>
            <FaHome className="mr-3" />
            Home
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer" onClick={() => navigate('/channel/10')}>
            <FaFilm className="mr-3" />
            Shorts
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <FaUser className="mr-3" />
            Subscriptions
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <FaUser className="mr-3" />
            You
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <FaHistoryAlt className="mr-3" />
            History
          </li>

          <hr className="border-t border-white my-4" />
          {accessToken ? (
            <>
              <li className="px-4 pt-4 pb-2 text-sm text-gray-400">
                Give Your Eyes Some Rest
              </li>
              <li
                onClick={() => handleLogOut()}
                className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer"
              >
                <FaSignInAlt className="mr-3" />
                Sign Out
              </li>
            </>
          ) : (
            <>
              <li className="px-4 pt-4 pb-2 text-sm text-gray-400">
                Sign in to like videos, comment, and subscribe.
              </li>
              <li
                onClick={() => handleLogin()}
                className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer"
              >
                <FaSignInAlt className="mr-3" />
                Sign in
              </li>
            </>
          )}

          <hr className="border-t border-white my-4" />

          {/* Explore Section */}
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <FaCompass className="mr-3" />
            Explore
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <FaFire className="mr-3" />
            Trending
          </li>

          {/* More Sections */}
          <hr className="border-t border-white my-4" />
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <FaShoppingBag className="mr-3" />
            Shopping
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <FaMusic className="mr-3" />
            Music
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <FaFilm className="mr-3" />
            Movies
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <FaWifi className="mr-3" />
            Live
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <FaGamepad className="mr-3" />
            Gaming
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <FaNewspaper className="mr-3" />
            News
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <FaBook className="mr-3" />
            Courses
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <FaTshirt className="mr-3" />
            Fashion & Beauty
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <FaPodcast className="mr-3" />
            Podcasts
          </li>
          {/* <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaEllipsisH className="mr-3" />
            More from YouTube
          </li>

          YouTube Services
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaYoutube className="mr-3" />
            YouTube Premium
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaMusicAlt className="mr-3" />
            YouTube Music
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaChild className="mr-3" />
            YouTube Kids
          </li>

          
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaCog className="mr-3" />
            Settings
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaHistoryAlt className="mr-3" />
            Report history
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaQuestionCircle className="mr-3" />
            Help
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaCommentAlt className="mr-3" />
            Send feedback
          </li> */}
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaInfoCircle className="mr-3" />
            About
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
