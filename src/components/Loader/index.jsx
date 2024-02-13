function Loader() {
  return (
    <div className="flex overflow-hidden absolute bg-sky-50 dark:bg-gray-900 justify-center items-center w-full h-screen">
      <div className="grid relative w-24 h-24 grid-cols-3 gap-0.5">
        <div className="relative bg-blue-600 w-full h-full origin-[center_center] animate-[loader_2s_infinite_linear_400ms] scale-0"></div>
        <div className="relative bg-blue-600 w-full h-full origin-[center_center] animate-[loader_2s_infinite_linear_600ms] scale-0"></div>
        <div className="relative bg-blue-600 w-full h-full origin-[center_center] animate-[loader_2s_infinite_linear_800ms] scale-0"></div>
        <div className="relative bg-blue-600 w-full h-full origin-[center_center] animate-[loader_2s_infinite_linear_200ms] scale-0"></div>
        <div className="relative bg-blue-600 w-full h-full origin-[center_center] animate-[loader_2s_infinite_linear_400ms] scale-0"></div>
        <div className="relative bg-blue-600 w-full h-full origin-[center_center] animate-[loader_2s_infinite_linear_600ms] scale-0"></div>
        <div className="relative bg-blue-600 w-full h-full origin-[center_center] animate-[loader_2s_infinite_linear] scale-0"></div>
        <div className="relative bg-blue-600 w-full h-full origin-[center_center] animate-[loader_2s_infinite_linear_200ms] scale-0"></div>
        <div className="relative bg-blue-600 w-full h-full origin-[center_center] animate-[loader_2s_infinite_linear_400ms] scale-0"></div>
      </div>
    </div>
  );
}

export default Loader;
