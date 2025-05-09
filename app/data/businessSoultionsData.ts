import { SolutionPageData } from "../types/solutions";
import { articlesData } from "./articlesData";
import { professionalSolutionData } from "./professionalSolutionsData";
import { studentSolutionData } from "./studentSolutionsData";

// Business Solution Data
export const businessSolutionData: SolutionPageData = {
  slug: "businesses",
  hero: {
    title: {
      normalText: "Business ",
      highlightedText: "AI Suite",
    },
    description:
      "Harness the power of AI to streamline operations, enhance decision-making, and fuel innovation. Assess your readiness, identify impactful use cases, and get a tailored transformation roadmap. From AI chatbots to predictive sales and visual quality control—unlock scalable business growth.",
    backgroundClass: "bg-main-bg",
  },
  sections: {
    // Feature Cards Section
    featureCards: {
      heading: "Catalyst360.ai Platform",
      cards: [
        {
          id: "readiness-assessment",
          icon: "cpu",
          title: "AI Readiness Assessment",
          description:
            "Evaluate your organization's AI readiness across key dimensions.",
          points: [
            "Data infrastructure evaluation",
            "Talent & skill gap analysis",
            "Technology stack assessment",
            "Custom readiness score",
          ],
          buttonText: "Start Assessment",
          buttonLink: "/tools/ai-readiness",
        },
        {
          id: "use-case",
          icon: "chart",
          title: "Use Case Identification",
          description:
            "Discover high-impact AI implementation opportunities specific to your business.",
          points: [
            "Industry-specific use case library",
            "ROI calculator for each use case",
            "Implementation complexity scoring",
            "Prioritization framework",
          ],
          buttonText: "Explore Use Cases",
          buttonLink: "/tools/use-cases",
        },
        {
          id: "transformation",
          icon: "settings",
          title: "Transformation Roadmap",
          description:
            "Get a comprehensive plan for AI integration across your organization.",
          points: [
            "Phased implementation strategy",
            "Resource allocation guidance",
            "Change management framework",
            "Success metrics definition",
          ],
          buttonText: "Build Roadmap",
          buttonLink: "/tools/transformation-roadmap",
        },
        {
          id: "chatbot",
          icon: "message",
          title: "Custom AI Chatbots",
          description:
            "Deploy intelligent conversational AI for customer service and internal support.",
          points: [
            "Knowledge base integration",
            "Multi-channel deployment",
            "Continuous learning capability",
            "Analytics dashboard",
          ],
          buttonText: "Deploy Chatbot",
          buttonLink: "/tools/chatbot-builder",
        },
        {
          id: "predictive",
          icon: "chart",
          title: "Predictive Analytics",
          description:
            "Leverage your data for forecasting and strategic business insights.",
          points: [
            "Sales forecasting models",
            "Customer churn prediction",
            "Inventory optimization",
            "Custom prediction models",
          ],
          buttonText: "Explore Analytics",
          buttonLink: "/tools/predictive-analytics",
        },
        {
          id: "visual-ai",
          icon: "settings",
          title: "Visual Recognition AI",
          description:
            "Implement computer vision solutions for quality control and process automation.",
          points: [
            "Quality inspection automation",
            "Object & anomaly detection",
            "Visual process monitoring",
            "Custom vision models",
          ],
          buttonText: "See Demos",
          buttonLink: "/tools/visual-ai",
        },
      ],
      backgroundColor: "bg-secondary-bg",
    },
    // Main Section
    main: {
      heading: [
        { text: "Transform Your Business with " },
        { text: "Strategic AI Implementation", highlight: true },
      ],
      description:
        "Our comprehensive AI solution suite helps businesses identify high-impact use cases, develop implementation roadmaps, and measure ROI. Turn AI from a buzzword into a competitive advantage.",
      imageSrc: "/static/assets/solutions/textimage.png",
      imageAlt: "Business AI strategy dashboard",
      imageOnRight: true,
    },
    // Tabbed Tools Section
    tabbedTools: {
      tabs: [
        {
          title: "AI Readiness Assessment",
          content: {
            heading: [
              { text: "Assess Your " },
              { text: "Organization's AI Readiness", highlight: true },
            ],
            description:
              "Evaluate how prepared your organization is to implement AI solutions across key dimensions including data infrastructure, talent, processes, and technology stack.",
            imageSrc: "/static/assets/solutions/textimage.png",
            imageAlt: "AI Readiness Assessment",
            imageOnRight: false,
            bulletPoints: [
              "Comprehensive readiness scoring across 12 dimensions",
              "Gap analysis for critical AI implementation factors",
              "Benchmark comparison with industry peers",
              "Prioritized improvement recommendations",
            ],
          },
        },
        {
          title: "Transformation Roadmap",
          content: {
            heading: [
              { text: "Strategic " },
              { text: "AI Implementation Plan", highlight: true },
            ],
            description:
              "Get a customized, phased roadmap for integrating AI solutions into your business operations. Our strategic planning tool helps you prioritize use cases for maximum impact.",
            imageSrc: "/static/assets/solutions/textimage.png",
            imageAlt: "AI Transformation Roadmap",
            imageOnRight: false,
            bulletPoints: [
              "Phased implementation timeline and milestones",
              "Resource allocation and ROI projections",
              "Change management framework",
              "Risk assessment and mitigation strategies",
            ],
          },
        },
        {
          title: "Custom AI Solutions",
          content: {
            heading: [
              { text: "Tailored " },
              { text: "AI Solutions & Services", highlight: true },
            ],
            description:
              "From AI chatbots to predictive analytics and computer vision applications, our platform offers custom AI solutions that drive real business value and competitive advantage.",
            imageSrc: "/static/assets/solutions/textimage.png",
            imageAlt: "Custom AI Solutions",
            imageOnRight: false,
            bulletPoints: [
              "Intelligent chatbots and virtual assistants",
              "Predictive analytics and forecasting models",
              "Computer vision for quality control and automation",
              "Natural language processing for document analysis",
            ],
          },
        },
      ],
    },
    // Features Section
    features: {
      heading: [
        { text: "AI Readiness " },
        { text: "Assessment & Roadmapping", highlight: true },
      ],
      description:
        "Evaluate your organization's AI readiness across key dimensions and receive a customized transformation roadmap. Our strategic approach ensures you focus on the highest-impact AI initiatives first.",
      imageSrc: "/static/assets/solutions/business-features.jpg",
      imageAlt: "AI readiness assessment interface",
      imageOnRight: false,
      bgColor: "bg-gray-50",
    },
    // Benefits Section
    benefits: {
      heading: [
        { text: "End-to-End " },
        { text: "AI Implementation Support", highlight: true },
      ],
      description:
        "From chatbots and predictive analytics to visual quality control and automated customer service, our platform helps you implement AI solutions that drive real business value and competitive advantage.",
      imageSrc: "/static/assets/solutions/business-benefits.jpg",
      imageAlt: "AI implementation dashboard",
      imageOnRight: true,
    },
    // Articles Section
    articles: articlesData,
    comingSoon: {
      title: "Enterprise AI Solutions Coming Soon",
      description:
        "Our advanced AI implementation platform for businesses is in final testing. Join our waitlist to be notified at launch and get priority access to our business transformation tools.",
      targetDate: new Date("2025-06-15T00:00:00"),
    },
    faqs: {
      title: "FAQs",
      faqs: [
        {
          question: "Can AI content writing replace human writers?",
          answer:
            "AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers, but it works best as a collaborative tool with human oversight and editing.",
        },
        {
          question: "How does AI content writing work?",
          answer:
            "AI content generation uses natural language processing (NLP) and machine learning algorithms to analyze patterns in existing content. It then creates new content based on the prompt given. The AI identifies relevant information, structures it logically, and generates coherent text that follows linguistic rules and contextual relevance.",
        },
        {
          question: "What is AI content writing?",
          answer:
            "AI content writing is the use of artificial intelligence technologies to generate written content automatically. It leverages machine learning, natural language processing, and deep learning algorithms to create various types of content including blog posts, product descriptions, social media posts, and more for student projects and assignments.",
        },
        {
          question:
            "What are the benefits of using AI content writing for students?",
          answer:
            "Students benefit from AI content writing through improved productivity, overcoming writer's block, learning assistance for complex topics, multilingual capabilities, consistent content creation, and access to research assistance. It helps students focus on higher-level thinking while automating routine writing tasks.",
        },
        {
          question: "Is AI content writing ethical for academic use?",
          answer:
            "The ethics of AI content writing in academics depends on how it's used. When used as a learning aid, brainstorming tool, or writing assistant with proper attribution and human oversight, it can be ethical. However, submitting AI-generated content as original work without disclosure may violate academic integrity policies.",
        },
      ],
    },
  },
  meta: {
    title: "AI Solutions for Businesses | FullSpan AI",
    description:
      "Transform your business operations with AI readiness assessment, strategic implementation roadmaps, and end-to-end support for AI adoption.",
    ogImage: "/static/assets/og/business-og.jpg",
  },
};

// Map to easily access the right data set by solution type
export const solutionsDataMap: Record<string, SolutionPageData> = {
  students: studentSolutionData,
  professionals: professionalSolutionData,
  businesses: businessSolutionData,
};
