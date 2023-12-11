import toast from "react-hot-toast";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

export function Toast(type, title) {
  return toast.custom(
    (t) => (
      <div
        className={`flex flex-row grow items-center justify-center z-30 w-full mx-auto ${
          t.visible ? "fixed top-2" : "-top-96 hidden"
        }`}
      >
        <div
          className={`flex w-full max-w-sm mx-12 overflow-hidden bg-white rounded-md shadow-none dark:bg-gray-800 border 
          ${type === "success" && "border-green-500"}
          ${type === "info" && "border-blue-500"}
          ${type === "warning" && "border-orange-500"}
          ${type === "error" && "border-red-500"}`}
        >
          <div
            className={`flex items-center justify-center w-12 
          ${type === "success" && "bg-emerald-500"}
          ${type === "info" && "bg-sky-500"}
          ${type === "warning" && "bg-orange-500"}
          ${type === "error" && "bg-red-500"}`}
          >
            {type === "success" && (
              <CheckCircleIcon className="w-6 h-6 text-white" strokeWidth={2} />
            )}
            {type === "info" && (
              <InformationCircleIcon
                className="w-6 h-6 text-white"
                strokeWidth={2}
              />
            )}
            {type === "warning" && (
              <ExclamationCircleIcon
                className="w-6 h-6 text-white"
                strokeWidth={2}
              />
            )}
            {type === "error" && (
              <XCircleIcon className="w-6 h-6 text-white" strokeWidth={2} />
            )}
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span
                className={`font-semibold text-sm
              ${type === "success" && "text-emerald-500 dark:text-emerald-400"}
              ${type === "info" && "text-blue-500 dark:text-blue-400"}
              ${type === "warning" && "text-orange-500 dark:text-orange-400"}
              ${type === "error" && "text-red-500 dark:text-red-400"}`}
              >
                {title}
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-center" }
  );
}
