"use client";

import React from "react";
import { servicesData } from "@/app/data/homeData";
import TextWithImage from "../../Shared/TestWithImage/TestWithImage";

const ServicesSection = () => {
  const { services } = servicesData;

  console.log("The services are", services);

  return (
    <section className="py-16 bg-secondary-bg">
      <div className="container mx-auto px-4">
        <h2 className="md:text-[50px] font-bold text-center mb-12">
          <span className="text-black">Our </span>
          <span className="text-purple-600">Services</span>
        </h2>

        <div className="space-y-8">
          {services.map((service) => (
            <TextWithImage
              key={service.id}
              heading={[{ text: service.title, highlight: true }]}
              description={service.description}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              imageOnRight={service.imageOnRight}
              buttonText={service.buttonText}
              buttonLink={service.buttonLink}
              withBorder={true}
              className="mb-8"
              py={4}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
