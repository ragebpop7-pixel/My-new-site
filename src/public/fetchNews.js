const apiKey = '8b71de9459274d41009995b252265efa';
// الرابط ده بيبحث عن السودان وأفريقيا باللغة العربية وبيرتبهم حسب الأحدث
const url = `https://gnews.io/api/v4/search?q=السودان+أفريقيا&lang=ar&country=any&max=10&sortby=publishedAt&apikey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('news-container');
    if (data.articles) {
      container.innerHTML = data.articles.map(article => `
        <div class="news-card">
          <img src="${article.image}" alt="${article.title}">
          <div style="padding:15px;">
            <small style="color:red;">${article.source.name}</small>
            <h3 style="margin:10px 0;">${article.title}</h3>
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
    document.getElementById('news-container').innerHTML = "حدث خطأ أثناء تحميل الأخبار.";
  });
