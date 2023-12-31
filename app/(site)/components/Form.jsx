"use client";
import { useState } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import FormInput from "./FormInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  return (
    <form className="flex w-full" onSubmit={sendEmail}>
      <div className="flex w-1/2">
        <ScheduleMeeting
          borderRadius={8}
          backgroundColor="#151515"
          primaryColor="#232323"
          eventDurationInMinutes={10}
          availableTimeslots={availableTimeslots}
          onStartTimeSelect={(e) =>
            setFormData({ ...formData, time: e.startTime })
          }
          eventStartTimeSpreadInMinutes={10}
        />
      </div>
      <div className="p-2 w-1/2">
        <div className="items-start flex flex-col gap-4 justify-start">
          <FormInput
            label="Name"
            type="text"
            placeholder="John Smith"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
  );
};

export default Form;
