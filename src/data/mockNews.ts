import { NewsArticle } from '../types';

export const mockArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'تطورات سياسية متسارعة في السودان نحو تسوية وطنية شاملة',
    excerpt: 'تحركات سياسية مكثفة تهدف إلى التوصل لاتفاق شامل ينهي الأزمة الراهنة.',
    content: 'تشهد الساحة السياسية السودانية حراكاً دبلوماسياً واسعاً بين القوى المختلفة.',
    category: 'politics',
    author: 'أحمد السوداني',
    publishDate: '2024-05-15',
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800',
    isTrending: true,
  },
  {
    id: '2',
    title: 'تقرير اقتصادي: مؤشرات إيجابية لتعافي الجنيه السوداني',
    excerpt: 'سجل الجنيه السوداني استقراراً نسبياً خلال الفترة الأخيرة.',
    content: 'يشهد الاقتصاد السوداني بعض مؤشرات الاستقرار بعد حزمة من الإجراءات.',
    category: 'economy',
    author: 'سارة محمد',
    publishDate: '2024-05-14',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'الرياضة: المنتخب الوطني يستعد لمباراة حاسمة في التصفيات القارية',
    excerpt: 'استعدادات مكثفة للمنتخب السوداني لخوض المواجهة القادمة.',
    content: 'يدخل المنتخب الوطني معسكراً تدريبياً مغلقاً لرفع الجاهزية الفنية والبدنية.',
    category: 'sports',
    author: 'مراسل رياضي',
    publishDate: '2024-05-14',
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'قمة أفريقية لبحث دعم الاستقرار في السودان',
    excerpt: 'اجتماع إقليمي مهم في أديس أبابا.',
    content: 'تفاصيل القمة ودورها في دعم السلام.',
    category: 'international',
    author: 'مراسل دولي',
    publishDate: '2024-05-13',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    title: 'التعليم في السودان بين التحديات وآمال الإصلاح',
    excerpt: 'إصلاح التعليم أولوية وطنية.',
    content: 'تحديات العملية التعليمية وآفاق التطوير المستقبلي.',
    category: 'opinion',
    author: 'د. عبدالله خالد',
    publishDate: '2024-05-12',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
  }
];

export const breakingNews = [
  'عاجل: بدء مشاورات سياسية جديدة في الخرطوم.',
  'الاقتصاد: تحسن طفيف في سعر الصرف.',
  'الصحة: استقرار الأوضاع الصحية.',
  'الرياضة: المنتخب يستعد لمباراة حاسمة.',
];
