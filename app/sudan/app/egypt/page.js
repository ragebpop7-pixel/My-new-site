"use client"; 

import { useEffect } from 'react';

export default function NewsPage() {
  useEffect(() => {
    // دالة جلب الأخبار
    const fetchNews = async () => {
      const apiKey = '8b71de9459274d41009995b252265efa';
      const url = `https://gnews.io/api/v4/search?q=السودان+أفريقيا&lang=ar&max=10&apikey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        const container = document.getElementById('news-container');

        if (container && data.articles) {
          container.innerHTML = data.articles.map(article => `
            <div style="background:white; border-radius:12px; margin-bottom:15px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1); direction:rtl;">
              <img src="${article.image}" style="width:100%; height:180px; object-fit:cover;">
              <div style="padding:12px;">
                <h3 style="font-size:16px; margin:0 0 8px 0; color:#333;">${article.title}</h3>
                <p style="font-size:13px; color:#666; margin-bottom:10px;">${article.description.substring(0, 100)}...</p>
                <a href="${article.url}" target="_blank" style="color:#e91e63; text-decoration:none; font-weight:bold; font-size:14px;">إقرأ المزيد ←</a>
              </div>
            </div>
          `).join('');
        }
      } catch (error) {
        console.error("خطأ في التحميل:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div style={{ padding: '10px', backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* هنا المساحة اللي كانت بيضاء في الصورة */}
      <div id="news-container">
        <p style={{ textAlign: 'center', color: '#999', marginTop: '20px' }}>جاري تحميل أخبار أفريقيا...</p>
      </div>
      
      <div style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #eee', marginTop: '10px' }}>
        <button style={{ color: '#e91e63', background: 'none', border: 'none', fontWeight: 'bold', fontSize: '16px' }}>
          مشاهدة الكل
        </button>
      </div>
    </div>
  );
}
