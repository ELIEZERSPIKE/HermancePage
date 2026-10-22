export interface Product {
  id: string;
  name: string;
  category: 'perfumes' | 'bolsos';
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  avatar: string;
  verified: boolean;
}

export interface GuideItem {
  id: string;
  title: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
}

export interface QuizQuestion {
  questionNumber: number;
  totalQuestions: number;
  title: string;
  subtitle?: string;
  options: { label: string; value: string; desc?: string }[];
}
