import React from "react";
import Icon from "@/components/ui/Icon";
import Badge from "@/components/ui/Badge";

export default function ProgramModules() {
  const modules = [
    {
      id: '01',
      title: 'Поиск клиентов',
      icon: 'travel_explore',
      text: 'Полный разбор маркетинговых каналов. Вы получите готовые скрипты лидогенерации и научитесь идентифицировать надежных заемщиков.',
    },
    {
      id: '02',
      title: 'Фильтр',
      icon: 'filter_alt',
      text: 'Профессиональная оценка рисков. Проверка юридической чистоты объектов, реальная оценка недвижимости и выявление "красных флагов".',
    },
    {
      id: '03',
      title: 'Оформление',
      icon: 'description',
      text: 'Юридические структуры для защиты капитала. Шаблоны "пуленепробиваемых" договоров и безопасное закрытие сделок.',
    },
    {
      id: '04',
      title: 'Коллекшн (Взыскание)',
      icon: 'gavel',
      text: 'Эффективное разрешение конфликтов. Четкие процессы досудебного взыскания и стратегии быстрого возврата активов.',
    },
  ];

  return (
    <section className="relative flex flex-col items-center py-8 sm:py-10 md:py-14 lg:py-18">
      <div className="absolute inset-0 opacity-0 pointer-events-none" />

      <div className="w-full max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <div className="mb-3 sm:mb-4">
            <Badge icon="school" className="shadow-[0_0_10px_rgba(212,175,55,0.18)]">
              Модули программы
            </Badge>
          </div>

          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight px-2 sm:px-4 pb-4 sm:pb-6 max-w-[900px]">
            Я ПЕРЕДАЮ ОПЫТ, НА КОТОРОМ Я ЗАРАБОТАЛ <span className="text-[var(--accent-color)]">МИЛЛИОНЫ</span>.
          </h2>

          <p className="text-gray-400 text-base sm:text-lg font-normal max-w-[640px] leading-relaxed px-2">
            Четыре ключевых этапа, которые превращают новичка в профессионального инвестора, основанные на реальной практике.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-10">
          {modules.map((m) => (
            <article key={m.id} className="group relative flex flex-col justify-between bg-[#1a1a1a] border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 min-h-[280px] sm:min-h-[320px] shadow-sm transition-all hover:border-[var(--accent-color)] hover:shadow-[0_0_40px_-8px_rgba(212,175,55,0.18)] hover:-translate-y-1">
              <div className="absolute top-4 sm:top-6 right-4 sm:right-8 pointer-events-none">
                <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-white/5 select-none">{m.id}</span>
              </div>

              <div className="flex flex-col gap-4 sm:gap-6 relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-[var(--accent-color)]/30 transition-colors">
                  <Icon name={m.icon} size={32} color="var(--accent-color)" weight={700} fill={1} ariaHidden={true} />
                </div>
                <div className="flex flex-col gap-2 sm:gap-3 text-left">
                  <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight uppercase group-hover:text-[var(--accent-color)] transition-colors duration-300">{m.title}</h3>
                  <div className="h-1 w-12 sm:w-16 bg-white/10 rounded-full group-hover:bg-[var(--accent-color)] transition-colors" />
                  <p className="text-gray-300 text-sm sm:text-base font-medium leading-relaxed">{m.text}</p>
                </div>
              </div>

              <div className="pt-5 sm:pt-6 flex items-center gap-3 text-white/70 group-hover:text-[var(--accent-color)] font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer">
                <button aria-label={`Подробнее о модуле: ${m.title}`} className="flex items-center gap-2 sm:gap-3">
                  <span>Подробнее</span>
                  <Icon name="arrow_forward" size={18} color="currentColor" weight={600} ariaHidden={true} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
