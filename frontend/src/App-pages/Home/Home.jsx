import { useState, useRef, useEffect } from "react";
import Settings from "../Settings/Settings";
import Profile from "../../assets/profile.svg";
import Categories from "./Categories/Categories";
import Details from "./Details/Details";
import SearchIcon from "../../assets/search.png";
import HomeImg from "../../assets/logo.png";

const Home = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsNavbarVisible(window.innerWidth >= 1535);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const menuItems = [
    {
      text: "Support Us",
      icon: "https://duaruqyah.com/assets/settings/support.svg",
      link: "/support",
    },
    {
      text: "Download Dua App",
      icon: "https://duaruqyah.com/assets/settings/download.svg",
      link: "/download-app",
    },
    {
      text: "Privacy Policy",
      icon: "https://duaruqyah.com/assets/settings/privacy.svg",
      link: "/privacy",
    },
    {
      text: "Thanks & Credits",
      icon: "https://duaruqyah.com/assets/settings/credit.svg",
      link: "/credit",
    },
    {
      text: "About Us",
      icon: "https://duaruqyah.com/assets/settings/about.svg",
      link: "/about",
    },
    {
      text: "Copyright Warning",
      icon: "https://duaruqyah.com/assets/settings/copyright.svg",
      link: "/copyright",
    },
    {
      text: "Our Other Projects",
      icon: "https://duaruqyah.com/assets/settings/projects.svg",
      link: "/projects",
    },
  ];

  return (
    <div className="relative font-roboto dark:bg-dark-bg-lite dark:text-dark-text">
      {/* Fixed Header - Lower z-index */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Page Title */}
            <div className="flex items-center">
              <img
                src={HomeImg}
                alt="dua-logo"
                className={`${isNavbarVisible ? "lg:hidden" : "block"}`}
              />
              <p className="text-black font-bold text-3xl ml-3 dark:text-dark-text font-roboto">
                Dua &amp; Ruqyah
              </p>
            </div>

            {/* Right Side Container */}
            <div className="flex items-center gap-6">
              {/* Search Container */}
              <div className="flex flex-row items-center relative">
                <form className="sm-max:w-full" action="">
                  <div className="w-82 sm-max:w-full relative md:mr-6 md:w-72 lg:mr-6">
                    <div className="flex justify-between sm-max:flex-col sm-max:gap-4">
                      <input
                        id="search_box"
                        className="placeholder:text-mute-grey dark:placeholder:text-[#96a2b4] block placeholder: placeholder:text-sm bg-white sm-max:bg-gray-200 md:bg-gray-100 lg:bg-gray-100 w-full rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1  sm:text-sm sm-max:dark:bg-dark-bg-lite md:dark:bg-dark-bg-dark dark:bg-dark-bg dark:placeholder:opacity-[.6] lg:dark:bg-dark-bg-dark "
                        placeholder="Search by Dua Name"
                        type="text"
                        name="search"
                        value=""
                      />
                      <button
                        type="submit"
                        className="flex items-center justify-center bg-gray-100 dark:bg-dark-bg-dark md-min:dark:hover:text-gray-400 dark:text-gray-500 cursor-pointer md-minhover:bg-gray-200 hover:text-gray-500 text-gray-400 px-4 py-[9px] rounded-md md-min:absolute right-1 top-1 sm-max:bg-primary md:bg-white md:dark:bg-dark-bg-lite lg:bg-white lg:dark:bg-dark-bg-lite sm-max:focus:bg-green-700"
                      >
                        <span className="flex items-center sm-max:hidden">
                          <img src={SearchIcon} alt="" className="w-8 h-8" />
                        </span>
                        <p className="hidden sm-max:block sm-max:text-white">
                          Search
                        </p>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Profile and Settings */}
              <div className="flex items-center gap-6">
                <div className="profile-section p-3 cursor-pointer relative">
                  <img
                    src={Profile}
                    alt="Profile"
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-14 h-14 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                  />

                  {/* Dropdown Menu */}
                  {showDropdown && (
                    <div className="absolute left-[117%] w-80 -translate-y-5 max-w-sm -translate-x-full transform px-4 sm:px-0 lg:h-full sm:mt-7">
                      <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative gap-8 bg-white px-6 pt-8 pb-5 dark:bg-dark-bg">
                          {menuItems.map((item, index) => (
                            <a key={index} href={item.link}>
                              <div className="-my-1 -mx-2 flex items-center rounded-2xl transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-dark-bg-dark cursor-pointer">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                  <img
                                    className="w-5"
                                    src={item.icon}
                                    alt={`settings/${item.text.toLowerCase()}`}
                                  />
                                </div>
                                <div>
                                  <p className="text-sm text-title ml-1 dark:text-dark-text">
                                    {item.text}
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={toggleSettings}
                  className="p-3 rounded-full hover:bg-gray-100 transition-all duration-700 ease-in-out transform hover:scale-105"
                  aria-label="Settings"
                >
                  <img
                    src="https://duaruqyah.com/assets/tab/home/settings.svg"
                    alt="Settings"
                    className="w-8 h-8 transition-transform duration-700 ease-in-out"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Spacing */}
      <div className="pt-24">
        {/* Main Content */}
        <div
          className={`grid grid-cols-12 gap-6 transition-all duration-300
          ${isNavbarVisible ? "pl-32" : "pl-4"}`}
        >
          <div className="col-span-4">
            <Categories isNavbarVisible={isNavbarVisible} />
          </div>
          <div className="col-span-8">
            <Details isNavbarVisible={isNavbarVisible} />
          </div>
        </div>
      </div>

      {/* Settings Sidebar */}
      <div
        ref={settingsRef}
        className={`fixed top-0 right-0 h-full w-[380px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[60] ${
          isSettingsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Settings isOpen={isSettingsOpen} onClose={handleSettingsClose} />
      </div>
    </div>
  );
};

export default Home;
