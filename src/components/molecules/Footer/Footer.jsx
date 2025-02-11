"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const footerData = [
    [
      {
        title: null,
        items: [
          {
            type: "image",
            src: "/img/logo.png",
            width: 160,
            height: 40,
            alt: "pine-labs",
          },
        ],
      },
      {
        title: "Business Type",
        items: [
          "Electronics and Mobiles",
          "Lifestyle",
          "Automobile",
          "Grocery",
          "Healthcare",
          "Hospitality",
        ],
      },
      {
        title: "Payments Instore",
        items: ["Touch", "Qwerty", "Plutus QR", "Go", "Hub", "Voicepod / Pro"],
      },
      {
        title: "Business Tools",
        items: [
          "Pay Later",
          "Loyalty",
          "Prepaid and Gifting",
          "Rewards and Cashback",
          "Pine Labs One",
          "Analytics",
          "Working Capital",
          "Utility App Integrations",
        ],
      },
      {
        title: "Corporate",
        items: [
          "About Us",
          "Awards",
          "Media and Analysts",
          "Events",
          "CSR",
          "Careers",
        ],
      },
    ],
    [
      {
        title: "",
        items: [],
        emptyData: true,
      },
      {
        title: "Build With Us",
        items: ["Developer", "Platform", "APIs"],
      },
      {
        title: "Merchants",
        items: ["Overview", "Partners", "Training Videos"],
      },
      {
        title: "EMIs",
        items: ["EMI Calculators", "EMI Offers", "Debit Card EMIs"],
      },
      {
        title: "Sales & Support",
        items: [
          "Contract Sales",
          "Support",
          "Office Address",
          "Invoice Payments",
          "FAQs",
        ],
      },
    ],
  ];

  return (
    <section className="Footer sec-padding">
      <div className="container">
        {footerData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-row flex-wrap justify-between gap-6 md:gap-10"
          >
            {row.map((section, index) => (
              <div
                key={index}
                className={`md:flex-1 ${
                  section.emptyData ? "empty-section" : ""
                }`}
              >
                <div className="Footer_item">
                  {section.title && <h2>{section.title}</h2>}
                  {section.items.map((item, idx) => {
                    if (item.type === "image") {
                      return (
                        <Image
                          key={idx}
                          src={item.src}
                          width={item.width}
                          height={item.height}
                          alt={item.alt}
                        />
                      );
                    }
                    return (
                      <ul key={idx}>
                        <li>
                          <Link href="#!">{item}</Link>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="bottom-section pt-20">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="w-auto">
              <ul className="flex  gap-6 flex-wrap ">
                <li>
                  <Link href={"#"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={"#"}>Terms of Use</Link>
                </li>
                <li>
                  <Link href={"#"}>MITC</Link>
                </li>
                <li>
                  <Link href={"#"}>Refund Policy</Link>
                </li>
                <li>
                  <Link href={"#"}>Grievance Policy</Link>
                </li>
                <li>
                  <Link href={"#"}>Vulnerability Disclosure Policy</Link>
                </li>
              </ul>
            </div>
            <div className="w-auto">
              <div className="social-media-icons flex gap-2 pt-10 md:pt-0">
                <Link href={"#"}>
                  <Image
                    src={"/icons/facebook.png"}
                    width={40}
                    height={40}
                    alt="facebook-img"
                  />
                </Link>
                <Link href={"#"}>
                  <Image
                    src={"/icons/twitter.png"}
                    width={40}
                    height={40}
                    alt="twitter-img"
                  />
                </Link>
                <Link href={"#"}>
                  <Image
                    src={"/icons/instagram.png"}
                    width={40}
                    height={40}
                    alt="instagram-img"
                  />
                </Link>
                <Link href={"#"}>
                  <Image
                    src={"/icons/youtube.png"}
                    width={40}
                    height={40}
                    alt="youtube-img"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
