import {
  AtSymbolIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import ContactItem from "./ContactItem";

export function Contact() {
  const contactInfo = [
    {
      title: "Thông tin liên hệ",
      subTitle: "Sự hài lòng của các bạn là trách nhiệm của chúng tôi",
      children: [
        {
          title: "Liên hệ",
          subTitle: "Thứ 2 - Thứ 6 từ 8h - 19h",
          isIcon: true,
          icon: (
            <PhoneIcon
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            />
          ),
          ariaLabel: "phone number",
          value: "0975940054",
          href: "tel:0975940054",
        },
        {
          title: "Địa chỉ",
          subTitle: "Luôn mở cửa các ngày trong tuần",
          isIcon: true,
          icon: (
            <MapPinIcon
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            />
          ),
          ariaLabel: "address",
          value:
            "102 Phan Chu Trinh, KP8, thị trấn Vĩnh An, Vĩnh Cửu, Đồng Nai",
          href: "https://maps.app.goo.gl/FjbgZDYWGJ9a8ArUA?g_st=iz",
        },
        {
          title: "Email",
          subTitle: "Làm việc 24/7",
          isIcon: true,
          icon: (
            <AtSymbolIcon
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            />
          ),
          ariaLabel: "email",
          value: "gdtx.gdtxvinhcuu@dongnai.edu.vn",
          href: "mailto:gdtx.gdtxvinhcuu@dongnai.edu.vn",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full mt-2">
      <div className="container px-6 py-8 mx-auto">
        <div className="text-center">
          <h1 className="text-center text-blue-600 dark:text-blue-500 text-xl uppercase font-bold mb-2 mt-2">
            {contactInfo[0].title || "Thông tin liên hệ"}
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            {contactInfo[0].subTitle ||
              "Sự hài lòng của các bạn là trách nhiệm của chúng tôi"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {contactInfo[0].children.map((item) => (
            <ContactItem
              key={item.title}
              isIcon={item.isIcon}
              icon={item.icon}
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
