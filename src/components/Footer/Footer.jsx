import data from "../../data/data.json";
import FooterItem from "./FooterItem";

export function Footer() {
  return (
    <footer className="px-4 pt-2.5 pb-1 mx-auto w-full text-gray-900 dark:text-white md:px-16 lg:px-8 bg-gray-200 dark:bg-gray-800">
      <div className="grid gap-10 row-gap-6 mb-2 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 dark:text-gray-100 uppercase">
              {data.info[0].heading}
            </span>
          </a>
          <div className="my-2.5 w-10/12">
            <p className="text-sm text-gray-800 dark:text-gray-200">
              {data.info[0].description}
            </p>
          </div>
        </div>

        <div className="space-y-1.5 text-sm">
          <p className="text-base font-semibold text-gray-900 dark:text-white">
            {data.footer[0].title}
          </p>
          {data.footer[0].children.map((child, index) => (
            <FooterItem
              key={index}
              isIcon={data.footer[0].isIcon}
              title={child.title}
              ariaLabel={child.ariaLabel}
              value={child.value}
              href={child.href}
            />
          ))}
        </div>

        <div>
          <span className="text-base font-semibold text-gray-900 dark:text-white">
            {data.footer[1].title}
          </span>
          <div className="flex items-center mt-1 space-x-3">
            {data.footer[1].children.map((child, index) => (
              <FooterItem
                key={index}
                isIcon={data.footer[1].isIcon}
                style={child.style}
                svgPath={child.svgPath}
                href={child.href}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-1.5 border-t border-gray-800 dark:border-gray-600 lg:flex-row">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Copyright 2023 Lorem Inc. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/faq"
              className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-blue-500"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-blue-500"
            >
              Chính sách bảo mật
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-blue-500"
            >
              Các điều khoản
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
