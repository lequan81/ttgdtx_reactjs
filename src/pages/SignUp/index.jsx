import SignUpInput from "./SignUpInput";

export function SignUp() {
  return (
    <section className="flex flex-col flex-grow h-full items-center justify-start bg-gray-100 dark:bg-gray-900 w-full">
      <div className="flex items-center justify-center flex-col mt-14">
        <h1 className="text-center text-blue-600 dark:text-white text-2xl uppercase font-bold mb-2 mt-2">
          Thông tin đăng ký
        </h1>
        <p className="text-center leading-relaxed text-lg text-gray-800 dark:text-gray-200">
          Vui lòng điền tất cả thông tin vào các ô trống
        </p>
      </div>
      <div className="shadow-md rounded px-8 mx-auto my-8 flex flex-col w-full max-w-4xl">
        <div className="md:flex mb-4">
          <div className="md:w-1/2 px-3">
            <label
              className="block leading-7 text-sm text-gray-600 dark:text-gray-200 font-medium mb-0.5"
              htmlFor="firstname"
            >
              Họ và Tên
              <span className="text-red-500"> *</span>
            </label>
            <input
              className="block w-full mt-1 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded-sm border border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="firstname"
              type="text"
              placeholder="John Doe"
            />
            <p className="text-red-500 dark:text-red-600 mt-1 text-xs italic">
              {/* * Please fill out this field. */}
            </p>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block leading-7 text-sm text-gray-600 dark:text-gray-200 font-medium mb-0.5"
              htmlFor="email"
            >
              Email
              <span className="text-red-500"> *</span>
            </label>
            <input
              className="block w-full mt-1 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded-sm border border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="email"
              type="text"
              placeholder="info@email.com"
            />
            <p className="text-red-500 dark:text-red-600 mt-1 text-xs italic">
              {/* * Please fill out this field. */}
            </p>
          </div>
        </div>
        <div className="md:flex mb-6">
          <div className="md:w-2/4 px-3">
            <label
              className="block leading-7 text-sm text-gray-600 dark:text-gray-200 font-medium mb-0.5"
              htmlFor="address"
            >
              Địa chỉ
              <span className="text-red-500"> *</span>
            </label>
            <input
              className="block w-full mt-1 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded-sm border border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="address"
              type="text"
              placeholder="Hai Bà Trưng, Hà Nội"
            />
            <p className="text-red-500 dark:text-red-600 mt-1 text-xs italic">
              {/* * Please fill out this field. */}
            </p>
          </div>
          <div className="md:w-1/4 px-3">
            <label
              className="block leading-7 text-sm text-gray-600 dark:text-gray-200 font-medium mb-0.5"
              htmlFor="phone"
            >
              Số điện thoại
              <span className="text-red-500"> *</span>
            </label>
            <input
              className="block w-full mt-1 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded-sm border border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="phone"
              type="text"
              placeholder="789-012-3456"
            />
            <p className="text-red-500 dark:text-red-600 mt-1 text-xs italic">
              {/* * Please fill out this field. */}
            </p>
          </div>
          <div className="md:w-1/4 px-3">
            <label
              className="block leading-7 text-sm text-gray-600 dark:text-gray-200 font-medium mb-0.5"
              htmlFor="lesson"
            >
              Khóa học
              <span className="text-red-500"> *</span>
            </label>
            <select className="appearance-none block w-full mt-1 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded-sm border border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option>Điện tử</option>
              <option>Viễn thông</option>
              <option>Nông nghiệp</option>
            </select>
            <p className="text-red-500 dark:text-red-600 mt-1 text-xs italic">
              {/* * Please fill out this field. */}
            </p>
          </div>
        </div>
        <div className="flex items-center px-3">
          <button className="flex items-center justify-center py-2 px-3 mr-4 font-medium text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none">
            Đăng ký
          </button>
        </div>
      </div>
    </section>
  );
}
