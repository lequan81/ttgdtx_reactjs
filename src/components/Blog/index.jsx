import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { getPostContent } from "@services/getPostContent";
import Button from "@components/Button";
import HashtagItem from "./HashtagItem";

const Blog = () => {
  useEffect(() => {
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
  useEffect(() => {
    (async () => {
      const data = await getPostContent(slug);
      setResults(data);
    })();
  }, [slug]);

  useEffect(() => {
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
    <div className="w-full sm:px-20 px-0 sm:mt-16 mt-12 mx-auto">
      <article
        className={`xl:space-y-8 space-y-4 text-gray-900 dark:text-gray-50 sm:p-6 p-4 min-h-[80vh] shadow-md shadow-gray-300 dark:shadow-none rounded-sm ${
          blogDatas.isDone
            ? "dark:bg-gray-800/70 bg-white"
            : "dark:bg-gray-800 bg-white/80 animate-pulse"
        }`}
      >
        {blogDatas.isDone === true && (
          <>
            <div className="sm:space-x-24 space-x-0 flex flex-col w-full">
              <div className="flex flex-col w-full grow gap-y-3">
                <div className="flex flex-row items-center justify-between w-full">
                  <p className="antialiased hover:subpixel-antialiased dark:bg-blue-600 dark:text-white text-blue-600 bg-blue-50 rounded-sm w-fit flex items-center justify-center text-left tracking-wide text-sm px-1.5 py-0.5">
                    {blogDatas.category.name}
                  </p>
                  <p className="antialiased hover:subpixel-antialiased tabular-nums text-xs text-gray-700 dark:text-gray-400">
                    {new Date(
                      blogDatas.createdAt || "01/01/1970"
                    ).toLocaleDateString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex flex-row w-full">
                  <h1 className="xl:text-2xl md:text-xl sm:text-lg font-bold">
                    {blogDatas.title}
                  </h1>
                </div>
              </div>
            </div>
            <div className="dark:text-gray-100 whitespace-pre-line mx-1 sm:mx-2 md:mx-4 lg:mx-6 xl:mx-8">
              {Object.keys(blogDatas.content).length !== 0 && (
                <RichText
                  content={blogDatas.content}
                  references={blogDatas.references}
                  renderers={{
                    p: ({ children }) => (
                      <p className="mb-4 antialiased hover:subpixel-antialiased text-gray-900 dark:text-white text-sm xl:text-base">
                        <span className="">{children}</span>
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-outside ml-4 mb-4 space-y-2 antialiased hover:subpixel-antialiased text-gray-900 dark:text-white text-sm xl:text-base">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-outside ml-4 mb-4 space-y-2 antialiased hover:subpixel-antialiased text-gray-900 dark:text-white text-sm xl:text-base">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="pl-1.5">{children}</li>
                    ),
                    img: ({ src, altText }) => (
                      <figure className="mx-auto my-2 sm:max-w-2xl w-full bg-white/30 dark:bg-gray-800/70">
                        <img
                          className="object-cover bg-center aspect-video rounded bg-no-repeat sm:max-w-2xl w-full mx-auto my-2 bg-transparent"
                          src={src}
                          alt={altText || "blog image"}
                        />
                        <figcaption className="bg-transparent px-5 py-1.5 text-center text-gray-900 dark:text-gray-200 text-sm italic font-medium">
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
      <div className="mx-2 text-sm dark:text-gray-400 lg:mt-3 lg:mb-9 mt-4 mb-28 flex flex-row space-x-2 md:space-x-4">
        <div className="flex lg:items-center items-start justify-between sm:w-3/12 w-full py-2 dark:text-gray-400 text-gray-700 group">
          <Button
            title={"Quay lại"}
            type={"button"}
            onClickHandle={() =>
              location.pathname.includes("/recently")
                ? navigate("/")
                : navigate(-1)
            }
            isIcon={true}
            isLoading={false}
            icon={
              <ArrowLeftIcon
                className="w-5 h-5 rtl:rotate-180"
                strokeWidth={2}
              />
            }
          />
        </div>
        <div className="flex items-center flex-grow justify-end w-full space-x-2">
          {blogDatas.hashtag.map((data) => (
            <HashtagItem key={data} title={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
