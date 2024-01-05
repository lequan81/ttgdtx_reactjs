import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Contact from "../../components/Contact";
import Team from "./Team";
import Stats from "./Stats";
import Recently from "./Recently";
import Button from "../../components/Button";
import data from "../../data/data.json";

export function Landing() {
  const slides = data.images.landingImages;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 9200;

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  setTimeout(() => {
    nextSlide();
  }, slideDuration);

  return (
    <section className="mt-10 xl:mt-12 w-full bg-gray-100 dark:bg-gray-900 shadow-lg transition-shadow shadow-gray-400 dark:shadow-none">
      <div className="bg-white/70 dark:bg-gray-800/30 shadow-md transition-shadow shadow-gray-300 dark:shadow-none relative flex flex-col py-4 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl lg:max-w-2xl xl:max-w-4xl md:max-w-md px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 md:absolute xl:px-0">
          <svg
            className="sm:absolute left-0 z-10 lg:max-w-sm max-w-[16rem] lg:w-full md:w-3/4 hidden h-full text-blue-500 dark:text-blue-700 origin-center transition-all -translate-x-1/2 md:block"
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
            className={`sm:block hidden w-full h-full object-cover bg-no-repeat bg-center bg-cover duration-500 transform transition-all ease-in-out delay-200 ${
              slides.length > 0
                ? ""
                : "bg-gray-300 dark:bg-gray-700 animate-pulse"
            }`}
          ></div>
        </div>
        <div className="relative flex flex-col items-start w-full max-w-lg px-4 md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="h-fit xl:mt-12 lg:mt-10 mt-2 md:mt-4 sm:max-w-xl xl:max-w-2xl w-full sm:mx-4">
            <h2 className="sm:mb-8 mb-4 text-2xl md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:leading-none sm:w-5/6 w-11/12 md:w-10/12 lg:w-9/12 md:pr-12 lg:pr-10 xl:w-full md:whitespace-pre-line lg:whitespace-normal xl:whitespace-pre-line">
              {data.landing[0].title}
              {/* {
                "Trung tâm Giáo dục nghề nghiệp -\n Giáo dục thường xuyên huyện Vĩnh Cửu"
              } */}
            </h2>
            <p className="antialiased hover:subpixel-antialiased md:mr-40 lg:mr-52 xl:mr-72 px-2 mb-10 text-base sm:text-sm lg:text-base text-gray-900 dark:text-gray-100">
              {data.landing[0].description}
            </p>

            <div className="mb-8 space-y-3 text-base">
              <p className="antialiased hover:subpixel-antialiased flex items-center -mx-2 text-gray-800 dark:text-gray-200">
                <CheckCircleIcon
                  className="lg:w-6 lg:h-6 w-5 h-5 mx-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                />
                <span className="mx-2 text-base md:text-sm lg:text-base">
                  Đội ngũ giảng viên nhiều kinh nghiệm
                </span>
              </p>

              <p className="antialiased hover:subpixel-antialiased flex items-center -mx-2 text-gray-800 dark:text-gray-200">
                <CheckCircleIcon
                  className="lg:w-6 lg:h-6 w-5 h-5 mx-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                />
                <span className="mx-2 text-base md:text-sm lg:text-base">
                  Môi trường học tập năng động
                </span>
              </p>

              <p className="antialiased hover:subpixel-antialiased flex items-center -mx-2 text-gray-800 dark:text-gray-200">
                <CheckCircleIcon
                  className="lg:w-6 lg:h-6 w-5 h-5 mx-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                />
                <span className="mx-2 text-base md:text-sm lg:text-base">
                  Chương trình học sát thực tế
                </span>
              </p>
            </div>

            <div className="flex items-center mb-4 sm:mb-8 mt-10 xl:mt-12">
              <Button title={"Đăng ký ngay"} path={"/signup"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full mb-4">
        <Stats />
      </div>
      <div className="flex flex-row w-full lg:my-12 my-6">
        <Team />
      </div>
      <div className="flex flex-row w-full lg:my-12 my-0">
        <Recently />
      </div>
      <div className="flex flex-row w-full mb-6">
        <Contact />
      </div>
    </section>
  );
}
