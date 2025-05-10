import { ArticlesSectionProps } from "../types/articles";

export const heroData = {
  mainHeading: {
    firstPart: "Empowering Careers, Transforming",
    secondPart: "Businesses through",
    highlight: "AI",
  },
  description:
    "FullSpan AI Solutions equips students, professionals, and businesses with tailored, high-impact Ethical AI solutions that help them adapt, navigate, and thrive in an AI-powered economy",
  buttons: [
    {
      id: "student",
      text: "EXPLORE STUDENT SOLUTIONS",
      url: "/solutions/students",
    },
    {
      id: "professional",
      text: "EXPLORE PROFESSIONAL SOLUTIONS",
      url: "/solutions/professionals",
    },
    {
      id: "business",
      text: "EXPLORE BUSINESS SOLUTIONS",
      url: "/solutions/businesses",
    },
  ],
  images: {
    hero: "/static/assets/home/HeroImage.png",
    containerLeft: "/static/assets/home/Container-left.png",
    containerRight: "/static/assets/home/Container-right.png",
  },
};

export const tabsData = {
  heading: {
    start: "Our ",
    highlight: "AI Manifesto",
    end: ", We don't just do AI , We do AI right",
  },
  description:
    "Whether you're launching a career, leveling up your role, or future-proofing your organization, FullSpanAI delivers solutions that are responsible, impactful, explainable, ethical, sustainable, and secured—ensuring your success in the AI-powered economy.",
  ctaButton: {
    text: "Learn More about our AI Commitments",
    url: "/ai-commitments",
  },
  tabs: [
    {
      id: "ai-readiness",
      label: "AI Readiness",
      isActive: true,
    },
    {
      id: "ai-experts",
      label: "AI Experts",
      isActive: false,
    },
    {
      id: "responsible-ai",
      label: "Responsible AI",
      isActive: false,
    },
    {
      id: "secured-ai",
      label: "Secured AI",
      isActive: false,
    },
    {
      id: "ai-for-good",
      label: "AI for Good",
      isActive: false,
    },
  ],
  images: {
    analytics: "/static/assets/home/Analytics.png",
    automation: "/static/assets/home/Automation.png",
  },
};

export const servicesData = {
  heading: {
    start: "Our ",
    highlight: "Services",
  },
  services: [
    {
      id: "01",
      title: "Students Career Assistant",
      description:
        "Empower your academic and career journey with AI tools for resume building, LinkedIn optimization, and smart career path planning.",
      images: {
        impression: "/static/assets/home/Impression.png",
        stat: "/static/assets/home/Stat.png",
      },
      position: "right",
    },
    {
      id: "02",
      title: "Professionals Career Suite",
      description:
        "Accelerate career advancement with AI-powered job impact analysis, resume refinement, and LinkedIn optimization tailored for experienced professionals.",
      images: {
        impression: "/static/assets/home/Impression.png",
        stat: "/static/assets/home/Stat.png",
      },
      position: "left",
    },
    {
      id: "03",
      title: "AI Services for Business",
      description:
        "Drive innovation with custom AI strategies, seamless integrations, and team training designed to elevate business operations and decision-making.",
      images: {
        impression: "/static/assets/home/Impression.png",
        stat: "/static/assets/home/Stat.png",
      },
      position: "right",
    },
  ],
};

export const homeArticlesData: ArticlesSectionProps = {
  heading: "Review our latest article",
  subheading: "Do you want to learn more about us, let's go the blog page.",
  viewAllLink: "/blog",
  viewAllText: "See All",
  articles: [
    {
      id: "article-1",
      tag: "UI/UX Design",
      tag_color: "#8624FF1A",
      title: "Productivity with an AI-Based Assistant",
      image: "/static/assets/articles/article-1.png",
      link: "/blog/productivity-with-ai-assistant",
    },
    {
      id: "article-2",
      tag: "Product Thinking",
      tag_color: "#55C0E51A",
      title: "Create a Landing Page That Performs Great",
      image: "/static/assets/articles/article-2.png",
      link: "/blog/create-landing-page-performs-great",
    },
    {
      id: "article-3",
      tag: "AI Startup",
      tag_color: "#FFA2161A",
      title: "How Can Designers Prepare for the Future?",
      image: "/static/assets/articles/article-3.png",
      link: "/blog/designers-prepare-for-future",
    },
  ],
};

export const dashboardSectionData = {
  tag: "AI Powered",
  heading: "Easy-to-use dashboard",
  description:
    "You can Access the AI-powered virtual assistant Website on your web browser.",
  image: "/static/assets/home/easytouse.png",
  stats: [
    {
      value: "+65",
      label: "AI Features",
    },
    {
      value: "+72",
      label: "Success Stories",
    },
    {
      value: "+12.7K",
      label: "Daily Users",
    },
  ],
};
