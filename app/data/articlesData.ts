import { ArticlesSectionProps } from "../types/articles";

export const articlesData: ArticlesSectionProps = {
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
