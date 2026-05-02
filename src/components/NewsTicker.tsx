import { breakingNews } from '../data/mockNews';

export default function NewsTicker() {
  return (
    <div className="bg-brand-red text-white h-10 flex items-center overflow-hidden relative border-b border-brand-red-dark" dir="rtl">
      <div className="absolute right-0 top-0 h-full bg-brand-red-dark px-4 flex items-center z-10 font-bold text-sm shadow-lg whitespace-nowrap">
        عاجل
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="breaking-news-scroll flex gap-12 px-4 text-sm font-medium">
          {breakingNews.map((news, i) => (
            <span key={i} className="whitespace-nowrap hover:underline cursor-pointer">
              • {news}
            </span>
          ))}
          {/* Duplicate for infinite scroll feel if short */}
          {breakingNews.map((news, i) => (
            <span key={`dup-${i}`} className="whitespace-nowrap hover:underline cursor-pointer">
              • {news}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
