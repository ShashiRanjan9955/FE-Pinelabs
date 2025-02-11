"use client"

import React, { useEffect, useState } from "react";
import BannerSection from "../molecules/BannerSection";
import ContentSection from "../molecules/TermsOfUse/ContentSection";
import { fetchTermsOfUse } from "@/lib/api/TermsOfUse";
function TermsOfUse() {

     const [data, setData] = useState<any>(null); // Store API response
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetchTermsOfUse();
            setData(response);
    
            console.log(response , 'response data terms of use data');
            
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, []);
  return (
    <>
      <BannerSection data={data}/>
      <ContentSection data={data}/>
    </>
  );
}

export default TermsOfUse;
