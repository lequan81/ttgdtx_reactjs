import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import useScrollToTop from "../../hook/useScrollToTop";

const ScrollToTopBtn = () => {
  const { shown, scrollToTop } = useScrollToTop(300);

  return (
    <button
      id="scroll-to-top-btn"
      className={`${
        shown ? "scale-100" : "scale-0"
      } w-12 h-12 transition-transform duration-200 flex fixed right-6 bottom-10 bg-blue-500 rounded-full text-white justify-center items-center shadow shadow-gray-500 dark:shadow-none`}
      onClick={scrollToTop}
    >
      <ArrowSmallUpIcon className="h-7 w-7" strokeWidth={2} />
    </button>
  );
};

export default ScrollToTopBtn;
