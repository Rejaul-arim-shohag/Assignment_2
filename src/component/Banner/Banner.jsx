import React from "react";
import "./banner.css";
import Banner1 from "../../images/face.png";
import Banner2 from "../../images/hair.png";
import Banner3 from "../../images/lip.png";
import Banner4 from "../../images/mask.png";
import Banner5 from "../../images/spa.png";

const Banner = () => {
  const bannerData = [
    {
      image: Banner1,
      text: "SKIN",
    },
    {
      image: Banner2,
      text: "HAIR",
    },
    {
      image: Banner3,
      text: "MAKEUP",
    },
    {
      image: Banner4,
      text: "TIPS",
    },
    {
      image: Banner5,
      text: "SPA",
    },
  ];
  return (
    <div className="container banner_section">
      {bannerData.map((item, index) => 
        <div className="banner" key={index}>
          <img src={item.image} alt="" srcset="" />
          <button>{item.text}</button>
        </div>
      )}
    </div>
  );
};

export default Banner;
