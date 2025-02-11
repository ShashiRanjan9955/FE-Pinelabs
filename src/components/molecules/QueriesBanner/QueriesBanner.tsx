import Image from "next/image";
import Link from "next/link";
import React from "react";

interface QueriesBannerProps {
  data: any;
}
const QueriesBanner: React.FC<QueriesBannerProps> = ({ data }) => {
  return (
    <section className="QueriesBanner sec-padding">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-6/12">
            {data?.acf?.query_banner_image && (
              <Image
                src={data?.acf?.query_banner_image}
                width={504}
                height={673}
                alt="queries banner"
              />
            )}
          </div>
          <div className="md:w-6/12">
            <div className="content p-10 md:p-0">
              <h2>{data?.acf?.query_banner_heading}</h2>
              <p
                className="pt-3"
                dangerouslySetInnerHTML={{
                  __html: data?.acf?.query_cta_text,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueriesBanner;
