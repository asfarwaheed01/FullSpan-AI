export interface FAQsSection {
  title: string;
  faqs: FAQItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
