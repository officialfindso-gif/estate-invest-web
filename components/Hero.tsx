import React from "react";
import FeatureCard from "@/components/FeatureCard";
import Icon from "@/components/ui/Icon";
import CTAButton from "@/components/ui/CTAButton";
import Card from "@/components/ui/Card";

export default function Hero() {
  return (
    <section className="relative w-full pb-10 md:pb-14 border-b border-[#37342a]">
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#050505]/95 to-[#0a0a0a]/80" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 grayscale"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3f2e6b2b6d4a4f4d6d4a4f4d6d4a4f4d')",
              backgroundBlendMode: 'multiply',
            }}
          />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
          <div className="absolute -top-40 -left-20 w-[520px] h-[520px] rounded-full blur-3xl opacity-60 pointer-events-none" style={{ backgroundColor: 'rgba(212,175,55,0.06)' }} />
        </div>
      </div>

      <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-[#3a341f] w-fit mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-color)' }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--accent-color)' }}>высокая доходность</span>
            </div>

            <h1 className="font-black text-white leading-[0.96] tracking-tight text-[2rem] sm:text-[2.2rem] md:text-[2.62rem] lg:text-[3.3rem] xl:text-[3.5rem]">
              <span className="block">ЗАРАБАТЫВАЙ</span>
              <span className="block"><span style={{ color: 'var(--accent-color)' }}>40-60%</span> ГОДОВЫХ</span>
              <span className="block">НА</span>
              <span className="block">ИНВЕСТИЦИЯХ</span>
              <span className="block">ПОД ЗАЛОГ</span>
              <span className="block">НЕДВИЖИМОСТИ.</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-[#b6b1a0] text-base sm:text-lg max-w-[680px] leading-relaxed border-l-4 pl-4 sm:pl-6" style={{ borderLeftColor: 'var(--accent-color)' }}>
              Хватит отдавать маржу посредникам. Начните инвестировать напрямую и получайте максимальную доходность с гарантией обеспечения.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4">
              <CTAButton 
                ariaLabel="Получить стратегию инвестора" 
                className="group relative inline-flex items-center justify-center gap-3 h-20 sm:h-16 px-6 sm:px-10 rounded-xl sm:rounded-md bg-[var(--accent-color)] text-[#050505] hover:bg-[#b59325] text-base sm:text-lg font-extrabold shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transform transition-all duration-300"
              >
                <span className="hidden sm:inline">ПОЛУЧИТЬ СТРАТЕГИЮ ИНВЕСТОРА</span>
                <span className="sm:hidden flex-1 text-center">
                  <span className="block whitespace-nowrap">ПОЛУЧИТЬ СТРАТЕГИЮ</span>
                  <span className="block">ИНВЕСТОРА</span>
                </span>
                <Icon name="arrow_forward" size={22} color="#050505" className="group-hover:translate-x-1 transition-transform sm:static absolute right-[5%] top-1/2 sm:top-auto sm:-translate-y-0 -translate-y-1/2" ariaHidden={true} weight={900} fill={1} />
              </CTAButton>
            </div>

            <div className="mt-8 flex gap-6">
              <FeatureCard icon="shield" title="Без скрытых комиссий" />
              <FeatureCard icon="history" title="Опыт с 2018 года" />
              <FeatureCard icon="trending_up" title="0 рублей потерь" />
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <Card className="w-[360px]">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs text-[#6e6b62] uppercase tracking-wider">ТЕКУЩАЯ ДОХОДНОСТЬ</div>
                  <div className="text-4xl font-black mt-2">48.5%</div>
                </div>
                <div className="bg-black/20 px-3 py-2 rounded-lg border border-[#3a341f] text-sm">
                  <Icon name="show_chart" color="var(--accent-color)" />
                </div>
              </div>

              <div className="flex items-end gap-3 h-40 mb-6">
                <div className="flex-1 bg-[#3f331d] rounded-t-sm" style={{height: '35%'}} />
                <div className="flex-1 bg-[#3f331d] rounded-t-sm" style={{height: '50%'}} />
                <div className="flex-1 bg-[#3f331d] rounded-t-sm" style={{height: '45%'}} />
                <div className="flex-1 bg-[#3f331d] rounded-t-sm" style={{height: '60%'}} />
                <div className="flex-1 rounded-t-sm shadow-[0_6px_20px_rgba(212,175,55,0.15)]" style={{height: '85%', backgroundColor: 'var(--accent-color)'}} />
              </div>

              <div className="space-y-3 text-sm text-[#6e6b62]">
                <div className="flex items-center justify-between border-t border-white/5 pt-3">
                  <div>Средний чек займа</div>
                  <div className="font-bold text-white">2.5 млн ₽</div>
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-3">
                  <div>Обеспечение</div>
                  <div className="font-bold text-white">Недвижимость</div>
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-3">
                  <div>LTV</div>
                  <div className="font-bold" style={{ color: 'var(--accent-color)' }}>до 50%</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
