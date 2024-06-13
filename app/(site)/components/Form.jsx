"use client";
import { useState } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import FormInput from "./FormInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import H2 from "./H2";
import { addBlog } from "@/sanity/sanity-utils";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const availableTimeslots = [0, 1, 2, 3, 4, 5, 6].map((id) => ({
    id,
    startTime: new Date(new Date().setDate(new Date().getDate() + id)).setHours(
      18,
      0,
      0,
      0
    ),
    endTime: new Date(new Date().setDate(new Date().getDate() + id)).setHours(
      23,
      20,
      0,
      0
    ),
  }));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    time: "",
    details: "",
    options: {
      webpage: [false, "Webpage"],
      webapp: [false, "Web app"],
      mobileapp: [false, "Mobile App"],
      nocode: [false, "No-Code"],
      api: [false, "API"],
      ecom: [false, "E-commerce"],
      other: [false, "Other"],
    },
  });

  const handleCheckboxChange = (key) => {
    setFormData((prevData) => ({
      ...prevData,
      options: {
        ...prevData.options,
        [key]: [!prevData.options[key][0], prevData.options[key][1]],
      },
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      time: "",
      details: "",
      options: formData.options,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.time || !formData.email) {
      toast.error(
        "Please fill out the required fields: Name, Time, and Email."
      );
      return;
    }
    const data = {
      email: formData.email,
      name: formData.name,
      time: formData.time,
      details: formData.details,
      options: formData.options,
      emailType: "schedule_meeting",
    };

    setIsLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200 || 504) {
        toast.success("Meeting scheduled successfully!");
        resetForm();
      } else {
        toast.error("Failed to schedule the meeting. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ctaSectionButtonText: "Contact Us",
      ctaSectionHeading: "Get in Touch for Your Restaurant Technology Needs",
      ctaSectionParagraph:
        "Discover the best solutions to boost your restaurant's efficiency and customer satisfaction.",
      heading: "Exploring Technology Solutions for Restaurants",
      shortParagraphOfBlogpost:
        "Restaurants can benefit greatly from various technological solutions to streamline operations and enhance customer experience. Let's explore some of the top options available in the market.",
      content: [
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "1. Online Ordering Systems",
            },
          ],
        },
        {
          _type: "block",
          style: "body",
          children: [
            {
              _type: "span",
              text: "Online ordering systems have become essential for restaurants, especially with the increase in demand for delivery and takeout. These systems allow customers to place orders conveniently through websites or mobile apps, increasing sales and improving operational efficiency.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "2. Reservation Management Software",
            },
          ],
        },
        {
          _type: "block",
          style: "body",
          children: [
            {
              _type: "span",
              text: "Reservation management software helps restaurants manage their bookings effectively, reducing wait times and optimizing table turnover. Some advanced solutions also offer customer relationship management features to personalize the dining experience.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "3. Point of Sale (POS) Systems",
            },
          ],
        },
        {
          _type: "block",
          style: "body",
          children: [
            {
              _type: "span",
              text: "POS systems streamline the payment process, track inventory, and generate sales reports for restaurants. These systems ensure accurate transactions and help in managing finances efficiently.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "4. Kitchen Display Systems (KDS)",
            },
          ],
        },
        {
          _type: "block",
          style: "body",
          children: [
            {
              _type: "span",
              text: "KDS solutions improve the communication between the kitchen and the front of the house, reducing order errors and enhancing kitchen efficiency. These systems display orders digitally, making it easier for chefs to manage and prioritize tasks.",
            },
          ],
        },
      ],
    };

    try {
      const response = await addBlog(data);
      console.log("Blog added successfully:", response);
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Heading" value={"heading"} />
        <textarea placeholder="Paragraph" value={"paragraph"}></textarea>
        {/* Add more input fields for other blog data */}
        <button type="submit">Add Blog</button>
      </form>
      <form className="flex w-full flex-col lg:flex-row" onSubmit={sendEmail}>
        <div className="flex w-full lg:w-1/2">
          <ScheduleMeeting
            borderRadius={8}
            backgroundColor="#151515"
            primaryColor="#fff"
            eventDurationInMinutes={10}
            availableTimeslots={availableTimeslots}
            onStartTimeSelect={(e) =>
              setFormData({ ...formData, time: e.startTime })
            }
            eventStartTimeSpreadInMinutes={10}
          />
        </div>
        <div className="p-2 w-full lg:w-1/2">
          <div className="items-start flex flex-col gap-4 justify-start">
            <FormInput
              label="Name"
              type="text"
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              maxLength={30}
            />
            <FormInput
              label="Email"
              type="email"
              placeholder="john.smith@email.abc"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <FormInput
              label="Details"
              type="text"
              placeholder="Personal requests, questions"
              value={formData.details}
              onChange={(e) =>
                setFormData({ ...formData, details: e.target.value })
              }
              maxLength={200}
            />
            <div>
              <H2 className="text-left">Topics to discuss:</H2>
              <div className="flex flex-row flex-wrap gap-4 w-full">
                {Object.entries(formData.options).map(([key, value]) => (
                  <div
                    className="bg-neutral-900 rounded-md flex p-4 text-left"
                    key={key}
                  >
                    <label className="flex items-center	" htmlFor={key}>
                      <input
                        className="w-4 h-4 border-2 border-gray-500 rounded-full grid place-items-center -translate-y-1"
                        type="checkbox"
                        name={key}
                        id={key}
                        checked={value[0]}
                        onChange={() => handleCheckboxChange(key)}
                      />
                      {value[1]}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className={`align-baseline rounded-lg  cursor-pointer select-none focus:outline-none py-3 px-4 no-underline w-fit ${
                isLoading || !formData.name || !formData.time || !formData.email
                  ? " bg-neutral-700 cursor-not-allowed text-neutral-500"
                  : "bg-neutral-700 hover:bg-neutral-800 text-white"
              }`}
              disabled={
                isLoading || !formData.name || !formData.time || !formData.email
              }
            >
              {isLoading ? "Scheduling..." : "Schedule Meeting"}
            </button>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />{" "}
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
