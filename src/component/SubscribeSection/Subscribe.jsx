import React from "react";
import "./subscribe.css";
export default function Subscribe() {
  return (
    <div className="subscribe_container">
      <div className="container">
        <div className="subscribe_section">
          <h4>
            Subscribe For Best <br />
            Beauty Tips
          </h4>
          <div class="input-container">
            <input type="text" className="input-field" placeholder="Enter your email address" />
            <button className="action-button">Subscribe</button>
          </div>
          <div className="terms">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">I agree that my submitted data is being collected and stored.</label>
          </div>
        </div>
      </div>
    </div>
  );
}
