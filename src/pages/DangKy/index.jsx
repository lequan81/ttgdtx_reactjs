import React from "react";

function DangKy() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl uppercase font-medium title-font mb-4 text-gray-900 dark:text-white">
            Thông tin cá nhân
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-800 dark:text-gray-200">
            Vui lòng điền tất cả thông tin vào các ô trống
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-3/12">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600 dark:text-gray-200"
            >
              Họ và Tên (*)
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="John Doe"
              className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative flex-grow w-3/12">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-600 dark:text-gray-200"
            >
              Email (*)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
              className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative flex-grow w-2/12">
            <label
              htmlFor="phone"
              className="leading-7 text-sm text-gray-600 dark:text-gray-200"
            >
              Số diện thoại (*)
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="890-123-4567"
              className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="w-fit text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Đăng ký
          </button>
        </div>
      </div>
    </section>
  );
}

export default DangKy;
