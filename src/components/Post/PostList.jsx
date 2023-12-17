import { useState, useEffect } from "react";
import { getPostByCategory } from "../../services/getPostByCategory";
import { Post } from "./Post";

export function PostList({ category, isNested = false }) {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getPostByCategory(category);
      setResults(data);
    })();
    setIsLoading(false);
  }, [category]);

  return (
    <>
      {results.length > 0
        ? results.map((post) => (
            <Post
              key={post.node.id}
              title={post.node.title}
              description={post.node.description}
              coverUrl={
                post.node.coverImage?.url ||
                "https://picsum.photos/seed/picsum/600"
              }
              hashtag={post.node.category.name}
              createdAt={post.node.createdAt}
              path={`${isNested ? "" : category + "/"}${post.node.slug}`}
            />
          ))
        : isLoading === false && (
            <p className="text-center leading-relaxed sm:text-lg text-base text-gray-800 dark:text-gray-200 col-span-4">
              Không có bài viết nào gần đây
            </p>
          )}
    </>
  );
}
