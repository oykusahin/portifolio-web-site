import React from 'react'
import { assets, infoList } from '../../assets/assets';
import Image from 'next/image';

const About = () => {
  return (
    <div
      id="about"
      className="w-11/12 max-w-5xl mx-auto py-16"
    >
      <h2 className="text-center text-3xl sm:text-4xl lg:text-[66px] font-Ovo font-bold">
        About Me
      </h2>

      <div className="mt-12 flex w-full flex-col items-start gap-12 lg:flex-row">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Image
            src={assets.logo}
            alt="user"
            className="w-72 sm:w-80 rounded-3xl shadow-md"
          />
        </div>

        <div className="w-full lg:w-1/2 text-left">
          <p className="mb-10 text-gray-600 leading-relaxed font-Ovo">
            I am a passionate Machine Learning Engineer with a strong background
            in computer science. I love working on innovative projects that make
            a difference in people's lives.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {infoList.map((item) => (
              <li
                key={item.title}
                className="border border-gray-200 rounded-2xl p-6 flex 
                flex-col items-center text-center gap-3 shadow-sm hover:bg-purple-50 hover:-translate-y-1 
                transition-all duration-300 cursor-pointer min-h-[240px]"
              >
                <Image src={item.icon} alt={item.title} className="w-7" />
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About
