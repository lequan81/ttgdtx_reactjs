import Post from "../../components/Post";
export function Extra() {
  return (
    <section className="flex flex-col h-full overflow-y-auto mt-12 mb-10 w-full">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-blue-600 dark:text-white text-2xl uppercase font-bold mb-2 mt-2">
          Các hoạt động ngoại khóa
        </h1>
      </div>
      <div className="shadow-md rounded flex w-full h-full">
        <div className="px-6 py-2.5 mx-auto w-full">
          <div className="grid gap-6 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {/* Post List */}
          </div>
        </div>
      </div>
    </section>
  );
}
