import data from "../../data/data.json";
import Navbar from "../Navbar/Navbar";
import Heading from "./Heading";
import DarkModeBtn from "./DarkModeBtn";

export function Header() {
  return (
    <header className="flex flex-row h-12 fixed z-40 top-0 w-full bg-white text-sm dark:bg-gray-800 shadow shadow-gray-300 dark:shadow-none">
      {/* <nav className="w-full mx-auto px-3.5 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between h-full grow-0">
          <a
            className="flex-none text-xl font-semibold dark:text-white ml-2"
            href="/"
          >
            {data.info[0].heading}
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded border font-medium text-base bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white"
              data-hs-collapse="#navbar-with-mega-menu"
              aria-controls="navbar-with-mega-menu"
              aria-label="Toggle navigation"
            >
              <Bars3Icon
                className="hs-collapse-open:hidden w-6 h-6"
                fill="currentColor"
              />
              <XMarkIcon
                className="hs-collapse-open:block hidden w-6 h-6"
                fill="currentColor"
              />
            </button>
          </div>
        </div>
        <div
          id="navbar-with-mega-menu"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col grow gap-1 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0">
            {data.menu.map((item, index) => {
              return item.isSubmenu ? (
                <div
                  key={index}
                  className="hs-dropdown text-base [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]"
                >
                  <button
                    id="hs-mega-menu-basic-dr"
                    type="button"
                    className={`flex items-center w-full font-medium text-base px-2.5 h-12 group ${
                      location.pathname.includes(item.path)
                        ? "text-white bg-blue-600 dark:text-white dark:bg-blue-600"
                        : "text-gray-700 focus:bg-blue-600 focus:text-gray-100 hover:text-white dark:text-gray-400 hover:bg-blue-500 dark:focus:bg-blue-600 dark:focus:text-gray-100 dark:hover:text-white"
                    }`}
                  >
                    {item.title}
                    <ChevronDownIcon
                      className={`ml-2 w-2.5 h-2.5 group-focus:text-gray-100 ${
                        location.pathname.includes(item.path)
                          ? "text-white dark:text-white"
                          : "dark:text-gray-600 group-hover:text-white dark:group-hover:text-white"
                      }`}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </button>

                  <div className="text-base hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-md px-1.5 py-1 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5 hidden">
                    {item.children.map((child, index) => (
                      <NavLinkItem
                        key={index}
                        title={child.title}
                        path={`${item.path}${child.path}`}
                        isSubmenu={true}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <NavLinkItem
                  key={index}
                  title={item.title}
                  path={`${item.path}`}
                  isSubmenu={false}
                />
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center sm:mt-0 mx-3.5">
          <button
            onClick={() => {
              setTheme(isDarkMode == true ? "light" : "dark");
              setIsDarkMode(!isDarkMode);
            }}
          >
            {isDarkMode ? (
              <SunIcon className="w-6 h-6 text-gray-300" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </nav> */}

      <nav className="w-full px-3.5 flex flex-row items-center space-x-4">
        <Heading heading={data.info[0].heading} />
        <Navbar />
        <DarkModeBtn />
      </nav>
    </header>
  );
}
