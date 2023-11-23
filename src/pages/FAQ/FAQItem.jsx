import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

function FAQItem({ ques, ans, isLink, href, linkTitle }) {
  return (
    <div className="py-8 first:pt-4">
      <div className="flex gap-x-5">
        <QuestionMarkCircleIcon className="flex-shrink-0 mt-1 w-7 h-7 text-gray-500" />
        <div>
          <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-100">
            {ques}
          </h3>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
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
