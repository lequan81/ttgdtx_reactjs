function FooterItem({ title, value, href, ariaLabel, isIcon = false, icon }) {
  return isIcon ? (
    <a
      href={href}
      className="text-gray-500 dark:text-gray-300 transition-colors duration-300"
    >
      {icon}
    </a>
  ) : (
    <div className="flex">
      <p className="mr-1 text-gray-800 dark:text-gray-100 font-semibold">
        {title + ": "}
      </p>
      <a
        href={href}
        aria-label={ariaLabel}
        title={ariaLabel}
        className="transition-colors duration-300 text-gray-800 dark:text-gray-100"
      >
        {value}
      </a>
    </div>
  );
}

export default FooterItem;
