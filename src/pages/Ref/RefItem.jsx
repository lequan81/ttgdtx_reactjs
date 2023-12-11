import Button from "../../components/Button";

function RefItem({ title, description, path = "#" }) {
  return (
    <div className="duration-300 bg-white dark:bg-gray-800 shadow-md shadow-gray-300 hover:shadow-gray-400 dark:shadow-none hover:bg-gray-50 dark:hover:shadow-none dark:hover:bg-gray-700/60 transition-all transform cursor-pointer group hover:scale-[102%] rounded-md relative flex flex-col">
      <div className="flex flex-auto flex-col sm:p-6 p-4 gap-2 text-gray-900 dark:text-white">
        <h2 className="flex items-center gap-2 sm:text-xl text-lg font-semibold sm:h-16 h-12 line-clamp-2">
          {title}
        </h2>
        <p className="my-1 sm:h-20 h-16 text-base sm:text-sm line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap items-start gap-2 justify-end">
          <Button path={path} title={"Tìm hiểu thêm"} target={"_blank"} />
        </div>
      </div>
    </div>
  );
}

export default RefItem;
