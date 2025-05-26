import React from "react";
import SolutionsMain from "../components/Solutions/SolutionsMain/SolutionsMain";
import { ContactData } from "../data/contactData";
import ContactInfoSection from "../components/Contact-us/ContactInfoSection/ContactInfoSection";
import ContactQuestionSection from "../components/Contact-us/ContactQuestionSection/ContactQuestionSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - FullSpan AI Solutions | Get in Touch with AI Experts",
  description:
    "Contact FullSpan AI Solutions for AI consultation, partnership opportunities, and innovative technology solutions. Connect with our experts to transform your business with ethical and impactful AI.",
  keywords: [
    "contact FullSpan AI",
    "AI consultation",
    "AI partnership",
    "business transformation",
    "AI solutions contact",
    "artificial intelligence experts",
    "get in touch AI company",
    "AI support",
    "technology consultation",
    "AI implementation services",
    "enterprise AI solutions",
    "AI strategy consultation",
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
    title: "Contact Us - FullSpan AI Solutions",
    description:
      "Get in touch with FullSpan AI Solutions for AI consultation, partnerships, and innovative technology solutions. Transform your business with our AI expertise.",
    url: "/contact",
    siteName: "FullSpan AI Solutions",
    images: [
      {
        url: "/static/assets/contact/contact-banner.png",
        width: 1200,
        height: 630,
        alt: "Contact FullSpan AI Solutions - AI Experts Ready to Help",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - FullSpan AI Solutions",
    description:
      "Get in touch with FullSpan AI Solutions for AI consultation, partnerships, and innovative technology solutions.",
    images: ["/static/assets/contact/contact-banner.png"],
    creator: "@fullspanai",
    site: "@fullspanai",
  },
  alternates: {
    canonical: "/contact",
  },
  category: "Technology",
  other: {
    "contact:phone_number": "+1-XXX-XXX-XXXX",
    "contact:email": "info@fullspanai.com",
    "business:contact_data:locality": "Your City",
    "business:contact_data:region": "Your State",
    "business:contact_data:country_name": "Your Country",
  },
};

const page = () => {
  const { hero, contactInfo } = ContactData;
  return (
    <>
      <SolutionsMain hero={hero} />
      <ContactInfoSection cards={contactInfo.cards} />
      <ContactQuestionSection />
    </>
  );
};

export default page;
