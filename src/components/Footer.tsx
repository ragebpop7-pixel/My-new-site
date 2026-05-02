import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-black text-white tracking-tighter mb-1">
                سودان
              </span>
              <span className="text-2xl font-black text-rose-600 tracking-tighter mb-1">
                ٢٤
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              المؤسسة الإعلامية الرائدة في السودان، نسعى لتقديم الخبر بكل شفافية وموضوعية ونقل صوت المواطن السوداني للعالم.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:text-rose-600 transition-colors text-slate-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:text-rose-600 transition-colors text-slate-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:text-rose-600 transition-colors text-slate-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:text-rose-600 transition-colors text-slate-400">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">الأقسام</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/?category=politics" className="hover:text-rose-600 transition-colors font-semibold">أخبار السياسة</Link></li>
              <li><Link to="/?category=economy" className="hover:text-rose-600 transition-colors font-semibold">الاقتصاد والأعمال</Link></li>
              <li><Link to="/?category=society" className="hover:text-rose-600 transition-colors font-semibold">مجتمع وثقافة</Link></li>
              <li><Link to="/?category=international" className="hover:text-rose-600 transition-colors font-semibold">أخبار العالم</Link></li>
              <li><Link to="/?category=opinion" className="hover:text-rose-600 transition-colors font-semibold">مقالات الرأي</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">عن المؤسسة</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-rose-600 transition-colors font-semibold">من نحن</Link></li>
              <li><Link to="/careers" className="hover:text-rose-600 transition-colors font-semibold">فرص العمل</Link></li>
              <li><Link to="/advertising" className="hover:text-rose-600 transition-colors font-semibold">أعلن معنا</Link></li>
              <li><Link to="/privacy" className="hover:text-rose-600 transition-colors font-semibold">سياسة الخصوصية</Link></li>
              <li><Link to="/contact" className="hover:text-rose-600 transition-colors font-semibold">اتصل بنا</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">تواصل معنا</h3>
            <p className="text-sm mb-4">اشترك في نشرتنا البريدية لتصلك آخر المستجدات</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-slate-800 border-none rounded-r-lg px-4 py-3 text-sm flex-1 outline-none focus:ring-1 focus:ring-rose-500"
              />
              <button className="bg-rose-600 text-white px-4 py-3 rounded-l-lg hover:bg-rose-700 transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-semibold">جميع الحقوق محفوظة © {new Date().getFullYear()} نبض السودان</p>
          <div className="flex gap-6 text-xs font-semibold">
            <a href="#" className="hover:text-white">شروط الاستخدام</a>
            <a href="#" className="hover:text-white">خريطة الموقع</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
