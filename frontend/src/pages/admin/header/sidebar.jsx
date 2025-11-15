import React, { useState } from "react";
import { LayoutDashboard, Users, Calendar, User, LogOut, Settings, GitPullRequest } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Sidebar({ children }) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar navigation */}
      <div className="w-64 bg-gray-800 text-white">
        <SidebarMenu isLoggingOut={isLoggingOut} setIsLoggingOut={setIsLoggingOut} />
      </div>

      {/* Main content */}
      <div className="flex-grow bg-gray-100 p-6">{children}</div>
    </div>
  );
}

function SidebarMenu({ isLoggingOut, setIsLoggingOut }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    localStorage.removeItem('token');
    setIsLoggingOut(false);
    navigate('/');
  };

  return (
    <div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">Solar Rooftop Admin</h2>
      </div>
      <ul className="space-y-2 px-2">
        <SidebarItem
          to="/admin"
          isActive={location.pathname === "/admin"}
          icon={<LayoutDashboard className="mr-2 h-4 w-4" />}
          label="Dashboard"
        />
        <SidebarItem
          to="/consultations"
          isActive={location.pathname === "/consultations"}
          icon={<Calendar className="mr-2 h-4 w-4" />}
          label="Consultations"
        />
        <SidebarItem
          to="/consumers"
          isActive={location.pathname === "/consumers"}
          icon={<Users className="mr-2 h-4 w-4" />}
          label="Consumers"
        />
        <SidebarItem
          to="/adminjoinourteam"
          isActive={location.pathname === "/adminjoinourteam"}
          icon={<GitPullRequest className="mr-2 h-4 w-4" />}
          label="Join Request"
        />
        <SidebarItem
          to="/setting"
          isActive={location.pathname === "/setting"}
          icon={<Settings className="mr-2 h-4 w-4" />}
          label="Setting"
        />
        <li>
          <button
            onClick={handleLogout}
            className={`flex items-center px-4 py-2 rounded-md transition ${
              isLoggingOut ? "bg-gray-700" : "hover:bg-gray-600"
            }`}
          >
            <LogOut className="mr-2 h-4 w-4" />
            {isLoggingOut ? 'Logging Out...' : 'Logout'}
          </button>
        </li>
      </ul>
    </div>
  );
}

function SidebarItem({ to, isActive, icon, label }) {
  return (
    <li>
      <Link
        to={to}
        className={`flex items-center px-4 py-2 rounded-md transition ${
          isActive ? "bg-gray-700" : "hover:bg-gray-600"
        }`}
      >
        {icon}
        {label}
      </Link>
    </li>
  );
}
