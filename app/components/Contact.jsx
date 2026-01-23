import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-11/12 max-w-5xl mx-auto py-12 scroll-mt-24 text-center"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-Ovo font-bold mb-4">
        Let&apos;s Connect
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Ready to collaborate on your next project? I&apos;m open to meaningful
        opportunities and collaborations across research, engineering, and
        community work.
      </p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-gray-100 border border-gray-200">
                <Image src={assets.email_dark_icon} alt="Email" className="w-5 h-5" />
              </span>
              oykusahin08@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-gray-100 border border-gray-200">
                <Image src={assets.linkedin_icon} alt="LinkedIn" className="w-5 h-5" />
              </span>
              <a
                href="https://www.linkedin.com/in/oykusahin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:underline"
              >
                linkedin.com/in/oykusahin
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-gray-100 border border-gray-200">
                <Image src={assets.github_icon} alt="GitHub" className="w-5 h-5" />
              </span>
              <a
                href="https://github.com/oykusahin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:underline"
              >
                github.com/oykusahin
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-gray-100 border border-gray-200">
                <Image src={assets.bsky_icon} alt="Bluesky" className="w-5 h-5" />
              </span>
              <a
                href="https://bsky.app/profile/oykussahin.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:underline"
              >
                oykussahin.bsky.social
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Open to Opportunities
          </h3>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li>Freelance &amp; contract work</li>
            <li>Startup &amp; business collaborations</li>
            <li>Mentoring &amp; speaking engagements</li>
            <li>Machine learning consulting</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
