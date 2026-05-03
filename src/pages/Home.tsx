import { useState, useMemo } from 'react'; // أضفنا useMemo للأداء
import { useLocation, Link } from 'react-router-dom';
import { mockArticles } from '../data/mockNews';
import ArticleCard from '../components/ArticleCard';
import TrendingSection from '../components/TrendingSection';
import Newsletter from '../components/Newsletter';
import CategoryNav from '../components/CategoryNav';
import { motion } from 'framer-motion'; // التصحيح هنا

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryFilter = searchParams.get('category');

  // استخدام useMemo لتحسين الأداء عند الكتابة في البحث
  const filteredArticles = useMemo(() => {
    return mockArticles.filter((a) => {
      const matchCategory = categoryFilter ? a.category === categoryFilter : true;
      const matchSearch =
        a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [searchTerm, categoryFilter]);

  // تقسيم المقالات بذكاء لمنع التكرار
  const mainStory = filteredArticles[0];
  const sideStories = filteredArticles.slice(1, 4); // خذ المقالات 2 و 3 و 4 للجانب
  const feedStories = filteredArticles.slice(4, 12); // ابدأ الـ Feed من المقالة رقم 5

  return (
    <main className="min-h-screen pb-20 bg-gray-50"> {/* أضفنا خلفية خفيفة للتباين */}
      <CategoryNav />

      {/* 🔍 SEARCH BAR */}
      <div className="mb-6 flex justify-center px-4 mt-6">
        <input
          type="text"
          placeholder="ابحث في الأخبار..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        {filteredArticles.length > 0 ? (
          <>
            {/* HERO SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              {/* MAIN STORY */}
              <div className="lg:col-span-8">
                {mainStory && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group relative"
                  >
                    <Link to={`/article/${mainStory.id}`}>
                      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl mb-6 shadow-2xl">
                        <img
                          src={mainStory.imageUrl}
                          alt={mainStory.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 p-6 md:p-10 text-white w-full text-right" dir="rtl">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                              خبر رئيسي
                            </span>
                            <span className="text-white/70 text-xs">
                              {mainStory.publishDate}
                            </span>
                          </div>
                          <h1 className="text-2xl md:text-5xl font-black leading-tight group-hover:text-red-400 transition-colors">
                            {mainStory.title}
                          </h1>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* SIDE STORIES */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                {sideStories.map((article) => (
                  <div key={article.id} className="bg-white p-2 rounded-2xl shadow-sm border hover:shadow-md transition">
                    <ArticleCard article={article} variant="horizontal" />
                  </div>
                ))}
              </div>
            </div>

            {/* LATEST NEWS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-8">
                <div className="flex items-center justify-between border-b-4 border-blue-600 pb-2 mb-8">
                  <h2 className="text-2xl font-black text-blue-900">أحدث الأخبار</h2>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  {feedStories.map((article) => (
                    <ArticleCard key={article.id} article={article} variant="horizontal" />
                  ))}
                </div>
              </div>

              {/* SIDEBAR */}
              <aside className="lg:col-span-4 space-y-10">
                <TrendingSection />
                <Newsletter />
              </aside>
            </div>
          </>
        ) : (
          /* حالة عدم وجود نتائج */
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-500">لا توجد أخبار تطابق بحثك...</h2>
          </div>
        )}
      </div>
    </main>
  );
}
