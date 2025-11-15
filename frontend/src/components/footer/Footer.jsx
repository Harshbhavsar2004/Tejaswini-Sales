import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Tagline */}
          <div className="flex flex-row bg-white h-28 w-44 items-center justify-center rounded-md">
            <img src="/tjaswinisaleslogo.png" alt="logo" className="w-36 h-20 -mt-3" />
          </div>
          <div>
            <p className="text-sm">
              Powering a <br />
              <span className="font-bold">sustainable future.</span>
            </p>
          </div>
          {/* Explore Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/products/vikram-solar" className="hover:text-white">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect with us */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Connect with us
            </h3>
            <address className="space-y-2 not-italic">
              <p>Dhule | Mumbai | Pune</p>
              <p>+91 9765312906</p>
              <p>
               <a href="mailto:tejaswinisolarenergy@gmail.com">
  tejaswinisolarenergy@gmail.com
</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-600 pt-8 md:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} Tejaswini Sales. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-4 md:mt-0">
            <a href="https://www.instagram.com/tejaswinisolarenergy" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
