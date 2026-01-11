import React from "react";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";

export default function ProblemSection() {
  return (
    <section className="relative flex flex-col items-center py-8 sm:py-10 md:py-14 lg:py-18">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--accent-color)]/5 rounded-full blur-[120px] opacity-20 mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 brightness-100 contrast-150" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-24 pb-6 md:pb-10 lg:pb-14">
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-10 md:mb-12 px-2 sm:px-4 text-center">
          <Badge variant="warning" icon="warning" className="mb-6">
            Суровая реальность
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-[1100px] uppercase">
            ПОКА ТЫ ДУМАЕШЬ,
            <br className="hidden md:block" />
            ТВОИ ДЕНЬГИ ПРЕВРАЩАЮТСЯ В <span className="text-[var(--accent-color)] inline md:inline-block md:align-baseline">ФАНТИКИ</span>.
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl font-medium">
            Ваше бездействие стоит дороже, чем любой риск.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 w-full">
          <article className="group relative flex-1 flex flex-col gap-4 sm:gap-6 rounded-xl sm:rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 sm:p-8 md:p-10 min-h-[240px] sm:min-h-[260px] shadow-sm transition-all hover:border-[var(--accent-color)] hover:shadow-[0_0_40px_-8px_rgba(212,175,55,0.18)]">
            <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-[var(--accent-color)]/30 transition-colors">
              <Icon name="local_fire_department" size={36} color="var(--accent-color)" weight={700} fill={1} ariaHidden={true} />
            </div>
            <div className="flex flex-col gap-3 text-left">
              <h3 className="text-[var(--accent-color)] text-2xl font-bold leading-tight uppercase">Банковский Депозит <br /> <span className="text-white">= Нищета</span></h3>
              <div className="h-1 w-16 bg-white/10 rounded-full group-hover:bg-[var(--accent-color)] transition-colors" />
              <p className="text-gray-300 text-base font-medium leading-relaxed mt-2">Инфляция <span className="text-[var(--accent-color)] font-bold">20%</span>, а банк дает <span className="text-[var(--accent-color)] font-bold">18%</span>. Вы гарантированно теряете покупательную способность.</p>
            </div>
          </article>

          <article className="group relative flex-1 flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#1a1a1a] p-10 min-h-[260px] shadow-sm transition-all hover:border-[var(--accent-color)] hover:shadow-[0_0_40px_-8px_rgba(212,175,55,0.18)]">
            <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-[var(--accent-color)]/30 transition-colors">
              <Icon name="money_off" size={36} color="var(--accent-color)" weight={700} fill={1} ariaHidden={true} />
            </div>
            <div className="flex flex-col gap-3 text-left">
              <h3 className="text-[var(--accent-color)] text-2xl font-bold leading-tight uppercase">Деньги под подушкой <br /> <span className="text-white">= Смерть капитала</span></h3>
              <div className="h-1 w-16 bg-white/10 rounded-full group-hover:bg-[var(--accent-color)] transition-colors" />
              <p className="text-gray-300 text-base font-medium leading-relaxed mt-2">Наличные не спят, они гниют. Хранение денег в рублях без движения — это путь к уничтожению накоплений.</p>
            </div>
          </article>

          <article className="group relative flex-1 flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#1a1a1a] p-10 min-h-[260px] shadow-sm transition-all hover:border-[var(--accent-color)] hover:shadow-[0_0_40px_-8px_rgba(212,175,55,0.18)]">
            <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-[var(--accent-color)]/30 transition-colors">
              <Icon name="casino" size={36} color="var(--accent-color)" weight={700} fill={1} ariaHidden={true} />
            </div>
            <div className="flex flex-col gap-3 text-left">
              <h3 className="text-[var(--accent-color)] text-2xl font-bold leading-tight uppercase">Инвестиции <br /> <span className="text-white">«На Удачу»</span></h3>
              <div className="h-1 w-16 bg-white/10 rounded-full group-hover:bg-[var(--accent-color)] transition-colors" />
              <p className="text-gray-300 text-base font-medium leading-relaxed mt-2">Крипта на хаях и акции без знаний — это не инвестиции, это <span className="text-[var(--accent-color)] font-bold">благотворительный взнос</span> рынку.</p>
            </div>
          </article>
        </div>
      </div>

      <div className="w-full" aria-hidden="true">
        <div className="h-4 md:h-6 lg:h-10" />
      </div>
    </section>
  );
}
