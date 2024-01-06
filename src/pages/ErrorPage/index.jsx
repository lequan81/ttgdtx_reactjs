import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 flex flex-col grow">
        <div className="my-auto h-full w-full">
          <h1 className="block sm:text-8xl font-bold text-gray-800 text-6xl dark:text-white animate__animated animate__zoomIn animate__fast">
            404
          </h1>
          <p className="antialiased hover:subpixel-antialiased sm:text-xl text-base mt-6 text-gray-700 dark:text-gray-300 animate__animated animate__zoomIn">
            Rất tiếc, trang bạn tìm kiếm không tồn tại!
          </p>
          <div className="flex items-center justify-center w-full gap-x-6 py-2 dark:text-gray-400 text-gray-700 mt-2.5">
            <Button
              title={"Quay lại"}
              type={"button"}
              onClickHandle={() => navigate(0)}
              isIcon={true}
              isLoading={false}
              icon={
                <ArrowLeftIcon
                  className="w-5 h-5 rtl:rotate-180"
                  strokeWidth={2}
                />
              }
            />
            <Button
              title={"Trang chủ"}
              type={"button"}
              onClickHandle={() => navigate("/")}
              isIcon={false}
              isLoading={false}
              isBold={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
