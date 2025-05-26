import React from "react";
import { dashboardSectionData, teamData } from "../data/teamData";
import SolutionsMain from "../components/Solutions/SolutionsMain/SolutionsMain";
import BannerComponent from "../components/Shared/BannerComponent/BannerComponent";
import WhyFullspanComponent from "../components/OurTeam/WhyUs/WhyFullSpanAi";
import DashboardSection from "../components/HomePage/DashboardSection/DashboardSection";
import TeamMembersComponent from "../components/OurTeam/TeamComponent/TeamComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Our Team - FullSpan AI Solutions | Meet the Minds Behind AI Innovation",
  description:
    "Meet the talented team at FullSpan AI Solutions. Our purpose-driven experts in AI, education, design, and strategy are dedicated to reshaping the future through responsible, intelligent, and impactful AI solutions.",
  keywords: [
    "FullSpan AI team",
    "AI experts",
    "artificial intelligence professionals",
    "AI leadership",
    "tech team",
    "AI innovation team",
    "machine learning experts",
    "AI education specialists",
    "business transformation experts",
    "ethical AI team",
  ],
  authors: [{ name: "FullSpan AI Solutions" }],
  creator: "FullSpan AI Solutions",
  publisher: "FullSpan AI Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Our Team - FullSpan AI Solutions",
    description:
      "Meet the talented team at FullSpan AI Solutions. Our purpose-driven experts are dedicated to reshaping the future through responsible AI solutions.",
    url: "/team",
    siteName: "FullSpan AI Solutions",
    images: [
      {
        url: "/static/assets/team/Ai-banner.png",
        width: 1200,
        height: 630,
        alt: "FullSpan AI Solutions Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team - FullSpan AI Solutions",
    description:
      "Meet the talented team at FullSpan AI Solutions. Our purpose-driven experts are dedicated to reshaping the future through responsible AI solutions.",
    images: ["/static/assets/team/Ai-banner.png"],
    creator: "@fullspanai",
    site: "@fullspanai",
  },
  alternates: {
    canonical: "/team",
  },
  category: "Technology",
};

const page = () => {
  const { hero } = teamData;
  return (
    <>
      <SolutionsMain hero={hero} />
      <BannerComponent image={teamData.banner.image} />
      <WhyFullspanComponent data={teamData.whyFullspan} />
      <TeamMembersComponent data={teamData.teamMembers} />
      <DashboardSection
        heading={dashboardSectionData.heading}
        description={dashboardSectionData.description}
        image={dashboardSectionData.image}
      />
    </>
  );
};

export default page;
