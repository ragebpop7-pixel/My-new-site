import { useParams, Link } from 'react-router-dom';
import { mockArticles } from '../data/mockNews';
import { Calendar, User, Share2, Printer, MessageSquare, ArrowRight, Facebook, Send as WhatsApp, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import ArticleCard from '../components/ArticleCard';
import React from 'react';

export default function Article() {
  const { id } = useParams();
  const article = mockArticles.find(a => a.id === id) || mockArticles[0];
  const relatedArticles = mockArticles.filter(a => a.id !== article.id).slice(0, 3);

  const shareUrl = window.location.href;
  const shareTitle = article.title;

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <main className="min-h-screen pb-20 bg-white relative">
      {/* Floating Share Bar - Desktop */}
      <div className="hidden lg:flex flex-col gap-4 fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <button 
          onClick={shareOnFacebook}
          className="p-3 bg-[#1877F2] text-white rounded-full shadow-lg hover:scale-110 transition-transform"
          title="شارك على فيسبوك"
        >
          <Facebook size={24} />
        </button>
        <button 
          onClick={shareOnTwitter}
          className="p-3 bg-[#000000] text-white rounded-full shadow-lg hover:scale-110 transition-transform"
          title="شارك على تويتر"
        >
          <Twitter size={24} />
        </button>
        <button 
          onClick={shareOnWhatsApp}
          className="p-3 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform"
          title="شارك على واتساب"
        >
          <WhatsApp size={24} />
        </button>
      </div>

      {/* Sticky Mobile Share Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-100 p-3 z-50 flex gap-3 shadow-2xl">
        <button 
          onClick={shareOnWhatsApp}
          className="flex-[2] flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-2xl text-sm font-black active:scale-95 transition-transform"
        >
          <WhatsApp size={20} />
          <span>واتساب</span>
        </button>
        <button 
          onClick={shareOnFacebook}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 bg-[#1877F2] text-white rounded-2xl text-xs font-black active:scale-95 transition-transform"
        >
          <Facebook size={20} />
        </button>
        <button 
          onClick={shareOnTwitter}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 bg-black text-white rounded-2xl text-xs font-black active:scale-95 transition-transform"
        >
          <Twitter size={20} />
        </button>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-red font-bold text-sm mb-8 transition-colors">
          <ArrowRight size={18} />
          العودة للرئيسية
        </Link>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-6 mb-12"
          >
            <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-black self-start uppercase tracking-wider">
              {article.category === 'politics' ? 'سياسة' : 
               article.category === 'economy' ? 'اقتصاد' : 
               article.category === 'society' ? 'مجتمع' : 
               article.category === 'international' ? 'عالمي' : 'رأي'}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
              {article.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-slate-500 leading-relaxed italic border-r-4 border-rose-600 pr-6">
              {article.excerpt}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 border-y border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${article.author}`} alt={article.author} referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900">{article.author}</h4>
                  <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.publishDate}</span>
                    <span className="flex items-center gap-1"><MessageSquare size={12} /> 24 تعليق</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:flex items-center gap-2 text-slate-400">
                <button className="p-2.5 bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl">
                  <Printer size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          <div className="mb-12">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-auto rounded-3xl shadow-xl"
              referrerPolicy="no-referrer"
            />
            <p className="mt-4 text-xs font-bold text-slate-400 text-center">المصدر: رويترز - صورة تعبيرية للمشهد في الخرطوم</p>
          </div>

          <div className="prose prose-slate prose-lg md:prose-xl max-w-none prose-p:font-medium prose-p:leading-relaxed prose-headings:font-black pr-[2px]">
            <div className="text-slate-800 space-y-6">
              {article.content.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p>
                وفي سياق متصل، أكدت الجهات المعنية أن العمل جارٍ لتحسين البنية التحتية وتوفير الخدمات الأساسية للمواطنين، مشيرة إلى أن التحديات الراهنة تتطلب تكاتف كافة القوى الوطنية للعبور بالبلاد إلى بر الأمان.
              </p>
              <blockquote className="bg-slate-50 p-8 rounded-3xl border-r-8 border-rose-600 font-bold text-2xl text-slate-900 leading-snug my-12 italic">
                "إن الطريق نحو الاستقرار في السودان يبدأ من الحوار الصادق والعمل المشترك من أجل مصلحة الوطن فوق كل اعتبار."
              </blockquote>
              <p>
                ومن المتوقع أن تشهد الأيام المقبلة مزيداً من الإعلانات حول حزم اقتصادية جديدة تهدف لدعم الفئات الأكثر تضرراً وتنشيط عجلة الإنتاج في القطاع الزراعي والصناعي.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-slate-100">
            <h3 className="text-2xl font-black mb-8">مقالات ذات صلة</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.id} article={rel} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
