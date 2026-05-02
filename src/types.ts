export type Category = 'politics' | 'economy' | 'society' | 'international' | 'opinion';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  author: string;
  publishDate: string;
  imageUrl: string;
  isTrending?: boolean;
}
