import React from "react";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import CTAButton from "@/components/ui/CTAButton";

export default function MotivationSection() {
  return (
    <section className="relative py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
          <Badge icon="calculate" className="mb-4 sm:mb-6">
            Математика Финансовой Свободы
          </Badge>

          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight mb-4 sm:mb-6 uppercase">
            Пенсия у бассейна через 5 лет.
            <span className="block mt-2">
              Это <span className="text-[var(--accent-color)]">математика</span>.
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            Сложный процент работает на вас. Оставьте эмоции любителям, профессионалы доверяют цифрам.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          {/* Left: Calculator Card */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="bg-[#121212] border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/40 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Прогноз</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Модель сложного процента</p>
                </div>
                <div className="bg-white/5 p-2 rounded-lg">
                  <Icon name="calculate" size={24} color="var(--accent-color)" ariaHidden={true} />
                </div>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-[#0a0a0a] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                  <p className="text-gray-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-1 sm:mb-2">
                    НАЧАЛЬНЫЙ КАПИТАЛ
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white text-base sm:text-lg font-bold">1,000,000</span>
                    <span className="text-gray-500 text-xs sm:text-sm">₽</span>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                  <p className="text-gray-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-1 sm:mb-2">
                    ГОДОВАЯ ДОХОДНОСТЬ
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[var(--accent-color)] text-base sm:text-lg font-bold">48%</span>
                    <span className="text-gray-500 text-xs sm:text-sm">APR</span>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="bg-[#0a0a0a] rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10 mb-6 sm:mb-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[var(--accent-color)]/5 group-hover:bg-[var(--accent-color)]/10 transition-colors duration-500"></div>
                <div className="relative z-10">
                  <p className="text-gray-400 text-xs sm:text-sm font-medium mb-1">Капитал через 5 лет</p>
                  <p className="text-[var(--accent-color)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
                    7,088,000 <span className="text-xl sm:text-2xl text-gray-500 font-normal">₽</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center text-[var(--accent-color)] bg-[var(--accent-color)]/10 px-2 py-0.5 rounded text-xs sm:text-sm font-bold">
                      <Icon name="arrow_upward" size={16} ariaHidden={true} />
                      608%
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm">чистый рост</span>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="relative h-40 sm:h-48 w-full mt-auto rounded-lg overflow-hidden border border-white/10 bg-[#0a0a0a]">
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 400 200">
                  <line stroke="#333" strokeWidth="1" x1="0" x2="400" y1="160" y2="160"></line>
                  <line stroke="#333" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="120" y2="120"></line>
                  <line stroke="#333" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="80" y2="80"></line>
                  <line stroke="#333" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="40" y2="40"></line>
                  <path d="M0,180 C50,175 100,165 150,140 C220,105 300,80 400,20 L400,200 L0,200 Z" fill="url(#chartGradient)" opacity="0.4"></path>
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#d4af37"></stop>
                      <stop offset="100%" stopColor="#000000" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0,180 C50,175 100,165 150,140 C220,105 300,80 400,20" fill="none" stroke="#d4af37" strokeLinecap="round" strokeWidth="3"></path>
                  <circle cx="0" cy="180" fill="#d4af37" r="3"></circle>
                  <circle cx="150" cy="140" fill="#d4af37" r="3"></circle>
                  <circle cx="400" cy="20" fill="#d4af37" r="4" stroke="white" strokeWidth="2"></circle>
                </svg>
                <div className="absolute bottom-2 left-2 sm:left-4 text-[10px] text-gray-500">Год 0</div>
                <div className="absolute bottom-2 right-2 sm:right-4 text-[10px] text-gray-500">Год 5</div>
              </div>

              {/* CTA */}
              <CTAButton
                className="w-full mt-4 sm:mt-6 py-3 sm:py-4 px-4 sm:px-6 rounded-lg bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-black font-bold flex items-center justify-center gap-2 transition-all"
                ariaLabel="Рассчитать стратегию инвестирования"
              >
                <span>Рассчитать стратегию</span>
                <Icon name="arrow_forward" size={18} ariaHidden={true} />
              </CTAButton>
            </div>
          </div>

          {/* Right: Image with Quote */}
          <div className="relative order-1 lg:order-2 h-[400px] sm:h-[500px] lg:h-auto rounded-xl sm:rounded-2xl overflow-hidden group">
            <div className="absolute inset-0">
              <img
                alt="Инвестор отдыхает у бассейна"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6gRNrQ60xKZlXxlX-TNSgkAkS8iD7ZF69C3tLcE1RHN32G40tmLEUQjiQzVf86dB7pySsOFoeLqXBUokCUEA03LcUPVY87M1_zFnHPI0QjkBpiI6kA80xUgYSSKyHjq_IS4xD3gJOcCXCb0cWCZO_0fEyt5Owz8dw0ynMiKT1DCAmxMXUtBvlC6IEiXgpFHRWsFVjzh9KSGKLoOZO0j0sb0hGh6wG5UkL3n7g3RRyCRlkC7GadQIAxje6gOHvHS7RS0NlL_F8Vqg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 lg:opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent opacity-40"></div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 lg:p-12 z-20">
              <div className="flex items-start gap-4 mb-3 sm:mb-4">
                <Icon name="format_quote" size={36} color="var(--accent-color)" ariaHidden={true} />
              </div>
              <blockquote className="text-white text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-4 sm:mb-6 max-w-lg">
                "Я не работаю ради денег. Я заставляю деньги работать, пока я наслаждаюсь жизнью."
              </blockquote>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="size-10 rounded-full bg-[#121212] overflow-hidden border border-[var(--accent-color)]/30">
                  <img
                    alt="Вадим Фрунзе"
                    className="h-full w-full object-cover"
                    src="https://cdn.sanity.io/images/lger7pur/production/9ffaa2c024bf10406fbfa1d78d3a1cabb7fa0200-4000x6000.jpg?rect=0,1000,4000,4000&w=96&h=96"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Вадим Фрунзе</p>
                  <p className="text-[var(--accent-color)] text-xs">Инвестор с 2018 года</p>
                </div>
              </div>
            </div>

            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 bg-[#050505]/80 backdrop-blur-md border border-white/10 rounded-lg px-3 sm:px-4 py-2 flex items-center gap-2">
              <span className="size-2 rounded-full bg-[var(--accent-color)]"></span>
              <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">Бали, Индонезия</span>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2">
            <Icon name="verified_user" size={20} color="#9ca3af" ariaHidden={true} />
            <span className="text-gray-400 text-xs sm:text-sm font-medium">Подтвержденная доходность</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="lock" size={20} color="#9ca3af" ariaHidden={true} />
            <span className="text-gray-400 text-xs sm:text-sm font-medium">Защищенные активы</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="analytics" size={20} color="#9ca3af" ariaHidden={true} />
            <span className="text-gray-400 text-xs sm:text-sm font-medium">Прозрачная отчетность</span>
          </div>
        </div>
      </div>
    </section>
  );
}
