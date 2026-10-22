
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ines-dahmani20",
      Icon: FaLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/DahmaniInes",
      Icon: FaGithub,
    },
  ];

  return (
    <nav
      className={`px-6 w-full flex items-center py-4 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo and name */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> 

         {/* <img
  src={customLogo}
  alt="Ines Dahmani Logo"
  className="w-10 h-10 object-contain"
/>*/}
          <p className="text-white text-lg font-bold whitespace-nowrap">
             Ines Dahmani <span className="hidden lg:inline">| Open to opportunities </span>
          </p>
        </Link>
  
        {/* Open to opportunities */}
    {/* <div className="hidden xl:flex items-center gap-2 shrink-0">
  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
  <span className="text-green-400 text-xs font-medium whitespace-nowrap">
    Open to opportunities
  </span>
</div> */}
  
        {/* Desktop navigation and social links */}
        <div className="hidden sm:flex items-center gap-5">
          <ul className="flex items-center gap-6 list-none">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-base font-medium cursor-pointer whitespace-nowrap`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
  
          <div className="flex items-center gap-4 border-l-2 border-white/20 pl-4">
                        <a
              href="https://www.linkedin.com/in/ines-dahmani20/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-secondary hover:text-white transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
  
            <a
              href="https://github.com/DahmaniInes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-secondary hover:text-white transition-colors"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </div>
  
        {/* Mobile menu */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
  
          {toggle && (
            <div className="p-5 black-gradient absolute top-20 right-4 min-w-[170px] z-10 rounded-xl">
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="text-secondary hover:text-white text-base font-medium"
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
  
              <div className="flex items-center gap-4 mt-5">
                <a
                  href="https://www.linkedin.com/in/ines-dahmani20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="https://github.com/DahmaniInes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-white"
                >
                  <FaGithub size={22} />
                </a>
              </div>
  
              <p className="text-green-400 text-xs mt-4 whitespace-nowrap">
                ● Open to opportunities
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
