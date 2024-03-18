import Button from "@components/Button";

function RefItem({ title, description, path = "#" }) {
  return (
    <div className="duration-300 bg-white dark:bg-gray-800 shadow-md shadow-gray-300 hover:shadow-gray-400 dark:shadow-none hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-all transform cursor-pointer group rounded-md relative flex flex-col animate__animated animate__zoomIn animate__fast">
      <div className="flex flex-auto flex-col p-4 gap-2 text-gray-900 dark:text-white">
        <h2 className="antialiased hover:subpixel-antialiased flex items-start gap-2 xl:text-lg text-base font-semibold md:h-14 h-12 line-clamp-2">
          {title}
        </h2>
        <p className="antialiased hover:subpixel-antialiased my-1 h-12 md:h-10 line-clamp-2 text-sm">
          {description}
        </p>
        <div className="flex flex-wrap items-start my-2 xl:my-1 justify-end">
          <Button path={path} title={"Tìm hiểu thêm"} target={"_blank"} />
        </div>
      </div>
    </div>
  );
}

export default RefItem;
