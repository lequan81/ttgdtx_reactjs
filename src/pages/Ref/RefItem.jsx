function RefItem({ title, description, path = "#" }) {
  return (
    <div className="w-96 duration-300 bg-white dark:bg-gray-800 shadow-md shadow-gray-300 hover:shadow-gray-400 dark:shadow-none hover:bg-gray-50 dark:hover:shadow-none dark:hover:bg-gray-700/60 transition-all transform cursor-pointer group hover:scale-[102%] rounded-md relative flex flex-col">
      <div className="flex flex-auto flex-col p-6 gap-2 text-gray-900 dark:text-white">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          {title}
        </h2>
        <p>{description}</p>
        <div className="flex flex-wrap items-start gap-2 justify-end">
          <a
            href={path}
            className="inline-flex min-h-full h-10 cursor-pointer flex-shrink-0 select-none flex-wrap items-center justify-center rounded px-3.5 text-center text-sm gap-2 font-semibold bg-blue-500 text-white"
          >
            Tìm hiểu thêm
          </a>
        </div>
      </div>
    </div>
  );
}

export default RefItem;
