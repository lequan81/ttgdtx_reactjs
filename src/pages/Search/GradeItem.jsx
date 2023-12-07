export default function GradeItem({
  id,
  title,
  isRequired,
  handleChange,
  type = "text",
  placeholder,
  status = {},
  isLoading = false,
}) {
  return (
    <>
      <label
        htmlFor={id}
        className="leading-7 text-sm text-gray-600 dark:text-gray-200"
      >
        {title}
        <span className="text-red-500"> {isRequired ? " *" : null}</span>
      </label>
      <input
        required={isRequired}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        disabled={isLoading}
        onChange={handleChange}
        className="placeholder:text-gray-500 dark:placeholder:text-gray-400 block w-full mt-1 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded-sm border border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      <p
        className={`mt-1.5 h-4 text-xs italic whitespace-pre-line ${
          status.isValid ? "text-green-500" : "text-red-500"
        }`}
      >
        {status.message !== ("" || undefined) ? status.message : null}
      </p>
    </>
  );
}
