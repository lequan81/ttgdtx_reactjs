import React from "react";

function SignUpInput({ label, id, isRequired, type = "text", placeholder }) {
  return (
    <div className="relative flex-grow w-3/12">
      <label
        htmlFor={id}
        className="leading-7 text-sm text-gray-600 dark:text-gray-200"
      >
        {label}
        {isRequired == true && <span className="text-red-500"> *</span>}
      </label>
      <input
        required={isRequired}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="w-full mt-1 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
}

export default SignUpInput;
