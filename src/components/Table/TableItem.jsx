function TableItem({ title, grade, isPassed, notes }) {
  return (
    <tr className="even:bg-gray-100 dark:even:bg-gray-800/50">
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
        <div>
          <h2 className="font-medium text-gray-800 dark:text-white ">
            {title}
          </h2>
          {/* <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            subTitle
          </p> */}
        </div>
      </td>
      <td className="pl-28 pr-12 py-4 text-sm whitespace-nowrap">
        <div>
          <h4 className="text-gray-700 dark:text-gray-200">{grade}</h4>
          {/* <p className="text-gray-500 dark:text-gray-400">subTitle</p> */}
        </div>
      </td>
      <td className="px-2 py-4 text-sm font-medium whitespace-nowrap">
        <div
          className={`inline px-3 py-1 text-sm font-normal rounded-2xl gap-x-2 dark:bg-gray-800 ${
            isPassed
              ? "text-emerald-500 bg-emerald-100/60"
              : "text-red-500 bg-red-100/60"
          }`}
        >
          {isPassed ? "Hoàn thành" : "Không hoàn thành"}
        </div>
      </td>
      <td className="px-12 py-4 text-sm whitespace-nowrap">
        <div>
          <h4 className="text-gray-700 dark:text-gray-200">{notes}</h4>
        </div>
      </td>
    </tr>
  );
}

export default TableItem;
