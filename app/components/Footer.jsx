import React from 'react'
import Image from 'next/image';
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 py-8">
      <div className="flex items-center justify-end text-sm pr-4 gap-2">
        © 2026 Oyku Sahin. All rights reserved.
        <Image src={assets.robot_image} alt="Logo" className="w-10" />
      </div>
    </footer>
  );
};

export default Footer;
