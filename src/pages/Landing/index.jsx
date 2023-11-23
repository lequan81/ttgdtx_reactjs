import { useState, useLayoutEffect } from "react";
import { useLandingImage } from "../../hook/useImage/useLandingImage";
import { useTitle } from "../../hook/useTitle";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Contact from "../../components/Contact";
import Team from "./Team";
import Stats from "./Stats";
import Recently from "./Recently";
import data from "../../data/data.json";

export function Landing() {
  useTitle("Trang chủ");
  // eslint-disable-next-line no-unused-vars
  const [slides, setSlides] = useLandingImage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 9200;
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, slideDuration);
  });

  return (
    <section className="mt-12 w-full bg-gray-100 dark:bg-gray-900 shadow-lg transition-shadow shadow-gray-400 dark:shadow-none ">
      <div className="bg-white/70 dark:bg-gray-800/30 shadow-md transition-shadow shadow-gray-400 dark:shadow-none relative flex flex-col py-4 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 z-10 max-w-sm w-full hidden h-full text-blue-500 dark:text-blue-700 origin-center transition-transform transform-gpu -translate-x-1/2 lg:block animate-none"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <div
            style={
              slides.length > 0
                ? {
                    backgroundImage: `url(${
                      slides[currentIndex].url ||
                      slides[currentIndex].fallbackUrl
                    })`,
                  }
                : {}
            }
            className={`w-full h-full object-cover bg-no-repeat bg-center bg-cover duration-500 ${
              slides.length > 0
                ? ""
                : "bg-gray-300 dark:bg-gray-700 animate-pulse"
            }`}
          ></div>
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="h-fit mt-16 max-w-2xl mx-4 pr-5">
            <h2 className="mb-8 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none">
              {data.landing[0].heading}
              {/* <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span> */}
            </h2>
            <p className="pr-36 mb-10 text-base text-gray-800 dark:text-gray-100 md:text-lg">
              {data.landing[0].description}
            </p>

            <div className="mb-8 space-y-3 text-base">
              <p className="flex items-center -mx-2 text-gray-900 dark:text-gray-200">
                <CheckCircleIcon
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                />
                <span className="mx-2">
                  Đội ngũ giảng viên nhiều kinh nghiệm
                </span>
              </p>

              <p className="flex items-center -mx-2 text-gray-900 dark:text-gray-200">
                <CheckCircleIcon
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                />
                <span className="mx-2">Môi trường học tập năng động</span>
              </p>

              <p className="flex items-center -mx-2 text-gray-900 dark:text-gray-200">
                <CheckCircleIcon
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                />
                <span className="mx-2">Chương trình học sát thực tế</span>
              </p>
            </div>

            <div className="flex items-center mb-28">
              <a
                href="/signup"
                className="inline-flex items-center justify-center py-2.5 px-3 mr-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
              >
                Đăng ký ngay
              </a>
              {/* <a
                href="#about"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 hover:bg-gray-400 dark:hover:bg-gray-800 dark:text-gray-500 transition-colors duration-200 hover:text-blue-500 h-12 px-6 rounded"
              >
                Tìm hiểu thêm
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full mb-4">
        <Stats />
      </div>
      <div className="flex flex-row w-full my-12">
        <Team />
      </div>
      <div className="flex flex-row w-full my-12">
        <Recently />
      </div>
      <div className="flex flex-row w-full mb-6">
        <Contact />
      </div>
    </section>
  );
}
