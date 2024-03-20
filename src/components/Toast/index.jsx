import toast from "react-hot-toast";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

export default function Toast(type, title) {
  toast.custom(
    (t) => (
      <div
        className={`flex flex-row grow items-center justify-center z-30 w-full mx-auto ${
          t.visible ? "relative top-2" : "-top-96 hidden"
        }`}
      >
        <div
          className={`flex min-w-fit max-w-sm sm:pr-3 md:pr-6 overflow-hidden rounded sm:rounded-md shadow-none dark:bg-gray-800 border cursor-default 
          ${type === "success" && "bg-emerald-50 border-emerald-500"}
          ${type === "info" && "bg-sky-50 border-sky-500"}
          ${type === "warning" && "bg-orange-50 border-orange-500"}
          ${type === "error" && "bg-red-50 border-red-500"}`}
        >
          <div
            className={`flex items-center justify-center w-12 
          ${type === "success" && "dark:bg-emerald-500 bg-emerald-400"}
          ${type === "info" && "dark:bg-sky-500 bg-sky-400"}
          ${type === "warning" && "dark:bg-orange-500 bg-orange-400"}
          ${type === "error" && "dark:bg-red-500 bg-red-400"}`}
          >
            {type === "success" && (
              <CheckCircleIcon className="size-6 text-white" strokeWidth={2} />
            )}
            {type === "info" && (
              <InformationCircleIcon
                className="size-6 text-white"
                strokeWidth={2}
              />
            )}
            {type === "warning" && (
              <ExclamationCircleIcon
                className="size-6 text-white"
                strokeWidth={2}
              />
            )}
            {type === "error" && (
              <XCircleIcon className="size-6 text-white" strokeWidth={2} />
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
    { id: type, position: "top-center" }
  );
}
