import React from "react";
import "./latestPost.css";
import LatesPost1 from "../../src/images/latestPost1.png";
const LatestPost = () => {
  return (
    <div className="container latest_post_section">
      <div className="fancy-sep">
        <span className="heading">Latest Post</span>
      </div>
      <div className="latest_posts">
        <div className="post_item">
          <img src={LatesPost1} alt="" srcset="" />
          <div className="postDescription">
            <div className="smallHeadline">
              <p>HAIR</p>
            </div>
            <h4>Vivamus placerat Luctus Neque nec Faucibus</h4>
            <h5>By Sarfraz Jasim-29 July, 2023</h5>
          </div>
        </div>
        <div className="post_item">
          <img src={LatesPost1} alt="" srcset="" />
        </div>
        <div className="post_item">
          <img src={LatesPost1} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
