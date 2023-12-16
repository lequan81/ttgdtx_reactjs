import TeamItem from "./TeamItem";
import data from "../../../data/data.json";
import { useTeamData } from "../../../hook/useTeamData";

function Team() {
  const [teams] = useTeamData();

  return (
    <div className="flex flex-col w-full mt-6 lg:mt-2">
      <div className="container px-6 md:py-8 py-6 mx-auto">
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
        className={`mt-6 md:mt-0 grid md:gap-y-8 md:gap-x-16 gap-y-6 lg:gap-x-8 xl:gap-x-14 grid-cols-1 mx-auto lg:max-w-screen-lg md:grid-cols-2 lg:grid-cols-3 text-gray-900 dark:text-gray-100 ${
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
            email={team.email}
            phone={team.phone}
            address={team.address}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
