// دالة لجلب الأخبار
function loadNews() {
  const apiKey = '8b71de9459274d41009995b252265efa';
  const url = `https://gnews.io/api/v4/search?q=السودان+أفريقيا&lang=ar&country=any&max=10&sortby=publishedAt&apikey=${apiKey}`;

  const container = document.getElementById('news-container');
  if (!container) return; // لو مش موجود العنصر ميعملش حاجة

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.articles && data.articles.length > 0) {
        container.innerHTML = data.articles.map(article => `
          <div class="news-card" style="background:white; border-radius:12px; margin-bottom:20px; overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,0.1); direction:rtl; text-align:right;">
            <img src="${article.image}" style="width:100%; height:200px; object-fit:cover;">
            <div style="padding:15px;">
              <small style="color:red; font-weight:bold;">${article.source.name}</small>
              <h3 style="margin:10px 0; font-size:18px;">${article.title}</h3>
              <p style="font-size:14px; color:#666;">${article.description}</p>
              <a href="${article.url}" target="_blank" style="color:#007bff; text-decoration:none; font-weight:bold;">إقرأ المزيد</a>
            </div>
          </div>
        `).join('');
      } else {
        container.innerHTML = "لا توجد أخبار حالياً.";
      }
    })
    .catch(error => {
      console.error('Error:', error);
      container.innerHTML = "حدث خطأ أثناء تحميل الأخبار.";
    });
}

// تشغيل الدالة بمجرد تحميل الصفحة
window.onload = loadNews;
