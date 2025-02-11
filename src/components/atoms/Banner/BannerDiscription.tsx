import React from "react";

interface BannerHeadingProps {
  mainDescription: string;
}

const BannerDescription: React.FC<BannerHeadingProps> = ({ mainDescription }) => {
  return (
    <>
      <p className="main-description mb-4 md:mb-0">{mainDescription}</p>
    </>
  );
};

export default BannerDescription;
