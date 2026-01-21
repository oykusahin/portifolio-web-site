"use client";
import React, { useEffect, useState } from "react";

const parseBibtex = (bibtex) => {
  return bibtex
    .split("@")
    .filter(Boolean)
    .map((entry) => {
      const entryText = "@" + entry;
      const getField = (field) =>
        entryText.match(new RegExp(`${field}\\s*=\\s*{([^}]*)}`, "i"))?.[1]?.trim();

      const title = getField("title") || "Untitled";
      const authors = getField("author") || "Unknown authors";
      const venue =
        getField("booktitle") ||
        getField("journal") ||
        getField("publisher") ||
        "Unspecified venue";
      const year = getField("year") || "N/A";

      return { id: entryText, title, authors, venue, year };
    });
};

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBibtex = async () => {
      try {
        const response = await fetch("/publications.bib");
        if (!response.ok) {
          throw new Error("Unable to load publications.");
        }
        const text = await response.text();
        const parsed = parseBibtex(text);
        setPublications(parsed);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadBibtex();
  }, []);

  return (
    <div
      id="publications"
      className="w-11/12 max-w-5xl mx-auto text-center py-16 scroll-mt-10"
    >
      <h2 className="text-center text-3xl sm:text-4xl lg:text-[66px] font-Ovo font-bold mb-6">
        Publications
      </h2>
      <p className="mb-10 text-gray-600 leading-relaxed font-Ovo max-w-3xl mx-auto">
        A selection of my academic work that explores machine learning and
        computer vision. Entries load automatically from my BibTeX library but you can also view them on Google Scholar
        with the citations and papers. If you want to access and read the paper send me an email!
      </p>
      <a
        href="https://scholar.google.com/citations?user=7X_HSKcAAAAJ&hl=tr&oi=ao"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-gray-300 font-Ovo text-sm text-gray-700 hover:bg-purple-50 transition-colors duration-200 mb-8"
      >
        View on Google Scholar
      </a>

      <div className="border border-gray-200 rounded-2xl p-6 shadow-sm text-left">
        {isLoading && (
          <p className="text-gray-500 text-sm">Loading publications...</p>
        )}
        {error && (
          <p className="text-red-600 text-sm">Failed to load: {error}</p>
        )}
        {!isLoading && !error && publications.length === 0 && (
          <p className="text-gray-500 text-sm">
            Publications will appear here soon.
          </p>
        )}
        <ul className="space-y-6">
          {publications.map((pub) => (
            <li key={pub.id} className="border-b border-gray-100 pb-5 last:border-none">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                {pub.year} · {pub.venue}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mt-1">
                {pub.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{pub.authors}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Publications;
