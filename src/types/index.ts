export interface ServiceItem {
  id: string;
  categoryId: string;
  categoryName: string;
  title: string;
  description: string;
  icon: string;
  tags?: string[];
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: ServiceItem[];
}

export interface PackageTier {
  id: 'starter' | 'growth' | 'premium';
  name: string;
  badge?: string;
  tagline: string;
  targetAudience: string;
  pricingDisplay: string;
  priceNote: string;
  isPopular?: boolean;
  features: string[];
  recommendedFor: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  clientType: string;
  description: string;
  deliverables: string[];
  outcomeHighlight: string;
  imageUrl: string;
  isSamplePlaceholder: boolean;
}

export interface TestimonialItem {
  id: string;
  clientRole: string;
  businessType: string;
  feedback: string;
  highlight: string;
  isSamplePlaceholder: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  details: string[];
}

export interface WhyAyeshaCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  whatsappNumber: string;
  service: string;
  message: string;
  timestamp: string;
}
