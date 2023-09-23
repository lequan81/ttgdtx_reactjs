import { useState } from "react";
import Team from "../../components/Team";
import Stats from "../../components/Stats";
import Blog from "../../components/Post";

function Landing() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 5000;
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  setTimeout(() => {
    nextSlide();
  }, slideDuration);

  return (
    <section
      id="#"
      className="min-h-screen w-full bg-gray-200 dark:bg-gray-900"
    >
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 border border-dashed border-green-400">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 z-10 hidden h-full text-blue-500 dark:text-blue-700 transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full object-cover bg-center bg-cover duration-500"
          ></div>
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none">
              TTGDTX
              {/* <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span> */}
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-800 dark:text-gray-100 md:text-lg">
              Race silent subject pleasant swing straw exchange account tea hit
              replace honor wash wide me establish distance clothing potatoes
              student rice raw business physical
            </p>
            <div className="flex items-center">
              <a
                href="/signin"
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
      <div className="flex flex-row bg-gray-100 dark:bg-gray-900 border border-dashed border-green-400 w-full">
        <Stats />
      </div>

      <div className="flex flex-row bg-gray-100 dark:bg-gray-900 border border-dashed border-green-400 w-full">
        <Team />
      </div>
      <div className="flex flex-col mt-3.5 bg-gray-100 dark:bg-gray-900 border border-dashed border-green-400 w-full">
        <h1 className="text-center text-blue-600 dark:text-white text-2xl uppercase font-bold mb-2">
          TIN TỨC MỚI NHẤT
        </h1>
        <Blog />
      </div>
    </section>
  );
}

export default Landing;
