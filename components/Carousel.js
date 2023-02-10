import React, { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const carousel = [
    {
      url: "https://images.pexels.com/photos/1382732/pexels-photo-1382732.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1322136/pexels-photo-1322136.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1006073/pexels-photo-1006073.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/478544/pexels-photo-478544.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const handleChangeImg = (action) => {
    if (action == 1) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex < 0 ? carousel.length - 1 : prevIndex);
    }
    if (action == 2) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex === carousel.length ? 0 : nextIndex);
    }
  };

  return (
    <div className="carousel_main">
      <div className="carousel">
        <div>
          <Image
            src={carousel[currentIndex].url}
            width="400"
            height="450"
            alt="img"
          ></Image>
        </div>
      </div>
      <div className="arrow">
        <button className="arrow_left" onClick={() => handleChangeImg(1)}>
          &#8678;
        </button>
        <button className="arrow_right" onClick={() => handleChangeImg(2)}>
          &#8680;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
