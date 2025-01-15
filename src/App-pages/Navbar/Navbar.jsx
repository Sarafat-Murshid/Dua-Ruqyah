import { CiBookmark, CiHome } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";

import { Link } from "react-router-dom";
import HomeImg from "../../assets/logo.png";
import support from "../../assets/I want to support.png";

const Navbar = () => {
  return (
    <div className="row-span-full hidden [min-width:1500px]:block xl:z-[-1] 2xl:block 2xl:z-[-1] 3xl:block 3xl:z-[-16]">
      <div
        id="left-bar"
        className="w-[100px] flex flex-col gap-y-5 fixed overflow-hidden"
      >
        <div className="bg-white rounded-3xl px-4 dark:bg-dark-bg lg:h-[calc(93vh)] xl:h-[94vh] 2xl:h-[93vh] 3xl:h-[93vh] scrl-left pb-16">
          <Link to="/" className="block mb-4">
            <img src={HomeImg} alt="" className="w-full" />
          </Link>
          <div className="flex flex-col gap-6 text-3xl items-center py-36">
            <Link
              to="/"
              className="p-3 rounded-full bg-gray-100 hover:scale-125 transition-transform duration-200"
            >
              <CiHome className="text-4xl text-gray-900" />
            </Link>
            <Link
              to="/dashboard"
              className="p-3 rounded-full bg-gray-100 hover:scale-125 transition-transform duration-200"
            >
              <RxDashboard className="text-4xl text-gray-900" />
            </Link>
            <Link
              to="/lightbulb"
              className="p-3 rounded-full bg-gray-100 hover:scale-125 transition-transform duration-200"
            >
              <FaRegLightbulb className="text-4xl text-gray-900" />
            </Link>
            <Link
              to="/bookmark"
              className="p-3 rounded-full bg-gray-100 hover:scale-125 transition-transform duration-200"
            >
              <CiBookmark className="text-4xl text-gray-900" />
            </Link>
            <Link
              to="/messagessquar"
              className="p-3 rounded-full bg-gray-100 hover:scale-125 transition-transform duration-200"
            >
              <LuMessagesSquare className="text-4xl text-gray-900" />
            </Link>
            <Link
              to="/bookoutline"
              className="p-3 rounded-full bg-gray-100 hover:scale-125 transition-transform duration-200"
            >
              <IoBookOutline className="text-4xl text-gray-900" />
            </Link>
          </div>
          <Link to="/" className="block mt-4">
            <img src={support} alt="" className="w-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
