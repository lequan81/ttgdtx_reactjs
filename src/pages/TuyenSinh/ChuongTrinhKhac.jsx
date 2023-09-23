import React from "react";
import Blog from "../../components/Post";

function NamHoc() {
  return (
    <section className="flex flex-col mt-16 bg-gray-100 dark:bg-gray-900 border border-dashed border-green-400 w-full">
      <h1 className="text-center text-blue-600 dark:text-white text-2xl uppercase font-bold mb-2">
        CAC CHUONG TRINH KHAC
      </h1>
      <Blog />
    </section>
  );
}

export default NamHoc;
