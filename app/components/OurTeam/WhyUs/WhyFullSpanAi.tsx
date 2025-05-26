import React from "react";
import { IoCheckmark } from "react-icons/io5";

interface WhyFullspanData {
  title: {
    normalText: string;
    highlightedText: string;
  };
  description: string;
  features: string[];
}

interface WhyFullspanComponentProps {
  data: WhyFullspanData;
}

const WhyFullspanComponent: React.FC<WhyFullspanComponentProps> = ({
  data,
}) => {
  return (
    <div className="container py-[5%] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
        {/* Left Column - Title and Description */}
        <div className="flex-1 space-y-6 max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-black">{data.title.normalText}</span>
            <span className="text-purple-600">
              {data.title.highlightedText}
            </span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Right Column - Features */}
        <div className="flex-shrink-0 space-y-4 w-full lg:w-auto lg:min-w-[400px]">
          {data.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <IoCheckmark className="text-[#1D1E9D] text-xl flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyFullspanComponent;
