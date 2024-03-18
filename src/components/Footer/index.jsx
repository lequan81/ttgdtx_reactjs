import { NavLink } from "react-router-dom";
import { memo } from "react";
const Footer = memo(() => {
  return (
    <footer className="px-2 sm:px-4 flex flex-row justify-between py-1 mt-auto mx-auto w-full text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-700 sm:dark:bg-gray-800 bottom-0 fixed z-10 ">
      <div className="flex items-center flex-col sm:flex-row w-full">
        <p className="antialiased hover:subpixel-antialiased sm:w-1/2 w-0 flex items-center justify-start text-sm text-gray-900 dark:text-gray-300">
          <span className="hidden sm:block text-xs xl:text-sm min-w-max">
            © 2023 TTGDNN-GDTX huyện Vĩnh Cửu
          </span>
        </p>
        <ul className="flex flex-row w-full flex-grow sm:gap-x-4 mr-0 sm:mr-4 items-center justify-around sm:justify-end mb-3 sm:mb-0">
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `text-xs xl:text-sm transition-colors sm:whitespace-normal duration-300 ${
                  isActive
                    ? "text-blue-500"
                    : "dark:text-white sm:text-gray-900 sm:dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500"
                }`
              }
            >
              {`Câu hỏi \n thường gặp`}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/privacy"
              className={({ isActive }) =>
                `text-xs xl:text-sm transition-colors sm:whitespace-normal duration-300 ${
                  isActive
                    ? "text-blue-500"
                    : "dark:text-white sm:text-gray-900 sm:dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500"
                }`
              }
            >
              {`Chính sách \n bảo mật`}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statement"
              className={({ isActive }) =>
                `text-xs xl:text-sm transition-colors sm:whitespace-normal duration-300 ${
                  isActive
                    ? "text-blue-500"
                    : "dark:text-white sm:text-gray-900 sm:dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500"
                }`
              }
            >
              {`Các \n điều khoản`}
            </NavLink>
          </li>
        </ul>
        <div className="flex flex-grow md:flex-grow-0 sm:w-fit w-full flex-row items-center sm:justify-end sm:mb-0 mb-2">
          <p className="antialiased hover:subpixel-antialiased sm:hidden flex items-center w-full justify-start font-medium text-xs text-gray-900 dark:text-gray-300">
            <span>© 2023 TTGDNN-GDTX huyện Vĩnh Cửu</span>
          </p>
          <a
            className="mx-2 text-gray-900 transition-colors duration-300 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400"
            href="https://www.facebook.com/profile.php?id=100069135613333&mibextid=LQQJ4d"
            target="_blank"
            aria-label="Facebook"
            rel="noreferrer"
          >
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 xl:h-5 xl:w-5"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
