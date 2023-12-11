import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavbarItem from "./NavbarItem";
import DropDownMenu from "./DropDownMenu";
import data from "../../data/data.json";
export default function Navbar() {
  return (
    <>
      <div className="sm:hidden flex w-full justify-end items-center order-2">
        <button
          type="button"
          className="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-gray-300 dark:border-gray-700 text-gray-900 hover:text-blue-500 hover:bg-gray-200 dark:text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none"
          data-hs-collapse="#navbar-collapse-with-animation"
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
        >
          <Bars3Icon
            className="hs-collapse-open:hidden flex-shrink-0 w-5 h-5"
            strokeWidth={2}
          />
          <XMarkIcon
            className="hs-collapse-open:block hidden flex-shrink-0 w-5 h-5"
            strokeWidth={2}
          />
        </button>
      </div>

      <div className="sm:hidden top-12 w-full fixed z-10">
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse dark:hs-collapse-open:bg-gray-900/[.98] hs-collapse-open:bg-white hs-collapse-close:bg-transparent p-4 hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            {data.menu.map((item) => {
              return item.isSubmenu ? (
                <DropDownMenu key={item.name} data={item} isCollapsed={true} />
              ) : (
                <NavbarItem
                  key={item.name}
                  title={item.title}
                  path={item.path}
                  isSubmenu={false}
                  isCollapsed={true}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="container sm:flex items-center justify-end h-full w-fit sm:w-full text-gray-700 dark:text-gray-300 order-3 sm:order-2 hs-collapse hidden">
        {data.menu.map((item) => {
          return item.isSubmenu ? (
            <DropDownMenu key={item.name} data={item} />
          ) : (
            <NavbarItem
              key={item.name}
              title={item.title}
              path={item.path}
              isSubmenu={false}
            />
          );
        })}
      </div>
    </>
  );
}
