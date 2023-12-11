import { useLayoutEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { getPostContent } from "../../services/getPostContent";
import HashtagItem from "./HashtagItem";
import Button from "../Button";

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
    <div className="w-full sm:px-20 px-0 sm:mt-16 mt-12 mx-auto">
      <article
        className={`space-y-8 text-gray-900 dark:text-gray-50 sm:p-6 p-4 min-h-[80vh] shadow-md shadow-gray-300 dark:shadow-none rounded-sm ${
          blogDatas.isDone
            ? "dark:bg-gray-800/70 bg-white/50"
            : "dark:bg-gray-800 bg-white/80 animate-pulse"
        }`}
      >
        {blogDatas.isDone === true && (
          <>
            <div className="sm:space-x-24 space-x-0 flex sm:flex-row flex-col w-full">
              <div className="flex flex-col w-full grow">
                <h1 className="sm:text-3xl text-lg font-bold">
                  {blogDatas.title}
                </h1>
                <p className=" dark:bg-blue-400 dark:text-gray-900 text-blue-500 bg-sky-100 rounded-sm w-fit flex items-center justify-center text-left tracking-wide sm:text-base text-sm mt-4 px-1.5 py-1">
                  {blogDatas.category.name}
                </p>
                <p className="text-xs sm:hidden mt-2 text-gray-700 dark:text-gray-400">
                  {new Date(
                    blogDatas.createdAt || "01/01/1970"
                  ).toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="hidden sm:flex items-center grow flex-row w-fit dark:text-gray-400">
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
            <div className="dark:text-gray-100 sm:mx-4 mx-1">
              {Object.keys(blogDatas.content).length !== 0 && (
                <RichText
                  content={blogDatas.content}
                  references={blogDatas.references}
                  renderers={{
                    p: ({ children }) =>
                      children.props.content[0].text !== "\n\n" ? (
                        <p className="text-gray-900 dark:text-white mb-1.5 sm:text-base text-sm">
                          {children}
                        </p>
                      ) : (
                        <br className="my-1.5 py-1.5" />
                      ),
                    img: ({ src, altText }) => (
                      <figure className="mx-auto my-2 sm:max-w-2xl w-full bg-white/30 dark:bg-gray-800/70">
                        <img
                          loading="lazy"
                          className="object-cover bg-center aspect-video rounded bg-no-repeat sm:max-w-2xl w-full mx-auto my-2 bg-transparent"
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
      <div className="mx-2 text-sm dark:text-gray-400 sm:mt-3 sm:mb-9 mt-4 mb-24 flex sm:flex-row flex-col-reverse space-x-0 space-y-2 sm:space-y-0 sm:space-x-2">
        <div className="flex items-center justify-start sm:w-3/12 w-full py-2 dark:text-gray-400 text-gray-700 group">
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
        <div className="flex items-center justify-start flex-grow sm:flex-grow-0 sm:justify-end w-full space-x-2">
          {blogDatas.hashtag.map((data) => (
            <HashtagItem key={data} title={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
