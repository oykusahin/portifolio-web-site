"use client";
import React from 'react'
import Image from 'next/image';
import { assets } from '../../assets/assets';  
import { motion } from "motion/react"

const Header = () => {
  return (
    <div id="top" className="w-11/12 max-w-3xl text-center mx-auto min-h-[60vh] pt-32 flex flex-col items-center justify-center gap-10 scroll-mt-32">
        <div>
          <motion.div
          initial={{ scale: 0 }}
          whileInView ={{ scale: 1 }}
          transition={{ duration: 0.8,
            type: 'spring',
            stiffness: 100,
             ease: 'easeOut' }}
          >
            <Image src={assets.oyku_image} alt="" 
            className='rounded-full w-40 sm:w-80 cursor-pointer mx-auto mb-6' />
            </motion.div>
            <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="flex items-end justify-center gap-2 text-xl font-Ovo text-center mb-6">
                Hi! I am Öykü and this is my portfolio. 
                <Image 
                    src={assets.hello_icon} 
                    alt="" 
                    className='w-6' />
            </motion.h3>
            <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className='text-3xl sm:text-4xl lg:text-[66px] font-Ovo font-bold mb-6'>
                I am a Machine Learning Engineer.
            </motion.h1>
            <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
                I made this portifolio to showcase my skills, projects, and experiences in the field of machine learning.
                Usually, CVs are boring and plain, but I wanted to create something more interactive and engaging.
                Feel free to explore and learn more about me!
            </motion.p>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                href="https://www.linkedin.com/in/oykusahin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-Ovo hover:bg-purple-50 transition-colors duration-200"
              >
                <Image src={assets.linkedin_icon} alt="LinkedIn" className="w-5 h-5" />
                LinkedIn
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                href="https://github.com/oykusahin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-Ovo hover:bg-purple-50 transition-colors duration-200"
              >
                <Image src={assets.github_icon} alt="GitHub" className="w-5 h-5" />
                GitHub
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
                href="https://scholar.google.com/citations?user=7X_HSKcAAAAJ&hl=tr&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-Ovo hover:bg-purple-50 transition-colors duration-200"
              >
                <Image src={assets.google_scholar_icon} alt="Google Scholar" className="w-5 h-5" />
                Google Scholar
              </motion.a>
            </div>
        </div>
    </div>
    
  )
}

export default Header
