import Hero_icon from "./../Assests/hero_image.png";
import hand_icon from "./../Assests/hand_icon.png";
import arrow from "./../Assests/arrow_icon.png";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="landing-page-div">
        <div className="right-part">
          <img src={Hero_icon} alt="hero_image" class="hero_icon" />
        </div>

        <div className="left-part">
          <div className="first-line">
            <img src={hand_icon} alt="hand_icon" class="hand_icon" />
            <p>new</p> <br />
          </div>

          <p className="second-line">collections</p>
          <br />
          <p className="third-line">for smart gen</p>
          <br />
          <div className="button-div">
            <button className="latest_collection">Latest Collection</button>
            <img src={arrow} alt="arrow_logo" className="arrow-name" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
