export function Post({
  title,
  description,
  coverUrl,
  hashtag,
  createdAt,
  path,
}) {
  return (
    <a
      href={path || "#"}
      aria-label={hashtag || "Title"}
      title={title || "Title"}
      className="overflow-hidden bg-white dark:bg-gray-800 shadow-md shadow-gray-300 hover:shadow-gray-400 dark:shadow-none hover:bg-gray-50 dark:hover:shadow-none dark:hover:bg-gray-700/60 transition-all transform cursor-pointer group hover:scale-[102%] rounded"
    >
      <img
        src={coverUrl || "https://picsum.photos/seed/picsum/600"}
        className="object-cover scale-105 w-full h-52 opacity-95 bg-center bg-no-repeat bg-cover group-hover:opacity-100 transition-opacity"
        alt={title || "Title"}
      />
      <div className="px-5 pt-6 pb-3 flex flex-col">
        <p className="mb-2 h-12 text-lg font-bold leading-6 transition-colors duration-200 text-gray-900 dark:text-white line-clamp-2">
          {title || "Title"}
        </p>
        <p className="mb-4 h-10 text-gray-700 dark:text-gray-200 line-clamp-2 text-sm">
          {description || "This is a description"}
        </p>
        <div className="flex flex-row w-full mt-1 text-xs font-semibold uppercase">
          <p className="flex flex-grow justify-start transition-colors duration-200 text-blue-600 hover:text-blue-700">
            {hashtag || "other"}
          </p>
          <span className="text-gray-700 dark:text-gray-400 justify-end">
            {new Date(createdAt || "01/01/1970").toLocaleDateString("vi-VN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </a>
  );
}
