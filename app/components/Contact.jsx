import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const Contact = () => {
  const email = "oykusahin08@gmail.com";

  return (
    <section
      id="contact"
      className="w-11/12 max-w-5xl mx-auto py-12 scroll-mt-24 text-center"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-Ovo font-bold mb-4">
        Let&apos;s Connect
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto">
        I’m always open to conversations and collaborations. Whether you have a
        question, a potential collaboration, or simply want to connect, feel
        free to reach out.
      </p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
        {/* Get in Touch */}
        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Get in Touch</h3>

          <ul className="space-y-4 text-gray-700">
            {/* Email button instead of raw email text */}
            <li className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-gray-100 border border-gray-200">
                <Image
                  src={assets.email_dark_icon}
                  alt="Email"
                  width={20}
                  height={20}
                />
              </span>

              <a
                href={`mailto:${email}?subject=Hello%20%C3%96yk%C3%BC&body=Hi%20%C3%96yk%C3%BC%2C%0A%0A`}
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-gray-200 bg-white text-purple-700 hover:underline hover:bg-gray-50 transition"
                aria-label="Contact via email"
              >
                Contact via email
              </a>
            </li>

            <li className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-gray-100 border border-gray-200">
                <Image
                  src={assets.linkedin_icon}
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
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
                <Image src={assets.github_icon} alt="GitHub" width={20} height={20} />
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
                <Image src={assets.bsky_icon} alt="Bluesky" width={20} height={20} />
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

          {/* Optional subtle note */}
          <p className="text-xs text-gray-500 mt-5">
            (Email address is intentionally not displayed to reduce spam.)
          </p>
        </div>

        {/* Areas of Interest */}
        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Areas of Interest
          </h3>

          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li>Research-driven machine learning especially in medical imaging</li>
            <li>ML systems design, deployment, and inference</li>
            <li>Data-driven modeling for real-world decision-making</li>
            <li>Teaching, mentoring, and invited talks</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
