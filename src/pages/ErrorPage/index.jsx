import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useTitle } from "../../hook/useTitle";

export function ErrorPage({ errorCode = "404" }) {
  useTitle(
    errorCode.toString().match("404")
      ? "Rất tiếc, trang bạn tìm kiếm không tồn tại!"
      : errorCode.toString().match("500")
      ? "Rất tiếc, hệ thống gặp lỗi. Vui lòng quay lại trong ít phút nữa"
      : ""
  );
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 flex flex-col grow">
        <div className="my-auto h-full w-full">
          <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
            {errorCode}
          </h1>
          <p className="text-xl mt-6 text-gray-600 dark:text-gray-300">
            {errorCode.toString().match("404") &&
              "Rất tiếc, trang bạn tìm kiếm không tồn tại!"}
            {errorCode.toString().match("500") &&
              "Rất tiếc, hệ thống gặp lỗi. Vui lòng quay lại trong ít phút nữa"}
          </p>
          <div className="mt-12 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <button
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:ring-offset-slate-900"
              onClick={() => navigate(-1)}
            >
              <ArrowLeftIcon className="w-4 h-4" stroke="currentColor" />
              Quay lại trang trước
            </button>
            <Link
              className="flex items-center justify-center py-2 px-3 border border-transparent font-medium text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
              to="/"
            >
              Trang chủ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
