import { useState } from "react";

// ===================== API 配置 =====================
// 本地开发：http://localhost:3000
// 生产环境：替换为 ngrok 公网地址
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null); // { ok: true/false, message: '' }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setResult(null);

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.ok) {
        setResult({ ok: true, message: data.message });
        setForm({ name: "", email: "", message: "" });
      } else {
        setResult({ ok: false, message: data.error || "提交失败" });
      }
    } catch (err) {
      setResult({ ok: false, message: "网络错误，请稍后再试" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">联系我</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto">
            有 GIS 论文或毕设需求？欢迎随时联系，免费咨询
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* 联系信息 */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6">联系方式</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  📧
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-0.5">邮箱</div>
                  <div className="text-slate-800 font-medium">17336670124@163.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  💬
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-0.5">微信</div>
                  <div className="text-slate-800 font-medium">请添加微信详聊</div>
                  <div className="mt-3 w-32 h-32 bg-white rounded-xl overflow-hidden border border-slate-200">
                    <img src="/wechat-qr.jpg" alt="微信二维码" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  ⏰
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-0.5">响应时间</div>
                  <div className="text-slate-800 font-medium">24 小时内回复</div>
                </div>
              </div>
            </div>
          </div>

          {/* 联系表单 */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6">快速留言</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="你的姓名"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <input
                type="email"
                placeholder="你的邮箱"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <textarea
                rows={4}
                placeholder="请描述你的需求（论文方向、毕设主题等）"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
              />

              <button
                type="submit"
                disabled={sending}
                className={`w-full py-3 rounded-xl font-medium text-white transition-all ${
                  result?.ok
                    ? "bg-green-500"
                    : sending
                      ? "bg-slate-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/25"
                }`}
              >
                {sending ? "⏳ 提交中..." : result?.ok ? "✅ 发送成功！" : "发送消息"}
              </button>
              {result && !result.ok && (
                <p className="text-red-500 text-sm text-center mt-2">{result.message}</p>
              )}
              {result?.ok && (
                <p className="text-green-600 text-sm text-center mt-2">{result.message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
