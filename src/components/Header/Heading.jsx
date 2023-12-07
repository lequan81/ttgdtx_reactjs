function Heading({ heading }) {
  return (
    <>
      <div className="flex items-center min-w-fit justify-start h-full px-2">
        <a
          href="/"
          className="text-xl font-semibold dark:text-white text-gray-900 cursor-default"
        >
          {heading}
        </a>
      </div>
    </>
  );
}

export default Heading;
