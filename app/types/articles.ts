export interface Article {
  id: string;
  tag: string;
  tag_color?: string;
  title: string;
  image: string;
  link: string;
}

export interface ArticlesSectionProps {
  heading: string;
  subheading: string;
  articles: Article[];
  viewAllLink?: string;
  viewAllText?: string;
}
