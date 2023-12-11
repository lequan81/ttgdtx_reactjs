import { useState, useEffect } from "react";
import data from "../../data/data.json";

export const useTeamImage = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (isValid) {
      let imageUrl = new URL(
        `../../assets/images/teamImage/jpg/teams${count}.jpg`,
        import.meta.url
      ).pathname;

      let imageWebpUrl = new URL(
        `../../assets/images/teamImage/webp/team${count}.webp`,
        import.meta.url
      ).pathname;

      if (count < data.teams[0].children.length) {
        setImages([
          ...images,
          {
            id: count,
            name: data.teams[0].children[count].name || "Không tên",
            onPosition:
              data.teams[0].children[count].onPosition || "Giáo viên/Trợ giảng",
            url: !imageWebpUrl.includes("undefined")
              ? imageWebpUrl
              : `https://api.dicebear.com/7.x/initials/svg?fontSize=40&randomizeIds=true&seed=${
                  data.teams[0].children[count].name || "Anonymous"
                }`,
            fallbackUrl: !imageUrl.includes("undefined")
              ? imageUrl
              : `https://api.dicebear.com/7.x/initials/svg?fontSize=40&randomizeIds=true&seed=${
                  data.teams[0].children[count].name || "Anonymous"
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
