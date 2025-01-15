import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Language from "../../assets/Langauage.png";
import General from "../../assets/Frame.png";
import SettingsIcon from "../../assets/54-menu-2.png";

const SettingItem = ({ icon, title, isActive }) => (
  <div className="mx-4 my-4">
    <div className="cursor-pointer">
      <div
        className={`flex flex-row w-full rounded-lg ${
          isActive ? "bg-dua-bg" : "bg-dua-bg dark:bg-dark-bg-dark"
        }`}
      >
        <div
          className={`${
            isActive ? "bg-primary" : ""
          } w-1 rounded-tl-lg rounded-bl-lg`}
        ></div>
        <div className="p-2 flex flex-row items-center w-full">
          <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg">
            <img src={icon} alt={title.toLowerCase()} />
          </div>
          <p
            className={`${
              isActive ? "text-primary font-medium" : "text-[#393939]"
            } text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush`}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  </div>
);

SettingItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

SettingItem.defaultProps = {
  isActive: false,
};

const Settings = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState("language");
  const [language, setLanguage] = useState("english");
  const [showArabic, setShowArabic] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [showReference, setShowReference] = useState(true);
  const [translationFontSize, setTranslationFontSize] = useState(14);
  const [arabicFontSize, setArabicFontSize] = useState(14);
  const [arabicScript, setArabicScript] = useState("Uthmani");
  const [arabicFont, setArabicFont] = useState("KFGQ");
  const [darkMode, setDarkMode] = useState(false);
  const settingsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const settingSections = [
    {
      id: "language",
      title: "Language Settings",
      icon: Language,
      content: (
        <div className="py-6 rounded-b-lg">
          <div className="flex flex-row gap-x-3 mx-4 justify-center">
            <button
              onClick={() => setLanguage("english")}
              className={`${
                language === "english"
                  ? "bg-primary text-white"
                  : "bg-white text-[#393939] border border-gray-200"
              } rounded-md w-29 h-10 text-ms xs:w-full sm:w-full transition-colors`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("bangla")}
              className={`${
                language === "bangla"
                  ? "bg-primary text-white"
                  : "bg-white text-[#393939] border border-gray-200"
              } rounded-md w-29 h-10 text-ms xs:w-full sm:w-full transition-colors`}
            >
              বাংলা
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "general",
      title: "General Settings",
      icon: General,
      content: (
        <div className="py-6 rounded-b-lg">
          <div className="space-y-4 mx-4">
            {[
              {
                label: "Show Arabic",
                state: showArabic,
                setState: setShowArabic,
              },
              {
                label: "Show Translation",
                state: showTranslation,
                setState: setShowTranslation,
              },
              {
                label: "Show Transliteration",
                state: showTransliteration,
                setState: setShowTransliteration,
              },
              {
                label: "Show Reference",
                state: showReference,
                setState: setShowReference,
              },
            ].map(({ label, state, setState }) => (
              <div
                key={label}
                className="flex-row gap-x-3 flex text-sm py-1 justify-between text-[#393939] cursor-pointer"
                onClick={() => setState(!state)}
              >
                <p className="style-Kalpurush">{label}</p>
                <div>
                  <div
                    className={`w-5 h-5 flex items-center justify-center rounded-md 
                                 ${
                                   state
                                     ? "bg-primary"
                                     : "border border-gray-200"
                                 } 
                                 transition duration-150 delay-75`}
                  >
                    {state && (
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7L5 11L15 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "font",
      title: "Font Settings",
      icon: SettingsIcon,
      content: (
        <div className="py-6 rounded-b-lg">
          <div className="space-y-6 mx-4">
            {/* Translation Font Size */}
            <div>
              <p className="text-[#393939] mb-2">Translation Font Size</p>
              <div className="mb-2 gap-3 w-full grid grid-cols-[86%,1fr] place-items-center">
                <input
                  type="range"
                  min="14"
                  max="25"
                  value={translationFontSize}
                  onChange={(e) => setTranslationFontSize(e.target.value)}
                  className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-0"
                  style={{
                    background: `linear-gradient(to right, #1FA45B ${
                      ((translationFontSize - 14) / 11) * 100
                    }%, white ${((translationFontSize - 14) / 11) * 100}%)`,
                  }}
                />
                <div className="text-[#393939] mb-2">{translationFontSize}</div>
              </div>
            </div>

            {/* Select Arabic Script */}
            <div>
              <p className="text-[#393939] mb-2">Select Arabic Script</p>
              <select
                value={arabicScript}
                onChange={(e) => setArabicScript(e.target.value)}
                className="w-full p-2 text-[#393939] rounded-md border border-gray-200 focus:outline-none focus:border-primary bg-white"
              >
                <option value="Uthmani">Uthmani</option>
                <option value="Indopak">Indopak</option>
              </select>
            </div>

            {/* Arabic Font */}
            <div>
              <p className="text-[#393939] mb-2">Arabic Font</p>
              <select
                value={arabicFont}
                onChange={(e) => setArabicFont(e.target.value)}
                className="w-full p-2 text-[#393939] rounded-md border border-gray-200 focus:outline-none focus:border-primary bg-white"
              >
                <option value="KFGQ">KFGQ</option>
                <option value="Me Quran">Me Quran</option>
                <option value="Al Mushaf">Al Mushaf</option>
                <option value="Amiri Quran">Amiri Quran</option>
              </select>
            </div>

            {/* Arabic Font Size */}
            <div>
              <p className="text-[#393939] mb-2">Arabic Font Size</p>
              <div className="mb-2 gap-3 w-full grid grid-cols-[86%,1fr] place-items-center">
                <input
                  type="range"
                  min="14"
                  max="25"
                  value={arabicFontSize}
                  onChange={(e) => setArabicFontSize(e.target.value)}
                  className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-0"
                  style={{
                    background: `linear-gradient(to right, #1FA45B ${
                      ((arabicFontSize - 14) / 11) * 100
                    }%, white ${((arabicFontSize - 14) / 11) * 100}%)`,
                  }}
                />
                <div className="text-[#393939] mb-2">{arabicFontSize}</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "appearance",
      title: "Appearance Settings",
      icon: SettingsIcon,
      content: (
        <div className="py-6 rounded-b-lg">
          <div className="space-y-6 mx-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#393939] mb-1">Night Mode</p>
                <p className="text-xs text-[#393939]">Turn on Night Mode</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
      ),
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Settings Panel */}
      <div
        ref={settingsRef}
        className={`fixed top-0 right-0 rounded-3xl bg-white dark:bg-dark-bg w-[380px] h-screen shadow-lg z-50 delay-400 duration-500 ease-in-out transition-all transform  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h1 className="text-center text-xl py-4 text-[#393939] mb-2">
          Settings
        </h1>
        <div className="grid grid-flow-row gap-4 px-4">
          {settingSections.map((section) => (
            <div
              key={section.id}
              className="cursor-pointer text-[#393939] mb-2"
            >
              <div className="flex">
                <div
                  className={`${
                    activeSection === section.id ? "bg-primary" : ""
                  } w-1 rounded-tl-lg rounded-bl-lg`}
                ></div>
                <div
                  onClick={() =>
                    setActiveSection(
                      activeSection === section.id ? null : section.id
                    )
                  }
                  className={`flex items-center gap-2 p-3 rounded-tr-lg rounded-br-lg w-full ${
                    activeSection === section.id
                      ? "bg-green-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <img src={section.icon} alt="" className="w-6 h-6" />
                  <h2 className="font-medium">{section.title}</h2>
                </div>
              </div>
              {activeSection === section.id && section.content && (
                <div className="mt-2 pl-8">{section.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          {settingSections.map((section) => (
            <div key={section.id}>
              <div
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center p-4 cursor-pointer ${
                  activeSection === section.id ? "bg-dua-bg" : ""
                }`}
              >
                <div
                  className={`flex items-center space-x-3 ${
                    activeSection === section.id
                      ? "text-primary"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  <img
                    src={section.icon}
                    alt=""
                    className={`w-6 h-6 ${
                      activeSection === section.id ? "filter-primary" : ""
                    }`}
                    style={{
                      filter:
                        activeSection === section.id
                          ? "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)"
                          : "none",
                    }}
                  />
                  <h2
                    className={`font-medium ${
                      activeSection === section.id ? "text-primary" : ""
                    }`}
                  >
                    {section.title}
                  </h2>
                </div>
              </div>
              {activeSection === section.id && section.content && (
                <div className="mt-2 pl-8">{section.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Settings.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

Settings.defaultProps = {
  isOpen: false,
  onClose: () => {},
};

export default Settings;
