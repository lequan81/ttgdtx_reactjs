import Post from "../../components/Post";

export function Training() {
  return (
    <section className="flex flex-col mt-16 bg-gray-100 dark:bg-gray-900 border border-dashed border-green-400 w-full">
      <h1 className="text-center text-blue-600 dark:text-white text-2xl uppercase font-bold mb-2 mt-2">
        Đào tạo ngắn hạn
      </h1>
      <Post />
    </section>
  );
}
