import React, { Fragment } from "react";
import "./latestPost.css";
import imageOne from "../../images/latestPost1.png";
import imageTwo from "../../images/latest-post-2.png";
import imageThree from "../../images/latestpost-3.png";
import imageFour from "../../images/latest_post_big.png";

const lastesPosts = [
  {
    id: "1",
    item_name: "HAIR",
    description: "Vivamus placerat Luctus Neque nec Faucibus",
    metaDescription: "",
    date: "By Sarfraz Jasim-29 July, 2023",
    image: imageOne,
  },
  {
    id: "2",
    item_name: "MAKEUP",
    description: "Vivamus placerat Luctus Neque nec Faucibus",
    date: "By Sarfraz Jasim-29 July, 2023",
    metaDescription: "",
    image: imageTwo,
  },
  {
    id: "3",
    item_name: "TIPS",
    description: "Vivamus placerat Luctus Neque nec Faucibus",
    date: "By Sarfraz Jasim-29 July, 2023",
    metaDescription: "",
    image: imageThree,
  },
];
const LatestPost = () => {
  return (
    <div className="container latest_post_section">
      <div className="fancy-sep">
        <span className="heading">Latest Post</span>
      </div>
      <div className="latest_posts">
        {lastesPosts.map((item) => {
          return (
            <div key={item.id} className="post_item">
              <img src={item?.image} alt="" srcset="" />
              <div className="postDescription">
                <div className="smallHeadline">
                  <button>{item?.item_name}</button>
                </div>
                <h4>{item?.description}</h4>
                <h5>{item?.date}</h5>
              </div>
            </div>
          );
        })}
      </div>

      <div className="latest_posts_full_width">
        <div className="post_item">
          <img src={imageFour} alt="" srcset="" />
          <div className="single_postDescription">
            <div className="smallHeadline single">
              <button>SKIN</button>
            </div>
            <h4>
              Sed dignissim quam nulla, at sodales elit <br /> venenatis at. In in fringilla
            </h4>
            <p>
              Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis <br />
              vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a<br /> interdum facilisis…..
            </p>
            <h5>By Sarfraz Jasim-29 July, 2023</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
