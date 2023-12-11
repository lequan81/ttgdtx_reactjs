function Heading({ heading }) {
  return (
    <div className="flex items-center sm:max-w-fit w-full justify-start h-full px-2">
      <a
        href="/"
        className="text-xl font-semibold dark:text-white text-gray-900 cursor-default"
      >
        <img
          src="/icon.png"
          alt="logo"
          className="block sm:hidden bg-center bg-no-repeat object-cover w-9 h-9"
        />
        <span className="hidden sm:block">{heading}</span>
      </a>
    </div>
  );
}

export default Heading;
