import ContactItem from "./ContactItem";
import ContactIcon from "./ContactIcon";
import data from "../../data/data.json";

export default function Contact() {
  return (
    <div className="flex flex-col w-full mt-2 md:mt-6">
      <div className="container px-6 py-0 lg:py-6 mx-auto">
        <div className="text-center">
          <h1 className="text-center text-blue-600 dark:text-blue-500 sm:text-xl text-lg uppercase font-bold mb-2 mt-2">
            {data.contact[0].title || "Thông tin liên hệ"}
          </h1>

          <p className="mt-3 text-gray-700 dark:text-gray-400 text-sm sm:text-base">
            {data.contact[0].subTitle ||
              "Sự hài lòng của các bạn là trách nhiệm của chúng tôi"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:gap-x-2 gap-y-8 lg:gap-y-0 lg:mt-10 mt-6 mb-24 sm:mb-8 space-y-4 lg:space-y-0 lg:grid-cols-3">
          {data.contact[0].children.map((item) => (
            <ContactItem
              key={item.title}
              isIcon={item.isIcon}
              icon={<ContactIcon type={item.icon} />}
              title={item.title}
              subTitle={item.subTitle}
              href={item.href}
              arialLabel={item.arialLabel}
              value={item.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
