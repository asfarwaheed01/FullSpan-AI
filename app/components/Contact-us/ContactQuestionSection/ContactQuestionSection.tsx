"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

interface ContactQuestionSectionProps {
  className?: string;
}

const ContactQuestionSection: React.FC<ContactQuestionSectionProps> = ({
  className = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setIsSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        "There was an error submitting your form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`py-16 md:py-24 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="md:text-[50px] font-bold">
            Do you have{" "}
            <span className="text-purple-600">question contact us</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 relative">
          {/* Team Info Box */}
          <div
            className="w-full lg:w-[355px] md:mx-auto rounded-2xl p-8 md:p-12 text-white text-center relative z-10 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #8624FF 0%, #1D1E9D 100%)",
            }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-4">
                <Image
                  src="/static/assets/contact-us/list.png"
                  alt="Team member 1"
                  width={300}
                  height={100}
                  className=""
                />
              </div>
            </div>
            <p className="text-lg md:text-xl">Responds in 4-8 hours</p>
          </div>

          {/* Dotted Line and Paper Plane - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-[20%] transform -translate-y-1/2 z-0">
            <div className="relative w-32 h-32">
              <Image
                src="/static/assets/contact-us/line.png"
                alt="Dotted line"
                width={200}
                height={100}
                className="absolute"
              />
              <Image
                src="/static/assets/contact-us/paperPlane.png"
                alt="Paper plane"
                width={50}
                height={50}
                className="absolute -right-10 bottom-0"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 border border-purple-200 rounded-2xl p-8 md:p-12 shadow-[0_5px_20px_-5px_rgba(134,36,255,0.3)] transition-all duration-300 hover:shadow-[0_8px_25px_-5px_rgba(134,36,255,0.4)]">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
                  <p className="text-lg font-medium">
                    Thank you for reaching out!
                  </p>
                  <p>
                    We&apos;ve received your message and will get back to you
                    within 4-8 hours.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-purple-600 hover:text-purple-800 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email*"
                    required
                    className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe what you need*"
                    required
                    rows={5}
                    className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>

                {errorMessage && (
                  <div className="text-red-600 bg-red-50 p-3 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-3 inline-flex items-center transition-colors disabled:bg-purple-400"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Submitting...</span>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      </>
                    ) : (
                      <>
                        <span className="mr-2">SUBMIT HERE</span>
                        <FiArrowRight />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactQuestionSection;
