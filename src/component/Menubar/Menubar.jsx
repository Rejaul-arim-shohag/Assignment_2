import React from "react";
import Logo from "../../images/Logo.png";
import SearchIcon from "../../images/search (1).png";
import "./menubar.css";

const Menubar = () => {
  return (
    <div className="container main_menu">
      <div className="left_side">
        <div className="logo">
          <img src={Logo} alt="" srcset="" />
        </div>
        <div className="menu_items">
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

      <div className="search_box">
        <p>Search</p>
        <img src={SearchIcon} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Menubar;
