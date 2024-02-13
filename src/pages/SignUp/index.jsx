import { useState } from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import Button from "@components/Button";
import Input from "@components/Input";
import Toast from "@components/Toast";
import { validateForm } from "@services/validate";
import { postSignUp } from "@services/postSignUp";
import data from "@data/data.json";

export default function SignUp() {
  const [error, setError] = useState({
    fullnameErr: { isValid: true, message: "" },
    emailErr: { isValid: true, message: "" },
    addressErr: { isValid: true, message: "" },
    phoneErr: { isValid: true, message: "" },
    lessonErr: { isValid: true, message: "" },
    isDone: false,
  });
  const [isDone, setIsDone] = useState({
    loading: false,
    success: false,
    show: true,
  });
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    address: "",
    phone: "",
    lesson: data.signUp[0].subjects[0].value || "",
    isDone: false,
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setError((prevState) => ({
      ...prevState,
      [`${e.target.name}Err`]: {
        isValid: true,
        message: "",
      },
    }));
  };

  const handleErrors = (errorCode) => {
    switch (errorCode) {
      case 0: {
        setError({
          fullnameErr: {
            isValid: true,
            message: "",
          },
          emailErr: {
            isValid: true,
            message: "",
          },
          addressErr: { isValid: true, message: "" },
          phoneErr: {
            isValid: true,
            message: "",
          },
          lessonErr: { isValid: true, message: "" },
        });
        break;
      }
      case -1: {
        setIsDone({
          loading: false,
          success: false,
          show: true,
        });
        setError({
          fullnameErr: {
            isValid: false,
            message: "Họ và Tên không hợp lệ. Vui lòng thử lại",
          },
          emailErr: {
            isValid: false,
            message: "Email không hợp lệ. Vui lòng thử lại",
          },
          addressErr: { isValid: false, message: "Vui lòng nhập địa chỉ" },
          phoneErr: {
            isValid: false,
            message: `Số điện thoại không hợp lệ.\n Vui lòng thử lại`,
          },
          lessonErr: { isValid: false, message: "Vui lòng chọn khóa học" },
        });
        Toast("error", "Có lỗi xảy ra. Vui lòng thử lại");
        break;
      }
      case -2: {
        setIsDone({
          loading: false,
          success: false,
          show: true,
        });
        setError({
          fullnameErr: {
            isValid: false,
            message: "Họ và Tên không hợp lệ. Vui lòng thử lại",
          },
          emailErr: {
            isValid: true,
            message: "",
          },
          addressErr: { isValid: true, message: "" },
          phoneErr: {
            isValid: true,
            message: "",
          },
          lessonErr: { isValid: true, message: "" },
        });
        Toast("warning", "Vui lòng nhập lại Họ và Tên");
        break;
      }
      case -3: {
        setIsDone({
          loading: false,
          success: false,
          show: true,
        });
        setError({
          fullnameErr: {
            isValid: true,
            message: "Họ và tên hợp lệ",
          },
          emailErr: {
            isValid: false,
            message: "Email không hợp lệ. Vui lòng thử lại",
          },
          addressErr: { isValid: true, message: "" },
          phoneErr: {
            isValid: true,
            message: "",
          },
          lessonErr: { isValid: true, message: "" },
        });
        Toast("warning", "Vui lòng nhập lại email");
        break;
      }
      case -4: {
        setIsDone({
          loading: false,
          success: false,
          show: true,
        });
        setError({
          fullnameErr: {
            isValid: true,
            message: "Họ và tên hợp lệ",
          },
          emailErr: {
            isValid: true,
            message: "Email hợp lệ",
          },
          addressErr: { isValid: false, message: "Vui lòng nhập địa chỉ" },
          phoneErr: {
            isValid: true,
            message: "",
          },
          lessonErr: { isValid: true, message: "" },
        });
        Toast("warning", "Vui lòng nhập địa chỉ");
        break;
      }
      case -5: {
        setIsDone({
          loading: false,
          success: false,
          show: true,
        });
        setError({
          fullnameErr: {
            isValid: true,
            message: "Họ và tên hợp lệ",
          },
          emailErr: {
            isValid: true,
            message: "Email hợp lệ",
          },
          addressErr: { isValid: true, message: "Địa chỉ hợp lệ" },
          phoneErr: {
            isValid: false,
            message: "Số điện thoại không hợp lệ.\n Vui lòng thử lại",
          },
          lessonErr: { isValid: true, message: "" },
        });
        Toast("warning", "Vui lòng nhập lại số điện thoại");
        break;
      }
      case -6: {
        setIsDone({
          loading: false,
          success: false,
          show: true,
        });
        setError({
          fullnameErr: {
            isValid: true,
            message: "Họ và tên hợp lệ",
          },
          emailErr: {
            isValid: true,
            message: "Email hợp lệ",
          },
          addressErr: {
            isValid: true,
            message: "Địa chỉ hợp lệ",
          },
          phoneErr: {
            isValid: true,
            message: "Số điện thoại hợp lệ",
          },
          lessonErr: { isValid: false, message: "Vui lòng chọn khóa học" },
        });
        Toast("warning", "Vui lòng chọn khóa học");
        break;
      }
    }
  };

  const handleIsDone = (type) => {
    switch (type) {
      case "loading": {
        setIsDone({
          loading: true,
          success: false,
          show: true,
        });
        break;
      }
      case "success": {
        setIsDone({
          loading: false,
          success: true,
          show: false,
        });
        break;
      }
      case "error": {
        // reset formData
        setFormData({
          fullname: "",
          email: "",
          address: "",
          phone: "",
          lesson: data.signUp[0].subjects[0].value || "",
          isDone: false,
        });
        setTimeout(() => {
          setIsDone({ loading: false, success: false, show: false });
        }, 300);
        setTimeout(() => {
          setIsDone({
            loading: false,
            success: false,
            show: true,
          });
        }, 5000);
        break;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleErrors(0); //reset all errors if have any
    handleIsDone("loading");
    let errorCode = validateForm(formData);

    if (typeof errorCode === "number" && errorCode <= 0) {
      // all errors are below 0 (start with -1)
      handleErrors(errorCode);
    } else {
      // clear all previous error message
      handleErrors(0);
      Toast("info", "Vui lòng đợi...");
      let res = await postSignUp(formData);
      if (typeof res === "number" && res <= 0) {
        handleIsDone("error");
        Toast("error", "Lỗi kết nối tới server");
        setTimeout(() => {
          Toast("info", "Vui lòng kiểm tra kết nối Internet và thử lại");
        }, 1500);
      } else {
        Toast("success", "Đã đăng ký thành công");
        handleIsDone("success");
      }
    }
  };

  return (
    <section className="flex flex-col flex-grow h-full items-center justify-start bg-gray-100 dark:bg-gray-900 w-full mt-12">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-blue-600 dark:text-white sm:text-xl lg:text-lg md:text-base uppercase font-bold mb-2 mt-4 whitespace-pre-line sm:whitespace-normal animate__animated animate__zoomIn animate__faster">
          {data.signUp[0].title}
        </h1>
        <p className="antialiased hover:subpixel-antialiased text-center leading-relaxed sm:text-lg text-sm text-gray-800 dark:text-gray-200 animate__animated animate__fadeIn animate__slow">
          {isDone.success === false &&
            isDone.show === true &&
            data.signUp[0].subTitle}
        </p>
      </div>
      {isDone.show === true ? (
        <form
          onSubmit={handleSubmit}
          className="animate__animated animate__zoomIn animate__fast shadow-md transition-shadow shadow-gray-300 dark:shadow-none sm:rounded px-8 mx-auto mt-8 sm:mb-8 sm:py-8 py-4 mb-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-none flex flex-col w-full max-w-4xl"
        >
          <div className="sm:flex mb-4">
            <div className="sm:w-5/12 px-3">
              <Input
                isLoading={isDone.loading}
                id={"fullname"}
                title={"Họ và Tên"}
                isRequired={true}
                isSelected={false}
                type={"text"}
                placeholder={"Nguyễn Thị D"}
                handleChange={handleChange}
                status={error.fullnameErr}
              />
            </div>
            <div className="sm:w-7/12 px-3">
              <Input
                isLoading={isDone.loading}
                id={"address"}
                title={"Địa chỉ"}
                isRequired={true}
                isSelected={false}
                type={"text"}
                placeholder={"Quận 2, TP Hồ Chí Minh"}
                handleChange={handleChange}
                status={error.addressErr}
              />
            </div>
          </div>
          <div className="sm:flex mb-4">
            <div className="sm:w-5/12 px-3">
              <Input
                isLoading={isDone.loading}
                id={"email"}
                title={"Email"}
                isRequired={true}
                isSelected={false}
                type={"text"}
                placeholder={"demo@email.com"}
                handleChange={handleChange}
                status={error.emailErr}
              />
            </div>
            <div className="sm:w-3/12 px-3">
              <Input
                isLoading={isDone.loading}
                id={"phone"}
                title={"Số điện thoại"}
                isRequired={true}
                isSelected={false}
                type={"text"}
                placeholder={"09890123456"}
                handleChange={handleChange}
                status={error.phoneErr}
              />
            </div>
            <div className="sm:w-4/12 px-3">
              <Input
                isLoading={isDone.loading}
                id={"lesson"}
                title={"Khóa học đăng ký"}
                isRequired={true}
                isSelected={true}
                selectList={data.signUp[0].subjects}
                value={formData.lesson}
                handleChange={handleChange}
                status={error.lessonErr}
              />
            </div>
          </div>
          <div className="flex items-center px-3 mt-2">
            <Button
              type="submit"
              isLoading={isDone.loading}
              title={"Đăng ký thông tin"}
            />
          </div>
        </form>
      ) : (
        <div className="animate__animated animate__zoomIn animate__fast flex items-center mt-6 text-center border sm:rounded-lg h-fit sm:w-full w-3/4 mx-auto sm:mx-0 max-w-md dark:border-gray-700">
          <div className="flex flex-col w-full px-4 sm:py-8 py-4 mx-auto">
            <div
              className={`p-1 sm:p-2 mx-auto rounded-full dark:bg-gray-800 ${
                isDone.success
                  ? "text-green-500 bg-green-100"
                  : "text-red-500 bg-red-100"
              }`}
            >
              {isDone.success ? (
                <CheckCircleIcon
                  strokeWidth={2}
                  fill="none"
                  stroke="currentColor"
                  className="sm:w-8 sm:h-8 w-7 h-7"
                />
              ) : (
                <ExclamationCircleIcon
                  strokeWidth={2}
                  fill="none"
                  stroke="currentColor"
                  className="sm:w-8 sm:h-8 w-7 h-7"
                />
              )}
            </div>
            <h1 className="mt-3 sm:text-lg text-base font-medium sm:font-normal text-gray-800 dark:text-white">
              {isDone.success ? "Đã đăng ký thành công" : "Có lỗi xảy ra"}
            </h1>
            <p className="antialiased hover:subpixel-antialiased mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 whitespace-pre-line">
              {isDone.success
                ? "Cảm ơn bạn đã tin tưởng chúng tôi! \n Chúng tôi sẽ thông báo tới bạn sớm nhất có thể"
                : "Xin vui lòng đợi và thử lại"}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
