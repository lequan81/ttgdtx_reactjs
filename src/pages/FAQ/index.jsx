import FAQItem from "./FAQItem";
import data from "../../data/data.json";
import { useTitle } from "../../hook/useTitle";
export function FAQ() {
  useTitle("Câu hỏi thường gặp");
  return (
    <div className="w-full mt-12 mb-6 px-4 sm:px-6 lg:px-8 mx-auto dark:bg-gray-900 bg-gray-100">
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white text-gray-900 select-none mt-4">
          {data.faq[0].title}
        </h2>
      </div>
      <div className="max-w-4xl mx-auto divide-y divide-gray-200 dark:divide-gray-700 cursor-default select-none">
        {data.faq[0].children.map((item) => (
          <FAQItem
            key={item.id}
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
