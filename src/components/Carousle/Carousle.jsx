import { useState } from "react";

export function Carousle({ slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 3000;

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  setTimeout(() => {
    nextSlide();
  }, slideDuration);

  return (
    <div className="w-full h-4/6 m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover object-cover duration-500"
      ></div>
    </div>
  );
}
