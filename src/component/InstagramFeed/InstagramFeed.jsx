import React from "react";
import "./feed.css";
import feedOneImage from "../../images/feed1.png";
export default function InstagramFeed() {
  return (
    <div className="container">
      <div className="fancy-sep">
        <span className="heading">Instagram Feed</span>
        <div className="instagram_feed">
          <div className="item">
            <img src={feedOneImage} alt="" />
          </div>
          <div className="item">
            <img src={feedOneImage} alt="" />
          </div>
          <div className="item">
            <img src={feedOneImage} alt="" />
          </div>
          <div className="item">
            <img src={feedOneImage} alt="" />
          </div>
        </div>
      </div>
      <button className="follow_us_btn">Follow Us</button>
    </div>
  );
}
