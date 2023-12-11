import {
  AtSymbolIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function ContactIcon({ type }) {
  return (
    <>
      {type === "phone" && (
        <PhoneIcon
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          className="sm:w-6 sm:h-6 w-5 h-5"
        />
      )}
      {type === "address" && (
        <MapPinIcon
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          className="sm:w-6 sm:h-6 w-5 h-5"
        />
      )}
      {type === "email" && (
        <AtSymbolIcon
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          className="sm:w-6 sm:h-6 w-5 h-5"
        />
      )}
    </>
  );
}

export default ContactIcon;
