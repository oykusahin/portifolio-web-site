import React from 'react';
import { infoList, toolsData } from '../../assets/assets';
import Image from 'next/image';

const About = () => {
  return (
    <div
      id="about"
      className="w-11/12 max-w-5xl mx-auto py-16 scroll-mt-10"
    >
      <h2 className="text-center text-3xl sm:text-4xl lg:text-[66px] font-Ovo font-bold">
        About Me
      </h2>

      <div className="mt-12 flex w-full flex-col items-center gap-12">
        <p className="w-full max-w-4xl text-center mb-6 text-gray-600 leading-relaxed font-Ovo">
          I am a passionate Machine Learning Engineer with a strong background
          in computer science. I love working on innovative projects that make
          a difference in people's lives.
        </p>

        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoList.map(({ icon, title, description }, index) => (
            <li
              className="border border-gray-200 rounded-2xl p-5 flex flex-col justify-between text-left shadow-sm hover:-translate-y-1 transition-all duration-300 min-h-[200px]"
              key={index}
            >
              <Image src={icon} alt={title} className="w-7" />
              <h3 className="mt-4 font-semibold text-gray-700 text-lg">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </li>
          ))}
        </ul>

        <div className="w-full">
          <h4 className="my-6 text-gray-700 font-Ovo text-center">Tools I Use</h4>

          <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 shadow-black"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About
