import React, { useState, useEffect } from "react";
import PageTitle from "./PageTitle";
import MoonImg from "../assets/img/Destination/image-moon.png";
import Data from "../data.json";

const DestinationContent = () => {
  const data = useState(Data.destinations);
  console.log(data);

  return (
    <div className="destination-content">
      <PageTitle number={"01"} title={"pick your destination"} />

      <div className="destination-content__main">
        <img src={MoonImg} alt="" />
        <div className="destination-content__main--detail">
          <div className="destination-menu">
            <ul>
              <li>MOON</li>
              <li>MARS</li>
              <li>EUROPA</li>
              <li>TITAN</li>
            </ul>
          </div>

          <div className="destination-title">MOON</div>
          <div className="destination-text">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </div>

          <div className="divider"></div>

          <div className="destination__data">
            <div className="destination__data--distance">
              <header>AVG. DISTANCE</header>
              <p>384,400 km</p>
            </div>
            <div className="destination__data--time">
              <header>Est. travel time</header>
              <p>3 DAYS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationContent;
