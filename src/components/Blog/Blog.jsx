import { useLayoutEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { getPostContent } from "../../services/getPostContent";
import HashtagItem from "./HashtagItem";

export function Blog() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();
  let { slug } = useParams();
  const [blogDatas, setBlogDatas] = useState({
    isDone: false,
    id: String,
    title: String,
    content: {},
    references: [],
    hashtag: [],
    createdAt: String,
    coverUrl: String,
    category: String,
  });

  const [results, setResults] = useState([]);
  useLayoutEffect(() => {
    (async () => {
      const data = await getPostContent(slug);
      setResults(data);
    })();
  }, [slug]);

  useLayoutEffect(() => {
    results.map((data) => {
      setBlogDatas({
        id: data?.id,
        title: data?.title,
        content: data?.content.raw,
        hashtag: data?.hashtag,
        createdAt: data?.createdAt,
        references: data?.references,
        category: data?.category,
        coverUrl:
          data.coverImage?.url || "https://picsum.photos/seed/picsum/600",
        isDone: true,
      });
    });
  }, [results]);

  return (
    <div className="w-full px-20 mt-16 mx-auto">
      <article
        className={`space-y-8 text-gray-900 dark:text-gray-50 p-6 min-h-[80vh] shadow-md shadow-gray-300 dark:shadow-none rounded-sm ${
          blogDatas.isDone
            ? "dark:bg-gray-800/70 bg-white/50"
            : "dark:bg-gray-800 bg-white/80 animate-pulse"
        }`}
      >
        {blogDatas.isDone === true && (
          <>
            <div className="space-x-24 flex flex-row w-full">
              <div className="flex flex-row grow">
                <div className="flex flex-col">
                  <h1 className="text-3xl font-bold">{blogDatas.title}</h1>
                  <p className=" dark:bg-blue-400 dark:text-gray-900 text-blue-500 bg-sky-100 rounded-sm w-fit flex items-center justify-center text-left tracking-wide text-base mt-4 px-1.5 py-1">
                    {blogDatas.category.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center w-fit dark:text-gray-400">
                <p className="text-sm">
                  {new Date(
                    blogDatas.createdAt || "01/01/1970"
                  ).toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="dark:text-gray-100 mx-4">
              {Object.keys(blogDatas.content).length !== 0 && (
                <RichText
                  content={blogDatas.content}
                  references={blogDatas.references}
                  renderers={{
                    p: ({ children }) =>
                      children.props.content[0].text !== "\n\n" ? (
                        <p className="text-gray-900 dark:text-white mb-1.5">
                          {children}
                        </p>
                      ) : (
                        <br className="my-1.5 py-1.5" />
                      ),
                    img: ({ src, altText }) => (
                      <figure className="mx-auto my-2 max-w-2xl bg-white/30 dark:bg-gray-800/70">
                        <img
                          loading="lazy"
                          className="object-cover bg-center aspect-video rounded bg-no-repeat max-w-2xl mx-auto my-2 bg-transparent"
                          src={src}
                          alt={altText}
                        />
                        <figcaption className="bg-transparent px-5 py-1.5 text-center text-gray-900 dark:text-gray-200 text-sm font-medium">
                          {altText}
                        </figcaption>
                      </figure>
                    ),
                  }}
                />
              )}
            </div>
          </>
        )}
      </article>
      <div className="mx-2 text-sm dark:text-gray-400 mt-3 mb-9 flex flex-row space-x-0 md:space-x-2">
        <div className="hidden md:flex items-center justify-start w-3/12 py-2 dark:text-gray-400 text-gray-700 group">
          <button
            className="flex items-center justify-center text-sm gap-x-2 group-hover:text-blue-500 dark:group-hover:text-gray-200"
            onClick={() =>
              location.pathname.includes("/recently")
                ? navigate("/")
                : navigate(-1)
            }
          >
            <ArrowLeftIcon className="w-5 h-5 rtl:rotate-180" strokeWidth={2} />
            <span className="font-semibold">Quay lại</span>
          </button>
        </div>
        <div className="flex items-center justify-start flex-grow md:flex-grow-0 md:justify-end w-full space-x-2">
          {blogDatas.hashtag.map((data) => (
            <HashtagItem key={data} title={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
