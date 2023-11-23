import { useTitle } from "../../hook/useTitle";
import data from "../../data/data.json";
import SignUpItem from "./SignUpItem";

export function SignUp() {
  useTitle("Đăng ký khóa học");
  return (
    <section className="flex flex-col flex-grow h-full items-center justify-start bg-gray-100 dark:bg-gray-900 w-full mt-12">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-blue-600 dark:text-white text-xl uppercase font-bold mb-2 mt-4">
          {data.signUp[0].title}
        </h1>
        <p className="text-center leading-relaxed text-lg text-gray-800 dark:text-gray-200">
          {data.signUp[0].subTitle}
        </p>
      </div>
      <div className="shadow-md transition-shadow shadow-gray-400 dark:shadow-none rounded px-8 mx-auto my-8 py-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-none flex flex-col w-full max-w-4xl">
        <div className="md:flex mb-4">
          <div className="md:w-1/2 px-3">
            <SignUpItem
              id={"fullname"}
              title={"Họ và Tên"}
              isRequired={true}
              isSelected={false}
              type={"text"}
              placeholder={"Nguyễn Văn A"}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <SignUpItem
              id={"email"}
              title={"Email"}
              isRequired={true}
              isSelected={false}
              type={"text"}
              placeholder={"avannguyen@email.com"}
            />
          </div>
        </div>
        <div className="md:flex mb-4">
          <div className="md:w-2/4 px-3">
            <SignUpItem
              id={"address"}
              title={"Địa chỉ"}
              isRequired={true}
              isSelected={false}
              type={"text"}
              placeholder={"Quận 2, TP Hồ Chí Minh"}
            />
          </div>
          <div className="md:w-1/4 px-3">
            <SignUpItem
              id={"phone"}
              title={"Số điện thoại"}
              isRequired={true}
              isSelected={false}
              type={"text"}
              placeholder={"789-012-3456"}
            />
          </div>
          <div className="md:w-1/4 px-3">
            <SignUpItem
              id={"lesson"}
              title={"Khóa học đăng ký"}
              isRequired={true}
              isSelected={true}
              selectList={data.signUp[0].subjects}
            />
          </div>
        </div>
        <div className="flex items-center px-3 mt-2">
          <button className="flex items-center justify-center py-2 px-3 mr-4 font-medium text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none">
            Đăng ký thông tin
          </button>
        </div>
      </div>
    </section>
  );
}
