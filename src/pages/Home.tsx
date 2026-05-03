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

  const filteredArticles = mockArticles.filter((a) => {
    const matchCategory = categoryFilter ? a.category === categoryFilter : true;

    const matchSearch =
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  const mainStory = filteredArticles[0];
  const sideStories = filteredArticles.slice(1, 3);
  const feedStories = filteredArticles.slice(0, 8);

  return (
    <main className="min-h-screen pb-20">
      <CategoryNav />

      {/* 🔍 SEARCH BAR */}
      <div className="mb-6 flex justify-center px-4">
        <input
          type="text"
          placeholder="ابحث في الأخبار..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Premium Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Story */}
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
                        <span className="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-black uppercase shadow-lg">
                          خبر رئيسي
                        </span>
                        <span className="text-white/70 font-bold text-xs">
                          {mainStory.publishDate}
                        </span>
                      </div>

                      <h1 className="text-2xl md:text-5xl font-black leading-tight group-hover:text-brand-red transition-colors">
                        {mainStory.title}
                      </h1>

                      <p className="hidden md:block text-white/80 text-lg font-medium mt-4 line-clamp-2">
                        {mainStory.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Side Stories */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {sideStories.map((article) => (
              <div
                key={article.id}
                className="bg-white p-2 rounded-2xl shadow-sm border hover:shadow-md transition"
              >
                <ArticleCard article={article} variant="horizontal" />
              </div>
            ))}
          </div>
        </div>

        {/* Latest News */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-10">
            <div className="flex items-center justify-between border-b-4 border-brand-blue pb-2 mb-8">
              <h2 className="text-2xl font-black text-brand-blue">
                أحدث الأخبار
              </h2>
            </div>

            <div className="space-y-10">
              {feedStories.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  variant="horizontal"
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            <TrendingSection />
            <Newsletter />
          </aside>
        </div>
      </div>
    </main>
  );
                  }
