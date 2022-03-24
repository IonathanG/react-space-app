import React from "react";
import Introduction from "../components/Introduction";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Introduction />
    </div>
  );
};

export default Home;
