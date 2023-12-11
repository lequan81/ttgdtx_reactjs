export function Stats() {
  return (
    <>
      <div className="flex flex-col w-full mt-2">
        <div className="container px-6 sm:py-8 py-4 mx-auto">
          <div className="text-center">
            <h1 className="text-center text-blue-600 dark:text-blue-500 text-lg sm:text-xl uppercase font-bold mb-2 mt-2">
              Vì sao hơn 3.000 học viên lựa chọn Trung tâm GDNN-GDTX Vĩnh Cửu
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:gap-x-8 sm:gap-y-0 gap-x-0 gap-y-8 sm:grid-cols-4">
          <div className="text-center">
            <p className="text-lg sm:text-3xl font-bold text-blue-600 dark:text-blue-500">
              87%
            </p>
            <p className="font-medium text-gray-800 dark:text-gray-200 text-lg">
              Học viên có việc làm
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg sm:text-3xl font-bold text-blue-600 dark:text-blue-500">
              200+
            </p>
            <p className="font-medium text-gray-800 dark:text-gray-200 text-lg">
              Lượt đăng ký mỗi năm
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg sm:text-3xl font-bold text-blue-600 dark:text-blue-500">
              1K+
            </p>
            <p className="font-medium text-gray-800 dark:text-gray-200 text-lg">
              Học viên đã tốt nghiệp
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg sm:text-3xl font-bold text-blue-600 dark:text-blue-500">
              92%
            </p>
            <p className="font-medium text-gray-800 dark:text-gray-200 text-lg">
              Học viên đậu đại học
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
