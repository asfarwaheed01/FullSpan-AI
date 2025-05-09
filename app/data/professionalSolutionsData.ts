import { SolutionPageData } from "../types/solutions";
import { articlesData } from "./articlesData";

// Professional Solution Data
export const professionalSolutionData: SolutionPageData = {
  slug: "professionals",
  hero: {
    title: {
      normalText: "Professional ",
      highlightedText: "AI Suite",
    },
    description:
      "Find Your Career Path in the AI-Economy: Assess your AI literacy, the transformational impact of AI on your job, and receive recommendations to excel in your career.",
    backgroundClass: "bg-main-bg",
  },
  sections: {
    // Feature Cards Section
    featureCards: {
      heading: "Why FullSpan AI Works for Professionals",
      cards: [
        {
          id: "ai-literacy",
          icon: "cpu",
          title: "AI Literacy Assessment",
          description:
            "Evaluate your current understanding of AI concepts and technologies to identify knowledge gaps.",
          points: [
            "Personalized AI literacy score",
            "Benchmark against industry averages",
            "Tailored learning recommendations",
          ],
          buttonText: "Take Assessment",
          buttonLink: "/tools/ai-literacy",
        },
        {
          id: "job-impact",
          icon: "briefcase",
          title: "Job Impact Analysis",
          description:
            "Understand how AI will transform your role and what skills will be most valuable going forward.",
          points: [
            "Detailed AI impact score for your role",
            "Skills most likely to be automated",
            "Emerging skill opportunities",
          ],
          buttonText: "Analyze Your Role",
          buttonLink: "/tools/job-impact",
        },
        {
          id: "career-pivot",
          icon: "chart",
          title: "Career Pivot Navigator",
          description:
            "Explore adjacent career paths that leverage your existing skills with strategic AI upskilling.",
          points: [
            "AI-powered career recommendations",
            "Skills gap analysis for each path",
            "Learning path recommendations",
          ],
          buttonText: "Explore Options",
          buttonLink: "/tools/career-navigator",
        },
        {
          id: "resume-enhancer",
          icon: "file",
          title: "AI-Optimized Resume",
          description:
            "Enhance your resume with AI skills and achievements that showcase your future-readiness.",
          points: [
            "AI-relevant skill highlighting",
            "Achievement reframing for AI economy",
            "ATS optimization",
          ],
          buttonText: "Update Resume",
          buttonLink: "/tools/resume-enhancer",
        },
        {
          id: "networking",
          icon: "users",
          title: "Strategic Networking",
          description:
            "Connect with professionals navigating similar AI transformations in your industry.",
          points: [
            "AI-powered connection recommendations",
            "Conversation starters for AI topics",
            "Industry community access",
          ],
          buttonText: "Start Networking",
          buttonLink: "/tools/networking",
        },
      ],
      backgroundColor: "bg-secondary-bg",
    },
    // Main Section
    main: {
      heading: [
        { text: "Navigate the " },
        { text: "AI-Transformed Workplace", highlight: true },
      ],
      description:
        "Our comprehensive AI toolkit helps professionals adapt to rapidly changing industry landscapes. Identify emerging opportunities, reskill strategically, and position yourself for success in an AI-driven economy.",
      imageSrc: "/static/assets/solutions/textimage.png",
      imageAlt: "Professional navigating AI career tools",
      imageOnRight: true,
    },
    // Tabbed Tools Section
    tabbedTools: {
      tabs: [
        {
          title: "OnTrack Professional Suite",
          content: {
            heading: [
              { text: "OnTrack Career Solutions " },
              { text: "Professionals", highlight: true },
            ],
            description:
              "Explore sustainable career opportunities tailored to your educational background and personal interests. Our AI evaluates the current job landscape to pinpoint career paths that reduce automation risks while leveraging your inherent talents.",
            imageSrc: "/static/assets/solutions/textimage.png",
            imageAlt: "OnTrack Professional Suite",
            imageOnRight: false,
            bulletPoints: [
              "Career Path Alignment based on your educational credentials",
              "Skill Gap Evaluation with tailored learning pathways",
              "Automation Risk Evaluation for strategic career planning",
              "Personalized readiness assessment with actionable improvement recommendations",
            ],
          },
        },
        {
          title: "Resume Enhancement Tool",
          content: {
            heading: [
              { text: "AI-Powered " },
              { text: "Resume Enhancement", highlight: true },
            ],
            description:
              "Transform your resume with our AI-powered enhancement tool. Highlight your skills and experiences in a way that resonates with both ATS systems and human recruiters. Get real-time feedback and suggestions to improve your resume's impact.",
            imageSrc: "/static/assets/solutions/textimage.png",
            imageAlt: "Resume Enhancement Tool",
            imageOnRight: false,
            bulletPoints: [
              "ATS-friendly optimization suggestions",
              "Industry-specific keyword recommendations",
              "Achievement reframing for better impact",
              "Format and content improvement guidance",
            ],
          },
        },
        {
          title: "LinkedIn Profile Optimizer",
          content: {
            heading: [
              { text: "Optimize Your " },
              { text: "LinkedIn Presence", highlight: true },
            ],
            description:
              "Stand out to recruiters and potential employers with an optimized LinkedIn profile. Our AI analyzes top profiles in your industry and provides tailored recommendations to increase your visibility and engagement.",
            imageSrc: "/static/assets/solutions/textimage.png",
            imageAlt: "LinkedIn Profile Optimizer",
            imageOnRight: false,
            bulletPoints: [
              "Profile strength assessment and scoring",
              "Headline and summary optimization",
              "Skills and endorsements recommendations",
              "Content strategy for improved engagement",
            ],
          },
        },
      ],
    },
    // Features Section
    features: {
      heading: [
        { text: "AI Literacy " },
        { text: "Assessment & Training", highlight: true },
      ],
      description:
        "Measure your current AI literacy level and receive personalized learning paths to build the skills that matter most in your industry. Stay ahead of the curve with our continuously updated learning resources.",
      imageSrc: "/static/assets/solutions/professional-features.jpg",
      imageAlt: "AI literacy assessment dashboard",
      imageOnRight: false,
      bgColor: "bg-secondary-bg",
    },
    // Benefits Section
    benefits: {
      heading: [
        { text: "Job Impact " },
        { text: "Analysis & Career Planning", highlight: true },
      ],
      description:
        "Understand how AI will transform your role and industry with our detailed impact analysis. Receive strategic recommendations for skill development and career pivots to maintain your competitive edge.",
      imageSrc: "/static/assets/solutions/professional-benefits.jpg",
      imageAlt: "Career planning with AI insights",
      imageOnRight: true,
    },
    // Articles Section
    articles: articlesData,
    comingSoon: {
      title: "Professional AI Suite Coming Soon",
      description:
        "Our comprehensive AI toolkit for professionals is almost ready. Subscribe to be the first to know when we launch and receive special early adopter benefits.",
      targetDate: new Date("2025-06-30T00:00:00"), // June 30, 2025
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
    title: "AI Solutions for Professionals | FullSpan AI",
    description:
      "Advance your career with AI tools that analyze job impact, identify skill gaps, and provide personalized career guidance for professionals.",
    ogImage: "/static/assets/og/professionals-og.jpg",
  },
};
