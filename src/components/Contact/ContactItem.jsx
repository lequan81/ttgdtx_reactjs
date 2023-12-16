function ContactItem({
  isIcon,
  icon,
  title,
  subTitle,
  href,
  arialLabel,
  value,
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {isIcon && (
        <a
          className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800"
          href={href}
          title={arialLabel}
          target="_blank"
          rel="noreferrer"
        >
          {icon}
        </a>
      )}
      <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
        {title}
      </h2>
      <p className="mt-2 text-gray-700 dark:text-gray-400 text-sm sm:text-base">
        {subTitle}
      </p>
      <a
        className="mt-2 text-blue-700 dark:text-blue-400 w-full sm:w-10/12"
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
