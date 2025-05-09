export interface FeatureCard {
  id: string;
  icon: string;
  title: string;
  subtitle?: string;
  description?: string;
  points?: string[];
  buttonText?: string;
  buttonLink?: string;
}

export interface FeatureCardsProps {
  heading: string;
  headingHighlight?: string;
  cards: FeatureCard[];
  backgroundColor?: string;
}

export interface FeatureCardComponentProps {
  card: FeatureCard;
}
