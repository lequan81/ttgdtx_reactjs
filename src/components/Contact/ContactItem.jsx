function ContactItem({
  isIcon,
  icon,
  title,
  subTitle,
  href,
  ariaLabel,
  value,
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {isIcon && (
        <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
          {icon}
        </span>
      )}
      <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
        {title}
      </h2>
      <p className="mt-2 text-gray-500 dark:text-gray-400">{subTitle}</p>
      <a
        className="mt-2 text-blue-500 dark:text-blue-400"
        href={href}
        aria-label={ariaLabel}
        title={ariaLabel}
      >
        {value}
      </a>
    </div>
  );
}

export default ContactItem;