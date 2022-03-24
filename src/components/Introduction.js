import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="introduction">
      <header>
        <div className="heading_5">SO, YOU WANT TO TRAVEL TO</div>
        <div className="heading_1">SPACE</div>
        <div className="body_text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </header>

      <Link to="/destination">
        <button className="explore" type="text">
          Explore
        </button>
      </Link>
    </div>
  );
};

export default Introduction;
