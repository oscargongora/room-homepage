import { useState } from "react";
import Image from "next/image";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import data from "./data";

const index = () => {
  const { width, height } = useWindowDimensions();
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlePrevControlClick = () => {
    setCurrentSlide((currentSlide + data.length - 1) % data.length);
  };

  const handleNextControlClick = () => {
    setCurrentSlide((currentSlide + 1) % data.length);
  };
  return (
    <div className="slider">
      <div className="slider-image-container">
        <Image
          src={
            width < 1200
              ? data[currentSlide].mobileImg
              : data[currentSlide].desktopImg
          }
          alt={data[currentSlide].title}
          width={width < 1200 ? 375 : 840}
          height={width < 1200 ? 360 : 534}
          layout="responsive"
        />
        <div className="slider-controls">
          <div className="prev-control" onClick={handlePrevControlClick}>
            <img src="/images/icon-angle-left.svg" alt="Previous slide" />
          </div>
          <div className="next-control" onClick={handleNextControlClick}>
            <img src="/images/icon-angle-right.svg" alt="Next slide" />
          </div>
        </div>
      </div>
      <div className="slider-text-container">
        <h1>{data[currentSlide].title}</h1>
        <p>{data[currentSlide].description}</p>
        <div id="shop-now-btn">
          shop now
          <img src="/images/icon-arrow.svg" alt="Shop now button icon" />
        </div>
      </div>
    </div>
  );
};

export default index;
