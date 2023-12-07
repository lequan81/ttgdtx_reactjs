import { PostList } from "../../components/Post";

export function Other() {
  return (
    <section className="flex flex-col h-full overflow-y-auto mt-12 mb-10 w-full">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-blue-600 dark:text-white text-xl uppercase font-bold mb-2 mt-4">
          Các chương trình khác
        </h1>
      </div>
      <div className="shadow-md shadow-gray-700 dark:shadow-none rounded flex w-full h-full">
        <div className="px-6 py-2.5 mx-auto w-full">
          <div className="grid gap-6 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <PostList category={"other"} isNested={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
