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
            ? "text-white bg-blue-600 dark:text-white dark:bg-blue-600"
            : `dark:text-gray-400 text-gray-800 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white ${
                isSubmenu &&
                "focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-700"
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
