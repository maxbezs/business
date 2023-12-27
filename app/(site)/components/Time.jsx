"use client";
import React, { useState, useEffect } from "react";
import { format, formatDistanceToNow, isBefore, subDays } from "date-fns";

const Time = ({ dateTime }) => {
  const [displayFormat, setDisplayFormat] = useState("relative");

  useEffect(() => {
    const date = new Date(dateTime);
    const oneDayAgo = subDays(new Date(), 1);

    if (isBefore(date, oneDayAgo)) {
      // If the date is more than one day in the past, display absolute date
      setDisplayFormat("absolute");
    } else {
      // Otherwise, start a timer to switch to absolute date after one day
      const timer = setTimeout(() => {
        setDisplayFormat("absolute");
      }, 24 * 60 * 60 * 1000); // 24 hours

      return () => clearTimeout(timer);
    }
  }, [dateTime]);

  const displayTime = () => {
    const date = new Date(dateTime);
    if (displayFormat === "relative") {
      return formatDistanceToNow(date, { addSuffix: true });
    } else {
      return format(date, "MMMM d, yyyy");
    }
  };

  return <div className="w-fit">{displayTime()}</div>;
};

export default Time;
