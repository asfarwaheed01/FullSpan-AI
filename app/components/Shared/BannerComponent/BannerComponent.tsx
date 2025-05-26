import React from "react";
import Image from "next/image";

interface BannerComponentProps {
  image: string;
}

const BannerComponent: React.FC<BannerComponentProps> = ({ image }) => {
  return (
    <div className="container py-[5%]">
      <div className="relative w-[98%] mx-auto md:w-full h-64 md:h-[554px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={image}
          alt="Banner"
          fill
          className="object-cover grayscale"
          priority
        />
      </div>
    </div>
  );
};

export default BannerComponent;
