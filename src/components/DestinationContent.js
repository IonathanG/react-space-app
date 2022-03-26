import React, { useState } from "react";
import PageTitle from "./PageTitle";
import Data from "../data.json";

const DestinationContent = () => {
  const data = Data.destinations;
  const [destination, setDestination] = useState(data[0]);
  const [activeID, setActiveID] = useState(0);
  const destinationList = ["moon", "mars", "europa", "titan"];

  const handleclick = (index) => {
    setActiveID(index);
    setDestination(data[index]);
  };

  return (
    <div className="destination-content">
      <PageTitle number={"01"} title={"pick your destination"} />

      <div className="destination-content__main">
        <img src={destination.images.png} alt="" />
        <div className="destination-content__main--detail">
          <div className="destination-menu">
            <ul>
              {destinationList.map((item, index) => (
                <li
                  key={index}
                  className={`menu-item ${
                    activeID === index ? "menu-active" : ""
                  }`}
                  onClick={() => handleclick(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="destination-title">{destination.name}</div>
          <div className="destination-text">{destination.description}</div>

          <div className="divider"></div>

          <div className="destination__data">
            <div className="destination__data--distance">
              <header>AVG. DISTANCE</header>
              <p>{destination.distance}</p>
            </div>
            <div className="destination__data--time">
              <header>Est. travel time</header>
              <p>{destination.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationContent;
