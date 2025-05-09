import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import SolutionsMain from "@/app/components/Solutions/SolutionsMain/SolutionsMain";
import TextWithImage from "@/app/components/Shared/TestWithImage/TestWithImage";
import FeatureCardsSection from "@/app/components/Solutions/FeatureCardsSection/FeatureCardsSection";
import ArticlesSection from "@/app/components/Shared/ArticlesSection/ArticlesSection";
import { solutionsDataMap } from "@/app/data";
import TabbedSection from "@/app/components/Solutions/TabbedSection/TabbedSection";
import ComingSoon from "@/app/components/Solutions/CommingSoon/CommingSoon";
import FAQsSection from "@/app/components/Solutions/FaqsSection/FaqsSection";

interface SolutionPageProps {
  params: Promise<{ type: string }>;
}

export async function generateMetadata(
  props: SolutionPageProps
): Promise<Metadata> {
  const params = await props.params;
  const type = params.type;

  const solutionData = solutionsDataMap[type];

  if (!solutionData) {
    return {
      title: "Solution Not Found",
      description: "The requested solution could not be found.",
    };
  }

  return {
    title: solutionData.meta.title,
    description: solutionData.meta.description,
    openGraph: solutionData.meta.ogImage
      ? {
          images: [solutionData.meta.ogImage],
        }
      : undefined,
  };
}

export async function generateStaticParams() {
  return [
    { type: "students" },
    { type: "professionals" },
    { type: "businesses" },
  ];
}

export default async function SolutionPage(props: SolutionPageProps) {
  const params = await props.params;
  const type = params.type;

  const solutionData = solutionsDataMap[type];

  if (!solutionData) {
    notFound();
  }
  const { hero, sections } = solutionData;

  return (
    <main>
      <SolutionsMain hero={hero} />
      {sections.main && <TextWithImage {...sections.main} />}
      {sections.featureCards && (
        <FeatureCardsSection
          heading={sections.featureCards.heading}
          headingHighlight={sections.featureCards.headingHighlight}
          cards={sections.featureCards.cards}
          backgroundColor={sections.featureCards.backgroundColor}
        />
      )}

      {sections.tabbedTools && (
        <TabbedSection
          tabs={sections.tabbedTools.tabs}
          activeTabIndex={sections.tabbedTools.activeTabIndex}
          className="py-4 bg-white-bg"
        />
      )}
      {sections.comingSoon && (
        <ComingSoon
          title={sections.comingSoon.title}
          description={sections.comingSoon.description}
          targetDate={sections.comingSoon.targetDate}
        />
      )}
      {sections.articles && (
        <ArticlesSection
          heading={sections.articles.heading}
          subheading={sections.articles.subheading}
          articles={sections.articles.articles}
          viewAllLink={sections.articles.viewAllLink}
          viewAllText={sections.articles.viewAllText}
        />
      )}
      {sections.faqs && (
        <FAQsSection title={sections.faqs.title} faqs={sections.faqs.faqs} />
      )}
    </main>
  );
}
