import React from "react";
import "./BillsTravel.css";

const BillsTravel = () => {
  return (
    <div className="container">
      {/* Bills & Recharge Section */}
      <div className="section">
        <div className="left">
          <h2>Bills & Recharge <span className="highlight"></span></h2>
          <h5>Pay your bills & recharge instantly with Justdial</h5>
          <a href="#" className="explore">Explore More</a>
        </div>
        <div className="right">
          <div className="icons">
            <div className="icon"><span role="img" aria-label="mobile">📱</span><p>Mobile</p></div>
            <div className="icon"><span role="img" aria-label="electricity">💡</span><p>Electricity</p></div>
            <div className="icon"><span role="img" aria-label="dth">📡</span><p>DTH</p></div>
            <div className="icon"><span role="img" aria-label="water">💧</span><p>Water</p></div>
            <div className="icon"><span role="img" aria-label="gas">⛽</span><p>Gas</p></div>
            <div className="icon"><span role="img" aria-label="insurance">☂️</span><p>Insurance</p></div>
          </div>
        </div>
      </div>

      {/* Travel Bookings Section */}
      <div className="section">
        <div className="left">
          <h2>Travel Bookings</h2>
          <h5>Instant ticket bookings for your best travel experience</h5>
          <a href="#" className="explore">Explore More</a>
        </div>
        <div className="right">
          <div className="icons">
            <div className="icon"><span role="img" aria-label="flight">✈️</span><p>Flight<br></br> <span className="subtext">Powered By Easemytrip.com</span></p></div>
            <div className="icon"><span role="img" aria-label="bus">🚌</span><p>Bus <span className="subtext">Affordable Rides</span></p></div>
            <div className="icon"><span role="img" aria-label="train">🚆</span><p>Train</p></div>
            <div className="icon"><span role="img" aria-label="hotel">🏨</span><p>Hotel <span className="subtext">Budget-friendly Stay</span></p></div>
            <div className="icon"><span role="img" aria-label="car rentals">🚗</span><p>Car Rentals <span className="subtext">Drive Easy Anywhere</span></p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillsTravel;
