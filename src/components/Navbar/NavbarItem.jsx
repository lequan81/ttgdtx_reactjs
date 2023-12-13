import { NavLink, useLocation } from "react-router-dom";

function NavbarItem({ title, path, isSubmenu, isCollapsed = false }) {
  const location = useLocation();
  return isCollapsed ? (
    <a
      className={`font-medium max-w-fit text-sm ${
        isSubmenu
          ? `px-2 py-1 my-1 ${
              location.pathname === path
                ? "bg-blue-600 rounded text-white"
                : "text-gray-900 dark:text-white"
            }`
          : "border-b-[3px] text-gray-900 dark:text-white"
      } ${
        location.pathname === path
          ? "text-gray-800 dark:text-gray-200 border-blue-500"
          : "border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
      }`}
      href={path}
    >
      {title}
    </a>
  ) : (
    <NavLink
      className={({ isActive }) =>
        `hidden sm:flex ${
          isSubmenu
            ? `items-center px-2.5 h-10 my-0.5 rounded text-sm focus:ring-2 focus:ring-blue-500 ${
                isActive
                  ? "bg-blue-600 hover:bg-blue-500 text-white"
                  : "dark:hover:bg-gray-700 hover:bg-gray-300/70 text-gray-900 dark:text-gray-200"
              }`
            : `transition-colors duration-300 transform font-medium text-base mx-3 ${
                path === "/signup"
                  ? "border-2 py-1 px-2 group relative overflow-hidden"
                  : "border-b-[3px]"
              } ${
                isActive
                  ? `${
                      path === "/signup"
                        ? "bg-blue-500 border-none text-gray-900 dark:text-gray-200 rounded-sm"
                        : "text-gray-800 dark:text-gray-200 border-blue-500"
                    }`
                  : `${
                      path === "/signup"
                        ? "border-blue-500"
                        : "border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
                    }`
              }`
        }`
      }
      to={path}
    >
      {path === "/signup" ? (
        <div className="absolute inset-0 w-0 bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      ) : null}
      {path === "/signup" ? (
        <span className="relative group-hover:text-white">{title}</span>
      ) : (
        title
      )}
    </NavLink>
  );
}
export default NavbarItem;
