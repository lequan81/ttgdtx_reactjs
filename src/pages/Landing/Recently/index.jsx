import { useState, useEffect } from "react";
import { Post } from "../../../components/Post";
import { getRecentPost } from "../../../services/getRecentPost";

function Recently() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getRecentPost();
      setResults(data);
    })();
  }, []);

  return (
    <div className="flex flex-col w-full mt-6 lg:mt-2">
      <div className="container px-6 sm:py-8 lg:py-4 py-0 mx-auto">
        <div className="text-center">
          <h1 className="text-center text-blue-600 dark:text-blue-500 text-lg sm:text-xl uppercase font-bold mb-2 mt-2">
            Hoạt động nổi bật gần đây
          </h1>
        </div>
      </div>
      <div className="shadow-none rounded flex w-full h-full">
        <div className="px-6 py-4 md:py-2.5 mx-auto w-full">
          <div className="grid sm:gap-6 md:grid-cols-3 xl:grid-cols-4 sm:max-w-full mb-24 sm:mb-4 grid-cols-1 gap-y-6">
            {/* Post List */}

            {results?.map((post) => (
              <Post
                key={post.id}
                title={post.title}
                description={post.description}
                coverUrl={
                  post.coverImage?.url ||
                  "https://picsum.photos/seed/picsum/600"
                }
                hashtag={post.category.name}
                createdAt={post.createdAt}
                path={`recently/${post.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recently;