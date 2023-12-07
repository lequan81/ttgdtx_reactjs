import { useState } from "react";
import { useTitle } from "../../hook/useTitle";
import data from "../../data/data.json";
import SignUpItem from "./SignUpItem";
import { validateForm } from "../../services/validate";
import { postSignUp } from "../../services/postSignUp";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

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
      switch (errorCode) {
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
    }
  };

  return (
    <section className="flex flex-col flex-grow h-full items-center justify-start bg-gray-100 dark:bg-gray-900 w-full mt-12">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-blue-600 dark:text-white text-xl uppercase font-bold mb-2 mt-4">
          {data.signUp[0].title}
        </h1>
        <p className="text-center leading-relaxed text-lg text-gray-800 dark:text-gray-200">
          {isDone.success === false &&
            isDone.show === true &&
            data.signUp[0].subTitle}
        </p>
      </div>
      {isDone.show === true ? (
        <form
          onSubmit={handleSubmit}
          className="shadow-md transition-shadow shadow-gray-400 dark:shadow-none rounded px-8 mx-auto my-8 py-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-none flex flex-col w-full max-w-4xl"
        >
          <div className="md:flex mb-4">
            <div className="md:w-5/12 px-3">
              <SignUpItem
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
              <SignUpItem
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
              <SignUpItem
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
              <SignUpItem
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
              <SignUpItem
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
            <button
              type="submit"
              onClick={handleSubmit}
              className={`flex items-center justify-center py-2 px-3 mr-4 font-medium text-white transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none ${
                isDone.loading
                  ? "bg-blue-500 cursor-default"
                  : "bg-blue-600 hover:bg-blue-500"
              }`}
            >
              {isDone.loading && (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
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
              {isDone.loading === false
                ? "Đăng ký thông tin"
                : "Vui lòng đợi..."}
            </button>
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
