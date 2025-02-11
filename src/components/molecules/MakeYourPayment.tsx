"use client";

import React, { useState, useEffect } from "react";
import PayOnlineForm from "@/components/molecules/Forms/PayOnlineForm";
import AcfPhysicalForm from "@/components/molecules/Forms/AcfPhysicalForm";
import AcfEmandate from "@/components/molecules/Forms/AcfEmandate";
import PaymentTabs from "../atoms/TabRelated/PaymentTabs";
import { fetchInvoicePaymentsApi } from "@/lib/api/InvoicePayments";
interface MakeYourPaymentProps {
  data: any;
}
const MakeYourPayment: React.FC<MakeYourPaymentProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState("payOnline");
  const [key, setKey] = useState(0);
  

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setKey((prev) => prev + 1);
  };

  return (
    <section className="MakeYourPayment sec-padding">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-14 md:gap-6">
          <div className="md:w-6/12">
            {data?.acf?.small_heading && <span className="small-text">{data.acf.small_heading}</span>}
            {data?.acf?.heading && <h2 className="main-title">{data.acf.heading}</h2>}

            {data && <PaymentTabs activeTab={activeTab} setActiveTab={handleTabChange} data={data} />}
          </div>
          <div className="md:w-6/12">
            <div key={key} className="fade-in">
              {activeTab === "payOnline" && <PayOnlineForm />}
              {activeTab === "physicalMandate" && <AcfPhysicalForm />}
              {activeTab === "AcfEmandate" && <AcfEmandate />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeYourPayment;
