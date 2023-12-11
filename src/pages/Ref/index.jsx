import { useTitle } from "../../hook/useTitle";
import RefItem from "./RefItem";
import data from "../../data/data.json";

export function Ref() {
  useTitle("Thông tin thêm");
  return (
    <section className="flex flex-col h-full overflow-y-auto mt-12 mb-10 w-full">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-blue-600 dark:text-white sm:text-xl text-lg uppercase font-bold mb-2 mt-4">
          Thông tin thêm
        </h1>
      </div>
      <div className="shadow-md shadow-gray-700 dark:shadow-none rounded flex w-full h-full">
        <div className="px-6 py-2.5 mx-auto w-full">
          <div className="grid gap-6 gred-cols-1 sm:grid-cols-4 sm:max-w-full">
            {data.ref.map((item) => (
              <RefItem
                key={item.title}
                title={item.title}
                description={item.description}
                path={item.path}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
