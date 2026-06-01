const services = [
  {
    icon: "💻",
    title: "WebGIS 系统开发",
    desc: "基于 Leaflet / 高德地图 / MapboxGL + Node.js / Python 后端，定制开发 GIS 可视化系统。涵盖实时追踪、空间查询、数据分析、管理后台等全栈功能。",
    tags: ["Leaflet", "高德地图", "Vue/React", "Flask/Express", "SQL Server"],
  },
  {
    icon: "🎓",
    title: "毕业设计辅导",
    desc: "GIS / WebGIS 相关毕设全流程指导，包括需求分析、技术方案设计、数据处理、系统开发、论文撰写与答辩准备。",
    tags: ["需求分析", "技术方案", "系统开发", "论文答辩"],
  },
  {
    icon: "🗺️",
    title: "GIS 论文辅导",
    desc: "从选题、文献综述、数据采集与处理到论文撰写，提供全流程 GIS 方向论文辅导。涵盖空间分析、地统计分析、网络分析等方向。",
    tags: ["选题指导", "数据分析", "论文撰写", "答辩辅导"],
  },
  {
    icon: "📊",
    title: "空间数据分析",
    desc: "基于 ArcGIS + Python 进行空间统计、空间插值、缓冲区分析、叠加分析、网络分析、DEM 地形分析、三维可视化等高级空间分析。",
    tags: ["空间统计", "空间插值", "网络分析", "DEM分析"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">服务项目</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto">
            提供 GIS / 遥感方向全流程辅导服务，助你顺利完成论文与毕业设计
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-slate-100 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
