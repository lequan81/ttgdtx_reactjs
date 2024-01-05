import TeamItem from "./TeamItem";
import data from "../../../data/data.json";
function Team() {
  const teams = data.teams[0];
  // console.log(data.teams[0]);

  return (
    <div className="flex flex-col w-full mt-6 lg:mt-2">
      <div className="container px-6 md:py-8 py-6 mx-auto">
        <div className="text-center">
          <h1 className="text-center text-blue-600 dark:text-blue-500 text-lg sm:text-xl uppercase font-bold mb-2 mt-2">
            {teams.title || "Về chúng tôi"}
          </h1>

          <p className="antialiased hover:subpixel-antialiased mt-3 text-gray-700 dark:text-gray-400 text-sm sm:text-base">
            {teams.subTitle ||
              "Giảng viên giàu kinh nghiệm, có trình độ chuyên môn cao, trải qua kì tuyển chọn đặc biệt"}
          </p>
        </div>
      </div>
      <div className="mt-6 md:mt-0 grid md:gap-y-8 md:gap-x-16 gap-y-6 lg:gap-x-8 xl:gap-x-14 grid-cols-1 mx-auto lg:max-w-screen-lg md:grid-cols-2 lg:grid-cols-3 text-gray-900 dark:text-gray-100">
        {teams.children.map((team, index) => (
          <TeamItem
            key={index}
            name={team.name || "Không tên"}
            onPosition={team.onPosition || "Giáo viên"}
            avatar={
              data.images.teamImages[index]?.url ||
              `https://api.dicebear.com/7.x/initials/svg?fontSize=40&randomizeIds=true&seed=${
                team.name || "Anomynous"
              }`
            }
            fallbackAvatar={
              data.images.teamImages[index]?.fallbackUrl ||
              `https://api.dicebear.com/7.x/initials/svg?fontSize=40&randomizeIds=true&seed=${
                team.name || "Anomynous"
              }`
            }
            email={team.email || "Không có thông tin"}
            phone={team.phone || "Không có thông tin"}
            address={team.address || "Không có thông tin"}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
