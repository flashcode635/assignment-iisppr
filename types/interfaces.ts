export interface AudienceCardProps {
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ReactNode;
}

export interface StepDetail {
  number: string;
  title: string;
  focus: string;
  details: string;
}

export interface Phase {
  title: string;
  description: string;
  steps: StepDetail[];
}