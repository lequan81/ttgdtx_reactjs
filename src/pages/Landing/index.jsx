import { useState, useEffect, useCallback } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Team from "./Team";
import Stats from "./Stats";
import Recently from "./Recently";
import Contact from "@components/Contact";
import Button from "@components/Button";
import data from "@data/data.json";

export default function Landing() {
  const slides = data.images.landingImages;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 15200;

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, slideDuration);

    return () => clearTimeout();
  }, [nextSlide, slideDuration]);

  useEffect(() => {
    window.HSTooltip.autoInit();
  }, []);

  return (
    <section className="mt-10 xl:mt-12 w-full bg-gray-100 dark:bg-gray-900 shadow-lg transition-shadow shadow-gray-400 dark:shadow-none">
      <div
        style={
          slides.length > 0
            ? {
                backgroundImage: `url(${
                  slides[currentIndex].url || slides[currentIndex].fallbackUrl
                })`,
              }
            : {}
        }
        className="relative bg-cover bg-center bg-no-repeat object-cover duration-500 transform transition-all ease-in-out delay-200 h-[85vh] md:h-[90vh]"
      >
        <div className="absolute inset-0 bg-black/80 sm:bg-black/20 sm:bg-gradient-to-r from-15% via-30% to-50% dark:from-20% dark:via-40% dark:to-55% from-black/90 via-black/70 dark:from-gray-900 dark:via-gray-900/70 to-transparent"></div>

        <div className="relative flex flex-col h-full items-start w-full max-w-lg px-4 md:px-0 lg:px-8 lg:max-w-screen-xl cursor-default">
          <div className="h-full xl:mt-16 mt-12 md:mt-14 sm:max-w-xl lg:max-w-2xl w-full sm:mx-4">
            <h2 className="animate__animated animate__slideInLeft animate__faster mb-4 md:mb-6 text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold tracking-tight text-blue-600 sm:leading-none sm:w-5/6 w-full md:w-full md:pr-10 md:whitespace-pre-line xl:whitespace-pre-line">
              {data.landing[0].title}
            </h2>
            <p className="animate__animated animate__slideInLeft antialiased hover:subpixel-antialiased md:max-w-lg px-2 mb-6 sm:mb-16 text-base text-gray-50">
              {data.landing[0].description}
            </p>

            <div className="mb-8 space-y-2 sm:space-y-3 text-sm sm:text-base">
              <p className="animate__animated animate__slideInLeft antialiased hover:subpixel-antialiased flex items-center -mx-2 text-gray-100">
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

              <p className="animate__animated animate__slideInLeft antialiased hover:subpixel-antialiased flex items-center -mx-2 text-gray-100">
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

              <p className="animate__animated animate__slideInLeft antialiased hover:subpixel-antialiased flex items-center -mx-2 text-gray-100">
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

            <div className="flex items-center w-fit mb-4 sm:mb-8 mt-10 lg:mt-10 xl:mt-12 animate__animated animate__fadeIn">
              <Button title={"Đăng ký ngay"} path={"/signup"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full lg:my-8 my-4">
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
