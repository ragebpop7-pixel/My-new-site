async function getNews() {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?language=en&apiKey=40a916fb34df43ea9776e1e50715663b",
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.articles;
}

export default async function World() {
  const news = await getNews();

  return (
    <div style={{ padding: 20 }}>
      <h1>🌍 أخبار العالم</h1>

      {news.map((item, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}
