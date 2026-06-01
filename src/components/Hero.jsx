export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* 头像 */}
        <div className="mb-8 animate-fade-in-up">
          <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center text-4xl shadow-2xl shadow-blue-500/30">
            🗺️
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight animate-fade-in-up delay-100">
          GIS 开发 <span className="text-blue-400">&</span> 论文辅导
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-8 animate-fade-in-up delay-200">
          精通 WebGIS · Python · Node.js · ArcGIS · ENVI · 空间分析
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up delay-300">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-full transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40"
          >
            立即咨询
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-3 border border-slate-500 hover:border-slate-300 text-slate-300 hover:text-white font-medium rounded-full transition-all"
          >
            查看服务
          </a>
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
