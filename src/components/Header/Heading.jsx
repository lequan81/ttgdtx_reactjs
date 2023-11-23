function Heading({ heading }) {
  return (
    <>
      <div className="flex items-center min-w-fit justify-start h-full px-2">
        <h1 className="text-xl font-semibold dark:text-white text-gray-900">
          {heading}
        </h1>
      </div>
    </>
  );
}

export default Heading;
