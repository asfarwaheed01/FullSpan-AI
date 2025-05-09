"use client";

import React, { useState, useEffect } from "react";

interface ComingSoonProps {
  title: string;
  description: string;
  targetDate: Date;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  title,
  description,
  targetDate,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Set up interval to update countdown
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your subscription logic here
    console.log("Subscribed with email:", email);
    alert(
      `Thanks for subscribing with ${email}! We'll notify you when we launch.`
    );
    setEmail("");
  };

  // Format numbers to always have two digits
  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <section className="w-full py-20 bg-gradient-to-b from-purple-950 to-main-bg text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl font-bold mb-6">
              {title.split(" Coming Soon").map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && (
                    <>
                      {" "}
                      <span className="text-purple-400 mr-2">Coming</span>
                      <span className="text-purple-400">Soon</span>
                    </>
                  )}
                </span>
              ))}
            </h1>
            <p className="text-base mb-8 max-w-xl text-gray-200">
              {description}
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="px-4 py-3 text-base bg-transparent border-b border-purple-400 focus:outline-none focus:border-white text-white w-full sm:w-64"
              />
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-full px-8 py-3 text-sm transition-colors duration-300 uppercase"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Countdown Timer - Modified to be in a single row with smaller sizes */}
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-center">
              <div className="bg-purple-500 rounded-lg w-16 h-16 flex items-center justify-center">
                <span className="text-3xl font-bold">
                  {formatNumber(timeLeft.days)}
                </span>
              </div>
              <span className="text-xs uppercase mt-2 text-purple-300 text-center">
                Days
              </span>
            </div>
            <div className="flex items-center justify-center text-3xl font-bold text-white px-2 pb-5">
              :
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-500 rounded-lg w-16 h-16 flex items-center justify-center">
                <span className="text-3xl font-bold">
                  {formatNumber(timeLeft.hours)}
                </span>
              </div>
              <span className="text-xs uppercase mt-2 text-purple-300 text-center">
                Hours
              </span>
            </div>
            <div className="flex items-center justify-center text-3xl font-bold text-white px-2 pb-5">
              :
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-500 rounded-lg w-16 h-16 flex items-center justify-center">
                <span className="text-3xl font-bold">
                  {formatNumber(timeLeft.minutes)}
                </span>
              </div>
              <span className="text-xs uppercase mt-2 text-purple-300 text-center">
                Minutes
              </span>
            </div>
            <div className="flex items-center justify-center text-3xl font-bold text-white px-2 pb-5">
              :
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-500 rounded-lg w-16 h-16 flex items-center justify-center">
                <span className="text-3xl font-bold">
                  {formatNumber(timeLeft.seconds)}
                </span>
              </div>
              <span className="text-xs uppercase mt-2 text-purple-300 text-center">
                Seconds
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
