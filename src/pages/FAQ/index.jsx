import { useEffect } from "react";
import FAQItem from "./FAQItem";
import data from "@data/data.json";
export default function FAQ() {
  useEffect(() => {
    window.scrollTo("top", "smooth");
  }, []);

  return (
    <div className="w-full xl:pt-12 pt-10 mb-6 md:mb-12 px-4 sm:px-6 mx-auto dark:bg-gray-900 bg-gray-100">
      <div className="mx-auto mb-2 sm:mb-16">
        <h2 className="text-xl xl:text-2xl font-bold md:leading-tight dark:text-white text-gray-900 select-none w-full bg-gray-100 dark:bg-gray-900 pb-2 pt-4 animate__animated animate__fadeIn animate__fast">
          {data.faq[0].title}
        </h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-3 mb-24 sm:mb-0 cursor-default select-none">
        {data.faq[0].children.map((item, index) => (
          <FAQItem
            key={index}
            ques={item.ques}
            ans={item.ans}
            isLink={item.isLink}
            href={item.href}
            linkTitle={item.linkTitle}
          />
        ))}
      </div>
    </div>
  );
}
