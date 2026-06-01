const cases = [
  {
    icon: "🚢",
    title: "芝罘港智慧物流GIS系统",
    desc: "基于OSM路网数据与GeoJSON铁路数据，构建港口智慧物流调度平台，实现车辆路径模拟、交通预测与仓储数据可视化管理。",
    tech: "Python Flask + Leaflet + SQL Server",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: "🚌",
    title: "济南公交GIS实时追踪系统",
    desc: "基于高德地图JSAPI实现济南公交实时位置追踪与路线分析，配套管理后台，支持多模块公交数据可视化与查询。",
    tech: "Node.js + 高德地图 + SQL Server",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: "🛣️",
    title: "道路标线GIS管理系统",
    desc: "前后端分离的道路标线可视化管理平台，支持标线数据地图标注、报表生成与用户角色权限管理。",
    tech: "Node.js + Leaflet + SQL Server",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: "🚄",
    title: "铁路GIS可视化系统",
    desc: "基于Vue 3 + Express构建的铁路数据可视化平台，加载GeoJSON铁路数据，支持用户与管理员的角色管理。",
    tech: "Vue 3 + Express + 高德地图 + SQL Server",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: "🌧️",
    title: "枣庄暴雨内涝交通应急GIS",
    desc: "桌面Web混合架构的暴雨内涝应急系统，集成DEM地形分析、积水点监测、应急资源调度与内涝风险报告自动生成。",
    tech: "Python + PyQt5 + Folium + SQL Server",
    gradient: "from-orange-400 to-red-500",
  },
  {
    icon: "🏔️",
    title: "枣庄积水点DEM分析系统",
    desc: "基于SRTM DEM高程数据与Shapefile积水点数据，利用Folium进行地形高程分析与积水点空间分布可视化。",
    tech: "Python + Folium + SRTM DEM + Shapefile",
    gradient: "from-amber-400 to-yellow-500",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">案例展示</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto">
            精选 GIS 项目案例，展示全栈开发与空间分析能力
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 hover:shadow-lg transition-all"
            >
              {/* 图片占位 */}
              <div
                className={`h-48 bg-gradient-to-br ${c.gradient} flex items-center justify-center text-4xl text-white`}
              >
                {c.icon}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded-md">
                    {c.tech}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
