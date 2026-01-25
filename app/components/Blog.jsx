"use client";
import React, { useEffect, useState } from "react";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

const enhancePosts = (posts) =>
  posts.map((post) => ({
    ...post,
    formattedDate: post.pubDate
      ? dateFormatter.format(new Date(post.pubDate))
      : "—",
  }));

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch("/api/medium")
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        setPosts(enhancePosts(data));
        setLoading(false);
      })
      .catch(() => isMounted && setLoading(false));

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="blog"
      className="w-11/12 max-w-5xl mx-auto py-16 scroll-mt-10 text-center"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-Ovo font-bold mb-4">
        Blog
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-10">
        I write about applied machine learning, research, and the craft of
        building production-ready systems. Here are the latest pieces pulled
        from Medium.
      </p>

      {loading && (
        <p className="text-gray-500 text-sm">Loading posts…</p>
      )}

      {!loading && posts.length === 0 && (
        <p className="text-gray-500 text-sm">
          Nothing published yet—check back soon!
        </p>
      )}

      <div className="mt-6 grid grid-cols-1 gap-6 text-left">
        {posts.map((post, idx) => (
          <a
            key={idx}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-2xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-all duration-300 bg-white/70"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500">{post.formattedDate}</p>
            </div>
            <p className="text-gray-600 mt-3 line-clamp-3">
              {post.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog;
