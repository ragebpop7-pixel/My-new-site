import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { mockArticles } from '../data/mockNews';
import ArticleCard from '../components/ArticleCard';
import TrendingSection from '../components/TrendingSection';
import Newsletter from '../components/Newsletter';
import CategoryNav from '../components/CategoryNav';
import { motion } from 'motion/react';
import React from 'react';

export default function Home(const [searchTerm, setSearchTerm] = useState('');) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryFilter = searchParams.get('category');

  const filteredArticles = categoryFilter 
    ? mockArticles.filter(a => a.category === categoryFilter)
    : mockArticles;

  const mainStory = filteredArticles[0];
  const sideStories = filteredArticles.slice(1, 3);
  const feedStories = filteredArticles.slice(0, 8);

  return (
    <main className="min-h-screen pb-20">
      <CategoryNav />

      <div className="container mx-auto px-4 py-8">
        {/* Premium Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Headline (8 cols) */}
          <div className="lg:col-span-8">
            {mainStory && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
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
                    <div className="absolute inset-0 gradient-overlay" />
                    <div className="absolute bottom-0 p-6 md:p-10 text-white w-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-black uppercase shadow-lg">خبر رئيسي</span>
                        <span className="text-white/70 font-bold text-xs">{mainStory.publishDate}</span>
                      </div>
                      <h1 className="text-2xl md:text-5xl font-black leading-tight group-hover:text-brand-red transition-colors">
                        {mainStory.title}
                      </h1>
                      <p className="hidden md:block text-white/80 text-lg font-medium leading-relaxed mt-4 line-clamp-2 max-w-3xl">
                        {mainStory.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Side Hero Stories (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {sideStories.map(article => (
              <div key={article.id} className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <ArticleCard article={article} variant="horizontal" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Latest Feed (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            <div className="flex items-center justify-between border-b-4 border-brand-blue pb-2 mb-8">
              <h2 className="text-2xl font-black text-brand-blue">أحدث الأخبار</h2>
              <button className="text-sm font-bold text-brand-red hover:underline transition-all">مشاهدة الكل</button>
            </div>
            
            <div className="space-y-10">
              {feedStories.map(article => (
                <ArticleCard key={article.id} article={article} variant="horizontal" />
              ))}
            </div>
            
            <div className="flex justify-center pt-8">
              <button className="px-10 py-4 bg-brand-blue hover:bg-brand-red text-white rounded-2xl font-black shadow-xl transition-all active:scale-95">
                تحميل المزيد من الأخبار
              </button>
            </div>
          </div>

          {/* Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-10">
            <TrendingSection />
            
            {/* Social Follow Widget */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-black mb-6 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-brand-red rounded-full" />
                تابعنا على منصاتنا
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="flex items-center justify-center gap-2 p-3 bg-slate-50 hover:bg-[#1877F2] hover:text-white rounded-xl transition-all font-bold text-sm">
                  <span>فيسبوك</span>
                </a>
                <a href="#" className="flex items-center justify-center gap-2 p-3 bg-slate-50 hover:bg-[#1DA1F2] hover:text-white rounded-xl transition-all font-bold text-sm">
                  <span>تويتر</span>
                </a>
                <a href="#" className="flex items-center justify-center gap-2 p-3 bg-slate-50 hover:bg-[#E4405F] hover:text-white rounded-xl transition-all font-bold text-sm">
                  <span>انستغرام</span>
                </a>
                <a href="#" className="flex items-center justify-center gap-2 p-3 bg-slate-50 hover:bg-[#FF0000] hover:text-white rounded-xl transition-all font-bold text-sm">
                  <span>يوتيوب</span>
                </a>
              </div>
            </div>

            <Newsletter />
          </aside>
        </div>
      </div>
    </main>
  );
}
