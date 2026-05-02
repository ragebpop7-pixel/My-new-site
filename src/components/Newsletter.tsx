import { motion } from 'motion/react';
import { Mail, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-rose-600 rounded-full opacity-10"></div>
      
      <div className="max-w-2xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">النشرة الإخبارية</h2>
        <p className="text-slate-400 text-lg mb-8 font-medium leading-relaxed">
          اشترك للحصول على أهم الأخبار والتحليلات اليومية مباشرة في بريدك الإلكتروني.
        </p>
        
        {!subscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              required
              placeholder="البريد الإلكتروني" 
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all flex-1"
            />
            <button className="bg-rose-600 py-3 px-8 rounded-lg font-bold text-sm shadow-lg hover:bg-rose-500 transition-colors">
              اشتراك الآن
            </button>
          </form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 bg-slate-800 p-6 rounded-xl border border-slate-700"
          >
            <CheckCircle2 size={32} className="text-rose-500" />
            <div>
              <h4 className="text-xl font-bold">تم الاشتراك بنجاح!</h4>
              <p className="text-sm font-medium text-slate-400">ستصلك أول نشرة بريدية قريباً.</p>
            </div>
          </motion.div>
        )}
        
        <p className="mt-6 text-[10px] text-slate-500 font-bold">
          * بالاشتراك أنت توافق على سياسة الخصوصية الخاصة بنا. نلتزم بحماية بياناتك.
        </p>
      </div>
    </section>
  );
}
