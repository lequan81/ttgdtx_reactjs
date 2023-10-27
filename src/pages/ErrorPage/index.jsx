import {
  ArrowLeftIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex flex-col max-h-screen my-auto bg-gray-100 dark:bg-gray-900 w-full">
        <div className="flex items-center justify-center flex-col">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <p className="p-1.5 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
              <ExclamationCircleIcon className="w-9 h-9" strokeWidth={2} />
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Không tìm thấy trang
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Trang bạn đang tìm kiếm không tồn tại
            </p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <button
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <ArrowLeftIcon
                  className="w-4 h-4 rtl:rotate-180"
                  strokeWidth={2}
                />

                <span className="font-medium">Quay lại</span>
              </button>

              <Link
                to="/"
                className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
              >
                <span className="font-medium">Về Trang chủ</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
