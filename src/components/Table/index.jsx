import { XCircleIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import TableItem from "./TableItem";
import Button from "../Button";

export default function Table({ data }) {
  const navigate = useNavigate();
  return (
    <div className="container sm:px-4 px-0 mx-auto">
      <div className="flex flex-col mt-6 items-center mb-10">
        <div className="-my-2 overflow-x-auto lg:-mx-6">
          {data !== undefined ? (
            <div className="inline-block md:w-fit w-[22rem] py-2 align-middle mb-16 sm:mb-2">
              <div className="sm:overflow-hidden overflow-y-scroll md:rounded-lg border border-gray-400 dark:border-gray-700">
                <table className="table-automax-w-full divide-y divide-gray-300 dark:divide-gray-700">
                  <caption className="p-3 text-left rtl:text-right bg-white dark:bg-gray-900">
                    <h2 className=" font-medium text-gray-800 dark:text-white">
                      {data.studentName || "Không tìm thấy tên"}
                    </h2>

                    <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-300">
                      {"STT: " + data.studentId || "_"}
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {" "}
                        - {"Lớp: " + data.studentClass || "Không tìm thấy lớp"}
                      </span>
                    </p>
                  </caption>
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 sm:px-4 pl-1.5 text-sm font-normal text-left rtl:text-right text-gray-700 dark:text-gray-400"
                      >
                        Tên môn học
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 sm:pl-0 sm:pr-12 px-4 text-sm font-normal text-left rtl:text-right text-gray-700 dark:text-gray-400"
                      >
                        Kỳ I
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 sm:px-8 px-4 text-sm font-normal text-left rtl:text-right text-gray-700 dark:text-gray-400"
                      >
                        Kỳ II
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 sm:px-8 px-4 text-sm font-normal text-left rtl:text-right text-gray-700 dark:text-gray-400"
                      >
                        Thi lại
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 sm:px-8 px-4 text-sm font-normal text-left rtl:text-right text-gray-700 dark:text-gray-400"
                      >
                        Cả năm
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
                      />
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="hidden lg:flex flex-row gap-x-16">
                      <td className="py-3.5 pl-2 text-left float-left flex flex-col gap-y-4">
                        <p className="font-normal text-gray-700 dark:text-gray-300 sm:text-sm">
                          {"TB HK I: "}
                          <span className="sm:inline block float-right font-semibold text-gray-900 dark:text-gray-100 sm:text-sm">
                            {data.overall[0].avgSem1 !== -1
                              ? data.overall[0].avgSem1
                              : " -"}
                          </span>
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-300 sm:text-sm">
                          {"TB HK II: "}
                          <span className="sm:inline block font-semibold float-right text-gray-900 dark:text-gray-100 sm:text-sm">
                            {data.overall[1].avgSem2 !== -1
                              ? data.overall[1].avgSem2
                              : " -"}
                          </span>
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-300 sm:text-sm">
                          {"TB năm: "}
                          <span className="sm:inline block font-semibold float-right text-gray-900 dark:text-gray-100 sm:text-sm">
                            {data.overall[2].allYear !== -1
                              ? data.overall[2].allYear
                              : " -"}
                          </span>
                        </p>
                      </td>
                      <td className="py-3.5 text-left float-left flex flex-col gap-y-4">
                        <p className="font-normal text-gray-700 dark:text-gray-300 sm:text-sm">
                          Hạnh kiểm:
                          <span className="sm:inline block font-semibold text-gray-900 dark:text-gray-100 sm:text-sm">
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
                        <p className="font-normal text-gray-700 dark:text-gray-300 sm:text-sm">
                          Học lực:
                          <span className="sm:inline block font-semibold text-gray-900 dark:text-gray-100 sm:text-sm">
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
                        <p className="font-normal text-gray-700 dark:text-gray-300 sm:text-sm">
                          Tình trạng:
                          <span
                            className={`sm:inline block sm:px-3 px-1 sm:py-1 py-0.5 sm:ml-4 ml-0 sm:mt-0 mt-2 font-semibold text-xs sm:text-sm rounded-sm dark:bg-gray-800 ${
                              data.isGraduated
                                ? "text-emerald-500 bg-emerald-100/60"
                                : "text-red-500 bg-red-100/60"
                            }`}
                          >
                            {data.notes === 2 && "Đủ ĐK thi Tốt nghiệp THPT"}
                            {data.notes === 1 && "Được lên lớp"}
                            {data.notes === 0 && "Đang chờ xét duyệt"}
                            {data.notes === -1 && "Ở lại lớp"}
                            {data.notes === -2 &&
                              "Không đủ ĐK thi Tốt nghiệp THPT"}
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr className="lg:hidden">
                      <td className="py-3.5 pl-1.5 whitespace-nowrap text-left float-left flex flex-col gap-y-2">
                        <p className="font-normal text-gray-700 dark:text-gray-300 text-xs">
                          {"TB HK I: "}
                          <span className="font-semibold float-right text-gray-900 dark:text-gray-100 text-xs">
                            {data.overall[0].avgSem1 !== -1
                              ? data.overall[0].avgSem1
                              : " -"}
                          </span>
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-300 text-xs">
                          {"TB HK II: "}
                          <span className="font-semibold float-right text-gray-900 dark:text-gray-100 text-xs">
                            {data.overall[1].avgSem2 !== -1
                              ? data.overall[1].avgSem2
                              : " -"}
                          </span>
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-300 text-xs">
                          {"TB năm: "}
                          <span className="font-semibold float-right text-gray-900 dark:text-gray-100 text-xs">
                            {data.overall[2].allYear !== -1
                              ? data.overall[2].allYear
                              : " -"}
                          </span>
                        </p>
                      </td>
                      <td className="py-3.5 pl-1.5 whitespace-nowrap text-left float-left flex flex-col gap-y-2">
                        <div className="flex flex-row">
                          <p className="font-normal text-gray-700 dark:text-gray-300 text-xs">
                            Hạnh kiểm:
                            <span className="inline font-semibold text-gray-900 dark:text-gray-100 text-xs">
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
                        </div>
                        <div className="flex flex-row">
                          <p className="font-normal text-gray-700 dark:text-gray-300 text-xs">
                            Học lực:
                            <span className="inline font-semibold text-gray-900 dark:text-gray-100 text-xs">
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
                        </div>
                        <div className="flex flex-row">
                          <p className="font-normal text-gray-700 dark:text-gray-300 text-xs">
                            Tình trạng:
                            <span
                              className={`block px-1.5 mt-2 font-medium text-xs sm:rounded-2xl rounded-sm dark:bg-gray-800 ${
                                data.isGraduated
                                  ? "text-emerald-500 bg-emerald-100/60"
                                  : "text-red-500 bg-red-100/60"
                              }`}
                            >
                              {data.notes === 2 && "Được thi Tốt nghiệp THPT"}
                              {data.notes === 1 && "Được lên lớp"}
                              {data.notes === 0 && "Đang chờ xét duyệt"}
                              {data.notes === -1 && "Ở lại lớp"}
                              {data.notes === -2 &&
                                "Không được thi Tốt nghiệp THPT"}
                            </span>
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="flex items-center justify-start sm:w-3/12 w-full py-2 dark:text-gray-400 text-gray-700 group mt-2.5">
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
              </div>
            </div>
          ) : (
            <div className="flex items-center mt-6 text-center border rounded-lg h-fit dark:border-gray-700">
              <div className="flex flex-col w-full px-4 py-8 mx-auto">
                <div className="p-1.5 sm:p-2 mx-auto text-red-500 bg-red-100 rounded-full dark:bg-gray-800">
                  <XCircleIcon
                    strokeWidth={2}
                    fill="none"
                    stroke="currentColor"
                    className="sm:w-8 sm:h-8 h-7 w-7"
                  />
                </div>
                <h1 className="mt-3 text-lg text-gray-800 dark:text-white">
                  Không tìm thấy dữ liệu!
                </h1>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Vui lòng kiểm tra lại tên lớp và số thứ tự trong lớp của bạn
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
