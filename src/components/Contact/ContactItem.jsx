import {
  AtSymbolIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function ContactItem({
  show,
  isIcon,
  icon,
  title,
  subTitle,
  href,
  arialLabel,
  value,
}) {
  return (
    <div
      className={`flex flex-col items-center justify-start text-center ${
        show ? "animate__animated animate__zoomIn" : ""
      }`}
    >
      {isIcon && (
        <a
          className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800"
          href={href}
          title={arialLabel}
          target="_blank"
          rel="noreferrer"
        >
          {icon === "phone" && (
            <PhoneIcon
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              className="sm:size-6 size-5"
            />
          )}
          {icon === "address" && (
            <MapPinIcon
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              className="sm:size-6 size-5"
            />
          )}
          {icon === "email" && (
            <AtSymbolIcon
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              className="sm:size-6 size-5"
            />
          )}
        </a>
      )}
      <h2 className="mt-4 text-base xl:text-lg font-medium text-gray-800 dark:text-white">
        {title}
      </h2>
      <p className="antialiased hover:subpixel-antialiased mt-2 text-gray-700 dark:text-gray-400 text-sm xl:text-base">
        {subTitle}
      </p>
      <a
        className="mt-2 text-blue-700 dark:text-blue-400 w-full sm:w-10/12 text-base"
        href={href}
        title={arialLabel}
        target="_blank"
        rel="noreferrer"
      >
        {value}
      </a>
    </div>
  );
}

export default ContactItem;
