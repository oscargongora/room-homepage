import Image from "next/image";
import Slider from "../Slider";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const index = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div>
      <Slider></Slider>
      <div className="about">
        <Image
          src="/images/image-about-dark.jpg"
          alt="About us image dark"
          width={width < 1200 ? 375 : 420}
          height={266}
        />
        {/* <div id="image-about-dark" className="image-container">
          <img src="/images/image-about-dark.jpg" alt="About us image dark" />
        </div> */}
        <div className="about-text-container">
          <h2>About our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <Image
          src="/images/image-about-light.jpg"
          alt="About us image light"
          width={width < 1200 ? 375 : 440}
          height={266}
          layout="responsive"
        />
        {/* <div id="image-about-light" className="image-container">
          <img src="/images/image-about-light.jpg" alt="About us image" />
        </div> */}
      </div>
    </div>
  );
};

export default index;
