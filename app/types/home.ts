export interface Stat {
  value: string;
  label: string;
}

export interface DashboardSectionProps {
  tag: string;
  heading: string;
  description: string;
  image: string;
  stats: Stat[];
}
