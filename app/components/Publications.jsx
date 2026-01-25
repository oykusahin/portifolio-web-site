"use client";
import React, { useEffect, useState } from "react";
import { parse } from "@retorquere/bibtex-parser";

// Extracts: { noteText, pdfPath } from BibTeX "note" field.
// Your format examples:
// "Best paper award; PDF: /TSP2021_Award_IEEE_CS-097.pdf"
// "Results printed on the book cover; PDF: /something.pdf"
const parseNote = (noteRaw) => {
  if (!noteRaw) return { noteText: "", pdfPath: "" };

  const note = String(noteRaw).trim();

  // Find "PDF:" (case-insensitive)
  const pdfMatch = note.match(/pdf\s*:\s*([^\s;]+)\s*/i);
  const pdfPath = pdfMatch?.[1]?.trim() || "";

  // Remove the "PDF: ..." part from displayed note text
  const noteText = note
    .replace(/pdf\s*:\s*[^\s;]+/gi, "")
    .replace(/\s*;\s*$/g, "")
    .trim();

  return { noteText, pdfPath };
};

const parseBibtex = (bibtex) => {
  const parsed = parse(bibtex);
  const entries = Object.values(parsed.entries);

  return entries
    .map((e) => {
      const noteRaw = e.fields.note ?? "";
      const { noteText, pdfPath } = parseNote(noteRaw);

      const url =
        e.fields.url ||
        (e.fields.doi ? `https://doi.org/${e.fields.doi}` : null);

      return {
        id: e.key,
        title: e.fields.title ?? "Untitled",
        authors: e.fields.author ?? "Unknown authors",
        venue:
          e.fields.journal ||
          e.fields.booktitle ||
          e.fields.publisher ||
          "Unspecified venue",
        year: e.fields.year ?? "N/A",
        url,
        noteText,   // award/context text without the PDF part
        pdfPath,    // "/path/to.pdf" if present
      };
    })
    .sort((a, b) => Number(b.year) - Number(a.year));
};

const formatAuthors = (authors) => {
  if (!authors) return "Unknown authors";
  if (typeof authors === "string") return authors;

  // In case the parser returns structured authors
  if (Array.isArray(authors)) {
    return authors
      .map((a) => formatAuthors(a))
      .filter(Boolean)
      .join(", ");
  }

  if (typeof authors === "object") {
    const parts = ["firstName", "lastName", "name"]
      .map((k) => authors[k])
      .filter(Boolean)
      .join(" ");
    return parts.trim() || "Unknown authors";
  }

  return String(authors);
};

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBibtex = async () => {
      try {
        const response = await fetch("/publications.bib");
        if (!response.ok) throw new Error("Unable to load publications.");
        const text = await response.text();
        setPublications(parseBibtex(text));
      } catch (err) {
        setError(err?.message || "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    loadBibtex();
  }, []);

  return (
    <section
      id="publications"
      className="w-11/12 max-w-5xl mx-auto py-16 scroll-mt-10"
    >
      <h2 className="text-center text-3xl sm:text-4xl lg:text-[66px] font-Ovo font-bold mb-6">
        Publications
      </h2>

      <p className="mb-8 text-gray-600 leading-relaxed font-Ovo max-w-3xl mx-auto text-center">
        A selection of my academic work in machine learning and computer vision.
        Full citation details are available on Google Scholar.
      </p>

      <div className="text-center mb-12">
        <a
          href="https://scholar.google.com/citations?user=7X_HSKcAAAAJ&hl=tr&oi=ao"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-gray-300 font-Ovo text-sm text-gray-700 hover:bg-purple-50 transition"
        >
          View on Google Scholar
        </a>
      </div>

      <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
        {isLoading && (
          <p className="text-gray-500 text-sm">Loading publications…</p>
        )}

        {error && <p className="text-red-600 text-sm">Failed to load: {error}</p>}

        {!isLoading && !error && publications.length === 0 && (
          <p className="text-gray-500 text-sm">Publications will appear here soon.</p>
        )}

        <ul className="space-y-8">
          {publications.map((pub) => (
            <li
              key={pub.id}
              className="grid grid-cols-[60px_1fr] gap-4 sm:gap-6 items-start"
            >
              <div className="text-sm text-gray-400 font-semibold">
                {pub.year}
              </div>

              <div className="border border-gray-100 rounded-xl p-4 hover:-translate-y-1 transition-transform duration-300">
                <p className="font-semibold text-purple-700 text-lg leading-snug">
                  {pub.title}
                </p>

                {/* NEW: Authors and Venue on separate lines */}
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  {formatAuthors(pub.authors)}
                </p>
                <p className="text-sm text-purple-500 italic leading-relaxed">
                  {pub.venue}
                </p>

                {/* NEW: Award / note area (only if exists) */}
                {(pub.noteText || pub.pdfPath) && (
                  <div className="mt-3 flex flex-wrap items-center gap-3 rounded-lg bg-gray-50 border border-gray-100 p-3">
                    {pub.noteText && (
                      <span className="text-sm text-gray-600">
                        {pub.noteText}
                      </span>
                    )}

                    {pub.pdfPath && (
                      <a
                        href={pub.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-600 hover:underline whitespace-nowrap"
                      >
                        View
                      </a>
                    )}
                  </div>
                )}

                {/* Paper link if present */}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-purple-600 hover:underline"
                  >
                    Read paper →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Publications;
