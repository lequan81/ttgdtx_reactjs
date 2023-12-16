function Heading({ heading }) {
  return (
    <div className="flex items-center lg:w-full md:max-w-fit w-full justify-start h-full px-2 md:px-0">
      <a
        href="/"
        className="text-xl font-semibold dark:text-white text-gray-900 cursor-default"
      >
        <img
          src="/icon.ico"
          alt="logo"
          className="block lg:hidden bg-center bg-no-repeat object-cover w-8 h-8"
        />
        <span className="hidden lg:block sm:text-xs md:text-sm xl:text-lg">
          {heading}
        </span>
      </a>
    </div>
  );
}

export default Heading;
