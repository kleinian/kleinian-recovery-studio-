export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SolutionCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  index: number;
}
