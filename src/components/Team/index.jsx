import React from "react";

function Team() {
  return (
    <div className="p-8 px-6 mx-auto w-full">
      <div className="mx-auto sm:text-center mb-8 w-full">
        <div>
          <p className="inline-block px-3 mb-2 text-2xl font-bold tracking-wide text-blue-600 dark:text-white uppercase rounded">
            Mô hình tổ chức
          </p>
        </div>
        {/* <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
              width="52"
              height="24"
            />
          </svg>
          <span className="relative">Welcome</span>
        </span>{" "}
        our talented team of professionals
      </h2> */}
        <p className="text-base text-gray-800 dark:text-gray-300 md:text-lg">
          Giảng viên giàu kinh nghiệm, có trình độ chuyên môn cao, trải qua kì
          tuyển chọn đặc biệt
        </p>
      </div>
      <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 text-gray-900 dark:text-gray-100">
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow-lg transition-shadow shadow-gray-400 dark:shadow-none"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Oliver Aguilerra</p>
            <p className="text-sm text-gray-800 dark:text-gray-400">
              Product Manager
            </p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow-lg transition-shadow shadow-gray-400 dark:shadow-none"
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Marta Clermont</p>
            <p className="text-sm text-gray-800 dark:text-gray-400">
              Design Team Lead
            </p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow-lg transition-shadow shadow-gray-400 dark:shadow-none"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Anthony Geek</p>
            <p className="text-sm text-gray-800 dark:text-gray-400">
              CTO, Lorem Inc.
            </p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow-lg transition-shadow shadow-gray-400 dark:shadow-none"
            src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Alice Melbourne</p>
            <p className="text-sm text-gray-800 dark:text-gray-400">
              Human Resources
            </p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow-lg transition-shadow shadow-gray-400 dark:shadow-none"
            src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Martin Garix</p>
            <p className="text-sm text-gray-800 dark:text-gray-400">
              Social Media Manager
            </p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow-lg transition-shadow shadow-gray-400 dark:shadow-none"
            src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Andrew Larkin</p>
            <p className="text-sm text-gray-800 dark:text-gray-400">
              Backend Developer
            </p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow-lg transition-shadow shadow-gray-400 dark:shadow-none"
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Sophie Denmo</p>
            <p className="text-sm text-gray-800 dark:text-gray-400">
              Designer UI/UX
            </p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow-lg transition-shadow shadow-gray-400 dark:shadow-none"
            src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Benedict Caro</p>
            <p className="text-sm text-gray-800 dark:text-gray-400">
              Frontend Developer
            </p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow-lg transition-shadow shadow-gray-400 dark:shadow-none"
            src="https://images.pexels.com/photos/3783255/pexels-photo-3783255.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Adam Molly</p>
            <p className="text-sm text-gray-800 dark:text-gray-400">
              Full Stack Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
