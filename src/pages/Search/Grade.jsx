import { useState } from "react";
import { Table } from "../../components/Table";
import { useTitle } from "../../hook/useTitle";
import GradeItem from "./GradeItem";
import { getStudentGrade } from "../../services/getStudentGrade";

export function Grade() {
  useTitle("Tra cứu | Tra cứu điểm thi");

  const [error, setError] = useState({
    classNameErr: { isValid: true, message: String },
    studentIdErr: { isValid: true, message: String },
  });

  const [studentData, setStudentData] = useState({});

  const [classGradeList, setClassGradeList] = useState({
    studentId: String,
    className: String,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isExist, setIsExist] = useState(false);

  const handleChange = (e) =>
    setClassGradeList((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let errorCode = await getStudentGrade(
      classGradeList.className,
      classGradeList.studentId
    );
    console.log(errorCode);
    if (typeof errorCode === "number") {
      switch (errorCode) {
        case -1: {
          setIsLoading(false);
          setError({
            classNameErr: {
              isValid: false,
              message: "Tên lớp không hợp lệ.\n Vui lòng thử lại!",
            },
            studentIdErr: {
              isValid: false,
              message: "Số thứ tự không hợp lệ. \n Vui lòng thử lại!",
            },
          });
          break;
        }
        case -2: {
          setIsLoading(false);
          setError({
            classNameErr: {
              isValid: false,
              message: "Tên lớp không hợp lệ.\n Vui lòng thử lại!",
            },
            studentIdErr: {
              isValid: true,
              message: "",
            },
          });
          break;
        }
        case -3: {
          setIsLoading(false);
          setError({
            classNameErr: {
              isValid: false,
              message: "Tên lớp không tồn tại. \n Vui lòng thử lại!",
            },
            studentIdErr: {
              isValid: true,
              message: "",
            },
          });
          break;
        }
        case -4: {
          setIsLoading(false);
          setError({
            classNameErr: {
              isValid: true,
              message: "Tên lớp hợp lệ",
            },
            studentIdErr: {
              isValid: false,
              message: "Số thứ tự không hợp lệ. \n Vui lòng thử lại!",
            },
          });
          break;
        }
      }
    } else {
      setError({
        classNameErr: {
          isValid: true,
          message: "",
        },
        studentIdErr: {
          isValid: true,
          message: "",
        },
      });
      setIsExist(true);
      setStudentData(errorCode);
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col flex-grow h-full items-center justify-start bg-gray-100 dark:bg-gray-900 w-full mt-12">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-blue-600 dark:text-white text-xl uppercase font-bold mb-2 mt-4">
          Tra cứu điểm thi
        </h1>
        <p className="text-center leading-relaxed text-lg text-gray-800 dark:text-gray-200">
          {isExist === false
            ? "Vui lòng nhập tên lớp và số thứ tự trong lớp của bạn"
            : "Bảng điểm các môn"}
        </p>
      </div>
      {isExist === false && (
        <form
          onSubmit={handleSubmit}
          className="shadow-md transition-shadow shadow-gray-400 dark:shadow-none rounded px-6 mt-4 py-6 justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-none flex flex-row gap-x-3 max-w-3xl"
        >
          <div className="relative flex flex-row items-start w-full">
            <div className="md:w-2/6 px-3 h-24">
              <GradeItem
                isLoading={isLoading}
                id={"className"}
                title={"Tên lớp"}
                isRequired={true}
                type={"text"}
                placeholder={"12A1"}
                handleChange={handleChange}
                status={error.classNameErr}
              />
            </div>
            <div className="md:w-2/6 px-3 h-24">
              <GradeItem
                isLoading={isLoading}
                id={"studentId"}
                title={"Số thứ tự"}
                isRequired={true}
                type={"text"}
                placeholder={"26"}
                handleChange={handleChange}
                status={error.studentIdErr}
              />
            </div>
            <div className="w-1/6 flex grow flex-row items-center justify-center h-24 mt-1">
              <button
                type="submit"
                formNoValidate={true}
                className={`flex items-center justify-center py-2 px-3 font-medium text-white transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none ${
                  isLoading
                    ? "bg-blue-500 cursor-default"
                    : "bg-blue-600 hover:bg-blue-500 mr-4"
                }`}
              >
                {isLoading && (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
                {isLoading === false && "Tra cứu"}
              </button>
            </div>
          </div>
        </form>
      )}
      {isExist === true && <Table data={studentData} />}
    </section>
  );
}
