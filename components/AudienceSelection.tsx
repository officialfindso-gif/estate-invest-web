import React from "react";
import Icon from "@/components/ui/Icon";
import Badge from "@/components/ui/Badge";

export default function AudienceSelection() {
  return (
    <section className="relative flex flex-col items-center py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
        <div className="absolute -top-[20%] -left-[10%] w-1/2 h-1/2 bg-[var(--accent-color)]/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-[var(--accent-color)]/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[var(--accent-color)]/5 blur-[180px] rounded-full opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 md:gap-12">
        <div className="text-center max-w-3xl mx-auto">
          <Badge icon="explore" className="mb-4 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
            Выбери свой путь
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight uppercase">
            В этой пищевой цепочке есть три роли. <span className="text-[var(--accent-color)] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">Кто ты?</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Определи свою текущую позицию, чтобы получить стратегию, которая приведет тебя к максимальной прибыли.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {[
            {
              title: 'Профессиональный Инвестор',
              icon: 'attach_money',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMLuFhI9mY8KVCzXKzuGJAYwpArvVWThR18vPxK2PlWi81TuvxjO1lydJB_sN8120E6wRag5X5wwvmRf5-VJsWsBno6a9dnWDvNOZFzzzaE6vR2CibjkwtobaZyfQ_E4DdoVl3wHWNsXW0AslUDo9y8AQYI3QTnijKA5iP1Ltw59rWPosU6mbufxow6tzqvlDxndGC-nz7RYP2i2Pzu8bm6miz1F2Y0W7UTUI9h5IstElUooRkji8TfJkVkn72KZET7z2Byq1OPnc',
              bullets: ['Прямой контроль активов', 'Максимизация ROI'],
            },
            {
              title: 'Брокер',
              icon: 'handshake',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW6izB7dYg_SogJS1LrPWcXRIKPLT3vGaCv5mz-TjxTCIDn1lVrOyG4gKdXbZEzYxWl6a5lRmHagAF70qU4hEfqlI2VJs40s_SIr2D7nc2SPHCyJJDKtquVhPEBMQB-NmvNkCGNSnnwRaU0etiUNPIJFqayTMKXbZXpEWZ3-oOKxBRq3cP9YxwF4QanptDQfiLRBZanLQPwj9hsPqTiyZEL0HoSNjlkeo5jf6mzCFcnKFoUicLjCmFKNqxkTcMwM1NOeI-QD7Uqr0',
              bullets: ['Доступ к "горячим" сделкам', 'Нужен рычаг капитала'],
            },
            {
              title: 'Будущий Фонд',
              icon: 'domain',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvncpPmd806liU76XD8CltV5_xUBayhXcp8DGFS1GS0iggVge0SHR4MGZQaCN92s7Sy6fhIkvIIed812YkhVnsFQqcSBfGjhXeOBUdbP28tzsRiCtZQCUtwHVUuJi9Z_7oNf6M1U1yeQ2Dr9BuN_-qQ5bzIVVQwdrqDywCfPKzj1rm1uQOz5mfv9GPOf7jlpku_LNiypPyZEMsvB2FTyHZg23X0B2EyMBuULiRd1yDr-CawSSkD0zQqMzapalml2_OKA9Z_9lfQ_M',
              bullets: ['Масштабирование бизнеса', 'Управление чужим капиталом'],
            },
          ].map((c) => (
            <article key={c.title} className="group relative flex flex-col bg-[#0f0f0f] rounded-2xl overflow-hidden border border-[var(--accent-color)]/20 transition-all duration-300 hover:border-[var(--accent-color)] hover:shadow-[0_0_50px_rgba(212,175,55,0.15)] hover:-translate-y-2">
              <div className="h-48 w-full bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url('${c.img}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-black/80 backdrop-blur-md flex items-center justify-center border border-[var(--accent-color)]/40 text-[var(--accent-color)] shadow-[0_0_20px_rgba(212,175,55,0.25)] group-hover:scale-110 transition-transform duration-300">
                  <Icon name={c.icon} size={28} color="var(--accent-color)" weight={700} ariaHidden={true} />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-10 -mt-12">
                <div className="bg-[var(--accent-color)] h-1 w-12 mb-6 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)]"></div>
                <h3 className="text-2xl font-bold text-[var(--accent-color)] mb-3 leading-tight uppercase tracking-wide">
                  {c.title}
                </h3>

                <div className="flex-grow space-y-5">
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    Краткое описание роли и что она получает.
                  </p>

                  <ul className="space-y-3 mt-4">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <Icon name="check_circle" size={20} color="var(--accent-color)" ariaHidden={true} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <button 
                    aria-label={`Узнать больше о роли: ${c.title}`}
                    className="w-full group/btn flex items-center justify-between px-5 py-3.5 rounded-xl bg-white/5 border border-transparent hover:border-[var(--accent-color)] hover:bg-[var(--accent-color)] text-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.12)]">
                    <span className="font-bold text-sm tracking-wide">ЭТО ПРО МЕНЯ</span>
                    <Icon name="arrow_forward" size={20} color="currentColor" ariaHidden={true} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold opacity-70">
            Все роли важны. Главное — выбрать правильную стратегию.
          </p>
        </div>
      </div>
    </section>
  );
}
