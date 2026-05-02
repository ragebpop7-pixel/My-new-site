import { Link } from 'react-router-dom';
import { NewsArticle } from '../types';
import { Calendar, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface ArticleCardProps {
  article: NewsArticle;
  variant?: 'horizontal' | 'vertical' | 'compact';
  key?: string | number;
}

export default function ArticleCard({ article, variant = 'vertical' }: ArticleCardProps) {
  const categoryLabels: Record<string, string> = {
    politics: 'سياسة',
    economy: 'اقتصاد',
    society: 'مجتمع',
    international: 'عالمي',
    opinion: 'رأي',
  };

  if (variant === 'horizontal') {
    return (
      <Link to={`/article/${article.id}`} className="group flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/3 aspect-[16/9] overflow-hidden rounded-xl">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:w-2/3 flex flex-col gap-3">
          <span className="text-rose-600 font-bold text-xs uppercase tracking-wider">
            {categoryLabels[article.category]}
          </span>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors leading-tight">
            {article.title}
          </h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold">
            <span className="flex items-center gap-1"><User size={14} /> {article.author}</span>
            <span className="flex items-center gap-1"><Calendar size={14} /> {article.publishDate}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={`/article/${article.id}`} className="group flex gap-4 items-center">
        <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h4>
          <span className="text-[10px] font-bold text-slate-400">
            {article.publishDate}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/article/${article.id}`} className="group flex flex-col gap-4">
      <div className="aspect-[16/10] overflow-hidden rounded-xl">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-rose-600 font-bold text-xs uppercase tracking-wider">
          {categoryLabels[article.category]}
        </span>
        <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors leading-snug line-clamp-2">
          {article.title}
        </h3>
        <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}
