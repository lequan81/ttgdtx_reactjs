export function Post({
  show,
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
      aria-disabled="true"
      title={title || "Title"}
      className={`overflow-hidden bg-white dark:bg-gray-800 shadow-md shadow-gray-300 hover:shadow-gray-400 dark:shadow-none hover:bg-gray-50 dark:hover:shadow-none dark:hover:bg-gray-700/60 transition-all transform duration-200 cursor-pointer group hover:scale-[102%] rounded ${
        show ? "animate__animated animate__zoomIn animate__fast" : ""
      }`}
    >
      <img
        src={coverUrl || "https://picsum.photos/seed/picsum/600"}
        loading="lazy"
        className="object-cover aspect-video w-full scale-105 xl:h-52 lg:h-40 md:h-36 h-40 opacity-95 bg-center bg-no-repeat bg-cover group-hover:opacity-100 transition-opacity transform duration-200"
        alt={title || "Title"}
      />
      <div className="px-5 pt-6 pb-2 md:pt-4 md:px-2.5 flex flex-col">
        <p className="antialiased hover:subpixel-antialiased mb-2 h-12 text-lg sm:text-base xl:text-lg xl:h-14 font-bold leading-6 transition-colors duration-200 text-gray-900 dark:text-white line-clamp-2">
          {title || "Title"}
        </p>
        <p className="antialiased hover:subpixel-antialiased mb-4 h-20 text-gray-700 dark:text-gray-300 line-clamp-4 text-sm">
          {description || "This is a description"}
        </p>
        <div className="flex flex-row w-full mt-1 text-xs font-semibold uppercase gap-x-12 justify-between lg:gap-x-6 lg:mb-2">
          <p className="antialiased hover:subpixel-antialiased flex flex-grow justify-start transition-colors duration-200 text-blue-600 dark:text-blue-400 hover:text-blue-600">
            {hashtag || "other"}
          </p>
          <span className="text-gray-700 dark:text-gray-400 justify-end text-xs tabular-nums">
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
