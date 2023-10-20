import React, { Fragment } from "react";
import "./populerPost.css";
import imageOne from "../../images/populer1.png";
import imageTwo from "../../images/populer2.png";
import imageThree from "../../images/populer3.png";
import imageFour from "../../images/populerNew1.png";
import imageFive from "../../images/populerNew2.png";

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
const PopulerPost = () => {
  return (
    <div className="container populer_post_section">
      <div className="fancy-sep">
        <span className="heading">Popular Post</span>
      </div>
      <div className="populer_posts">
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

      <div className="new_populerPosts">
        <div className="post_item">
          <img src={imageFour} alt="" srcset="" />
          <div className="single_populer_postDescription">
            <div className="smallHeadline">
              <button>SKIN</button>
            </div>
            <h4>
              Sed dignissim quam nulla, at sodales elit <br /> venenatis at. In in fringilla
            </h4>

            <h5>By Sarfraz Jasim-29 July, 2023</h5>
          </div>
        </div>
        <div className="post_item">
          <img src={imageFour} alt="" srcset="" />
          <div className="single_populer_postDescription">
            <div className="smallHeadline ">
              <button>SKIN</button>
            </div>
            <h4>
              Sed dignissim quam nulla, at sodales elit <br /> venenatis at. In in fringilla
            </h4>

            <h5>By Sarfraz Jasim-29 July, 2023</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerPost;
