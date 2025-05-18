import React from "react";
import AiManifesto from "../components/ai-manifesto/AiManifesto";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AI Manifesto | Our Principles for Responsible & Ethical AI Development",
  description:
    "Discover our AI Manifesto - seven steadfast commitments that guide our technology development to ensure it serves people, planet, and progress with responsibility and ethics.",
  keywords: [
    "AI manifesto",
    "responsible AI",
    "ethical AI",
    "explainable AI",
    "accessible AI",
    "impactful AI",
    "sustainable AI",
    "secured AI",
    "risk-mitigated AI",
    "AI ethics",
    "AI principles",
    "AI development framework",
  ],
  openGraph: {
    title:
      "AI Manifesto | Our Principles for Responsible & Ethical AI Development",
    description:
      "Discover our seven commitments to responsible, ethical, explainable, accessible, impactful, sustainable, secured and risk-mitigated AI development.",
    url: "/ai-manifesto",
    siteName: "Your Company Name",
    images: [
      {
        url: "/static/assets/ogimages/ai-manifesto-og.jpg", // Create this image or update path
        width: 1200,
        height: 630,
        alt: "AI Manifesto - Our Commitment to Responsible AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Manifesto | Our Principles for Responsible & Ethical AI Development",
    description:
      "Discover our seven commitments to ensure AI serves people, planet, and progress.",
    images: ["/static/assets/ogimages/ai-manifesto-og.jpg"], // Same as OG image
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/ai-manifesto",
  },
  category: "AI Technology",
};

const page = () => {
  return (
    <>
      <AiManifesto />
    </>
  );
};

export default page;
