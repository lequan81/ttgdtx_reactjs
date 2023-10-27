import { NavLink } from "react-router-dom";

function NavLinkItem({ title, path, isSubmenu = false }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex items-center px-2.5 ${
          isSubmenu
            ? "h-10 my-0.5 rounded text-sm"
            : "h-12 text-base font-medium"
        } ${
          isActive
            ? "text-gray-100 bg-blue-600"
            : `dark:text-gray-400 dark:hover:text-white hover:bg-gray-700 ${
                isSubmenu
                  ? "text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-700"
                  : "text-gray-600 hover:text-blue-400"
              }`
        }`
      }
      to={path}
    >
      {title}
    </NavLink>
  );
}

export default NavLinkItem;
