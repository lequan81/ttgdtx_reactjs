import { NavLink, useLocation } from "react-router-dom";

function NavbarItem({ title, path, isSubmenu, isCollapsed = false }) {
  const location = useLocation();

  return (
    <NavLink
      to={path}
      reloadDocument={isCollapsed}
      className={({ isActive }) =>
        `${
          isCollapsed
            ? `font-medium text-sm ${
                isSubmenu
                  ? `w-full px-2 py-1.5 my-1 ${
                      isActive
                        ? "bg-blue-600 rounded text-white"
                        : "text-gray-900 dark:text-white"
                    }`
                  : `max-w-fit ${
                      path === "/signup"
                        ? "border-none px-2 py-1.5 bg-blue-600 text-white"
                        : `text-gray-900 dark:text-white ${
                            isActive ||
                            (location.pathname.split("/")[1] === "recently" &&
                              path === "/")
                              ? "border-b-[3px] border-blue-500"
                              : "border-none"
                          }`
                    }`
              }`
            : `${
                isSubmenu
                  ? `hidden sm:flex md:text-xs xl:text-sm items-center sm:px-1.5 md:px-2.5 h-8 xl:h-10 my-0.5 rounded focus:ring-2 focus:ring-blue-500 ${
                      isActive
                        ? "bg-blue-600 hover:bg-blue-500 text-white"
                        : "dark:hover:bg-gray-700 hover:bg-gray-300/70 text-gray-900 dark:text-gray-200 hover:text-blue-700"
                    }`
                  : `md:text-xs xl:text-base transition-colors duration-300 transform font-medium sm:mx-1.5 ${
                      path === "/signup"
                        ? `px-2 py-1 ${
                            isActive
                              ? "bg-sky-600 text-white border-blue-500"
                              : "group relative transform transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-white"
                          }`
                        : `sm:relative w-fit sm:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:transition after:duration-300 after:origin-left ${
                            isActive ||
                            (location.pathname.split("/")[1] === "recently" &&
                              path === "/")
                              ? "text-blue-600 dark:text-gray-200 after:scale-x-100"
                              : "dark:hover:text-gray-200 hover:text-blue-600 after:scale-x-0 after:hover:scale-x-100"
                          }`
                    }`
              }`
        }`
      }
    >
      {path === "/signup" && isCollapsed === false ? (
        <>
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-sky-600 group-hover:w-full"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-sky-600 group-hover:w-full"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-sky-600 group-hover:h-full"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-sky-600 group-hover:h-full"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-sky-600 opacity-0 group-hover:opacity-100"></span>
          <span className="relative group-hover:delay-300 duration-300 group-hover:text-white">
            {title}
          </span>
        </>
      ) : (
        <span>{title}</span>
      )}
    </NavLink>
  );
}
export default NavbarItem;
