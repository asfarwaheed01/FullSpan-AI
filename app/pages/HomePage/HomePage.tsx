import DashboardSection from "@/app/components/HomePage/DashboardSection/DashboardSection";
import HeroSection from "@/app/components/HomePage/HeroSection/HeroSection";
import ServicesSection from "@/app/components/HomePage/ServicesSection/ServicesSection";
import TabsSection from "@/app/components/HomePage/TabsSection/TabsSection";
import ArticlesSection from "@/app/components/Shared/ArticlesSection/ArticlesSection";
import { dashboardSectionData, homeArticlesData } from "@/app/data/homeData";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TabsSection />
      <ServicesSection />
      <ArticlesSection
        heading={homeArticlesData.heading}
        subheading={homeArticlesData.subheading}
        articles={homeArticlesData.articles}
        viewAllLink={homeArticlesData.viewAllLink}
        viewAllText={homeArticlesData.viewAllText}
      />
      <DashboardSection
        tag={dashboardSectionData.tag}
        heading={dashboardSectionData.heading}
        description={dashboardSectionData.description}
        image={dashboardSectionData.image}
        stats={dashboardSectionData.stats}
      />
    </>
  );
};

export default HomePage;
