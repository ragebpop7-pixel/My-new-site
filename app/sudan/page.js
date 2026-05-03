async function getNews() {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=sudan&apiKey=40a916fb34df43ea9776e1e50715663b",
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.articles;
}

export default async function Sudan() {
  const news = await getNews();

  return (
    <div style={{ padding: 20 }}>
      <h1>🇸🇩 أخبار السودان</h1>

      {news.map((item, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>

          {item.urlToImage && (
            <img src={item.urlToImage} width="100%" />
          )}

          <a href={item.url} target="_blank">
            اقرأ الخبر
          </a>
        </div>
      ))}
    </div>
  );
}
