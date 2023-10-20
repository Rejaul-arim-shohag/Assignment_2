import React from "react";
import "./randomPost.css";
import randpostImage1 from "../../images/random_post_image_1.png";
import randpostImage2 from "../../images/random_post_image_2.png";
import randpostImage3 from "../../images/random_post_image_3.png";
import randpostImage4 from "../../images/random_post_image_4.png";
import randpostImage5 from "../../images/random_post_image_5.png";

const randomPosts = [
  {
    id: "1",
    image: randpostImage1,
    tite: "MAKEUP",
    description: "Sed dignissim quam nulla, at sodales elit <br/> venenatis at. In in fringilla",
    metaDescription:
      "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar <br/> felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a <br/> interdum facilisis…..",
    createdBy: "By Sarfraz Jasim-29 July, 2023",
  },
  {
    id: "2",
    image: randpostImage2,
    tite: "SPA",
    description: "Sed dignissim quam nulla, at sodales elit <br/> venenatis at. In in fringilla",
    metaDescription:
      "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar <br/> felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a <br/> interdum facilisis…..",
    createdBy: "By Sarfraz Jasim-29 July, 2023",
  },
  {
    id: "3",
    image: randpostImage3,
    tite: "MAKEUP",
    description: "Sed dignissim quam nulla, at sodales elit <br/> venenatis at. In in fringilla",
    metaDescription:
      "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar <br/> felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a <br/> interdum facilisis…..",
    createdBy: "By Sarfraz Jasim-29 July, 2023",
  },
  {
    id: "4",
    image: randpostImage4,
    tite: "TIPS",
    description: "Sed dignissim quam nulla, at sodales elit <br/> venenatis at. In in fringilla",
    metaDescription:
      "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar <br/> felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a <br/> interdum facilisis…..",
    createdBy: "By Sarfraz Jasim-29 July, 2023",
  },
  {
    id: "5",
    image: randpostImage5,
    tite: "MAKEUP",
    description: "Sed dignissim quam nulla, at sodales elit <br/> venenatis at. In in fringilla",
    metaDescription:
      "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar <br/> felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a <br/> interdum facilisis…..",
    createdBy: "By Sarfraz Jasim-29 July, 2023",
  },
];
export default function RandomPosts() {
  return (
    <div className="container">
      <div className="fancy-sep">
        <span className="heading">Random Post</span>
        <div className="random_posts">
          {randomPosts.map((item, index) => {
            return (
              <div key={item.id} className="random_post_item">
                <div className="post_image">
                  <img src={item.image} alt="" srcset="" />
                </div>
                <div className="post_contet">
                  <div>
                    <button>MAKEUP</button>
                    <h2>
                      Sed dignissim quam nulla, at sodales elit <br /> venenatis at. In in fringilla
                    </h2>
                    <p>
                      Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar <br /> felis vel mi aliquam, vitae dapibus odio
                      euismod. Cras bibendum nisi a <br /> interdum facilisis…..
                    </p>
                    <p>By Sarfraz Jasim-29 July, 2023</p>
                  </div>
                </div>
              </div>
            );
          })}
          <button className="subscribe_button">Load More</button>
        </div>
      </div>
    </div>
  );
}
