
import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  size?: 'normal' | 'large';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TimelineItem {
  step: string;
  title: string;
  description: string;
  align: 'left' | 'right';
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}
