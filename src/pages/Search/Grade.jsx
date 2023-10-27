export function Grade() {
  return (
    <section className="flex flex-col flex-grow h-full items-center justify-start bg-gray-100 dark:bg-gray-900 w-full">
      <div className="flex items-center justify-center flex-col mt-14">
        <h1 className="text-center text-blue-600 dark:text-white text-2xl uppercase font-bold mb-2 mt-2">
          Tra cứu điểm thi
        </h1>
        <p className="text-center leading-relaxed text-lg text-gray-800 dark:text-gray-200">
          Vui lòng nhập mã số sinh viên của bạn
        </p>
      </div>
      <div className="shadow-md rounded px-8 mx-auto my-8 flex flex-col w-full max-w-4xl">
        <div className="md:flex flex-row items-center justify-center">
          <div className="w-full mx-auto">
            <label
              className="flex items-center justify-center w-1/2 leading-7 text-sm text-gray-600 dark:text-gray-200 font-medium mb-0.5"
              htmlFor="mssv"
            >
              Mã số sinh viên
              <span className="text-red-500"> *</span>
            </label>
            <div className="flex gap-x-8 items-center justify-center">
              <input
                className="block w-1/2 mt-1 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded-sm border border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="mssv"
                type="text"
                placeholder="SV78901234"
              />
              <button className="inline-flex items-center justify-center mt-1 py-2 px-3 font-medium text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none">
                Tra cứu
              </button>
            </div>

            <p className="text-red-500 dark:text-red-600 mt-1 text-xs italic">
              {/* * Please fill out this field. */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
