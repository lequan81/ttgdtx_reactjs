import TeamItem from "./TeamItem";
import data from "../../../data/data.json";
import { useTeamImage } from "../../../hook/useImage";

export function Team() {
  // eslint-disable-next-line no-unused-vars
  const [teams, setTeams] = useTeamImage();
  return (
    <div className="flex flex-col w-full mt-2">
      <div className="container px-6 py-8 mx-auto">
        <div className="text-center">
          <h1 className="text-center text-blue-600 dark:text-blue-500 text-xl uppercase font-bold mb-2 mt-2">
            {data.teams[0].title || "Về chúng tôi"}
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            {data.teams[0].subTitle ||
              "Giảng viên giàu kinh nghiệm, có trình độ chuyên môn cao, trải qua kì tuyển chọn đặc biệt"}
          </p>
        </div>
      </div>
      <div
        className={`grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 text-gray-900 dark:text-gray-100 ${
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
