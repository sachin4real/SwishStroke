import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-[25px] z-50 w-full mt-[25px] justify-center md:max-w-[1073px] mx-auto px-3 sm:px-6 py-3 sm:py-4 border rounded-lg border-white/40 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-3 sm:gap-0">
        {/* Logo + Mobile Menu Button */}
        <div className="flex items-center w-full sm:w-auto justify-between">
          <Link to="/">
            <img
              src="/images/Group.png"
              alt="Logo"
              width={72}
              height={28}
            />
          </Link>

          {/* Mobile right-side buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              className="flex items-center justify-center p-2 border rounded-lg border-white/20 bg-white/10"
              href=""
            >
              <img src="/images/Ios-icon.png" alt="iOS" width={24} height={24} />
            </a>
            <a
              className="flex items-center justify-center p-2 border rounded-lg border-white/20 bg-white/10"
              href=""
            >
              <img
                src="/images/Android-icon → SVG.png"
                alt="Android"
                width={24}
                height={24}
              />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="p-2 border rounded-lg border-white/20 bg-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden sm:flex space-x-8 text-sm text-white/80 font-poppins">
          <li className="hover:text-[#b288f1] cursor-pointer">
            <a href="#features">Features</a>
          </li>
          <li className="hover:text-[#b288f1] cursor-pointer">
            <a href="#how">How It Works</a>
          </li>
          <li className="hover:text-[#b288f1] cursor-pointer">
            <a href="#FAQ">FAQ</a>
          </li>
          <li className="hover:text-[#b288f1] cursor-pointer">
            <a href="#footer">Contact</a>
          </li>
        </ul>

        {/* Desktop App Buttons */}
        <div className="hidden sm:flex space-x-2 text-white">
          <a
            className="flex p-2 border rounded-lg hover:bg-[#9837ffeb] cursor-pointer border-white/20 gap-2 bg-white/10 transform hover:scale-110 hover:brightness-110"
            href=""
          >
            <img src="/images/Ios-icon.png" alt="iOS" width={24} height={24} />
            iOS
          </a>
          <a
            className="flex p-2 border rounded-lg hover:bg-[#9737ff] cursor-pointer border-white/20 gap-3 bg-white/10 transform hover:scale-110 hover:brightness-110"
            href=""
          >
            <img
              src="/images/Android-icon → SVG.png"
              alt="Android"
              width={24}
              height={24}
            />
            Android
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="sm:hidden mt-3 space-y-2 text-white/80 font-poppins text-center">
          <a className="block hover:text-[#b288f1]" href="#features">
            Features
          </a>
          <a className="block hover:text-[#b288f1]" href="#how">
            How It Works
          </a>
          <a className="block hover:text-[#b288f1]" href="#FAQ">
            FAQ
          </a>
          <a className="block hover:text-[#b288f1]" href="#footer">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
