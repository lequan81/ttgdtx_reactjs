import { useState, useEffect } from "react";

export const useTeamImage = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const teamInfo = [
      {
        name: "Nguyễn Văn A",
        onPosition: "Giám đốc",
      },
      {
        name: "Võ Thành Sự",
        onPosition: "Phó Giám đốc",
      },
      {
        name: "Nguyễn Thị Thanh Tâm",
        onPosition: "Chủ tịch Công đoàn",
      },
    ];

    if (isValid) {
      let imageUrl = new URL(
        `../../assets/images/teamImage/jpg/teams${count}.jpg`,
        import.meta.url
      ).pathname;

      let imageWebpUrl = new URL(
        `../../assets/images/teamImage/webp/team${count}.webp`,
        import.meta.url
      ).pathname;

      if (count < teamInfo.length) {
        setImages([
          ...images,
          {
            id: count,
            name: teamInfo[count].name || "Không tên",
            onPosition: teamInfo[count].onPosition || "Giáo viên/Trợ giảng",
            url: !imageWebpUrl.includes("undefined")
              ? imageWebpUrl
              : `https://api.dicebear.com/7.x/initials/svg?randomizeIds=true&seed=${
                  teamInfo[count].name || "Anonymous"
                }`,
            fallbackUrl: !imageUrl.includes("undefined")
              ? imageUrl
              : `https://api.dicebear.com/7.x/initials/svg?randomizeIds=true&seed=${
                  teamInfo[count].name || "Anonymous"
                }`,
          },
        ]);
        setCount(count + 1);
      } else {
        setIsValid(false);
        setCount(0);
      }
    }
  }, [count, images, isValid]);
  return [images];
};
