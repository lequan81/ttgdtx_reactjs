import { useState } from "react";
import { useTitle } from "../../hook/useTitle";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { validateForm } from "../../services/validate";
import { postSignUp } from "../../services/postSignUp";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import data from "../../data/data.json";

export function SignUp() {
  useTitle("Đăng ký khóa học");
  const [error, setError] = useState({
    fullnameErr: { isValid: true, message: String },
    emailErr: { isValid: true, String },
    addressErr: { isValid: true, String },
    phoneErr: { isValid: true, String },
    lessonErr: { isValid: true, String },
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
    lesson: data.signUp[0].subjects[0].value || "----",
    isDone: false,
  });

  const handleChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

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
          lessonErr: { isValid: false, message: "" },
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
            message: "Họ và Tên không hợp lệ. Vui lòng thử lại!",
          },
          emailErr: {
            isValid: false,
            message: "Email không hợp lệ. Vui lòng thử lại!",
          },
          addressErr: { isValid: false, message: "Vui lòng nhập địa chỉ!" },
          phoneErr: {
            isValid: false,
            message: `Số điện thoại không hợp lệ.\n Vui lòng thử lại!`,
          },
          lessonErr: { isValid: false, message: "Vui lòng chọn khóa học!" },
        });
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
            message: "Họ và Tên không hợp lệ. Vui lòng thử lại!",
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
            message: "Email không hợp lệ. Vui lòng thử lại!",
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
          addressErr: { isValid: false, message: "Vui lòng nhập địa chỉ!" },
          phoneErr: {
            isValid: true,
            message: "",
          },
          lessonErr: { isValid: true, message: "" },
        });
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
            message: "Số điện thoại không hợp lệ.\n Vui lòng thử lại!",
          },
          lessonErr: { isValid: true, message: "" },
        });
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
          lessonErr: { isValid: false, message: "Vui lòng chọn khóa học!" },
        });
        break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDone({
      loading: true,
      success: false,
      show: true,
    });
    let errorCode = validateForm(
      formData.fullname,
      formData.email,
      formData.phone,
      formData.address,
      formData.lesson
    );
    if (errorCode === true) {
      // clear all previous error message
      handleErrors(0);
      (async () => {
        let result = await postSignUp(formData);
        if (result !== undefined) {
          if (result.ok) {
            setIsDone({
              loading: false,
              success: result.ok,
              show: false,
            });
          } else {
            setTimeout(() => {
              setIsDone({
                loading: false,
                success: false,
                show: true,
              });
            }, 4500);
          }
        }
      })();
    } else {
      handleErrors(errorCode);
    }
  };

  return (
    <section className="flex flex-col flex-grow h-full items-center justify-start bg-gray-100 dark:bg-gray-900 w-full mt-12">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-blue-600 dark:text-white sm:text-xl text-lg uppercase font-bold mb-2 mt-4">
          {data.signUp[0].title}
        </h1>
        <p className="text-center leading-relaxed sm:text-lg text-sm text-gray-800 dark:text-gray-200">
          {isDone.success === false &&
            isDone.show === true &&
            data.signUp[0].subTitle}
        </p>
      </div>
      {isDone.show === true ? (
        <form
          onSubmit={handleSubmit}
          className="shadow-md transition-shadow shadow-gray-300 dark:shadow-none rounded px-8 mx-auto sm:mt-8 sm:mb-8 sm:py-8 py-4 mt-4 mb-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-none flex flex-col w-full max-w-4xl"
        >
          <div className="md:flex mb-4">
            <div className="md:w-5/12 px-3">
              <Input
                isLoading={isDone.loading}
                id={"fullname"}
                title={"Họ và Tên"}
                isRequired={true}
                isSelected={false}
                type={"text"}
                placeholder={"Nguyễn Văn A"}
                handleChange={handleChange}
                status={error.fullnameErr}
              />
            </div>
            <div className="md:w-7/12 px-3">
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
          <div className="md:flex mb-4">
            <div className="md:w-5/12 px-3">
              <Input
                isLoading={isDone.loading}
                id={"email"}
                title={"Email"}
                isRequired={true}
                isSelected={false}
                type={"text"}
                placeholder={"avannguyen@email.com"}
                handleChange={handleChange}
                status={error.emailErr}
              />
            </div>
            <div className="md:w-3/12 px-3">
              <Input
                isLoading={isDone.loading}
                id={"phone"}
                title={"Số điện thoại"}
                isRequired={true}
                isSelected={false}
                type={"text"}
                placeholder={"789-012-3456"}
                handleChange={handleChange}
                status={error.phoneErr}
              />
            </div>
            <div className="md:w-4/12 px-3">
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
        <div className="flex items-center mt-6 text-center border rounded-lg h-fit w-full max-w-md dark:border-gray-700">
          <div className="flex flex-col w-full px-4 py-8 mx-auto">
            <div
              className={`p-3 mx-auto rounded-full dark:bg-gray-800 ${
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
                  className="w-8 h-8"
                />
              ) : (
                <ExclamationCircleIcon
                  strokeWidth={2}
                  fill="none"
                  stroke="currentColor"
                  className="w-8 h-8"
                />
              )}
            </div>
            <h1 className="mt-3 text-lg text-gray-800 dark:text-white">
              {isDone.success ? "Đã gửi thành công" : "Có lỗi xảy ra"}
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400 whitespace-pre-line">
              {isDone.success
                ? "Cảm ơn bạn đã tin tưởng chúng tôi! \n Chúng tôi sẽ thông báo tới bạn sớm nhất có thể"
                : "Đã có lỗi xảy ra! Xin vui lòng đợi và thử lại"}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
