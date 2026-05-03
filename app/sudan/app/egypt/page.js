export default function Page() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center' }}>آخر أخبار السودان وأفريقيا</h2>
      
      {/* هذا هو المكان الذي ستظهر فيه الأخبار */}
      <div id="news-container">جاري تحميل الأخبار...</div>

      {/* استدعاء ملف الـ JS من فولدر public */}
      <script src="/fetchNews.js" strategy="afterInteractive"></script>
    </main>
  );
}
