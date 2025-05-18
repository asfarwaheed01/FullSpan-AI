import React from "react";
import SolutionsMain from "../Solutions/SolutionsMain/SolutionsMain";
import { aiManifestoData } from "@/app/data/aiMenifestoData";
import TextWithImage from "../Shared/TestWithImage/TestWithImage";

const AiManifesto = () => {
  const {
    hero,
    responsible,
    ethical,
    explainable,
    accessible,
    impactful,
    sustainable,
    secured,
    riskMitigated,
    end,
  } = aiManifestoData;

  return (
    <>
      <SolutionsMain hero={hero} />

      <TextWithImage
        heading={responsible.heading}
        description={responsible.description}
        imageSrc={responsible.imageSrc}
        imageAlt={responsible.imageAlt}
        imageOnRight={responsible.imageOnRight}
        bgColor={responsible.bgColor}
        bulletPoints={responsible.bulletPoints}
        withBorder={responsible.withBorder}
        py={4}
      />

      <TextWithImage
        heading={ethical.heading}
        description={ethical.description}
        imageSrc={ethical.imageSrc}
        imageAlt={ethical.imageAlt}
        imageOnRight={ethical.imageOnRight}
        bgColor={ethical.bgColor}
        bulletPoints={ethical.bulletPoints}
        withBorder={ethical.withBorder}
        py={4}
      />

      <TextWithImage
        heading={explainable.heading}
        description={explainable.description}
        imageSrc={explainable.imageSrc}
        imageAlt={explainable.imageAlt}
        imageOnRight={explainable.imageOnRight}
        bgColor={explainable.bgColor}
        bulletPoints={explainable.bulletPoints}
        withBorder={explainable.withBorder}
        py={4}
      />

      <TextWithImage
        heading={accessible.heading}
        description={accessible.description}
        imageSrc={accessible.imageSrc}
        imageAlt={accessible.imageAlt}
        imageOnRight={accessible.imageOnRight}
        bgColor={accessible.bgColor}
        bulletPoints={accessible.bulletPoints}
        withBorder={accessible.withBorder}
        py={4}
      />

      <TextWithImage
        heading={impactful.heading}
        description={impactful.description}
        imageSrc={impactful.imageSrc}
        imageAlt={impactful.imageAlt}
        imageOnRight={impactful.imageOnRight}
        bgColor={impactful.bgColor}
        bulletPoints={impactful.bulletPoints}
        withBorder={impactful.withBorder}
        py={4}
      />

      <TextWithImage
        heading={sustainable.heading}
        description={sustainable.description}
        imageSrc={sustainable.imageSrc}
        imageAlt={sustainable.imageAlt}
        imageOnRight={sustainable.imageOnRight}
        bgColor={sustainable.bgColor}
        bulletPoints={sustainable.bulletPoints}
        withBorder={sustainable.withBorder}
        py={4}
      />

      <TextWithImage
        heading={secured.heading}
        description={secured.description}
        imageSrc={secured.imageSrc}
        imageAlt={secured.imageAlt}
        imageOnRight={secured.imageOnRight}
        bgColor={secured.bgColor}
        bulletPoints={secured.bulletPoints}
        withBorder={secured.withBorder}
        py={4}
      />

      <TextWithImage
        heading={riskMitigated.heading}
        description={riskMitigated.description}
        imageSrc={riskMitigated.imageSrc}
        imageAlt={riskMitigated.imageAlt}
        imageOnRight={riskMitigated.imageOnRight}
        bgColor={riskMitigated.bgColor}
        bulletPoints={riskMitigated.bulletPoints}
        withBorder={riskMitigated.withBorder}
        py={4}
      />
      <SolutionsMain
        hero={{
          ...end,
          normalTextColor: "text-gray-900",
          descriptionTextColor: "text-gray-600",
        }}
      />
    </>
  );
};

export default AiManifesto;
