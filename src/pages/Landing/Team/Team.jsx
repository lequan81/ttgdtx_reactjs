import data from "../../../data/data.json";
import TeamItem from "./TeamItem";

export function Team() {
  return (
    <div className="p-8 px-6 mx-auto w-full">
      <div className="mx-auto sm:text-center mb-8 w-full">
        <div>
          <p className="inline-block px-3 mb-2 text-2xl uppercase font-bold text-blue-600 dark:text-white rounded">
            Về chúng tôi
          </p>
        </div>
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
