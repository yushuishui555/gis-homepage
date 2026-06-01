import { useState } from "react";

const navItems = [
  { label: "首页", href: "#hero" },
  { label: "关于我", href: "#about" },
  { label: "服务项目", href: "#services" },
  { label: "案例展示", href: "#portfolio" },
  { label: "联系我", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="text-lg font-bold text-slate-800 tracking-tight">
          🌍 GIS Dev
        </a>

        {/* desktop */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden text-slate-600"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-slate-600 hover:text-blue-600 py-2 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
