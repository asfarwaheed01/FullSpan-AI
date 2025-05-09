import { ArticlesSectionProps } from "./articles";
import { ComingSoonSection } from "./CommingSoonSection";
import { FAQsSection } from "./faqs";
import { FeatureCardsProps } from "./featureCards";
import { TabbedSectionProps } from "./tabbedSection";
import { TextWithImageProps } from "./testWithImage";

// Interface for the main hero section
export interface SolutionHeroProps {
  title: {
    normalText: string;
    highlightedText: string;
  };
  description: string;
  backgroundClass?: string;
}

// Interface for the complete solution page data
export interface SolutionPageData {
  slug: string;
  hero: SolutionHeroProps;
  sections: {
    main?: TextWithImageProps;
    features?: TextWithImageProps;
    benefits?: TextWithImageProps;
    featureCards?: FeatureCardsProps;
    articles: ArticlesSectionProps;
    tabbedTools?: TabbedSectionProps;
    comingSoon?: ComingSoonSection;
    faqs?: FAQsSection;
  };
  meta: {
    title: string;
    description: string;
    ogImage?: string;
  };
}
