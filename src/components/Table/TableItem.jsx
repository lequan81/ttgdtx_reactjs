function TableItem({ title, markSem1, markSem2, markRetake, avgYear }) {
  return (
    <tr className="even:bg-gray-100 dark:even:bg-gray-800/50">
      <td className="sm:px-4 pl-1.5 py-4 text-sm font-medium whitespace-nowrap">
        <div>
          <h2 className="font-medium text-gray-800 dark:text-white ">
            {title}
          </h2>
        </div>
      </td>
      <td className="sm:pl-0 sm:pr-12 px-4 py-4 text-sm whitespace-nowrap">
        <div>
          <h4 className="text-gray-700 dark:text-gray-200">
            {markSem1 !== -1 ? markSem1 : "-"}
          </h4>
        </div>
      </td>
      <td className="sm:px-8 px-4 py-4 text-sm whitespace-nowrap">
        <div>
          <h4 className="text-gray-700 dark:text-gray-200">
            {markSem2 !== -1 ? markSem2 : "-"}
          </h4>
        </div>
      </td>
      <td className="sm:px-8 px-4 py-4 text-sm whitespace-nowrap">
        <div>
          <h4 className="text-gray-700 dark:text-gray-200">
            {markRetake !== -1 ? markRetake : "-"}
          </h4>
        </div>
      </td>
      <td className="sm:px-8 px-4 py-4 text-sm whitespace-nowrap">
        <div>
          <h4 className="text-gray-700 dark:text-gray-200">
            {avgYear !== -1 ? avgYear : "-"}
          </h4>
        </div>
      </td>
    </tr>
  );
}

export default TableItem;
