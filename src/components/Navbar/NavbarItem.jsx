import { NavLink } from "react-router-dom";

function NavbarItem({ title, path, isSubmenu, isCollapsed = false }) {
  return isCollapsed ? (
    <NavLink
      className={({ isActive }) =>
        `font-medium text-sm ${
          isSubmenu
            ? `w-full px-2 py-1.5 my-1 ${
                isActive
                  ? "bg-blue-600 rounded text-white"
                  : "text-gray-900 dark:text-white"
              }`
            : `max-w-fit ${
                path === "/signup"
                  ? "border-none px-2 py-1.5 bg-blue-600 text-white"
                  : "border-b-[3px] text-gray-900 dark:text-white"
              } ${
                isActive
                  ? `${
                      path === "/signup"
                        ? ""
                        : "text-gray-800 dark:text-gray-200 border-blue-500"
                    }`
                  : "border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
              }`
        }`
      }
      to={path}
      reloadDocument={true}
    >
      {title}
    </NavLink>
  ) : (
    <NavLink
      className={({ isActive }) =>
        `hidden sm:flex ${
          isSubmenu
            ? `md:text-xs xl:text-sm items-center sm:px-1.5 md:px-2.5 h-8 xl:h-10 my-0.5 rounded focus:ring-2 focus:ring-blue-500 ${
                isActive
                  ? "bg-blue-600 hover:bg-blue-500 text-white"
                  : "dark:hover:bg-gray-700 hover:bg-gray-300/70 text-gray-900 dark:text-gray-200"
              }`
            : `md:text-xs xl:text-base transition-colors duration-300 transform font-medium sm:mx-1.5 md-mx-3 border-b-[3px] ${
                path === "/signup"
                  ? "group relative border-[3px] transform transition-all duration-300 px-2 py-1"
                  : ""
              } ${
                isActive
                  ? `${
                      path === "/signup"
                        ? "bg-sky-600 text-white border-blue-500"
                        : "text-gray-800 dark:text-gray-200 border-blue-500"
                    }`
                  : `border-transparent ${
                      path === "/signup"
                        ? "group-hover:text-gray-800 dark:group-hover:text-white"
                        : "hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 transition-colors transform duration-300"
                    }`
              }`
        }`
      }
      to={path}
    >
      {path === "/signup" ? (
        <>
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-sky-600 group-hover:w-full"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-sky-600 group-hover:w-full"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-sky-600 group-hover:h-full"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-sky-600 group-hover:h-full"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-sky-600 opacity-0 group-hover:opacity-100"></span>
        </>
      ) : null}
      <span
        className={`${
          path === "/signup"
            ? "relative group-hover:delay-300 duration-300 group-hover:text-white"
            : ""
        }`}
      >
        {title}
      </span>
    </NavLink>
  );
}
export default NavbarItem;
