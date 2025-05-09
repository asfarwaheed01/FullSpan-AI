import { SolutionPageData } from "../types/solutions";
import { articlesData } from "./articlesData";

// Student Solution Data
export const studentSolutionData: SolutionPageData = {
  slug: "students",
  hero: {
    title: {
      normalText: "Student ",
      highlightedText: "AI Suite",
    },
    description:
      "Graduate career‑ready with our all‑in‑one AI toolkit. Craft a standout résumé, optimize your LinkedIn profile, connect with industry mentors, and receive personalized career and job recommendations—everything you need to thrive in an AI‑driven job market.",
    backgroundClass: "bg-main-bg",
  },
  sections: {
    // Feature Cards Section
    featureCards: {
      heading: "Students Career Suite",
      cards: [
        {
          id: "ontrack-careers",
          icon: "users",
          title: "OnTrack Careers for Students",
          subtitle: "Your Personalized AI Career Compass",
          points: [
            "Based on your academic background, skills, and interests",
            "Personalized job recommendations",
            "Connect with Industry Mentors",
            "Prepare for Interviews",
          ],
          buttonText: "Try Career Assessment Tool",
          buttonLink: "/tools/career-assessment",
        },
        {
          id: "resume-optimizer",
          icon: "file",
          title: "Resume Optimizer Agent",
          subtitle: "Build Perfect Resume In Minutes",
          points: [
            "AI crafted resume builder for entry-level positions",
            "Real-time tips to improve content and structure",
            "ATS-friendly formatting for higher success",
          ],
          buttonText: "Try Resume Assistant",
          buttonLink: "/tools/resume-assistant",
        },
        {
          id: "linkedin-optimizer",
          icon: "linkedin",
          title: "LinkedIn Profile Optimizer",
          subtitle: "Stand Out Online Presence",
          points: [
            "AI-driven suggestions for compelling profiles",
            "Increase visibility and recruiter engagement",
            "Learn what top profiles in your field use",
          ],
          buttonText: "Try LinkedIn Profile Optimizer",
          buttonLink: "/tools/linkedin-optimizer",
        },
      ],
      backgroundColor: "bg-pink-50",
    },
    // Main Section
    main: {
      heading: [
        { text: "Launch Your Career Path with " },
        { text: "AI-driven Solutions", highlight: true },
      ],
      description:
        "Our AI-powered platform analyzes your skills, interests, and academic background to provide personalized career recommendations and job matching. Get started on your career journey with confidence.",
      imageSrc: "/static/assets/solutions/textimage.png",
      imageAlt: "Student using AI career platform",
      imageOnRight: true,
    },
    // Features Section
    features: {
      heading: [
        { text: "AI-Powered " },
        { text: "Resume Building", highlight: true },
        { text: " & Optimization" },
      ],
      description:
        "Our intelligent resume builder analyzes job descriptions and optimizes your resume to match the requirements. Stand out from the crowd with a perfectly tailored resume for each position you apply to.",
      imageSrc: "/static/assets/solutions/student-features.jpg",
      imageAlt: "AI resume optimization interface",
      imageOnRight: false,
      bgColor: "bg-gray-50",
    },
    // Benefits Section
    benefits: {
      heading: [
        { text: "Connect with " },
        { text: "Industry Mentors", highlight: true },
      ],
      description:
        "Our AI matching system connects you with industry professionals who can provide guidance, feedback, and networking opportunities. Learn from experienced mentors who have walked the path you're about to take.",
      imageSrc: "/static/assets/solutions/student-benefits.jpg",
      imageAlt: "Student connecting with industry mentor",
      imageOnRight: true,
    },
    // Articles Section
    articles: articlesData,
    // Tabbed Tools Section - Updated with consistent image paths
    tabbedTools: {
      tabs: [
        {
          title: "OnTrack Careers for Students",
          content: {
            heading: [
              { text: "OnTrack Career Solutions " },
              { text: "for Students", highlight: true },
            ],
            description:
              "Navigate your early career journey with confidence using our AI-powered student career platform. Get personalized recommendations based on your academic background, skills, and career aspirations.",
            // Using the same textimage.png that works in professional tabs
            imageSrc: "/static/assets/solutions/textimage.png",
            imageAlt: "OnTrack Careers for Students",
            imageOnRight: false,
            bulletPoints: [
              "Academic-to-career pathway mapping",
              "Entry-level job opportunity matching",
              "Internship and co-op recommendations",
              "Career exploration based on your course preferences",
            ],
          },
        },
        {
          title: "Resume Optimizer Agent",
          content: {
            heading: [
              { text: "Perfect Your " },
              { text: "First Resume", highlight: true },
            ],
            description:
              "Build an impressive resume even with limited work experience. Our AI helps you highlight academic projects, coursework, and extracurricular activities that showcase your skills and potential to employers.",
            imageSrc: "/static/assets/solutions/textimage.png",
            imageAlt: "Resume Optimizer for Students",
            imageOnRight: false,
            bulletPoints: [
              "Entry-level resume templates and guidance",
              "Academic achievements highlighting",
              "Transferable skills identification",
              "Action verb and impact statement suggestions",
            ],
          },
        },
        {
          title: "LinkedIn Profile Builder",
          content: {
            heading: [
              { text: "Build Your " },
              { text: "Professional Brand", highlight: true },
            ],
            description:
              "Start building your professional network with a compelling LinkedIn profile tailored for students and recent graduates. Our AI helps you create a presence that attracts recruiters and industry connections.",
            // Using the same textimage.png that works in professional tabs
            imageSrc: "/static/assets/solutions/textimage.png",
            imageAlt: "LinkedIn Profile Builder for Students",
            imageOnRight: false,
            bulletPoints: [
              "Student-focused profile optimization",
              "Educational background highlighting",
              "Project and course showcasing strategy",
              "Connection and networking recommendations",
            ],
          },
        },
      ],
    },
    comingSoon: {
      title: "Student AI Platform Coming Soon",
      description:
        "We're working on powerful AI tools designed specifically for students. Sign up to be notified when we launch and get exclusive early access.",
      targetDate: new Date("2025-07-15T00:00:00"), // July 15, 2025
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
    title: "AI Solutions for Students | FullSpan AI",
    description:
      "Jumpstart your career with AI-powered tools for resume building, career guidance, and job recommendations tailored for students.",
    ogImage: "/static/assets/og/students-og.jpg",
  },
};
