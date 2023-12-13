import ContactItem from "./ContactItem";
import ContactIcon from "./ContactIcon";
import data from "../../data/data.json";

export default function Contact() {
  return (
    <div className="flex flex-col w-full mt-2">
      <div className="container px-6 sm:py-8 py-4 mx-auto">
        <div className="text-center">
          <h1 className="text-center text-blue-600 dark:text-blue-500 sm:text-xl text-lg uppercase font-bold mb-2 mt-2">
            {data.contact[0].title || "Thông tin liên hệ"}
          </h1>

          <p className="mt-3 text-gray-700 dark:text-gray-400 text-sm sm:text-base">
            {data.contact[0].subTitle ||
              "Sự hài lòng của các bạn là trách nhiệm của chúng tôi"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:gap-x-2 gap-y-8 sm:gap-y-0 sm:mt-10 mt-6 mb-20 sm:mb-0 sm:grid-cols-3">
          {data.contact[0].children.map((item) => (
            <ContactItem
              key={item.title}
              isIcon={item.isIcon}
              icon={<ContactIcon type={item.icon} />}
              title={item.title}
              subTitle={item.subTitle}
              href={item.href}
              ariaLabel={item.ariaLabel}
              value={item.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
