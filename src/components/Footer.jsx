export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
      <div className="max-w-6xl mx-auto px-4">
        <p>© {new Date().getFullYear()} GIS Dev — GIS 系统开发 & 论文辅导</p>
        <p className="mt-1 text-slate-500">精通 WebGIS · Python · Node.js · ArcGIS · 空间分析</p>
      </div>
    </footer>
  );
}
