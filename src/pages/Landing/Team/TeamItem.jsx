import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/24/outline";

function TeamItem({
  name,
  onPosition,
  avatar,
  fallbackAvatar,
  email,
  phone,
  // eslint-disable-next-line no-unused-vars
  address,
}) {
  return (
    <div className="hs-tooltip inline-block [--trigger:hover]">
      <div className="hs-tooltip-toggle flex min-w-max">
        <div
          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 w-1/2 md:w-1/4 lg:w-2/12 bg-white border border-gray-100 text-start rounded-md shadow-md after:absolute after:top-0 after:-start-4 after:w-4 after:h-full dark:bg-gray-800 dark:border-gray-700"
          role="tooltip"
        >
          <ul className="py-3 px-4 space-y-1">
            <li className="flex flex-row items-center">
              <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-gray-200">
                <PhoneIcon
                  className="flex-shrink-0 w-4 h-4 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <p className="antialiased hover:subpixel-antialiased tabular-nums text-sm font-medium">
                  {phone}
                </p>
              </div>
            </li>
            <li className="flex flex-row items-center">
              <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-gray-200">
                <AtSymbolIcon
                  className="flex-shrink-0 w-4 h-4 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <p className="antialiased hover:subpixel-antialiased text-sm font-medium">
                  {email}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <img
          loading="lazy"
          className="object-cover sm:w-20 sm:h-20 w-16 h-16 mr-4 rounded-full shadow-md transition-shadow shadow-gray-400 dark:shadow-none"
          src={avatar || fallbackAvatar}
          alt={name}
        />

        <div className="flex flex-col justify-center">
          <p className="antialiased hover:subpixel-antialiased sm:text-lg text-base font-semibold sm:font-bold">
            {name}
          </p>
          <p className="antialiased hover:subpixel-antialiased text-sm text-gray-800 dark:text-gray-400">
            {onPosition}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamItem;
