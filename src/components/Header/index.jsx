import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isTuyenSinhActive, setIsTuyenSinhActive] = useState(false);
  const [isTraCuuActive, setIsTraCuuActive] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("/tuyen-sinh/")) {
      setIsTuyenSinhActive(true);
    } else {
      setIsTuyenSinhActive(false);
    }
    if (location.pathname.includes("/tracuu/")) {
      setIsTraCuuActive(true);
    } else {
      setIsTraCuuActive(false);
    }
  }, [location.pathname, isTuyenSinhActive, isTraCuuActive]);
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap fixed z-40 top-0 w-full bg-white text-sm py-4 dark:bg-gray-800 shadow shadow-gray-300 dark:shadow-none">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="/"
          >
            FPT University
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white"
              data-hs-collapse="#navbar-with-mega-menu"
              aria-controls="navbar-with-mega-menu"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-5 h-5"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-5 h-5"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-with-mega-menu"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-blue-500"
                  : "text-base font-medium text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-white"
              }
              to="/"
              aria-current="page"
            >
              Giới thiệu
            </NavLink>

            <div className="hs-dropdown text-base [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
              <button
                id="hs-mega-menu-basic-dr"
                type="button"
                className={
                  isTuyenSinhActive
                    ? "flex items-center w-full text-blue-500 font-medium group"
                    : "flex items-center w-full text-gray-600 hover:text-blue-400 font-medium dark:text-gray-400 dark:hover:text-white group"
                }
              >
                Tuyển sinh
                <svg
                  className={
                    isTuyenSinhActive
                      ? "ml-2 w-2.5 h-2.5 text-blue-400 dark:text-white"
                      : "ml-2 w-2.5 h-2.5 dark:text-gray-600 group-hover:text-blue-400 dark:group-hover:text-white"
                  }
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>

              <div className="text-base hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5 hidden">
                <NavLink
                  onMouseEnter={() => setIsTuyenSinhActive(true)}
                  onMouseLeave={() => setIsTuyenSinhActive(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-blue-500"
                      : "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                  to="/tuyen-sinh/nh-2023"
                >
                  Năm học 2023
                </NavLink>
                <NavLink
                  onMouseOver={() => setIsTuyenSinhActive(true)}
                  onMouseLeave={() => setIsTuyenSinhActive(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-blue-500"
                      : "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                  to="/tuyen-sinh/chuong-trinh-khac"
                >
                  Các chương trình khác
                </NavLink>
              </div>
            </div>

            <div className="hs-dropdown text-base [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
              <button
                id="hs-mega-menu-basic-dr"
                type="button"
                className={
                  isTraCuuActive
                    ? "flex items-center w-full text-blue-500 font-medium group"
                    : "flex items-center w-full text-gray-600 hover:text-blue-400 font-medium dark:text-gray-400 dark:hover:text-white group"
                }
              >
                Tra cứu
                <svg
                  className={
                    isTraCuuActive
                      ? "ml-2 w-2.5 h-2.5 text-blue-400 dark:text-white"
                      : "ml-2 w-2.5 h-2.5 dark:text-gray-600 group-hover:text-blue-400 dark:group-hover:text-white"
                  }
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>

              <div className="text-base hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5 hidden">
                <NavLink
                  onMouseEnter={() => setIsTraCuuActive(true)}
                  onMouseLeave={() => setIsTraCuuActive(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-blue-500"
                      : "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                  to="/tracuu/ket-qua-hoc-tap"
                >
                  Kết quả học tập
                </NavLink>
                <NavLink
                  onMouseEnter={() => setIsTraCuuActive(true)}
                  onMouseLeave={() => setIsTraCuuActive(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-blue-500"
                      : "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                  to="/tracuu/hoat-dong-ngoai-khoa"
                >
                  Hoạt động ngoại khóa
                </NavLink>
              </div>
            </div>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-blue-500"
                  : "text-base font-medium text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-white"
              }
              to="/dao-tao-ngan-han"
            >
              Đào tạo ngắn hạn
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-blue-500"
                  : "text-base font-medium text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-white"
              }
              to="/su-kien"
            >
              Sự kiện
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-blue-500"
                  : "text-base font-medium text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-white"
              }
              to="/signin"
            >
              Đăng ký
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-blue-500"
                  : "text-base font-medium text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-white"
              }
              to="/activities"
            >
              Hoạt động khác
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
