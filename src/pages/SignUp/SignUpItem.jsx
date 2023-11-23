function SignUpItem({
  id,
  title,
  isRequired,
  isSelected = false,
  selectList = [],
  type = "text",
  placeholder,
  status,
}) {
  return (
    <>
      <label
        className="block leading-7 text-sm text-gray-700 dark:text-gray-200 font-medium mb-0.5"
        htmlFor={id}
      >
        {title}
        <span className="text-red-500">{isRequired && "*"}</span>
      </label>
      {isSelected ? (
        <select
          name="id"
          id="id"
          className="h-10 placeholder:text-gray-500 dark:placeholder:text-gray-400 block w-full mt-1 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded-sm border-r-8 border-transparent outline outline-1 outline-gray-300 dark:outline-gray-700 focus:ring-1 focus:ring-blue-500 text-base text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          {selectList.length > 0 &&
            selectList.map((select) => <option key={select}>{select}</option>)}
        </select>
      ) : (
        <input
          className="h-10 placeholder:text-gray-500 dark:placeholder:text-gray-400 block w-full mt-1 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded-sm outline outline-1 outline-gray-300 dark:outline-gray-700 focus:ring-1 focus:ring-blue-500 text-base text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          id={id}
          type={type}
          placeholder={placeholder}
        />
      )}
      <p className="text-red-500 dark:text-red-600 mt-1 text-xs italic">
        {status !== ("" || undefined) ? status : null}
      </p>
    </>
  );
}

export default SignUpItem;
