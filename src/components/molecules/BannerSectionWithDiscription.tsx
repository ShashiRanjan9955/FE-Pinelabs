import Image from "next/image";
import React from "react";
import BannerHeading from "../atoms/Banner/BannerHeading";
import BannerImage from "../atoms/Banner/BannerImage";
import BannerDescription from "../atoms/Banner/BannerDiscription";
interface BannerSectionProps {
  data: any; // Accepts any valid React content (JSX, string, etc.)
}
const BannerSection: React.FC<BannerSectionProps> = ({ data }) => {
  return (
    <section className="BannerSection">
      <div className="container">
        <div className="flex flex-col md:gap-20 md:flex-row">
          <div className="md:w-8/12">
            <BannerHeading
              smallText={data?.acf?.small_heading}
              mainTitle={data?.acf?.banner_heading}
            />
          </div>
          <div className="md:w-4/12">
              <BannerDescription 
                 mainDescription={data?.acf?.banner_discription}
              />
            
          </div>
        </div>
        {data?.acf?.banner_image && (
          <BannerImage
            src={data?.acf?.banner_image}
            width={1229}
            height={578}
            className="w-full rounded-3xl"
            alt="Banner"
          />
        )}
      </div>
    </section>
  );
};

export default BannerSection;
