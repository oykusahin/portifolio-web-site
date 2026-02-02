import React from 'react';
import { infoList, toolsData } from '../../assets/assets';
import Image from 'next/image';
import Script from 'next/script';

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
          I am a Machine Learning Engineer with BSc and MSc degrees in Computer Science from{" "}
          <a
            href="https://w3.bilkent.edu.tr/bilkent/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 font-semibold hover:underline"
          >
            Bilkent University
          </a>
          .
          I have over six years of experience working on end-to-end machine learning systems — from research and modeling to deployment,
          monitoring, and optimization. I am currently working at the{" "}
          <a
            href="https://www.tcmb.gov.tr/wps/wcm/connect/en/tcmb+en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 font-semibold hover:underline"
          >
            Central Bank of Türkiye
          </a>
          , where my work focuses on data-driven modeling 
          for financial infrastructures and real-time nowcasting of macroeconomic indicators.
        </p>

        <ul className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoList.map(({ icon, title, description }, index) => (
            <li
              key={index}
              className="border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:-translate-y-1 transition-all duration-300 min-h-[220px]"
            >
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center
                              w-12 h-12 rounded-xl bg-gray-100">
                <Image
                  src={icon}
                  alt={title}
                  className="w-6 h-6"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-800 text-lg mb-2">
                {title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-[260px]">
                {description}
              </p>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center gap-6 mt-4">
          <div className="text-center">
            <h3 className="text-2xl font-Ovo font-semibold">Certificates</h3>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Selected badges from Credly that highlight cloud, AI, and ML expertise.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="2230b2d4-c293-4492-a78f-4b8b6f287e59"
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>
          <Script src="https://cdn.credly.com/assets/utilities/embed.js" strategy="lazyOnload" />
        </div>
      </div>
    </div>
  );
}

export default About
