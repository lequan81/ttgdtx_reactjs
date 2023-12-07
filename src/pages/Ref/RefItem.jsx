function RefItem({ title, description, path = "#" }) {
  return (
    <div className="duration-300 bg-gray-50 dark:bg-gray-800 shadow-md shadow-gray-300 hover:shadow-gray-400 dark:shadow-none hover:bg-white dark:hover:shadow-none dark:hover:bg-gray-700/60 transition-all transform cursor-pointer group hover:scale-[102%] rounded-md relative flex flex-col">
      <div className="flex flex-auto flex-col p-6 gap-2 text-gray-900 dark:text-white">
        <h2 className="flex items-center gap-2 text-xl font-semibold h-12 line-clamp-2">
          {title}
        </h2>
        <p className="my-1 h-20 line-clamp-3">{description}</p>
        <div className="flex flex-wrap items-start gap-2 justify-end">
          <a
            href={path}
            target="_blank"
            className="inline-flex min-h-full h-10 cursor-pointer flex-shrink-0 select-none flex-wrap items-center justify-center rounded px-3.5 text-center text-sm gap-2 font-semibold bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300 text-white"
            rel="noreferrer"
          >
            Tìm hiểu thêm
          </a>
        </div>
      </div>
    </div>
  );
}

export default RefItem;
