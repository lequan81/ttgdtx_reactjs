import { useState, useEffect } from "react";
import { Post } from "./Post";
import { getPostByCategory } from "../../services/getPostByCategory";

export function PostList({ category }) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getPostByCategory(category);
      setResults(data);
    })();
  }, [category]);

  return (
    <>
      {results !== undefined
        ? results.map((post) => (
            <Post
              key={post.node.id}
              title={post.node.title}
              description={post.node.description}
              coverUrl={
                post.node.coverImage?.url ||
                "https://picsum.photos/seed/picsum/600"
              }
              hashtag={post.node.hashtag}
              createAt={post.node.createAt}
              path={post.node.slug}
            />
          ))
        : null}
    </>
  );
}
