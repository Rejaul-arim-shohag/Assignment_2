import React from "react";
import instagram from "../../images/Instagram.png";
import facebook from "../../images/Facebook.png";
import pinterest from "../../images/Pinterest.png";
import twitter from "../../images/Twitter.png";
// import instagram from "../../images/Instagram.png";

import "./header.css";
const socialIcon=[
  instagram, facebook, pinterest, twitter
]
export const Header = () => {
  return (
    <div className="container header_nav">
      <div className="header_left">
        <p className="welcome_text">Welcome there!</p>
      </div>
      <div className="header_right">
        <SocialIcons social={socialIcon}/>
        <button className="subscribe_button">Subscribe</button>
      </div>
    </div>
  );
};

export const SocialIcons = ({ social }) => {
  return (
    <div className="SocialIcons">
      {social.map((item, index) => (
        <div key={index} className="icon">
          <img src={item} alt="" srcset="" />
        </div>
      ))}
     
    </div>
  );
};
