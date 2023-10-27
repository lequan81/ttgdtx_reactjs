export function Post({ title, description, coverUrl, tag, date, path }) {
  return (
    <div className="overflow-hidden duration-300 bg-white dark:bg-gray-800 rounded shadow-md shadow-gray-400 dark:shadow-none hover:bg-gray-200 dark:hover:shadow-none dark:hover:bg-gray-700/60 transition-colors cursor-pointer group">
      <img
        src={
          coverUrl ||
          "https://images.unsplash.com/photo-1605552666655-359746ef358c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="object-cover aspect-square w-full h-52 opacity-90 group-hover:opacity-100 transition-opacity"
        alt={title || "Title"}
      />
      <div className="px-5 pt-6 pb-3 flex flex-col">
        <a
          href={path || "#"}
          aria-label={tag || "Title"}
          title={title || "Title"}
          className="inline-block mb-2 text-2xl font-bold leading-5 transition-colors duration-200 text-gray-900 dark:text-white"
        >
          {title || "Title"}
        </a>
        <p className="mb-4 text-gray-700 dark:text-gray-200 line-clamp-2">
          {description || "This is a description"}
        </p>
        <div className="flex flex-row w-full mt-1 text-xs font-semibold uppercase">
          <p className="flex flex-grow justify-start transition-colors duration-200 text-blue-500 hover:text-blue-700">
            {tag || "other"}
          </p>
          <span className="text-gray-600 dark:text-gray-400 justify-end">
            {new Date(date || "01/01/1970").toLocaleDateString("vi-VN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
