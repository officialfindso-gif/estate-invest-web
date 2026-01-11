import React from "react";
import Icon from "@/components/ui/Icon";

export default function AuthorSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] py-12 sm:py-16 md:py-20">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-color)]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--accent-color)]/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center max-w-7xl mx-auto">
          {/* Photo Section */}
          <div className="w-full lg:w-5/12 relative group">
            <div className="absolute -inset-1 bg-[var(--accent-color)]/20 rounded-xl opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 border border-[var(--accent-color)]/20 rounded-xl translate-x-3 translate-y-3 z-0"></div>
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden bg-[#1a1a1a] border border-[var(--accent-color)]/30 shadow-2xl shadow-black/50 z-10">
              <img
                src="https://cdn.sanity.io/images/lger7pur/production/9ffaa2c024bf10406fbfa1d78d3a1cabb7fa0200-4000x6000.jpg"
                alt="Вадим Фрунзе - основатель и инвестор-практик"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-6 left-6 z-20 bg-[#0a0a0a]/95 backdrop-blur border-l-4 border-[var(--accent-color)] px-4 py-2 shadow-lg">
              <p className="text-xs text-[var(--accent-color)] uppercase tracking-widest font-bold">Основатель</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-6/12 flex flex-col gap-8 text-left">
            {/* Header */}
            <div className="space-y-3">
              <h2 className="text-[var(--accent-color)] font-bold tracking-widest text-sm uppercase flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[var(--accent-color)]"></span>
                Экспертность
              </h2>
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight uppercase">
                АВТОР ТЕХНОЛОГИИ <span style={{ color: 'var(--accent-color)' }}>ВАДИМ ФРУНЗЕ</span>
              </h1>
              <p className="text-xl text-white/90 font-medium">
                Инвестор-практик с 2018 года
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div className="flex flex-col gap-1 p-4 rounded-lg bg-[#1a1a1a] border border-white/10 hover:border-[var(--accent-color)]/30 transition-colors">
                <span className="text-3xl font-black text-white tracking-tight">0%</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Потерь капитала</span>
              </div>
              <div className="flex flex-col gap-1 p-4 rounded-lg bg-[#1a1a1a] border border-white/10 hover:border-[var(--accent-color)]/30 transition-colors">
                <span className="text-3xl font-black text-white tracking-tight">500+</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Закрытых сделок</span>
              </div>
              <div className="flex flex-col gap-1 p-4 rounded-lg bg-[#1a1a1a] border border-white/10 hover:border-[var(--accent-color)]/30 transition-colors">
                <Icon name="verified_user" size={32} color="var(--accent-color)" className="mb-1" ariaHidden={true} />
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Безопасный Андеррайтинг</span>
              </div>
            </div>

            {/* Quote */}
            <div className="relative pl-8 pt-2">
              <Icon name="format_quote" size={40} color="var(--accent-color)" className="absolute left-0 top-0 opacity-80" ariaHidden={true} />
              <blockquote className="text-lg lg:text-xl text-gray-300 font-normal leading-relaxed italic border-l-2 border-[var(--accent-color)] pl-6 py-1">
                "Моя цель — сделать рынок частного кредитования прозрачным и безопасным для каждого инвестора."
              </blockquote>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#"
                className="group flex items-center gap-3 px-6 py-3 bg-black border border-[var(--accent-color)]/50 rounded-lg hover:bg-[var(--accent-color)]/10 hover:border-[var(--accent-color)] transition-all duration-300"
                aria-label="Telegram канал"
              >
                <svg className="w-5 h-5 fill-[var(--accent-color)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701l0 0l-.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
                </svg>
                <span className="text-xs font-bold text-[var(--accent-color)] uppercase tracking-widest">Telegram</span>
              </a>
              <a
                href="#"
                className="group flex items-center gap-3 px-6 py-3 bg-black border border-[var(--accent-color)]/50 rounded-lg hover:bg-[var(--accent-color)]/10 hover:border-[var(--accent-color)] transition-all duration-300"
                aria-label="YouTube канал"
              >
                <svg className="w-5 h-5 fill-[var(--accent-color)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
                <span className="text-xs font-bold text-[var(--accent-color)] uppercase tracking-widest">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
