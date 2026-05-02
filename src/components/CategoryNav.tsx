import { Link, useLocation } from 'react-router-dom';
import { Category } from '../types';
import { cn } from '../lib/utils';

const categories: { id: Category; label: string }[] = [
  { id: 'politics', label: 'سياسة' },
  { id: 'economy', label: 'اقتصاد' },
  { id: 'society', label: 'مجتمع' },
  { id: 'international', label: 'عالمي' },
  { id: 'opinion', label: 'رأي' },
];

export default function CategoryNav() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentCategory = searchParams.get('category');

  return (
    <nav className="bg-white border-y border-slate-200 sticky top-0 z-40">
      <div className="container mx-auto px-4 overflow-x-auto flex items-center justify-between no-scrollbar">
        <div className="flex space-x-1 space-x-reverse py-3">
          <Link
            to="/"
            className={cn(
              "px-4 py-1 pb-2 text-sm font-semibold transition-colors whitespace-nowrap border-b-2",
              !currentCategory ? "text-brand-red border-brand-red" : "text-slate-600 border-transparent hover:text-brand-blue"
            )}
          >
            الرئيسية
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/?category=${cat.id}`}
              className={cn(
                "px-4 py-1 pb-2 text-sm font-semibold transition-colors whitespace-nowrap border-b-2",
                currentCategory === cat.id ? "text-brand-red border-brand-red" : "text-slate-600 border-transparent hover:text-brand-blue"
              )}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center text-xs text-slate-400 font-medium whitespace-nowrap">
          {new Date().toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
    </nav>
  );
}
