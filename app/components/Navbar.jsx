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
            <Image src={assets.robot_image} alt="Logo" className='w-16 cursor-pointer mr-10' />
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white bg-opacity-50 backdrop-blur-sm border border-gray-200'>
            <li><a className='font-Ovo transition-colors duration-200 hover:text-purple-600' href="#top">Home</a></li>
            <li><a className='font-Ovo transition-colors duration-200 hover:text-purple-600' href="#about">About</a></li>
            <li><a className='font-Ovo transition-colors duration-200 hover:text-purple-600' href="#case-studies">Case Studies</a></li>
            <li><a className='font-Ovo transition-colors duration-200 hover:text-purple-600' href="#publications">Publications</a></li>
            <li><a className='font-Ovo transition-colors duration-200 hover:text-purple-600' href="#teaching">Teaching</a></li>
            <li><a className='font-Ovo transition-colors duration-200 hover:text-purple-600' href="#blog">Blog</a></li>
            <li><a className='font-Ovo transition-colors duration-200 hover:text-purple-600' href="#contact">Contact</a></li>
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/OykuSahinResume_January26.pdf"
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
            <li><a className='font-Ovo' onClick={closeMenu} href="#case-studies">Case Studies</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#teaching">Teaching</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#publications">Publications</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#blog">Blog</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact</a></li>
            <li>
              <a
                href="/OykuSahinResume_January26.pdf"
                download={true}
                onClick={closeMenu}
                className="mt-8 block rounded-2xl border border-purple-200 bg-white/80 px-5 py-4 font-Ovo text-left text-purple-900 shadow-lg shadow-purple-200/60"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <Image src={assets.download_icon} alt="Download Icon" className="w-5" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Resume</span>
                    <span className="text-base font-semibold text-purple-700">Download PDF</span>
                  </div>
                </div>
              </a>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
