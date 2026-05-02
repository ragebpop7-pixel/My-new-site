import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { id: 'politics', label: 'سياسة' },
  { id: 'economy', label: 'اقتصاد' },
  { id: 'society', label: 'مجتمع' },
  { id: 'international', label: 'عالمي' },
  { id: 'opinion', label: 'رأي' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white z-[101] lg:hidden shadow-2xl flex flex-col pt-20"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 left-6 p-2 hover:bg-slate-100 rounded-full text-slate-500"
            >
              <X size={24} />
            </button>

            <div className="px-6 mb-8">
               <div className="flex items-center">
                <span className="text-2xl font-black text-brand-blue tracking-tighter">
                  سودان
                </span>
                <span className="text-2xl font-black text-brand-red tracking-tighter">
                  ٢٤
                </span>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 pb-8 space-y-1">
              <Link
                to="/"
                onClick={onClose}
                className="flex items-center justify-between w-full p-4 text-lg font-bold text-slate-900 hover:bg-slate-50 hover:text-brand-red rounded-xl transition-colors"
              >
                <span>الرئيسية</span>
                <ChevronLeft size={20} className="opacity-30" />
              </Link>

              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/?category=${cat.id}`}
                  onClick={onClose}
                  className="flex items-center justify-between w-full p-4 text-lg font-bold text-slate-900 hover:bg-slate-50 hover:text-brand-red rounded-xl transition-colors"
                >
                  <span>{cat.label}</span>
                  <ChevronLeft size={20} className="opacity-30" />
                </Link>
              ))}

              <div className="pt-8 mt-8 border-t border-slate-100 space-y-6 px-4">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">تواصل معنا</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                    <Phone size={18} className="text-brand-red" />
                    <span>+249 123 456 789</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                    <Mail size={18} className="text-brand-red" />
                    <span>info@sudan24.com</span>
                  </div>
                </div>
              </div>
            </nav>

            <div className="p-6 bg-slate-50 border-t border-slate-100">
              <Link 
                to="/subscribe" 
                onClick={onClose}
                className="w-full flex items-center justify-center py-4 bg-brand-blue text-white rounded-xl font-black text-lg shadow-lg hover:bg-brand-red transition-colors"
              >
                اشترك الآن
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
