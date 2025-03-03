"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set launch date to March 20 of the current year or next year if March 20 has passed
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth(); // 0-indexed, so 2 = March
    const launchDate = new Date(
      currentMonth > 2 || (currentMonth === 2 && new Date().getDate() > 20)
        ? currentYear + 1
        : currentYear,
      2, // March (0-indexed)
      20
    );

    const calculateTimeLeft = () => {
      const difference = launchDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Then update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex flex-col items-center mt-6 text-center absolute bottom-0 p-4 pt-32 shadow-lg w-full bg-gradient-to-b from-transparent to-background"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.9) 60%, var(--background) 100%)",
      }}
    >
      <p className="text-muted-foreground mb-2">launching in</p>
      <div className="flex gap-4 text-xl md:text-2xl font-mono">
        <TimeUnit value={timeLeft.days} label="days" />
        <TimeUnit value={timeLeft.hours} label="hours" />
        <TimeUnit value={timeLeft.minutes} label="min" />
        <TimeUnit value={timeLeft.seconds} label="sec" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="font-bold text-2xl md:text-3xl"
      >
        {value.toString().padStart(2, "0")}
      </motion.div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
