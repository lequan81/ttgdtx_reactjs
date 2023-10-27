import PostItem from "./PostItem";

export function Post() {
  return (
    <div className="px-3 py-2 mx-auto w-full">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
}
