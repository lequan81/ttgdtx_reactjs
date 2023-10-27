import Post from "../../components/Post";
export function Extra() {
  return (
    <section className="flex flex-col h-1/2 overflow-y-auto mt-16 bg-gray-100 dark:bg-gray-900 w-full">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-blue-600 dark:text-white text-2xl uppercase font-bold mb-2 mt-2">
          Các hoạt động ngoại khóa
        </h1>
      </div>
      <div className="shadow-md rounded flex w-full h-full">
        <Post />
      </div>
    </section>
  );
}
