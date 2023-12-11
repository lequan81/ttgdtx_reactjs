import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

function FAQItem({ ques, ans, isLink, href, linkTitle }) {
  return (
    <div className="p-4 last:mb-4 bg-gray-50 hover:bg-white transition-all dark:bg-gray-800 dark:hover:bg-gray-700/70 rounded-md border border-gray-200 dark:border-gray-800">
      <div className="flex gap-x-5 items-start">
        <QuestionMarkCircleIcon className="flex-shrink-0 mt-1 w-7 h-7 text-gray-700" />
        <div className="">
          <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-100">
            {ques}
          </h3>
          <p className="mt-1 text-gray-700 text-base dark:text-gray-400">
            {ans}
            {isLink && (
              <a className="no-underline text-blue-500 font-medium" href={href}>
                {" " + linkTitle}
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;
