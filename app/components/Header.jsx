import React from 'react'
import Image from 'next/image';
import { assets } from '../../assets/assets';  

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-[60vh] pt-12 flex flex-col items-center justify-center gap-6">
        <div>
            <Image src={assets.logo} alt="" 
            className='rounded-full w-28 cursor-pointer mx-auto' />
            <h3 className="flex items-end justify-center gap-2 text-xl mb-3 font-Ovo text-center">
                Hi! I am Öykü and this is my portfolio. 
                <Image 
                    src={assets.hello_icon} 
                    alt="" 
                    className='w-6' />
            </h3>
            <h1 className='text-3xl sm:text-4xl lg:text-[66px] font-Ovo font-bold mb-6'>
                I am a Machine Learning Engineer.
            </h1>
            <p>
                I made this portifolio to showcase my skills, projects, and experiences in the field of machine learning.
                Usually, CVs are boring and plain, but I wanted to create something more interactive and engaging.
                Feel free to explore and learn more about me!
            </p>
        </div>
    </div>
  )
}

export default Header
