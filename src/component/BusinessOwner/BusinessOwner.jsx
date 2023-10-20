import React from "react";
import "./buinessOwner.css";
import ownerImage from "../../images/owner.png";
import facebook from "../../images/facebook2.png";
import instagram from "../../images/instagram2.png";
import linkedin from "../../images/linkedin2.png";
import twitrter from "../../images/twitter2.png";
import threds from "../../images/Threads3.png";
import pinterst from "../../images/Pinterest2.png";

export default function BusinessOwner() {
  return (
    <div className="business_owner_section">
      <div className="container">
        <div className="business_owner">
          <div className="owner_img">
            <img src={ownerImage} alt="" />
          </div>
          <div className="description">
            <h1>Morbi Porttitor</h1>
            <p>
              Onvallis porttitor ligula leo a lectus. Donec id venenatis magna. Vivamus placerat luctus neque nec faucibus. Aliquam{" "}
              <strong>Gravida</strong> eu
              <strong>Tortor</strong> vitae tempor. . Mauris <strong>condimentum</strong> scelerisque ante nec ultricies. Vivamus tincidunt
              nibh velit!
            </p>
            <div className="owner-social">
              <div className="owne_socail_icon">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                <img src={twitrter} alt="" />
                <img src={threds} alt="" />
                <img src={pinterst} alt="" />
              </div>
              <p>(85 posts)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
