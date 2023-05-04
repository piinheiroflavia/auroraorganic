import { useState } from "react";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      <div className="h-96">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full transition-opacity duration-500 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-2 rounded-full transition duration-500 ${
              index === activeIndex
                ? "bg-gray-900 hover:bg-gray-700"
                : "bg-gray-500 hover:bg-gray-700"
            }`}
            onClick={() => handleClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
