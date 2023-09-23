import React from "react";

function Stats() {
  return (
    <>
      <div className="flex flex-col w-full mt-2">
        <div className="px-6 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <h1 className="text-center text-blue-600 dark:text-white text-3xl uppercase font-bold mb-2">
            VÌ SAO HƠN 50.000 HỌC VIÊN LỰA CHỌN TTGDTX?
          </h1>
          <div className="grid row-gap-8 sm:grid-cols-3 gap-x-10">
            <div className="text-center">
              <h6 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
                97%
              </h6>
              <p className="font-bold text-gray-800 dark:text-gray-200">
                Sinh viên có việc làm
              </p>
            </div>
            <div className="text-center">
              <h6 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
                8%
              </h6>
              <p className="font-bold text-gray-800 dark:text-gray-200">
                Học viên làm việc ở nước ngoài
              </p>
            </div>
            <div className="text-center">
              <h6 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
                12%
              </h6>
              <p className="font-bold text-gray-800 dark:text-gray-200">
                Học viên khởi nghiệp
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full text-gray-900 dark:text-white">
            <div className="flex bg-gray-300 dark:bg-gray-800 rounded p-3">
              {/* <div className="pt-1 mr-4 text-center">
                <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                  <p className="text-sm text-blue-gray-700">Jul</p>
                </div>
                <div className="px-2">
                  <p className="text-lg font-bold">18</p>
                </div>
              </div> */}
              <div>
                <div className="mb-2">
                  <a
                    href="/"
                    className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-blue-600 dark:text-white"
                    aria-label="Category"
                    title="Delevopment"
                  >
                    Trưởng phòng Marketing
                  </a>
                </div>
                <div className="mb-2">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Vì sao tôi thích TTGDTX
                  </a>
                </div>
                <p className="mb-5 text-gray-800 dark:text-gray-300">
                  Những năm tháng học ở TTGDTX sẽ là những kỉ niệm khó quên nhất
                  trong sự nghiệp học tập của tôi...
                </p>
                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="Author"
                    title="Author"
                    className="mr-3"
                  >
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt="avatar"
                      className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                  </a>
                  <div>
                    <a
                      href="/"
                      aria-label="Author"
                      title="Author"
                      className="font-semibold text-gray-800 dark:text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Minh
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                      Author
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex bg-gray-300 dark:bg-gray-800 rounded p-3">
              {/* <div className="pt-1 mr-4 text-center">
                <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                  <p className="text-sm text-blue-gray-700">May</p>
                </div>
                <div className="px-2">
                  <p className="text-lg font-bold">6</p>
                </div>
              </div> */}
              <div>
                <div className="mb-2">
                  <a
                    href="/"
                    className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-blue-600 dark:text-white"
                    aria-label="Category"
                    title="Food &amp; Snacks"
                  >
                    Quản lý nhân sự
                  </a>
                </div>
                <div className="mb-2">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Tại sao tôi chọn TTGDTX
                  </a>
                </div>
                <p className="mb-5 text-gray-800 dark:text-gray-300">
                  Với môi trường học thoải mái, năng động cùng với những giảng
                  viên {'"'}có tâm, có tầm{'"'}, một trải nghiệm khó quên,...
                </p>
                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="Author"
                    title="Author"
                    className="mr-3"
                  >
                    <img
                      src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt="avatar"
                      className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                  </a>
                  <div>
                    <a
                      href="/"
                      aria-label="Author"
                      title="Author"
                      className="font-semibold text-gray-800 dark:text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      An
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                      Author
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex bg-gray-300 dark:bg-gray-800 rounded p-3">
              {/* <div className="pt-1 mr-4 text-center">
                <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                  <p className="text-sm text-blue-gray-700">Feb</p>
                </div>
                <div className="px-2">
                  <p className="text-lg font-bold">27</p>
                </div>
              </div> */}
              <div>
                <div className="mb-2">
                  <a
                    href="/"
                    className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-blue-600 dark:text-white"
                    aria-label="Category"
                    title="Out of this world"
                  >
                    Kiểm toán viên
                  </a>
                </div>
                <div className="mb-2">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Những kỉ niệm đẹp
                  </a>
                </div>
                <p className="mb-5 text-gray-800 dark:text-gray-300">
                  TTGDTX không chỉ là trường học, mà nó còn là nhà, là nơi lưu
                  trữ những kỉ niệm đẹp nhất của mình,...
                </p>
                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="Author"
                    title="Author"
                    className="mr-3"
                  >
                    <img
                      src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                      alt="avatar"
                      className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                  </a>
                  <div>
                    <a
                      href="/"
                      aria-label="Author"
                      title="Author"
                      className="font-semibold text-gray-800 dark:text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Anh
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                      Author
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
