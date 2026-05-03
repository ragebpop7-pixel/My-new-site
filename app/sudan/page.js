async function getNews() {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=sudan&apiKey=YOUR_API_KEY",
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.articles;
}

export default async function SudanPage() {
  const news = await getNews();

  return (
    <div style={{ padding: 20 }}>
      <h1>🇸🇩 أخبار السودان</h1>

      {news.map((item, i) => (
        <div key={i}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
