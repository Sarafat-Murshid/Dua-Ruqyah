import { Outlet } from "react-router-dom";
import Setting from "../App-pages/Settings/Settings";
import Navber from "../App-pages/Navbar/Navbar";
import { useState } from "react";

const Main = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    return (
        <div className="relative grid grid-cols-12 gap-4 p-6 font-serif">
            <div className="col-span-1">
                <Navber onSettingsClick={toggleSettings} />
            </div>
            <div className="col-span-11">
                <Outlet />
            </div>
            
            {/* Settings Sidebar */}
            <div className={`fixed top-0 right-0 h-full transform transition-transform duration-300 ease-in-out ${
                isSettingsOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <Setting isOpen={isSettingsOpen} onClose={toggleSettings} />
            </div>
        </div>
    );
};

export default Main;