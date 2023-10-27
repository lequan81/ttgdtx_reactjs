import data from "../../data/data.json";
import TeamItem from "./TeamItem";

export function Team() {
  return (
    <div className="p-8 px-6 mx-auto w-full">
      <div className="mx-auto sm:text-center mb-8 w-full">
        <div>
          <p className="inline-block px-3 mb-2 text-2xl font-bold tracking-wide text-blue-600 dark:text-white uppercase rounded">
            Mô hình tổ chức
          </p>
        </div>
        {/* <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
              width="52"
              height="24"
            />
          </svg>
          <span className="relative">Welcome</span>
        </span>{" "}
        our talented team of professionals
      </h2> */}
        <p className="text-base text-gray-800 dark:text-gray-300 md:text-lg">
          {data.teams[0].description}
        </p>
      </div>
      <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 text-gray-900 dark:text-gray-100">
        {data.teams[0].children.map((child, index) => (
          <TeamItem
            key={index}
            name={child.name}
            job={child.job}
            coverUrl={child.coverUrl}
          />
        ))}
      </div>
    </div>
  );
}
