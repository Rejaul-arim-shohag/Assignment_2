import React from "react";
import "./heroSection.css";
import leftArrow from "../../images/Left Arrow.png"
import RightArrow from "../../images/Right Arrow.png"
import ButtonArrow from "../../images/Group (1).png"

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="container hero_container">
        <div className="left_side">
          <img src={leftArrow} alt="" srcset="" />
        </div>
        <div className="right_side">
          <div className="sliders">
            <div className="item">
              <p>SKIN</p>
              <h1>Six Hyaluronic Serums <br/> For Glowing Summer Skin <br/> Vivamus Placerat</h1>
              <h6>By Sarfraz Jasim -  29 July, 2023</h6>
              <button className="continue_reading_button">Continue Reading <img src={ButtonArrow} alt="" srcset="" /></button>
            </div>
          </div>
          <img src={RightArrow} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
