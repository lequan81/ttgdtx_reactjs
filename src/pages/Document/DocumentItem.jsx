import { ArrowDownIcon, PaperClipIcon } from "@heroicons/react/24/outline";

function DocumentItem({ title, description, url = [], fileName = [] }) {
  return (
    <div className="cursor-default duration-300 bg-gray-50 dark:bg-gray-800 shadow-md shadow-gray-300 hover:shadow-gray-400 dark:shadow-none hover:bg-white dark:hover:shadow-none dark:hover:bg-gray-700/60 transition-all transform group hover:scale-[102%] rounded-md relative flex flex-col">
      <div className="flex flex-auto flex-col p-6 gap-2 text-gray-900 dark:text-white">
        <h2 className="flex items-center gap-2 text-xl font-semibold h-14 line-clamp-2">
          {title}
        </h2>
        <p className="my-1 h-20 line-clamp-3">{description}</p>

        <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
          Tài liệu đính kèm
        </dt>
        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul
            role="list"
            className="divide-y-2 dark:divide-y divide-gray-100 dark:divide-gray-600 rounded-md border-2 dark:border border-gray-200 dark:border-gray-600"
          >
            {url.map((data, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
              >
                <div className="flex w-0 flex-1 items-center">
                  <PaperClipIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-800 dark:text-gray-400"
                    fill="none"
                    strokeWidth={2}
                  />
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium text-gray-700 dark:text-gray-100">
                      {fileName[index] || data}
                    </span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a
                    className="p-1.5 flex items-center justify-center rounded-full bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium"
                    href={data}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ArrowDownIcon
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </dd>
      </div>
    </div>
  );
}

export default DocumentItem;
