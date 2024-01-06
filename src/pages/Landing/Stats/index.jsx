import { useEffect, useRef, useState } from "react";

function Stats() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShow(true);
          }
        });
      },
      { rootMargin: "200px 0px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return (
    <>
      <div
        ref={ref}
        className={`flex flex-col w-full ${
          show ? "animate__animated animate__slideInUp mt-6 lg:mt-2" : "mt-72"
        }`}
      >
        <div className="container px-6 md:py-8 py-6 mx-auto">
          <div className="text-center">
            <h1
              className={`text-center text-blue-600 dark:text-blue-500 text-lg xl:text-xl uppercase font-bold mb-2 mt-2 ${
                show
                  ? "animate__animated animate__zoomIn animate__fast"
                  : "mt-40"
              }`}
            >
              Vì sao hơn 3.000 học viên lựa chọn Trung tâm GDNN-GDTX Vĩnh Cửu
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 xl:gap-x-8 xl:gap-y-0 gap-x-0 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <p
              className={`${
                show ? "[--num:87]" : "[--num:0]"
              } antialiased hover:subpixel-antialiased tabular-nums transition-[_--num] duration-[3s] ease-in-out transform delay-100 [counter-set:_num_var(--num)] supports-[counter-set]:before:content-[counter(num)] text-2xl xl:text-3xl font-bold text-blue-600 dark:text-blue-500`}
            >
              <span className="supports-[counter-set]:sr-only">87</span>%
            </p>
            <p className="antialiased hover:subpixel-antialiased font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base xl:text-lg">
              Học viên có việc làm
            </p>
          </div>
          <div className="text-center">
            <p
              className={`${
                show ? "[--num:199]" : "[--num:0]"
              } antialiased hover:subpixel-antialiased tabular-nums transition-[_--num] duration-[3s] ease-in-out transform delay-100 [counter-set:_num_var(--num)] supports-[counter-set]:before:content-[counter(num)] text-2xl xl:text-3xl font-bold text-blue-600 dark:text-blue-500`}
            >
              <span className="supports-[counter-set]:sr-only">199</span>+
            </p>
            <p className="antialiased hover:subpixel-antialiased font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base xl:text-lg">
              Lượt đăng ký mỗi năm
            </p>
          </div>
          <div className="text-center">
            <p
              className={`${
                show ? "[--num:2053]" : "[--num:0]"
              } antialiased hover:subpixel-antialiased tabular-nums transition-[_--num] duration-[3s] ease-in-out transform delay-100 [counter-set:_num_var(--num)] supports-[counter-set]:before:content-[counter(num)] text-2xl xl:text-3xl font-bold text-blue-600 dark:text-blue-500`}
            >
              <span className="supports-[counter-set]:sr-only">1999</span>+
            </p>
            <p className="antialiased hover:subpixel-antialiased font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base xl:text-lg">
              Học viên đã tốt nghiệp
            </p>
          </div>
          <div className="text-center">
            <p
              className={`${
                show ? "[--num:92]" : "[--num:0]"
              } antialiased hover:subpixel-antialiased tabular-nums transition-[_--num] duration-[3s] ease-in-out transform delay-100 [counter-set:_num_var(--num)] supports-[counter-set]:before:content-[counter(num)] text-2xl xl:text-3xl font-bold text-blue-600 dark:text-blue-500`}
            >
              <span className="supports-[counter-set]:sr-only">92</span>%
            </p>
            <p className="antialiased hover:subpixel-antialiased font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base xl:text-lg">
              Học viên đậu đại học
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
