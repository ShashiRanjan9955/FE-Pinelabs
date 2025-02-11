import Image from "next/image";
import React from "react";
import BannerHeading from "../atoms/Banner/BannerHeading";
import BannerImage from "../atoms/Banner/BannerImage";
interface BannerSectionProps {
  data: any; // Accepts any valid React content (JSX, string, etc.)
}
const BannerSection: React.FC<BannerSectionProps> = ({ data }) => {
  return (
    <section className="BannerSection">
      <div className="container">
        <BannerHeading smallText={data?.acf?.small_heading} mainTitle={data?.acf?.banner_heading} />
        {data?.acf?.banner_image &&
         <BannerImage
         src={data?.acf?.banner_image}
         width={1229}
         height={578}
         className="w-full rounded-3xl"
         alt="Banner"
       />
        }
       
      </div>
    </section>
  );
}

export default BannerSection;
