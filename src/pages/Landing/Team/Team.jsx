import TeamItem from "./TeamItem";
import data from "../../../data/data.json";
import { useTeamImage } from "../../../hook/useImage";

export function Team() {
  // eslint-disable-next-line no-unused-vars
  const [teams, setTeams] = useTeamImage();
  return (
    <div className="flex flex-col w-full mt-2">
      <div className="container px-6 sm:py-8 py-4 mx-auto">
        <div className="text-center">
          <h1 className="text-center text-blue-600 dark:text-blue-500 text-lg sm:text-xl uppercase font-bold mb-2 mt-2">
            {data.teams[0].title || "Về chúng tôi"}
          </h1>

          <p className="mt-3 text-gray-700 dark:text-gray-400 text-sm sm:text-base">
            {data.teams[0].subTitle ||
              "Giảng viên giàu kinh nghiệm, có trình độ chuyên môn cao, trải qua kì tuyển chọn đặc biệt"}
          </p>
        </div>
      </div>
      <div
        className={`grid sm:gap-x-8 gap-y-6 grid-cols-1 mx-auto lg:max-w-screen-lg sm:grid-cols-3 text-gray-900 dark:text-gray-100 ${
          teams.length > 0 ? "" : "bg-white dark:bg-gray-800 animate-pulse"
        }`}
      >
        {teams.map((team) => (
          <TeamItem
            key={team.id}
            name={team.name}
            onPosition={team.onPosition}
            avatar={team.url}
            fallbackAvatar={team.fallbackUrl}
          />
        ))}
      </div>
    </div>
  );
}
