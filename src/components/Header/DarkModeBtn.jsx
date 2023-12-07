import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import useDarkMode from "../../hook/useDarkMode";

function DarkModeBtn() {
  const [colorTheme, setTheme] = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(
    colorTheme === "light" ? true : false
  );
  return (
    <>
      <div className="flex items-center rounded-lg h-fit w-fit hover:bg-gray-200 dark:hover:bg-gray-700/50 group">
        <button
          type="button"
          className="hs-dark-mode-active:hidden block hs-dark-mode p-1.5"
          data-hs-theme-click-value="dark"
          onClick={() => {
            setTheme(isDarkMode == true ? "light" : "dark");
            setIsDarkMode(!isDarkMode);
          }}
        >
          <SunIcon
            className="w-5 h-5 text-gray-600 group-hover:text-blue-600 font-medium dark:text-gray-400 dark:group-hover:text-gray-200 group-hover:rotate-180 duration-300"
            strokeWidth={2}
          />
        </button>
        <button
          type="button"
          className="hs-dark-mode-active:block hidden hs-dark-mode p-1.5"
          data-hs-theme-click-value="light"
          onClick={() => {
            setTheme(isDarkMode == true ? "light" : "dark");
            setIsDarkMode(!isDarkMode);
          }}
        >
          <MoonIcon
            className="w-5 h-5 text-gray-600 group-hover:text-blue-600 font-medium dark:text-gray-400 dark:group-hover:text-gray-200 group-hover:rotate-[360deg] duration-500"
            strokeWidth={2}
          />
        </button>
      </div>
    </>
  );
}

export default DarkModeBtn;
