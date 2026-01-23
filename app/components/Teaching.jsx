import React from "react";

const sessions = [
  {
    title: "Introduction to Machine Learning",
    role: "Invited Speaker",
    date: "April 2025",
    institution: "Bilkent University CTIS",
    institutionLink: "https://w3.ctis.bilkent.edu.tr/website/",
    description:
      "Invited lecture covering supervised learning fundamentals, model evaluation, and practical deployment tips.",
    referenceLink:
      "https://www.linkedin.com/posts/ctisbilkent_ctistalks-activity-7321178874652819458-iVeE?utm_source=share&utm_medium=member_desktop&rcm=ACoAACAJG4EBgTu2iBb4WG4g7q-KwG2xACsx-Mg",
    referenceLabel: "LinkedIn Announcement",
  },
  {
    title: "Introduction to Artificial Intelligence",
    role: "Instructor",
    date: "September 2024 – December 2024",
    institution: "SistersLab",
    institutionLink: "https://www.linkedin.com/company/sisterslaborg/",
    description:
      "Conducted a semester-long program introducing AI concepts, hands-on projects, and ethical discussions.",
    referenceLink: "https://www.linkedin.com/feed/update/urn:li:activity:7264588770719514624/",
    referenceLabel: "LinkedIn Announcement",
  },
];

const Teaching = () => {
  return (
    <section
      id="teaching"
      className="w-11/12 max-w-5xl mx-auto py-16 text-center scroll-mt-10"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-Ovo font-bold mb-6">
        Teaching & Workshops
      </h2>
      <p className="mb-10 text-gray-600 leading-relaxed font-Ovo max-w-3xl mx-auto">
        I enjoy sharing what I learn with communities—whether through
        university lectures or public workshops. Here are a few recent
        teaching highlights.
      </p>

      <div className="grid grid-cols-1 gap-6">
        {sessions.map((session, index) => (
          <article
            key={index}
            className="border border-gray-200 rounded-2xl p-6 text-left shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {session.title}
              </h3>
              <p className="text-sm text-gray-500">{session.date}</p>
            </div>
            <p className="text-sm text-gray-500 mb-1">{session.role}</p>
            <a
              href={session.institutionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 font-semibold hover:underline"
            >
              {session.institution}
            </a>
            <p className="text-gray-600 mt-3">{session.description}</p>
            <a
              href={session.referenceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 mt-2 inline-flex hover:underline"
            >
              {session.referenceLabel}
            </a>
          </article>
        ))}
      </div>

      <div className="mt-12 border border-dashed border-gray-300 rounded-2xl p-6 text-left">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Teaching Materials
        </h3>
        <p className="text-gray-600 mb-4">
          Slides, exercises, and supplementary resources will be added here.
          Check back soon or reach out if you need early access.
        </p>
        <button className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
          Upload materials (coming soon)
        </button>
      </div>
    </section>
  );
};

export default Teaching;
