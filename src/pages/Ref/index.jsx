import RefItem from "./RefItem";
import data from "@data/data.json";

export default function Ref() {
  return (
    <section className="flex flex-col h-full overflow-y-auto mt-12 mb-10 w-full">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-blue-600 dark:text-white sm:text-xl lg:text-lg md:text-base uppercase font-bold mb-2 mt-4 whitespace-pre-line sm:whitespace-normal animate__animated animate__zoomIn animate__faster">
          Thông tin thêm
        </h1>
      </div>
      <div data-nosnippet className="shadow-none rounded flex w-full h-full">
        <div className="px-6 py-2.5 mx-auto w-full">
          <div className="grid gap-6 grid-cols-1 mb-16 sm:mb-0 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 sm:max-w-full">
            {data.ref.length > 0 ? (
              data.ref.map((item) => (
                <RefItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  path={item.path}
                />
              ))
            ) : (
              <p className="antialiased hover:subpixel-antialiased text-center leading-relaxed sm:text-lg text-base text-gray-800 dark:text-gray-200 col-span-4">
                Không có thông tin thêm nào gần đây
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
