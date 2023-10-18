import React from "react";
import instagram from "../../images/Instagram.png";
import "./header.css";
export const Header = () => {
  return (
    <div className="container header_nav">
      <div className="header_left">
        <p className="welcome_text">Welcome there!</p>
      </div>
      <div className="header_right">
        <SocialIcons />
      </div>
    </div>
  );
};

export const SocialIcons = () => {
  return (
    <div className="SocialIcons">
      <div className="icon">
        <img src={instagram} alt="" srcset="" />
      </div>
      <div className="icon">
        <img src={instagram} alt="" srcset="" />
      </div>
      <div className="icon">
        <img src={instagram} alt="" srcset="" />
      </div>
      <button className="subscribe_button">Subscribe</button>
    </div>
  );
};
