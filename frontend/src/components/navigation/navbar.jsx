import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Headroom from "react-headroom";
import MainNav from "./mainnav";
import { fetchUserDetails } from "@/utils/auth";
import toast from 'react-hot-toast';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "97653 12906"; 
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false); 
  const [showNumber, setShowNumber] = useState(false); 

  useEffect(() => {
    async function checkLoginStatus() {
      const userDetails = await fetchUserDetails();
      setIsLoggedIn(userDetails !== null);
    }

    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true); // Start showing the loading indicator
    await new Promise(resolve => setTimeout(resolve, 2000)); // Delay for 2 seconds
    localStorage.removeItem('token'); // Assuming token is stored in local storage
    setIsLoggedIn(false);
    setIsLoggingOut(false); // Stop showing the loading indicator
    navigate('/');
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        toast.success('Phone number copied!');
        setShowNumber(false); // Optionally hide the number after copying
      })
      .catch(err => toast.error('Failed to copy phone number'));
  };

  return (
    <Headroom>
      <nav className="sticky top-0 left-0 right-0 z-50 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex flex-row justify-center items-center">
              <img src="/tjaswinisaleslogo.png" alt="Tejaswini Sales" className="h-16 object-cover" />
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center justify-center flex-grow space-x-4">
              <Link to="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              {/* MainNav Component for Products */}
              {/* <MainNav /> */}
              <Link to="/project" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </Link>
            </div>
            
            {/* Call Us Button */}
            <div className="hidden md:block mr-2 justify-end">
              <Button onClick={() => setShowNumber(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
              {/* Optionally show phone number */}
              {showNumber && (
                <div className="absolute mt-2 p-2 flex justify-center flex-col bg-white border rounded shadow-lg">
                  <p>{phoneNumber}</p>
                  <button onClick={copyPhoneNumber} className="text-xs text-center mt-2 text-blue-500">Copy</button>
                </div>
              )}
              <Button onClick={isLoggedIn ? handleLogout : () => navigate("/login")} className="ml-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#17195A]">
                {isLoggingOut ? 'Logging Out...' : (isLoggedIn ? <><LogOut className="mr-2 h-4 w-4" /> Logout</> : <><User className="mr-2 h-4 w-4" /> Login</>)}
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              {/* MainNav for Mobile */}
              <MainNav />
              <Link to="/about" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
                Contact Us
              </Link>
              <Button onClick={() => setShowNumber(true)} className="w-40 justify-start text-left px-3 py-2 rounded-md text-base font-medium text-white bg-red-600 hover:bg-yellow-700">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
              {/* Optionally show phone number */}
              {showNumber && (
                <div className="absolute left-0 mt-2 p-2 bg-white border rounded shadow-lg">
                  <p>{phoneNumber}</p>
                  <button onClick={copyPhoneNumber} className="text-xs text-blue-500">Copy</button>
                </div>
              )}
              <Button onClick={isLoggedIn ? handleLogout : () => navigate("/login")} className="ml-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#17195A]">
                {isLoggingOut ? 'Logging Out...' : (isLoggedIn ? <><LogOut className="mr-2 h-4 w-4" /> Logout</> : <><User className="mr-2 h-4 w-4" /> Login</>)}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </Headroom>
  );
}
