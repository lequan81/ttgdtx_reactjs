import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import useScrollToTop from "../../hook/useScrollToTop";

export const ScrollToTopBtn = () => {
  const { shown, scrollToTop } = useScrollToTop(300);

  return (
    <button
      id="scroll-to-top-btn"
      className={`${
        shown ? "scale-100" : "scale-0"
      } z-20 w-8 h-8 transition-transform duration-200 flex fixed right-6 bottom-10 bg-blue-500 rounded text-white justify-center items-center shadow shadow-gray-500 dark:shadow-none`}
      onClick={scrollToTop}
    >
      <ArrowSmallUpIcon className="h-5 w-5" strokeWidth={2} />
    </button>
  );
};
