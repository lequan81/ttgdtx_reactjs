import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
function DropDownButton({ title, path, isCollapsed }) {
  let location = useLocation();
  return (
    <button
      id="hs-mega-menu-basic-dr"
      type="button"
      className={`flex items-center font-medium ${
        isCollapsed
          ? "w-fit text-gray-800 dark:text-gray-200 text-sm"
          : "md:mx-1.5 sm:mx-1 group md:text-xs xl:text-base"
      }`}
    >
      <span
        className={`transition-colors duration-colors border-b-[3px] ${
          isCollapsed ? "font-medium" : ""
        } ${
          location.pathname.includes(path)
            ? "text-gray-800 dark:text-gray-200 border-blue-500"
            : "border-transparent hover:text-gray-800 transform dark:group-hover:text-gray-200 group-hover:border-blue-500"
        }`}
      >
        {title}
      </span>
      <ChevronDownIcon
        className={`ml-1.5 w-2.5 h-2.5 group-focus:text-gray-700 dark:group-focus:text-gray-100 ${
          location.pathname.includes(path)
            ? "text-gray-800 dark:text-gray-200"
            : "dark:group-hover:text-gray-200 group-hover:text-gray-700"
        }`}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      />
    </button>
  );
}

export default DropDownButton;
