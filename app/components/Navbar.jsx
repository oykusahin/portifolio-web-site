"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className={`fixed top-0 left-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-colors duration-300
      ${isScroll ? "bg-white-100 backdrop-blur-lg shadow-sm" : "bg-white-100"}`} >
        <a href="#top">
            <Image src={assets.logo} alt="Logo" className='w-28 cursor-pointer mr-14' />
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white bg-opacity-50 backdrop-blur-sm border border-gray-200'>
            <li><a className='font-Ovo transition-colors duration-200 hover:text-purple-600' href="#top">Home</a></li>
            <li><a className='font-Ovo transition-colors duration-200 hover:text-purple-600' href="#about">About</a></li>
            <li><a className='font-Ovo transition-colors duration-200 hover:text-purple-600' href="#case-studies">Case Studies</a></li>
            <li><a className='font-Ovo transition-colors duration-200 hover:text-purple-600' href="#publications">Publications</a></li>
            <li><a className='font-Ovo transition-colors duration-200 hover:text-purple-600' href="#teaching">Teaching</a></li>
            <li><a className='font-Ovo transition-colors duration-200 hover:text-purple-600' href="#contact">Contact</a></li>
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="public/OykuSahinResume_April_2025.pdf"
            download={true}
            className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-500 rounded-full font-Ovo transition-colors duration-200 hover:bg-white/70 md:px-4 md:py-2 md:text-base"
          >
            <Image src={assets.download_icon} alt="Download Icon" className="w-5" />
            Resume
          </a>

          <button
            className="block md:hidden"
            aria-label="Open menu"
            onClick={openMenu}
          >
            <Image src={assets.menu_icon} alt="Menu Icon" className="w-6" />
          </button>
        </div>

        
        {/* Mobile Side Menu */}
        <ul className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-purple-50 transition-all duration-500 ${isMenuOpen ? 'right-0' : '-right-64'}`}>
            <div className='absolute top-6 right-6'>
                <button aria-label="Close menu" onClick={closeMenu}>
                  <Image src={assets.close_icon} alt="Close Icon" className='w-6 mb-10 ml-auto cursor-pointer' />
                </button>
            </div>
            <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#about">About</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#projects">Projects</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#publications">Publications</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact</a></li>
            <li>
              <a
                href="public/OykuSahinResume_April_2025.pdf"
                download={true}
                onClick={closeMenu}
                className="mt-6 flex items-center justify-center gap-2 px-4 py-3 border border-purple-300 rounded-full font-Ovo bg-white text-purple-700 shadow-sm"
              >
                <Image src={assets.download_icon} alt="Download Icon" className="w-5" />
                Download Resume
              </a>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
