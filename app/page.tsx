import { Metadata } from "next";
import HomePage from "./pages/HomePage/HomePage";

export const metadata: Metadata = {
  title:
    "FullSpan AI Solutions | Ethical AI for Career & Business Transformation",
  description:
    "Transform your career and business with FullSpan AI's responsible, intelligent solutions. From personalized career tools to enterprise automation, we make AI accessible, explainable, and valuable for everyone.",
  keywords: [
    "FullSpan AI",
    "artificial intelligence solutions",
    "AI career tools",
    "enterprise AI automation",
    "ethical AI",
    "business transformation",
    "AI education",
    "personalized AI tools",
    "intelligent automation",
    "AI for professionals",
    "career empowerment AI",
    "scalable AI solutions",
    "responsible AI technology",
    "AI consulting services",
  ],
  authors: [{ name: "FullSpan AI Solutions" }],
  creator: "FullSpan AI Solutions",
  publisher: "FullSpan AI Solutions",
  applicationName: "FullSpan AI Solutions",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "FullSpan AI Solutions | Ethical AI for Career & Business Transformation",
    description:
      "Transform your career and business with responsible AI solutions. We make AI accessible, explainable, and valuable for everyone, everywhere.",
    url: "/",
    siteName: "FullSpan AI Solutions",
    images: [
      {
        url: "/static/assets/home/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "FullSpan AI Solutions - Transforming Careers and Business with AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FullSpan AI Solutions | Ethical AI for Everyone",
    description:
      "Transform your career and business with responsible AI solutions. Making AI accessible, explainable, and valuable for everyone, everywhere.",
    images: ["/static/assets/home/hero-banner.png"],
    creator: "@fullspanai",
    site: "@fullspanai",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: "/",
  },
  category: "Technology",
  classification: "Business",
  other: {
    "theme-color": "#1D1E9D",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
