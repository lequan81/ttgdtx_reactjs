import { useId } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
function DropDownButton({ title, path, isCollapsed }) {
  let location = useLocation();
  const id = useId();
  return (
    <button
      id={`hs-mega-menu-basic-dr-${id}`}
      type="button"
      className={`flex items-center font-medium ${
        isCollapsed
          ? `w-fit text-gray-800 dark:text-gray-200 text-sm ${
              location.pathname.includes(path)
                ? "text-blue-600 dark:text-gray-200 border-b-[3px] border-blue-500"
                : ""
            }`
          : `md:mx-1.5 sm:mx-1 md:text-xs xl:text-base sm:relative w-fit sm:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:transition after:duration-300 after:origin-left ${
              location.pathname.includes(path)
                ? "text-blue-600 dark:text-gray-200 after:scale-x-100"
                : "after:scale-x-0 after:group-hover:scale-x-100 dark:group-hover:text-gray-200 group-hover:text-blue-600"
            }`
      }`}
    >
      <div className="inline-flex w-fit items-center">
        <span>{title}</span>
        <ChevronDownIcon
          className="ml-1.5 w-2.5 h-2.5"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          fill="none"
        />
      </div>
    </button>
  );
}

export default DropDownButton;
