// Sanity CMS Types
export interface SanityImage {
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  publishedAt: string;
  mainImage?: SanityImage;
  category?: Category;
  body?: any[]; // PortableText content
}

export interface Case {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  summary?: string;
  publishedAt?: string;
  location?: string;
  status?: string;
  loanAmount?: string;
  termMonths?: number;
  yieldAnnual?: number;
  cushion?: number;
  coverImage?: SanityImage;
  body?: any[]; // PortableText content
}

export interface FAQItem {
  _id: string;
  question: string;
  answer: any[]; // PortableText content
}

export interface Author {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image?: SanityImage;
  bio?: any[]; // PortableText content
}
