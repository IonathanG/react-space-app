import React from "react";
import DestinationContent from "../components/DestinationContent";
import Navigation from "../components/Navigation";

const Destination = () => {
  //fetch json file

  return (
    <div className="destination">
      <Navigation />
      <DestinationContent />
    </div>
  );
};

export default Destination;
