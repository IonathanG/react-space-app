import React from "react";

const PageTitle = ({ number, title }) => {
  return (
    <div className="page-title">
      <span>{number}</span> {title}
    </div>
  );
};

export default PageTitle;
