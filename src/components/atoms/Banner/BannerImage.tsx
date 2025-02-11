import React from "react";
import Image from "next/image";

interface BannerImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className: string;
}

const BannerImage: React.FC<BannerImageProps> = ({ src, width, height, alt, className }) => {
  return (
    <div className="img-container">
      <Image
        src={src}
        width={width}
        height={height}
        className={className}
        alt={alt}
      />
    </div>
  );
};

export default BannerImage;
