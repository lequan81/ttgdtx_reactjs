import React from "react";
import BlogItem from "./PostItem";

function Blog() {
  return (
    <div className="px-3 py-2 mt-1.5 mx-auto w-full">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
}

export default Blog;
