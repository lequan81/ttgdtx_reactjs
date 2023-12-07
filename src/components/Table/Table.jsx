import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import TableItem from "./TableItem";

export function Table({ data }) {
  console.log(data);
  return (
    <div className="container px-4 mx-auto">
      <div className="flex flex-col mt-6 items-center mb-14">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          {data !== undefined ? (
            <div className="inline-block w-fit py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden md:rounded-lg border border-gray-400 dark:border-gray-700">
                <table className="max-w-full divide-y divide-gray-300 dark:divide-gray-700">
                  <caption className="p-3 text-left rtl:text-right bg-white dark:bg-gray-900">
                    <h2 className=" font-medium text-gray-800 dark:text-white">
                      {data.studentName || "Không tìm thấy tên"}
                    </h2>

                    <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-300">
                      {"STT: " + data.studentId || "_"}
                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        {" "}
                        - {"Lớp: " + data.studentClass || "Không tìm thấy lớp"}
                      </span>
                      <button className="ml-52 px-3 py-1 rounded-sm cursor-pointer dark:bg-blue-600 text-white bg-blue-500 hover:bg-blue-400 dark:hover:bg-blue-500">
                        Báo sai thông tin
                      </button>
                    </p>
                  </caption>
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Tên môn học
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 pl-24 pr-12 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Kỳ I
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-8 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Kỳ II
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-8 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Thi lại
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-8 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Cả năm
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 pl-12 pr-72 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Ghi chú
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300 dark:divide-gray-700 dark:bg-gray-900">
                    {data.grades.map((grade) => (
                      <TableItem
                        key={grade.subject}
                        title={grade.subject}
                        markSem1={grade.markSem1}
                        markSem2={grade.markSem2}
                        markRetake={grade.markRetake}
                        avgYear={grade.avgYear}
                        notes={grade.notes}
                      />
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th
                        scope="row"
                        className="py-3.5 px-4 text-left float-left flex flex-row gap-x-4"
                      >
                        <p className="font-normal text-gray-500 dark:text-gray-300">
                          TB HK I:
                          <span className="font-semibold text-gray-900 dark:text-gray-100">
                            {data.overall[0].avgSem1 !== -1
                              ? data.overall[0].avgSem1
                              : " -"}
                          </span>
                        </p>
                        <p className="font-normal text-gray-500 dark:text-gray-300">
                          TB HK II:
                          <span className="font-semibold text-gray-900 dark:text-gray-100">
                            {data.overall[1].avgSem2 !== -1
                              ? data.overall[1].avgSem2
                              : " -"}
                          </span>
                        </p>
                        <p className="font-normal text-gray-500 dark:text-gray-300">
                          TB Cả năm:
                          <span className="font-semibold text-gray-900 dark:text-gray-100">
                            {data.overall[2].allYear !== -1
                              ? data.overall[1].avgSem2
                              : " -"}
                          </span>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-3.5 px-4 text-left float-left flex flex-col gap-y-2"
                      >
                        <p className="font-normal text-gray-500 dark:text-gray-300">
                          Hạnh kiểm:
                          <span className="font-semibold text-gray-900 dark:text-gray-100">
                            {data.status[0].conduct
                              .toString()
                              .trim()
                              .toLowerCase() === "t" && " Tốt"}
                            {data.status[0].conduct
                              .toString()
                              .trim()
                              .toLowerCase() === "k" && " Khá"}
                            {data.status[0].conduct
                              .toString()
                              .trim()
                              .toLowerCase() === "tb" && " Trung bình"}
                            {data.status[0].conduct
                              .toString()
                              .trim()
                              .toLowerCase() === "y" && " Yếu"}
                            {data.status[0].conduct === -1 && " -"}
                          </span>
                        </p>
                        <p className="font-normal text-gray-500 dark:text-gray-300">
                          Học lực:
                          <span className="font-semibold text-gray-900 dark:text-gray-100">
                            {data.status[0].capacity
                              .toString()
                              .trim()
                              .toLowerCase() === "tb" && " Trung bình"}
                            {data.status[0].capacity
                              .toString()
                              .trim()
                              .toLowerCase() === "k" && " Khá"}
                            {data.status[0].capacity
                              .toString()
                              .trim()
                              .toLowerCase() === "y" && " Yếu"}
                            {data.status[0].capacity
                              .toString()
                              .trim()
                              .toLowerCase() === "g" && " Giỏi"}
                            {data.status[0].capacity === -1 && " -"}
                          </span>
                        </p>
                        <p className="font-normal text-gray-500 dark:text-gray-300">
                          Tình trạng:
                          <span
                            className={`inline px-3 py-1 ml-4 font-medium rounded-2xl gap-x-2 dark:bg-gray-800 ${
                              data.isGraduated
                                ? "text-emerald-500 bg-emerald-100/60"
                                : "text-red-500 bg-red-100/60"
                            }`}
                          >
                            {data.notes !== -1
                              ? data.notes
                              : "Không đủ ĐK thi THPT"}
                          </span>
                        </p>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          ) : (
            <div className="flex items-center mt-6 text-center border rounded-lg h-fit dark:border-gray-700">
              <div className="flex flex-col w-full px-4 py-8 mx-auto">
                <div className="p-3 mx-auto text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                  <QuestionMarkCircleIcon
                    strokeWidth={2}
                    fill="none"
                    stroke="currentColor"
                    className="w-8 h-8"
                  />
                </div>
                <h1 className="mt-3 text-lg text-gray-800 dark:text-white">
                  Không tìm thấy dữ liệu!
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Vui lòng kiểm tra lại tên lớp và số thứ tự trong lớp của bạn
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div className="flex items-center justify-between mt-6">
        <a
          href="#"
          className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <span>previous</span>
        </a>

        <div className="items-center hidden md:flex gap-x-3">
          <a
            href="#"
            className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
          >
            1
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            2
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            3
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            ...
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            12
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            13
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            14
          </a>
        </div>

        <a
          href="#"
          className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <span>Next</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div> */}
    </div>
  );
}
