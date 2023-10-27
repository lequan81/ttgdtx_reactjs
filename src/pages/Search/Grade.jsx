export function Grade() {
  return (
    <section className="flex flex-col flex-grow h-full items-center justify-start bg-gray-100 dark:bg-gray-900 w-full mt-12">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-blue-600 dark:text-white text-2xl uppercase font-bold mb-2 mt-2">
          Tra cứu điểm thi
        </h1>
        <p className="text-center leading-relaxed text-lg text-gray-800 dark:text-gray-200">
          Vui lòng nhập mã số sinh viên của bạn
        </p>
      </div>
      <div className="shadow-md transition-shadow shadow-gray-400 dark:shadow-none rounded px-6 mt-4 py-6 justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-none flex flex-row gap-x-3 max-w-3xl">
        <div className="relative flex flex-col items-start grow">
          <label
            htmlFor="grade"
            className="leading-7 text-sm text-gray-600 dark:text-gray-200"
          >
            Mã số sinh viên
            <span className="text-red-500"> *</span>
          </label>
          <input
            required={true}
            type="text"
            id="grade"
            name="grade"
            placeholder="SV7890123456"
            className="placeholder:text-gray-500 dark:placeholder:text-gray-400 block w-full mt-1 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded-sm border border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="flex items-end">
          <button className="flex items-center justify-center py-2 px-3 border border-transparent font-medium text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none">
            Tra cứu
          </button>
        </div>
      </div>
    </section>
  );
}
