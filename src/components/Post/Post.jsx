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
      className={`overflow-hidden bg-white dark:bg-gray-800 shadow-md shadow-gray-300 hover:shadow-gray-400 dark:shadow-none hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-all transform duration-200 cursor-pointer group antialiased rounded ${
        show ? "animate__animated animate__zoomIn animate__fast" : ""
      }`}
    >
      <img
        data-nosnippet
        src={coverUrl || "https://picsum.photos/seed/picsum/600"}
        loading="lazy"
        className="group-hover:scale-[102%] brightness-95 group-hover:brightness-100 object-cover aspect-video w-full xl:h-52 lg:h-40 md:h-36 h-52 opacity-95 bg-center bg-no-repeat bg-cover group-hover:opacity-100 transition-all transform duration-200"
        alt={title || "Title"}
      />
      <div className="p-4 flex flex-col">
        <p className="antialiased hover:subpixel-antialiased mb-2.5 h-12 text-lg font-semibold leading-6 transition-colors duration-200 text-gray-900 dark:text-white line-clamp-2">
          {title || "Title"}
        </p>
        <p className="antialiased hover:subpixel-antialiased mb-2 sm:mb-4 h-[3.75rem] text-gray-700 dark:text-gray-300 line-clamp-3 text-sm">
          {description || "This is a description"}
        </p>
        <div className="flex flex-row w-full mt-1 text-xs font-semibold uppercase gap-x-12 justify-between lg:gap-x-6 lg:mb-2 h-4">
          <span
            data-nosnippet
            className="antialiased hover:subpixel-antialiased flex flex-grow justify-start transition-colors duration-200 text-blue-600 dark:text-blue-400 hover:text-blue-600 line-clamp-1"
          >
            {hashtag || "other"}
          </span>
          <span
            data-nosnippet
            className="text-gray-700 dark:text-gray-400 justify-end text-xs tabular-nums"
          >
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
