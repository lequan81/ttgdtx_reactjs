import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import useDarkMode from "../../hook/useDarkMode";

function DarkModeBtn() {
  const [colorTheme, setTheme] = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(
    colorTheme === "light" ? true : false
  );
  return (
    <>
      <div className="flex items-center border border-dashed border-fuchsia-500 rounded-lg h-fit w-fit hover:bg-gray-200 dark:hover:bg-gray-700/50 group">
        <button
          type="button"
          className="hs-dark-mode-active:hidden block hs-dark-mode p-1.5"
          data-hs-theme-click-value="dark"
          onClick={() => {
            setTheme(isDarkMode == true ? "light" : "dark");
            setIsDarkMode(!isDarkMode);
          }}
        >
          <SunIcon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 font-medium dark:text-gray-400 dark:group-hover:text-gray-200" />
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
          <MoonIcon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 font-medium dark:text-gray-400 dark:group-hover:text-gray-200" />
        </button>
      </div>
    </>
  );
}

export default DarkModeBtn;
