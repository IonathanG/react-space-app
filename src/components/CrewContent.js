import React, { useState } from "react";
import PageTitle from "./PageTitle";
import Data from "../data.json";

const CrewContent = () => {
  const data = Data.crew;
  const [crew, setCrew] = useState(data[0]);
  const [activeID, setActiveID] = useState(0);
  const CrewList = ["0", "1", "2", "3"];

  const handleclick = (index) => {
    setActiveID(index);
    setCrew(data[index]);
  };

  return (
    <div className="crew-content">
      <PageTitle number={"02"} title={"meet your crew"} />

      <div className="crew-content__main">
        <div className="crew-content__main--detail">
          <div className="crew-role">{crew.role}</div>
          <div className="crew-name">{crew.name}</div>
          <div className="crew-text">{crew.bio}</div>
          <ul className="dot-menu">
            {CrewList.map((item, index) => (
              <li
                key={index}
                className={`dot-item ${activeID === index ? "dot-active" : ""}`}
                onClick={() => handleclick(index)}
              ></li>
            ))}
          </ul>
        </div>
        <img src={crew.images.png} alt="" />
      </div>
    </div>
  );
};

export default CrewContent;
