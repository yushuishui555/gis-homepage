const skills = [
  "Python", "Node.js", "React", "Vue", "Flask", "Express",
  "Leaflet", "Folium", "高德地图", "PyQt5", "SQL Server",
  "ArcGIS Pro", "ENVI", "空间分析", "GeoJSON", "Shapefile",
];

const highlights = [
  { value: "6+", label: "完成项目" },
  { value: "Web+桌面", label: "技术路线" },
  { value: "3 年", label: "GIS 开发经验" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">关于我</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 左边：自我介绍 */}
          <div>
            <p className="text-slate-600 leading-relaxed mb-4 text-lg">
              你好！我是一名 GIS 全栈开发者，深耕 WebGIS 和空间数据处理领域。
              精通 <strong className="text-slate-800">Python</strong>（Flask / PyQt5 / Folium）、
              <strong className="text-slate-800">Node.js</strong>（Express）后端开发，
              以及 <strong className="text-slate-800">React / Vue / Leaflet / 高德地图</strong> 前端可视化。
            </p>
            <p className="text-slate-600 leading-relaxed">
              既能独立交付完整的<strong className="text-slate-800">GIS 系统项目</strong>（智慧物流、公交追踪、暴雨应急等），
              也提供 GIS / 遥感方向的<strong className="text-slate-800">论文辅导</strong>和
              <strong className="text-slate-800">毕业设计指导</strong>，从选题、数据处理到论文撰写全程护航。
            </p>

            {/* 数据亮点 */}
            <div className="flex gap-8 mt-8">
              {highlights.map((h) => (
                <div key={h.label}>
                  <div className="text-3xl font-bold text-blue-600">{h.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{h.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 右边：技能标签 */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">专业技能</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
