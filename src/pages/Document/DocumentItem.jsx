import { PaperClipIcon } from "@heroicons/react/24/outline";

function DocumentItem({ title, description, url = [], fileName = [] }) {
  return (
    <div className="cursor-default duration-300 bg-white dark:bg-gray-800 shadow-md shadow-gray-300 hover:shadow-gray-400 dark:shadow-none hover:bg-gray-50 dark:hover:shadow-none dark:hover:bg-gray-700/60 transition-all transform hover:scale-[102%] rounded-md relative flex flex-col animate__animated animate__zoomIn animate__fast">
      <div className="flex flex-auto flex-col p-4 gap-2 text-gray-900 dark:text-white">
        <h2 className="flex items-start gap-2 xl:text-lg text-base font-semibold md:h-14 h-12 line-clamp-2">
          {title}
        </h2>
        <p className="antialiased hover:subpixel-antialiased my-1 h-16 md:h-[3.75rem] line-clamp-3 text-sm">
          {description}
        </p>
        <dl>
          <dt className="sm:text-sm text-xs font-medium leading-6 text-gray-900 dark:text-gray-100 mb-2">
            Tài liệu đính kèm
          </dt>
          <dd className="text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <ul className="flex flex-col space-y-2">
              {url.map((data, index) => (
                <a
                  key={index}
                  href={data}
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  <li className="group flex items-center justify-between py-1 px-2.5 text-sm leading-6 max-h-10 border-2 border-gray-100 dark:border-gray-600 rounded sm:rounded-md bg-gray-100 dark:bg-gray-700/30 hover:bg-blue-100 hover:border-blue-300 dark:hover:bg-blue-600 dark:hover:border-blue-400">
                    <div className="flex w-0 flex-1 items-center gap-x-2">
                      <PaperClipIcon
                        className="size-4 flex-shrink-0 text-gray-800 dark:text-gray-400 group-hover:text-blue-600 group-hover:dark:text-white"
                        fill="none"
                        strokeWidth={2}
                      />
                      <div className="flex min-w-0 flex-1 gap-2">
                        <span className="truncate text-sm text-gray-700 dark:text-gray-100">
                          {fileName[index] || data}
                        </span>
                      </div>
                    </div>
                  </li>
                </a>
              ))}
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default DocumentItem;
