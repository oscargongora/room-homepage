import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const index = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      start: "top -40",
      end: 99999,
      toggleClass: { className: "scrolled", targets: "header" },
    });
  }, []);

  const handleShowHeaderNav = () => {
    document.querySelector("header").classList.add("collapse");
  };
  const handleHideHeaderNav = () => {
    document.querySelector("header").classList.remove("collapse");
  };
  return (
    <header>
      <div className="show-nav" onClick={handleShowHeaderNav}>
        <img src="/images/icon-hamburger.svg" alt="Show nav button" />
      </div>
      <div className="hide-nav" onClick={handleHideHeaderNav}>
        <img src="/images/icon-close.svg" alt="Hide nav button" />
      </div>
      <div className="logo">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="backdrop" onClick={handleHideHeaderNav}></div>
    </header>
  );
};

export default index;
