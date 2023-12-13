import { useState } from "react";
import { getStudentGrade } from "../../services/getStudentGrade";
import { Toast } from "../../components/Toast";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Table from "../../components/Table";

export function Grade() {
  const [error, setError] = useState({
    classNameErr: { isValid: true, message: String },
    studentIdErr: { isValid: true, message: String },
  });

  const [studentData, setStudentData] = useState({});

  const [classGradeList, setClassGradeList] = useState({
    studentId: "",
    className: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isExist, setIsExist] = useState(false);

  const handleChange = (e) =>
    setClassGradeList((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleErrors = (errorCode) => {
    switch (errorCode) {
      case 0: {
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
        break;
      }
      case -1: {
        setError({
          classNameErr: {
            isValid: false,
            message: "Tên lớp không hợp lệ.\n Vui lòng thử lại",
          },
          studentIdErr: {
            isValid: false,
            message: "Số thứ tự không hợp lệ. \n Vui lòng thử lại",
          },
        });
        Toast("error", "Có lỗi xảy ra. Vui lòng thử lại");
        break;
      }
      case -2: {
        setError({
          classNameErr: {
            isValid: false,
            message: "Tên lớp không hợp lệ.\n Vui lòng thử lại",
          },
          studentIdErr: {
            isValid: true,
            message: "",
          },
        });
        Toast("warning", "Tên lớp không hợp lệ. Vui lòng thử lại");
        break;
      }
      case -3: {
        setError({
          classNameErr: {
            isValid: false,
            message: "Tên lớp không tồn tại. \n Vui lòng thử lại",
          },
          studentIdErr: {
            isValid: true,
            message: "",
          },
        });
        Toast("error", "Tên lớp không tồn tại. Vui lòng thử lại");
        break;
      }
      case -4: {
        setError({
          classNameErr: {
            isValid: true,
            message: "Tên lớp hợp lệ",
          },
          studentIdErr: {
            isValid: false,
            message: "Số thứ tự không hợp lệ. \n Vui lòng thử lại",
          },
        });
        Toast("warning", "Số thứ tự không hợp lệ. Vui lòng thử lại");
        break;
      }
      case -5: {
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
        Toast("error", "Lỗi kết nối tới server");
        setTimeout(() => {
          Toast("info", "Vui lòng kiểm tra kết nối Internet và thử lại");
        }, 1500);
        break;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleErrors(0); //reset all errors if have
    setIsLoading(true);
    Toast("info", "Vui lòng đợi...");
    let res = await getStudentGrade(classGradeList);
    if (typeof res === "number") {
      setIsLoading(false);
      handleErrors(res);
    } else {
      setStudentData(res);
      setIsExist(true);
      handleErrors(0);
      setIsLoading(false);
      Toast("success", "Đã tải xong");
    }
  };

  return (
    <section className="flex flex-col flex-grow h-full items-center justify-start bg-gray-100 dark:bg-gray-900 w-full mt-12">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-blue-600 dark:text-white sm:text-xl text-lg uppercase font-bold mb-2 mt-4 whitespace-pre-line sm:whitespace-normal">
          Tra cứu điểm thi
        </h1>
        <p className="text-center leading-relaxed sm:text-lg text-sm text-gray-800 dark:text-gray-200">
          {isExist === false
            ? "Vui lòng nhập tên lớp và số thứ tự trong lớp của bạn"
            : "Bảng điểm các môn"}
        </p>
      </div>
      {isExist === false && (
        <form
          onSubmit={handleSubmit}
          className="shadow-md transition-shadow shadow-gray-300 dark:shadow-none sm:rounded px-6 mt-4 py-6 justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-none flex flex-row max-w-3xl"
        >
          <div className="relative flex sm:flex-row flex-col items-start w-full">
            <div className="sm:w-2/6 px-3 h-28">
              <Input
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
            <div className="sm:w-2/6 px-3 h-28">
              <Input
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
            <div className="sm:w-1/6 w-full flex sm:grow flex-grow-0 flex-row items-center justify-center sm:h-24 h-fit mt-1">
              <Button title={"Tra cứu"} type="submit" isLoading={isLoading} />
            </div>
          </div>
        </form>
      )}
      {isExist === true && <Table data={studentData} />}
    </section>
  );
}
