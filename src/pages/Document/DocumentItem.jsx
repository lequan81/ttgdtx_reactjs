import { ArrowDownIcon, PaperClipIcon } from "@heroicons/react/24/outline";

function DocumentItem({ title, description, url = [], fileName = [] }) {
  return (
    <div className="cursor-default duration-300 bg-white dark:bg-gray-800 shadow-md shadow-gray-300 hover:shadow-gray-400 dark:shadow-none hover:bg-gray-50 dark:hover:shadow-none dark:hover:bg-gray-700/60 transition-all transform group hover:scale-[102%] rounded-md relative flex flex-col animate__animated animate__zoomIn animate__fast">
      <div className="flex flex-auto flex-col p-4 gap-2 text-gray-900 dark:text-white">
        <h2 className="flex items-start gap-2 xl:text-lg text-base font-semibold md:h-14 h-12 line-clamp-2">
          {title}
        </h2>
        <p className="antialiased hover:subpixel-antialiased my-1 h-16 md:h-[3.75rem] line-clamp-3 text-sm">
          {description}
        </p>

        <dt className="sm:text-sm text-xs font-medium leading-6 text-gray-900 dark:text-gray-100">
          Tài liệu đính kèm
        </dt>
        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul
            role="list"
            className="divide-y-2 dark:divide-y divide-gray-100 dark:divide-gray-600 rounded sm:rounded-md border-2 dark:border border-gray-200 dark:border-gray-600"
          >
            {url.map((data, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-2 px-2.5 text-sm leading-6"
              >
                <div className="flex w-0 flex-1 items-center gap-x-2">
                  <PaperClipIcon
                    className="xl:h-5 xl:w-5 h-4 w-4 flex-shrink-0 text-gray-800 dark:text-gray-400"
                    fill="none"
                    strokeWidth={2}
                  />
                  <div className="flex min-w-0 flex-1 gap-2">
                    <span className="truncate text-sm font-medium text-gray-700 dark:text-gray-100">
                      {fileName[index] || data}
                    </span>
                  </div>
                </div>
                <div className="md:ml-4 ml-2 flex-shrink-0">
                  <a
                    className="p-1.5 flex items-center justify-center rounded-full bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium"
                    href={data}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ArrowDownIcon
                      className="xl:h-5 xl:w-5 w-4 h-4"
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
