import React from "react";
import { FaHeart, FaRegHeart, FaUsers, FaShieldAlt } from "react-icons/fa";
import { MdReceiptLong, MdPeople } from "react-icons/md";
import "./Donationcard.css";

const Donationcard = () => {
  const predefinedAmounts = [100, 200, 300];
  const raisedAmount = 0;
  const goalAmount = 100000;
  const donorCount = 0;
  const selectedAmount = 200;
  const progressPercent = Math.round((raisedAmount / goalAmount) * 100);

  return (
    <div className="Donation">
      <div className="Raised-Donors">
        <div className="Raised">
          <FaHeart className="orange-text top-icon" />
          <div className="Raised-content">
            <p className="orange-text">₹ {raisedAmount.toLocaleString()}</p>
            <p>Raised</p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="Donors">
          <FaUsers className="orange-text top-icon" />
          <div className="Don-content">
            <p className="orange-text">{donorCount}</p>
            <p>Donors</p>
          </div>
        </div>
      </div>

      <div className="Raised-percentage">
        <p className="i-text">Raised:</p>
        <p className="progress-summary">
          {progressPercent}%
          <a href="#" className="orange-text i-icon" aria-label="More information">
            i
          </a>
        </p>
      </div>

      <div className="progress-bar">
        <span style={{ width: `${progressPercent}%` }}></span>
      </div>

      <div className="goal-row">
        <p className="i-text">
          Goal: <span className="orange-text">₹ {goalAmount.toLocaleString()}</span>
        </p>
      </div>

      <div className="Donation-price">
        <div className="most-donated">
          <FaRegHeart /> Most Donated
        </div>

        <div className="prices">
          {predefinedAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              className={`price-pill ${selectedAmount === amount ? "selected-price" : ""}`}
            >
              ₹ {amount}
            </button>
          ))}

          <label className="price-pill custom-price">
            <span>Custom</span>
            <input type="number" min="1" readOnly />
          </label>
        </div>

        <button className="donate-btn">Donate Now ₹ {selectedAmount}</button>
      </div>

      <div className="bottom">
        <div className="Shield">
          <FaShieldAlt className="orange-text bottom-icon" />
          <p>100% Secure Payments</p>
        </div>

        <div className="receipt">
          <MdReceiptLong className="orange-text bottom-icon" />
          <p>80G Tax Benefit</p>
        </div>

        <div className="people">
          <MdPeople className="orange-text bottom-icon" />
          <p>Transparent & Trusted</p>
        </div>

        <div className="heart">
          <FaRegHeart className="orange-text bottom-icon" />
          <p>Reach the Right People</p>
        </div>
      </div>
    </div>
  );
};

export default Donationcard;