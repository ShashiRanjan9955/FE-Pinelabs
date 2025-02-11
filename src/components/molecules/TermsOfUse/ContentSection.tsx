"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ContentSectionProps {
  data: any;
}

const ContentSection: React.FC<ContentSectionProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<string>("");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!data || !data.acf) return; // ✅ Check if data exists

    gsap.registerPlugin(ScrollTrigger);

    const tabButtons = Object.keys(data.acf)
      .filter((key) => key.startsWith("tab_button_"))
      .map((key) => data.acf[key])
      .filter((tab) => tab?.url); // Ensure tab exists

    if (!tabButtons.length) return;

    setActiveTab(tabButtons[0]?.url); // Set default active tab

    tabButtons.forEach((tab, index) => {
      const section = document.getElementById(tab.url);
      const nextSection = tabButtons[index + 1]
        ? `#${tabButtons[index + 1].url}`
        : "bottom bottom";

      if (section) {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          endTrigger: nextSection,
          end: "top center",
          onEnter: () => {
            setActiveTab(tab.url);
            console.log(`User scrolled to section: ${tab.url}`);
          },
          onLeaveBack: () => {
            const prevTab = tabButtons[index - 1]?.url || tabButtons[0]?.url;
            setActiveTab(prevTab);
            console.log(`User scrolled back to section: ${prevTab}`);
          },
          // markers: true,
        });
      }
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [data]);

  return (
    <section className="ContentSection sec-padding">
      <div className="container">
        <div className="content-container mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-4/12">
              <div className="tab-buttons flex flex-col gap-2 sticky top-[5%]">
                {data?.acf &&
                  Object.keys(data.acf)
                    .filter((key) => key.startsWith("tab_button_"))
                    .map((key, index) => {
                      const tab = data.acf[key];
                      return (
                        <Link
                          key={index}
                          href={`#${tab.url}`}
                          className={activeTab === tab.url ? "active" : ""}
                          onClick={() => setActiveTab(tab.url)}
                        >
                          {tab.title}
                        </Link>
                      );
                    })}
              </div>
            </div>
            <div className="md:w-8/12">
              {data?.content?.rendered && (
                <div
                  ref={contentRef}
                  className="wp-content-rendered"
                  dangerouslySetInnerHTML={{ __html: data.content.rendered }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;