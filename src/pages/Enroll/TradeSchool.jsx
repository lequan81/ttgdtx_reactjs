import { PostList } from "../../components/Post";
export function TradeSchool() {
  return (
    <section className="flex flex-col h-full overflow-y-auto mt-12 mb-10 w-full">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-blue-600 dark:text-white sm:text-xl text-lg uppercase font-bold mb-2 mt-4 whitespace-pre-line sm:whitespace-normal">
          {`Thông tin tuyển sinh \n Cao đẳng Trung cấp`}
        </h1>
      </div>
      <div className="shadow-none rounded flex w-full h-full">
        <div className="px-6 py-2.5 mx-auto w-full">
          <div className="grid sm:gap-6 sm:grid-cols-4 sm:max-w-full grid-cols-1 gap-y-6">
            <PostList category={"tradeschool"} isNested={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
