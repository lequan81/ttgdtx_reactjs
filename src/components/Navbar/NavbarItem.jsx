import { NavLink } from "react-router-dom";

function NavbarItem({ title, path, isSubmenu }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `hidden sm:flex ${
          isSubmenu
            ? `items-center px-2.5 h-10 my-0.5 rounded text-sm focus:ring-2 focus:ring-blue-500 ${
                isActive
                  ? "bg-blue-600 hover:bg-blue-500 text-white"
                  : "dark:hover:bg-gray-700 hover:bg-gray-300/70 text-gray-900 dark:text-gray-200"
              }`
            : `transition-colors duration-300 transform font-medium text-base mx-3 border-b-[3px] ${
                isActive
                  ? "text-gray-800 dark:text-gray-200 border-blue-500"
                  : "border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
              }`
        }`
      }
      to={path}
    >
      {title}
    </NavLink>
  );
}
export default NavbarItem;
