import React from "react";

interface BannerHeadingProps {
  smallText: string;
  mainTitle: string;
}

const BannerHeading: React.FC<BannerHeadingProps> = ({ smallText, mainTitle }) => {
  return (
    <div className="heading">
      <span className="small-text">{smallText}</span>
      <h1 className="main-title mt-2 mb-5 md:mb-15">{mainTitle}</h1>
    </div>
  );
};

export default BannerHeading;
