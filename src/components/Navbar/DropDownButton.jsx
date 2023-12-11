import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
function DropDownButton({ title, path }) {
  let location = useLocation();
  return (
    <>
      <button
        id="hs-mega-menu-basic-dr"
        type="button"
        className="flex items-center font-medium text-base mx-1.5 group"
      >
        <span
          className={`transition-colors duration-colors border-b-[3px] ${
            location.pathname.includes(path)
              ? "text-gray-800 dark:text-gray-200 border-blue-500"
              : "border-transparent hover:text-gray-800 transform dark:group-hover:text-gray-200 group-hover:border-blue-500"
          }`}
        >
          {title}
        </span>
        <ChevronDownIcon
          className={`ml-2 w-2.5 h-2.5 group-focus:text-gray-700 dark:group-focus:text-gray-100 ${
            location.pathname.includes(path)
              ? "text-gray-800 dark:text-gray-200"
              : "dark:group-hover:text-gray-200 group-hover:text-gray-700"
          }`}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </button>
    </>
  );
}

export default DropDownButton;
