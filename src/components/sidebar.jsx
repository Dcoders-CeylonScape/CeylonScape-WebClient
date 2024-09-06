import * as React from 'react';
import { useLocation } from 'react-router-dom';
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from '@mui/icons-material/Assignment';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import Logo2 from '../assets/images/logo.png';
import User from '../assets/images/prof.jpg';

function Sidebar() {
  const location = useLocation();

  // Function to check if the path is active based on the beginning of the pathname
  const isActive = (path) => location.pathname.startsWith(path);

  const redirectDashoard = () => {
    window.location.href = '/officer';
  }

    const redirectPendingApplications = () => {
        window.location.href = '/officer/pending-applications';
    }

    const redirectAllApplications = () => {
        window.location.href = '/officer/all-applications';
    }

  return (
    <div className="flex flex-col justify-between min-h-[95vh] w-[300px] bg-white border-r border-blue-300 fixed p-5">
      <div className="flex items-center ml-8">
        <img src={Logo2} alt="Ceylonscapes Logo" className="w-[140px] h-auto mb-3" />
      </div>
      <hr className="border-gray-300" />
      <div className="flex-1 px-4">
        <ul className="list-none m-0 p-0">
          <li className={`flex items-center p-4 mt-2 mb-3 cursor-pointer rounded-lg transition duration-300 ${isActive('/officer') && location.pathname === '/officer' ? 'bg-primary_pri10' : 'hover:bg-primary_pri10'}`}>
            <DashboardIcon className="text-primary_pri50 text-lg" />
            <span className="ml-4 text-primary_pri50 font-semibold text-base" onClick={redirectDashoard}>Dashboard</span>
          </li>
          <li className={`flex items-center p-4 mb-3 cursor-pointer rounded-lg transition duration-300 ${isActive('/officer/pending') ? 'bg-primary_pri10' : 'hover:bg-primary_pri10'}`}>
            <AssignmentIcon className="text-gray-700 text-lg" />
            <span className="ml-4 text-gray-700 font-semibold text-base" onClick={redirectPendingApplications}>Pending Applications</span>
          </li>
           <li className={`flex items-center p-4 mb-3 cursor-pointer rounded-lg transition duration-300 ${isActive('/officer/pending') ? 'bg-primary_pri10' : 'hover:bg-primary_pri10'}`}>
            <AssignmentIcon className="text-gray-700 text-lg" />
            <span className="ml-4 text-gray-700 font-semibold text-base" onClick={redirectAllApplications}>All Applications</span>
          </li>
          <li className={`flex items-center p-4 mb-3 cursor-pointer rounded-lg transition duration-300 ${isActive('/officer/risks') ? 'bg-primary_pri10' : 'hover:bg-primary_pri10'}`}>
            <WarningAmberIcon className="text-gray-700 text-lg" />
            <span className="ml-4 text-gray-700 font-semibold text-base" >Risk Alerts</span>
          </li>
        </ul>
      </div>
      <div className="px-4">
        <ul className="list-none m-0 p-0">
          <li className={`flex items-center p-4 mb-3 cursor-pointer rounded-lg transition duration-300 ${isActive('/officer/settings') ? 'bg-primary_pri10' : 'hover:bg-primary_pri10'}`}>
            <SettingsApplicationsIcon className="text-gray-700 text-lg" />
            <span className="ml-4 text-gray-700 font-semibold text-base">Settings</span>
          </li>
          <li className="flex items-center p-4 mb-3 cursor-pointer rounded-lg transition duration-300 hover:bg-primary_pri10">
            <ExitToAppIcon className="text-gray-700 text-lg" />
            <span className="ml-4 text-gray-700 font-semibold text-base">Logout</span>
          </li>
        </ul>
        <div className="flex items-center py-3 mt-5">
          <img src={User} alt="Profile" className="w-10 h-10 rounded-full mr-2.5" />
          <div>
            <span className="block text-gray-700 text-sm font-normal">Micheal</span>
            <span className="block text-gray-700 text-sm font-normal">michaelsmith12@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
