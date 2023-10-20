import React from "react";
import "./footer.css";
import SearchIcon from "../../images/search_footer.png";
import populerPost1 from "../../images/populer1.png";
import Logo from "../../images/footerLogo.png";
import { SocialIcons } from "../Header/Header";
import facebook from "../../images/Footer_social_icon/Facebook.png"
const tags = [
  {
    id: "1",
    name: "Skin",
  },
  {
    id: "2",
    name: "Makeup",
  },
  {
    id: "3",
    name: "Hair",
  },
  {
    id: "4",
    name: "Tips",
  },

  {
    id: "5",
    name: "Fashion",
  },
  {
    id: "6",
    name: "Eye",
  },
  {
    id: "7",
    name: "Skin",
  },
];
const social=[
    facebook,
]
export default function Footer() {
  return (
    <div className="footer_section">
      <div className="container">
        <div className="footer_item_section">
          <div className="categories">
            <h3>Categories</h3>
            <div className="category_items">
              <div className="single_item">
                <h3>Beauty</h3>
                <h3>(4)</h3>
              </div>
              <div className="single_item">
                <h3>Beauty</h3>
                <h3>(4)</h3>
              </div>
              <div className="single_item">
                <h3>Beauty</h3>
                <h3>(4)</h3>
              </div>
              <div className="single_item">
                <h3>Beauty</h3>
                <h3>(4)</h3>
              </div>
              <div className="footer_search">
                <input type="text" />
                <img src={SearchIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="populer_post">
            <h3>POPULAR POST</h3>
            <div className="footer_populer_post">
              <div className="footer_populer_item">
                <img src={populerPost1} alt="" />
                <div className="footer_populer_item_content">
                  <p>
                    Vivamus placerat Luctus <br /> Neque nec Faucibus
                  </p>
                  <span>7 Days ago</span>
                </div>
              </div>
              <div className="footer_populer_item">
                <img src={populerPost1} alt="" />
                <div className="footer_populer_item_content">
                  <p>
                    Vivamus placerat Luctus <br /> Neque nec Faucibus
                  </p>
                  <span>7 Days ago</span>
                </div>
              </div>
              <div className="footer_populer_item">
                <img src={populerPost1} alt="" />
                <div className="footer_populer_item_content">
                  <p>
                    Vivamus placerat Luctus <br /> Neque nec Faucibus
                  </p>
                  <span>7 Days ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery">
            <h3>GALLERY</h3>
            <div className="gallery_images">
              <img src={populerPost1} alt="" />
              <img src={populerPost1} alt="" />
              <img src={populerPost1} alt="" />
              <img src={populerPost1} alt="" />
              <img src={populerPost1} alt="" />
              <img src={populerPost1} alt="" />
            </div>
            <div className="tags">
              <h3>TAGS</h3>
              <div className="tag_items">
                {tags.map((item) => (
                  <button key={item.id}>{item.name}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container main_menu footer_menu_section">
          <div className="left_side">
            <div className="logo">
              <img src={Logo} alt="" srcset="" />
            </div>
          </div>

          <div className="search_box">
            <div className="menu_items footer_menu">
              <ul>
                <li>Home</li>
                <li>Categories</li>
                <li>Makeup</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_social">
          <div className="header_right footer_bootom_section">
            <SocialIcons social={social}/>
            <p>© 2023 PostX. Designed By WPXPO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
