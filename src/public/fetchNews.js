alert("السكربت شغال!");
const apiKey = '40a916fb34df43ea9776e1e50715663b';
const url = `// البحث هنا بيشمل كلمة "أفريقيا" أو أسماء دول أفريقية كبرى باللغة العربية
const url = `https://newsapi.org/v2/everything?q=(أفريقيا OR "شمال أفريقيا" OR "القرن الأفريقي")&sortBy=publishedAt&language=ar&apiKey=${apiKey}`;
}`;

async function getNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const articles = data.articles;

        let newsHtml = '';
        articles.forEach(article => {
            newsHtml += `
                <div class="news-card">
                    <img src="${article.urlToImage}" alt="خبر" style="width:100%">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.url}">اقرأ المزيد</a>
                </div>
            `;
        });
        document.getElementById('news-container').innerHTML = newsHtml;
    } catch (error) {
        console.error('حدث خطأ في جلب الأخبار:', error);
    }
}

getNews();
