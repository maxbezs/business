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
      _type: "blogBlock",
      ctaButtonText: "Get Started",
      ctaSectionHeading:
        "Ready to elevate your restaurant with a professional website?",
      ctaSectionParagraph:
        "Subscribe to our plan and enhance your restaurant's online presence to attract diners and drive reservations!",
      heading: "Why Your Restaurant Needs a Website",
      highlighted: false,
      shortParagraphOfBlogpost:
        "Unlock the power of a website to increase customers, engage diners, and drive success for your restaurant.",
      poster: {
        _type: "image",
        asset: {
          _ref: "image-d0e4f469b6e68696912b716049e349ec030b774d-1064x608-png",
          _type: "reference",
        },
      },
      slug: {
        _type: "slug",
        current: "blog/why-your-restaurant-needs-a-website",
      },
      content: [
        {
          _type: "block",
          style: "h1",
          children: [
            {
              _type: "span",
              text: "Why Your Restaurant Needs a Website",
            },
          ],
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "In today’s digital age, having a robust online presence is crucial for any business, including restaurants. A well-designed website can be a powerful tool to attract and retain customers. Here are several compelling reasons why your restaurant needs a website.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "1. Online Visibility and Reach",
            },
          ],
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "A website increases your restaurant's visibility. Potential customers often turn to search engines to find dining options. Without a website, you miss out on reaching these customers. A well-optimized website ensures that your restaurant appears in search results, allowing you to tap into a broader audience.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "2. Showcase Your Menu",
            },
          ],
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Your website is the perfect place to showcase your menu. High-quality images and detailed descriptions can entice potential customers to choose your restaurant over others. It’s also a great way to highlight special dishes, seasonal menus, and any dietary options you offer.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "3. Enhance Customer Experience",
            },
          ],
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "A website provides essential information that enhances the customer experience. This includes:",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "Operating Hours: Clearly stating your hours of operation helps customers plan their visit.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "Location and Contact Information: Making it easy for customers to find and contact you.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "Reservations: Offering an online reservation system can improve convenience for customers and streamline your operations.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "4. Build Your Brand",
            },
          ],
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "A website is a reflection of your restaurant's brand. Through the design, color scheme, and content, you can convey your restaurant’s ambiance and ethos. Consistent branding across your website and physical location strengthens your identity and helps in building a loyal customer base.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "5. Online Ordering and Delivery",
            },
          ],
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Incorporating online ordering and delivery services into your website can significantly boost your sales. Many customers prefer the convenience of ordering food online. By providing this option directly through your website, you can avoid third-party fees and maintain better control over the customer experience.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "6. Customer Reviews and Testimonials",
            },
          ],
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Featuring customer reviews and testimonials on your website can build trust and credibility. Positive reviews act as social proof, convincing potential customers to give your restaurant a try. Encouraging satisfied customers to leave reviews can continuously enhance your reputation.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "7. Marketing and Promotions",
            },
          ],
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Your website is a versatile marketing tool. You can:",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "Promote Special Events: Advertise special events, live music nights, or themed dinners.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "Offer Promotions and Discounts: Attract customers with special offers and discounts.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "Run Email Campaigns: Collect email addresses for a newsletter to keep customers informed about new menu items and upcoming events.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "8. Collect Customer Feedback",
            },
          ],
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "A website allows you to collect valuable feedback from your customers. Whether through a contact form or surveys, understanding customer preferences and concerns can help you improve your service and offerings.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "9. Competitive Advantage",
            },
          ],
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Many of your competitors likely have a website. Without one, you risk falling behind. A website can give you a competitive edge by making your restaurant more accessible and appealing to potential customers.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "Conclusion",
            },
          ],
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "In the competitive restaurant industry, having a website is not just a luxury but a necessity. It enhances your online presence, improves customer experience, and provides a platform for marketing and growth. Invest in a well-designed website to ensure your restaurant thrives in the digital era.",
            },
          ],
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "By embracing the digital landscape, your restaurant can reach new heights and delight customers both old and new. Don’t miss out on the opportunity to make your mark online.",
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
