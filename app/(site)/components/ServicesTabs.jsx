"use client";
import React, { useState } from "react";
import H2 from "./H2";

const ServicesTabs = () => {
  const tabs = ["Popular", "Hospitality"];
  const [activeTab, setActiveTab] = useState("Popular");
  return (
    <div className="max-w-3xl mx-auto my-8 px-8 lg:px-0">
      <H2 styles="text-center ">We build anything for Your business:</H2>
      <div>
        <div className="flex gap-2 my-6">
          {tabs.map((tabType, index) => (
            <button
              key={index}
              className={`rounded-full px-3 py-1 w-fit${
                activeTab === tabType
                  ? "  bg-white  text-black"
                  : " bg-neutral-950 border-neutral-800 border "
              }`}
              onClick={() => setActiveTab(tabType)}
            >
              {tabType}
            </button>
          ))}
        </div>
        <div className="mx-auto max-w-4xl overflow-hidden border-neutral-800 border rounded-md grid grid-cols-1 lg:grid-cols-3    ">
          <div className="flex flex-col border-r-neutral-800  border-r  lg:last:border-r-none">
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>Booking Systems</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div> Guest Management</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>POS Systems</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>Online Booking</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>Feedback Forms</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>Mobile Check-In/Out</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>Room Service</div>
            </div>
          </div>
          <div className="flex flex-col border-r-neutral-800  border-r  lg:last:border-r-none">
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>Travel Guides</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>CRM</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>ERP</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>Accounting Software </div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>Customer Analysis</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div> Revenue Management</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>SMM</div>
            </div>
          </div>
          <div className="flex flex-col border-r-neutral-800  border-r  lg:last:border-r-none">
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>E-commerce</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>Waste Analytics</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>Virtual Event Platforms</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>Loyalty Program</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>Website CMS</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>Email Marketing</div>
            </div>
            <div className=" p-4 bg-neutral-950 border-b border-b-neutral-800  lg:last:border-none">
              <div>Kitchen Display System</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTabs;
