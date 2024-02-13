import ContactItem from "./ContactItem";
import data from "../../data/data.json";
import useIntersectionObserver from "@hook/useIntersectionObserver";

export default function Contact() {
  const [ref, show] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`flex flex-col w-full ${show ? "mt-6 lg:mt-2" : "mt-72"}`}
    >
      <div className="container px-6 py-0 lg:py-6 mx-auto">
        <div className="text-center">
          <h1
            className={`text-center text-blue-600 dark:text-blue-500 text-lg xl:text-xl uppercase font-bold mb-2 mt-2 ${
              show ? "animate__animated animate__zoomIn" : ""
            }`}
          >
            {data.contact[0].title}
          </h1>

          <p
            className={`antialiased hover:subpixel-antialiased mt-3 text-gray-700 dark:text-gray-400 text-sm lg:text-base ${
              show ? "animate__animated animate__fadeIn" : ""
            }`}
          >
            {data.contact[0].subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:gap-x-2 gap-y-8 lg:gap-y-0 lg:mt-10 mt-6 mb-24 sm:mb-8 space-y-4 lg:space-y-0 lg:grid-cols-3">
          {data.contact[0].children.map((item) => (
            <ContactItem
              show={show}
              key={item.title}
              isIcon={item.isIcon}
              icon={item.icon}
              title={item.title}
              subTitle={item.subTitle}
              href={item.href}
              arialLabel={item.arialLabel}
              value={item.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
