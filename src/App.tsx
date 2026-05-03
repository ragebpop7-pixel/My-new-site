import { useEffect, useState } from 'react';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState('جاري تحميل الأخبار...');

  useEffect(() => {
    const fetchNews = async () => {
      // المفتاح بتاعك
      const apiKey = '8b71de9459274d41009995b252265efa';
      // الرابط - تأكد إنه HTTPS
      const url = `https://gnews.io/api/v4/search?q=السودان&lang=ar&max=5&apikey=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`خطأ من المصدر: ${response.status}`);
        
        const data = await response.json();
        
        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        } else {
          setStatus('لا توجد أخبار جديدة حالياً.');
        }
      } catch (error) {
        console.error(error);
        setStatus('فشل الاتصال.. تأكد من مفتاح الـ API أو الإنترنت.');
      }
    };

    fetchNews();
  }, []);

  return (
    <div style={{ direction: 'rtl', padding: '15px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#0056b3' }}>أخبار السودان العاجلة</h2>
      
      {articles.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>{status}</p>
      ) : (
        articles.map((art, index) => (
          <div key={index} style={{ borderBottom: '1px solid #ddd', padding: '15px 0' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>{art.title}</h3>
            <p style={{ fontSize: '13px', color: '#555' }}>{art.description?.substring(0, 80)}...</p>
            <a 
              href={art.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#e91e63', fontSize: '14px', fontWeight: 'bold', textDecoration: 'none' }}
            >
              إقرأ المزيد في {art.source.name} ←
            </a>
          </div>
        ))
      )}
    </div>
  );
}
