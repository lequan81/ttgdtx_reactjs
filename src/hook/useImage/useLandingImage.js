import { useState, useEffect } from "react";

export const useLandingImage = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (isValid) {
      let imageUrl = new URL(
        `/public/images/landingImage/jpg/landingImage${count}.jpg`,
        import.meta.url
      ).pathname;

      let imageWebpUrl = new URL(
        `/public/images/landingImage/webp/landingImage${count}.webp`,
        import.meta.url
      ).pathname;

      if (imageUrl !== "/undefined" || imageWebpUrl !== "/undefined") {
        setImages([
          ...images,
          {
            id: count,
            url: !imageWebpUrl.includes("undefined")
              ? imageWebpUrl.replace("/public/", "/")
              : "",
            fallbackUrl: !imageUrl.includes("undefined")
              ? imageUrl.replace("/public/", "/")
              : "",
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
