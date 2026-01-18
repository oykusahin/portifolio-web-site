import React from 'react'
import Image from 'next/image';
import { assets } from '../assets/assets';  

const Header = () => {
  return (
    <div>
        <div>
            <Image src={assets.logo} alt="" 
            className='rounded-full w-28 cursor-pointer mr-14' />
            <h3 className='flex items-end gap-2 text-xl mb-3 font-Ovo'>
                Hi! I am Öykü and this is my portfolio. 
                <Image 
                    src={assets.hello_icon} 
                    alt="" 
                    className='w-6' />
            </h3>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-Ovo'>
                I am a Machine Learning Engineer and a Computer Scientist.
            </h1>
            <p>
                I made this portifolio to showcase my skills, projects, and experiences in the field of machine learning and computer science. 
                Usually, CVs are boring and plain, but I wanted to create something more interactive and engaging. 
                Feel free to explore and learn more about me!
            </p>
        </div>
    </div>
  )
}

export default Header
