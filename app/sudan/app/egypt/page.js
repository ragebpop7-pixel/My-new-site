const apiKey = '8b71de9459274d41009995b252265efa';
const url = `https://gnews.io/api/v4/search?q=السودان+أفريقيا&lang=ar&max=10&apikey=${apiKey}`;

async function getNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const container = document.getElementById('news-container');
        
        if (data.articles) {
            container.innerHTML = data.articles.map(article => `
                <div style="margin-bottom:20px; border:1px solid #ddd; padding:10px;">
                    <img src="${article.image}" style="width:100%;">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

getNews();
