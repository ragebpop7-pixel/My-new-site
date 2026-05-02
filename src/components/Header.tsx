import { Search, Menu, User, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white pt-6 pb-4 border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-slate-100 rounded-full lg:hidden text-brand-blue"
            >
              <Menu size={24} />
            </button>
            <button className="hidden lg:flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 text-slate-700">
              <Search size={18} />
              <span>بحث</span>
            </button>
          </div>

          <Link to="/" className="flex items-center group">
            <span className="text-3xl md:text-4xl font-black text-brand-blue tracking-tighter transition-colors group-hover:text-brand-red">
              سودان
            </span>
            <span className="text-3xl md:text-4xl font-black text-brand-red tracking-tighter ml-1">
              ٢٤
            </span>
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="flex items-center gap-1 md:gap-2 text-sm font-bold text-slate-700 hover:text-brand-blue">
              <Globe size={18} />
              <span className="hidden md:inline">EN</span>
            </button>
            <Link to="/subscribe" className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white rounded-lg text-sm font-bold shadow-lg hover:bg-brand-red transition-all active:scale-95">
              <span>اشترك الآن</span>
            </Link>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
