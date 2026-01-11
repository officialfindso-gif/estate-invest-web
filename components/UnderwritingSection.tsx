import React from "react";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import CTAButton from "@/components/ui/CTAButton";

export default function UnderwritingSection() {
  const modules = [
    {
      icon: 'manage_search',
      title: 'Тотальный Скоринг',
      description: 'Глубокая проверка заемщика по 50+ параметрам, включая кредитную историю, судебные дела и аффилированность.',
      status: 'ВЕРИФИЦИРОВАНО'
    },
    {
      icon: 'real_estate_agent',
      title: 'Реальная Оценка',
      description: 'Оценка ликвидности объекта, а не просто рыночной цены. Мы знаем, за сколько объект уйдет с торгов за 2 недели.',
      status: 'ЛИКВИДНОСТЬ > 100%'
    },
    {
      icon: 'gavel',
      title: 'Юридический Бетон',
      description: 'Железобетонные договоры залога, регистрация обременения в Росреестре. Защита от банкротства физлиц.',
      status: 'ЗАЩИЩЕНО ЗАКОНОМ'
    },
    {
      icon: 'door_open',
      title: 'Вход и Выход',
      description: 'Продуманные стратегии выхода из сделки. Если заемщик не платит — мы знаем, как вернуть деньги с прибылью.',
      status: 'СТРАТЕГИЯ ГОТОВА'
    }
  ];

  return (
    <section className="relative py-10 sm:py-16 md:py-20 lg:py-32 overflow-hidden bg-[#0a0b0d] w-full">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[var(--accent-color)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[var(--accent-color)]/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-overlay" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto">
          <Badge icon="security" className="mb-6">
            Безопасность капитала
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-4 sm:mb-6 uppercase max-w-5xl">
            <span style={{ color: 'var(--accent-color)' }}>0 потерянных рублей</span>
            <br />
            с 2018 года.
            <span className="block mt-2">
              Это не магия, это<br />
              андеррайтинг.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
            Займы под залог безопаснее банка. Наша проприетарная технология проверки из 4 модулей исключает человеческий фактор и мошенничество на 100%.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
          {modules.map((module) => (
            <article
              key={module.icon}
              className="group relative flex flex-col p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#1a1a1a] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-color)] hover:shadow-[0_0_40px_-8px_rgba(212,175,55,0.18)] h-full"
            >
              <div className="mb-4 sm:mb-5 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-[var(--accent-color)] group-hover:bg-[var(--accent-color)] group-hover:text-black transition-colors duration-300">
                <Icon name={module.icon} size={28} weight={700} ariaHidden={true} />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[--accent-color] mb-2 sm:mb-3 uppercase tracking-wide transition-colors">
                {module.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {module.description}
              </p>

              <div className="mt-auto pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-[--accent-color] font-mono font-bold">
                  <Icon name="check_circle" size={16} ariaHidden={true} />
                  <span>{module.status}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 rounded-xl sm:rounded-2xl bg-[#1a1a1a]/50 border border-white/10 p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Готовы инвестировать безопасно?</h3>
            <p className="text-sm sm:text-base text-gray-400">Получите доступ к базе проверенных объектов прямо сейчас.</p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] bg-gray-700 overflow-hidden">
                <img
                  alt="Инвестор"
                  className="w-full h-full object-cover opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZQ6wNJSPx4AVh-8e44nTdbmCP3_V98PFvZnAfB3oR1VAZR7dpoayXtyXIlG53Qhzu-sJRpovonRUYRT7RrpvEAjwU4hodiLVSnqv9gvN559Q-3s38jGh3YowWgW_IciVajBYmZsIGWjhWEB8T9aPUK6WY6m8tpYp2wopEFEC7J-cXenq7gMb7Q_5cQtfPRm1mNQk8yue2B2P4tNZJDD0GlERf3unyzy12azxGbT3zEhDLqiX4mWQvwRD8TEESgHZT4MJRO3NGqbQ"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] bg-gray-700 overflow-hidden">
                <img
                  alt="Инвестор"
                  className="w-full h-full object-cover opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJcbrJafv-HQS3gy50j7IwoRvzzblJNXTXPkv4tiSGAUDRDtMW1ehC5Xcp5wZAg5KmjW_8VKianT3KMTl_KxbpWEiCMqTw5N32CJQZPgO9hM8N4FOD-VNW0F1PBfD9F3zKezYKaORALorQXTngd5ZhHygrq6WWD7tERClagKM4-ec11cGP_j4ANgt3gWKJaLXGf_m9EByH8EqkJm9iqXG7sLgy79-aQTf5MGtUBr22cfjVORon2bU5gX8h8eO1NfsZB6mEFKE4lt4"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] bg-gray-700 overflow-hidden">
                <img
                  alt="Инвестор"
                  className="w-full h-full object-cover opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4qmpmSUv9YcjcpMs81NYhQfbpoxTQsuUxaDMW5bzZ2puMSNZytug0jszsorxYs3S_Lr5s12oN_OFjyBaBnupCH0-V-nTL97bIP091VCZaai8tBekuQjr9anIbCE43h2z4DaAEDP2JIotlpUByN6W96dhE-SZ8EAzFARu10KmM1QWHw8kvPEaA7mWXaTeR05Cyy4-SuX-QXcTAq6rBvwCPltNT2MdCO89ZTza4pdBHd02nU3ARmLtaAyM0hcr1jiIE4JQy-GoT4C4"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] bg-[var(--accent-color)] flex items-center justify-center text-xs font-bold text-black">
                +5k
              </div>
            </div>

            {/* CTA Button */}
            <CTAButton
              className="flex items-center gap-2 h-11 sm:h-12 px-6 sm:px-8 rounded-lg bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-black font-bold text-sm sm:text-base transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] w-full sm:w-auto justify-center"
              ariaLabel="Получить доступ к базе проверенных объектов"
            >
              Получить доступ
              <Icon name="arrow_forward" size={18} weight={700} ariaHidden={true} />
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
