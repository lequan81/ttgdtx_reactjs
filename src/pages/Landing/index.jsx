import { useState, useLayoutEffect } from "react";
import Team from "./Team";
import Stats from "./Stats";
import Post from "../../components/Post";
import data from "../../data/data.json";
import { getLandingImage } from "../../services/getLandingImage";

export function Landing() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 9250;

  useLayoutEffect(() => {
    getLandingImage().then((data) => setSlides(data));
  }, []);

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
    <section
      id="#"
      className="mt-12 w-full bg-gray-100 dark:bg-gray-900 shadow-lg transition-shadow shadow-gray-400 dark:shadow-none "
    >
      <div className="shadow-md transition-shadow shadow-gray-400 dark:shadow-none relative flex flex-col py-4 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-8/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 z-10 hidden h-full text-blue-400 dark:text-blue-700 origin-center transition-transform transform-gpu -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          {slides.length > 0 && (
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-full h-full object-cover bg-no-repeat bg-center bg-cover duration-500 dark:opacity-75 opacity-90"
            ></div>
          )}
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-20 lg:my-52 lg:max-w-xl mx-4 lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-none">
              {data.info[0].heading}
              {/* <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span> */}
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-800 dark:text-gray-100 md:text-lg">
              {data.info[0].description}
            </p>
            <div className="flex items-center">
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
      <div className="flex flex-row w-full mt-10 mb-4">
        <Stats />
      </div>

      <div className="flex flex-row w-full mt-10 mb-4">
        <Team />
      </div>
      {/* <div className="flex flex-col mt-3.5 bg-gray-100 dark:bg-gray-900  w-full">
        <h1 className="text-center text-blue-600 dark:text-white text-2xl uppercase font-bold mb-2 mt-2">
          TIN TỨC MỚI NHẤT
        </h1>
        <Post />
      </div> */}
    </section>
  );
}
