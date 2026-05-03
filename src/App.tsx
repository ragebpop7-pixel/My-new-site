import { useEffect, useState } from 'react'

interface Article {
  title: string;
  description: string;
  image: string;
  url: string;
  source: { name: string };
}

function App() {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    const apiKey = '8b71de9459274d41009995b252265efa';
    const url = `https://gnews.io/api/v4/search?q=السودان+أفريقيا&lang=ar&max=10&apikey=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.articles) setNews(data.articles);
      })
      .catch(err => console.error("Error fetching news:", err));
  }, []);

  return (
    <div style={{ padding: '20px', direction: 'rtl', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>آخر أخبار أفريقيا والسودان</h2>
      
      <div id="news-container" style={{ marginTop: '20px' }}>
        {news.length === 0 ? (
          <p style={{ textAlign: 'center' }}>جاري تحميل الأخبار...</p>
        ) : (
          news.map((article, index) => (
            <div key={index} style={{ background: 'white', borderRadius: '12px', marginBottom: '15px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <img src={article.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <small style={{ color: '#e91e63' }}>{article.source.name}</small>
                <h3 style={{ margin: '10px 0', fontSize: '18px' }}>{article.title}</h3>
                <p style={{ fontSize: '14px', color: '#666' }}>{article.description}</p>
                <a href={article.url} target="_blank" style={{ color: '#e91e63', fontWeight: 'bold', textDecoration: 'none' }}>إقرأ المزيد ←</a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App
