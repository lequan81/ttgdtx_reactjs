function FooterItem({
  title,
  value,
  href,
  ariaLabel,
  isIcon = false,
  style,
  svgPath,
}) {
  return isIcon ? (
    <a href={href} className={style}>
      <svg viewBox="0 0 16 16" fill="currentColor" className="h-6">
        <path d={svgPath} />
      </svg>
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
