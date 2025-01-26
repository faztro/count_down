"use client";

import { useEffect, useState } from "react";
import { CountdownContainer } from "@/styles/styled-components";
import { CountdownBox } from "./ui/CountdownBox";
import { calculateTimeLeft } from "@/utils/timeCalculations";

const TARGET_DATE = "2025-01-26T22:21:59";

export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(TARGET_DATE);

    // Initial calculation
    setTimeLeft(calculateTimeLeft(targetDate));

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CountdownContainer>
      <CountdownBox value={timeLeft.days} label="Days" />
      <CountdownBox value={timeLeft.hours} label="Hours" />
      <CountdownBox value={timeLeft.minutes} label="Minutes" />
      <CountdownBox value={timeLeft.seconds} label="Seconds" />
    </CountdownContainer>
  );
};
