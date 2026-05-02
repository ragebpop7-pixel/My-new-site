import { mockArticles } from '../data/mockNews';
import ArticleCard from './ArticleCard';

export default function TrendingSection() {
  const trending = mockArticles.slice(0, 4);

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-6 h-full flex flex-col shadow-sm">
      <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-2">
        <h2 className="text-lg font-bold text-slate-900">الأكثر قراءة</h2>
        <span className="text-rose-600 text-xl font-black">#</span>
      </div>
      <div className="space-y-4 overflow-hidden flex-1">
        {trending.map((article, i) => (
          <div key={article.id} className="flex space-x-reverse space-x-3 group cursor-pointer">
            <span className="text-slate-200 text-3xl font-black group-hover:text-rose-600 transition-colors">
              0{i + 1}
            </span>
            <div className="flex-1">
              <ArticleCard article={article} variant="compact" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-slate-100">
        <button className="w-full text-center text-rose-600 text-sm font-bold hover:underline">
          مشاهدة الكل
        </button>
      </div>
    </section>
  );
}
