import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { mockArticles } from '../data/mockNews';
import ArticleCard from '../components/ArticleCard';
import TrendingSection from '../components/TrendingSection';
import Newsletter from '../components/Newsletter';
import CategoryNav from '../components/CategoryNav';
import { motion } from 'motion/react';
import React from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryFilter = searchParams.get('category');

  const filteredArticles = mockArticles.filter(a => {
    const matchCategory = categoryFilter ? a.category === categoryFilter : true;

    const matchSearch =
      a.title.includes(searchTerm) ||
      a.excerpt.includes(searchTerm);

    return matchCategory && matchSearch;
  });

  const mainStory = filteredArticles[0];
  const sideStories = filteredArticles.slice(1, 3);
  const feedStories = filteredArticles.slice(0, 8);

  return (
    <main className="min-h-screen pb-20">
      <CategoryNav />

      {/* 🔍 SEARCH BAR */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="ابحث في الأخبار..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="container mx-auto px-4 py-8">              <button className="px-10 py-4 bg-brand-blue hover:bg-brand-red text-white rounded-2xl font-black shadow-xl transition-all active:scale-95">
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
