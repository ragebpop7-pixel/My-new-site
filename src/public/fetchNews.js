const apiKey = '8b71de9459274d41009995b252265efa';
// تأكد إن الرابط يبدأ بـ https وليس http
const url = `https://gnews.io/api/v4/search?q=السودان&lang=ar&max=10&apikey=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log("البيانات وصلت:", data);
    const container = document.getElementById('news-container');
    if (container && data.articles && data.articles.length > 0) {
      container.innerHTML = data.articles.map(article => `
        <div style="padding: 15px; border-bottom: 1px solid #eee; direction: rtl;">
          <h3 style="font-size: 16px;">${article.title}</h3>
          <a href="${article.url}" target="_blank" style="color: #e91e63;">إقرأ المزيد</a>
        </div>
      `).join('');
    } else {
      document.getElementById('news-container').innerHTML = "لا توجد أخبار حالياً.";
    }
  })
  .catch(error => {
    console.error('حدث خطأ:', error);
    document.getElementById('news-container').innerHTML = "فشل الاتصال بالمصدر.";
  });
