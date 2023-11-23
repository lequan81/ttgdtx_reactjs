export function Stats() {
  return (
    <>
      <div className="flex flex-col w-full mt-2">
        <div className="container px-6 py-8 mx-auto">
          <div className="text-center">
            <h1 className="text-center text-blue-600 dark:text-blue-500 text-xl uppercase font-bold mb-2 mt-2">
              Vì sao hơn 8.000 học viên lựa chọn TT GDNN-GDTX Vĩnh Cửu
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-500">
              87%
            </p>
            <p className="font-medium text-gray-800 dark:text-gray-200 text-lg">
              Học viên có việc làm
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-500">
              1.2K
            </p>
            <p className="font-medium text-gray-800 dark:text-gray-200 text-lg">
              Lượt đăng ký mỗi năm
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-500">
              7.3K
            </p>
            <p className="font-medium text-gray-800 dark:text-gray-200 text-lg">
              Học viên đã tốt nghiệp
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-500">
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
