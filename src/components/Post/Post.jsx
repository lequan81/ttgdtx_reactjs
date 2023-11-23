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
        className="object-cover aspect-square w-full h-52 opacity-95 bg-center bg-no-repeat bg-cover group-hover:opacity-100 transition-opacity"
        alt={title || "Title"}
      />
      <div className="px-5 pt-6 pb-3 flex flex-col">
        <p className="inline-block mb-2 text-xl font-bold leading-4 transition-colors duration-200 text-gray-900 dark:text-white">
          {title || "Title"}
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-200 line-clamp-3 text-base">
          {description || "This is a description"}
        </p>
        <div className="flex flex-row w-full mt-1 text-xs font-semibold uppercase">
          <p className="flex flex-grow justify-start transition-colors duration-200 text-blue-500 hover:text-blue-700">
            {hashtag || "other"}
          </p>
          <span className="text-gray-600 dark:text-gray-400 justify-end">
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
