export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  content?: string[];
  bullets?: { title?: string; text: string }[];
  visualType?: 'none' | 'venn' | 'split-image' | 'flow' | 'grid' | 'timeline' | 'checklist' | 'chart' | 'comparison' | 'carousel';
  visualMeta?: any; // Flexible metadata for visuals
  layout: 'title' | 'standard' | 'split' | 'center' | 'grid';
  footer?: string;
  link?: string;
}

export interface NavigationState {
  currentIndex: number;
  totalSlides: number;
}