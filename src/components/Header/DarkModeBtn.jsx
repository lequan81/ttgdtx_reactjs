import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import useDarkMode from "../../hook/useDarkMode";

function DarkModeBtn() {
  const [colorTheme, setTheme] = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(
    colorTheme === "light" ? true : false
  );
  return (
    <div className="flex items-center rounded-lg h-fit sm:w-fit w-full justify-end sm:justify-normal mr-4 sm:mr-0 bg-transparent sm:hover:bg-gray-200 sm:dark:hover:bg-gray-700/50 group order-2 sm:order-3">
      <button
        type="button"
        className="block p-1.5"
        onClick={() => {
          setTheme(isDarkMode == true ? "light" : "dark");
          setIsDarkMode(!isDarkMode);
        }}
      >
        {isDarkMode ? (
          <SunIcon
            className="w-5 h-5 text-gray-700 group-hover:text-blue-600 font-medium dark:text-gray-400 dark:group-hover:text-gray-200 group-hover:rotate-180 duration-300"
            strokeWidth={2}
          />
        ) : (
          <MoonIcon
            className="w-5 h-5 text-gray-700 group-hover:text-blue-600 font-medium dark:text-gray-400 dark:group-hover:text-gray-200 group-hover:rotate-[360deg] duration-500"
            strokeWidth={2}
          />
        )}
      </button>
    </div>
  );
}

export default DarkModeBtn;
