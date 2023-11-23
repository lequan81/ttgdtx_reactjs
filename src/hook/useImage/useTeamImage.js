import { useState, useEffect } from "react";

export const useTeamImage = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const teamInfo = [
      {
        name: "John Doe",
        onPosition: "CEO",
      },
      {
        name: "John Smith",
        onPosition: "CTO",
      },
      {
        name: "Jane Doe",
        onPosition: "Director",
      },
      {
        name: "Jane Smith",
        onPosition: "Project Manager",
      },
      {
        name: "",
        onPosition: "",
      },
    ];

    if (isValid) {
      let imageUrl = new URL(
        `/public/images/teamImage/jpg/team${count}.jpg`,
        import.meta.url
      ).pathname;

      let imageWebpUrl = new URL(
        `/public/images/teamImage/webp/team${count}.webp`,
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
              ? imageWebpUrl.replace("/public/", "/")
              : `https://api.dicebear.com/7.x/initials/svg?randomizeIds=true&seed=${
                  teamInfo[count].name || "Anonymous"
                }`,
            fallbackUrl: !imageUrl.includes("undefined")
              ? imageUrl.replace("/public/", "/")
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
