const Input = ({
  id,
  title,
  isRequired,
  isSelected = false,
  selectList = [],
  selected,
  handleChange,
  type = "text",
  placeholder,
  status = {},
  isLoading = false,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="leading-7 text-sm text-gray-700 dark:text-gray-200"
      >
        {title}
        <span className="text-red-500"> {isRequired ? " *" : null}</span>
      </label>
      {isSelected ? (
        <select
          name={id}
          id={id}
          disabled={isLoading}
          required={isRequired}
          className={`h-10 placeholder:text-gray-500 dark:placeholder:text-gray-400 block w-full mt-1 bg-opacity-50 rounded-sm border-r-8 border-transparent outline outline-1 focus:ring-1 focus:ring-blue-500 text-base text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
            isLoading
              ? "bg-gray-200 animate-pulse dark:bg-gray-700 cursor-default select-none"
              : "bg-gray-100 dark:bg-gray-800"
          } ${
            status.isValid
              ? "outline-gray-300 dark:outline-gray-700"
              : "outline-red-300 dark:outline-red-700"
          }`}
          value={selected}
          onChange={handleChange}
        >
          {selectList.length > 0 &&
            selectList.map((select) => (
              <option key={select.value} value={select.value}>
                {select.title}
              </option>
            ))}
        </select>
      ) : (
        <input
          disabled={isLoading}
          required={isRequired}
          className={`h-10 placeholder:text-gray-500 dark:placeholder:text-gray-400 block w-full mt-1 bg-opacity-50 rounded-sm outline outline-1 focus:ring-1 focus:ring-blue-500 text-base text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
            isLoading
              ? "bg-gray-200 animate-pulse dark:bg-gray-700 cursor-default select-none"
              : "bg-gray-100 dark:bg-gray-800"
          } ${
            status.isValid
              ? "outline-gray-300 dark:outline-gray-700"
              : "outline-red-300 dark:outline-red-700"
          }`}
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
      <p
        className={`mt-1.5 h-4 text-xs italic whitespace-normal sm:whitespace-pre-line ${
          status.isValid ? "text-green-500" : "text-red-500"
        }`}
      >
        {status.message !== ("" || undefined) ? status.message : null}
      </p>
    </>
  );
};

export default Input;
