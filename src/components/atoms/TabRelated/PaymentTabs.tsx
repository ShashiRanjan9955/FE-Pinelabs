"use client"
import React from "react";
import TabButton from "@/components/atoms/TabRelated/TabButton";

interface PaymentTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  data?: any; // Allow any type for data
}

const PaymentTabs: React.FC<PaymentTabsProps> = ({ activeTab, setActiveTab, data }) => {
  return (
    <div className="tab-buttons mt-16">
      <TabButton
        icon={data?.acf?.tab_1_icon || null}
        label={data?.acf?.tab_1_heading}
        description={data?.acf?.tab_1_text}
        active={activeTab === "payOnline"}
        onClick={() => setActiveTab("payOnline")}
      />
      <TabButton
         icon={data?.acf?.tab_2_icon || null}
         label={data?.acf?.tab_2_heading}
         description={data?.acf?.tab_2_text}
        active={activeTab === "physicalMandate"}
        onClick={() => setActiveTab("physicalMandate")}
      />
      <TabButton
        icon={data?.acf?.tab_3_icon || null}
        label={data?.acf?.tab_3_heading}
        description={data?.acf?.tab_3_text}
        active={activeTab === "AcfEmandate"}
        onClick={() => setActiveTab("AcfEmandate")}
      />
    </div>
  );
};

export default PaymentTabs;
