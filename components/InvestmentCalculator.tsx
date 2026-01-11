"use client";

import React, { useState, useMemo } from "react";
import Icon from "@/components/ui/Icon";
import CTAButton from "@/components/ui/CTAButton";

export default function InvestmentCalculator() {
  const [amount, setAmount] = useState(1000000); // 1 млн руб
  const [months, setMonths] = useState(12); // 12 месяцев
  const [rate, setRate] = useState(50); // 50% годовых

  // Расчеты
  const calculations = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    const totalReturn = amount * (1 + (rate / 100) * (months / 12));
    const profit = totalReturn - amount;
    const monthlyProfit = profit / months;

    // Сравнение с банковским депозитом (5% годовых)
    const bankRate = 5;
    const bankReturn = amount * (1 + (bankRate / 100) * (months / 12));
    const bankProfit = bankReturn - amount;
    const difference = profit - bankProfit;

    return {
      totalReturn: Math.round(totalReturn),
      profit: Math.round(profit),
      monthlyProfit: Math.round(monthlyProfit),
      bankProfit: Math.round(bankProfit),
      difference: Math.round(difference),
      percentageDifference: Math.round((difference / bankProfit) * 100),
    };
  }, [amount, months, rate]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("ru-RU").format(num);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#0a0a0a]">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.02]"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[var(--accent-color)]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--accent-color)]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-16 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/30 mb-6">
            <Icon name="calculate" size={20} color="var(--accent-color)" ariaHidden={true} />
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-color)]">
              Калькулятор доходности
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight uppercase mb-4">
            РАССЧИТАЙТЕ СВОЙ <span style={{ color: "var(--accent-color)" }}>ДОХОД</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Узнайте, сколько вы заработаете на инвестициях под залог недвижимости
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Левая колонка - Настройки */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon name="tune" size={24} color="var(--accent-color)" ariaHidden={true} />
              Параметры инвестиции
            </h3>

            <div className="space-y-8">
              {/* Сумма инвестиции */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                    Сумма инвестиции
                  </label>
                  <span className="text-2xl font-black text-white">
                    {formatNumber(amount)} ₽
                  </span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--accent-color)] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(212,175,55,0.5)] [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[var(--accent-color)] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>100 тыс.</span>
                  <span>10 млн.</span>
                </div>
              </div>

              {/* Срок инвестиции */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                    Срок инвестиции
                  </label>
                  <span className="text-2xl font-black text-white">
                    {months} {months === 1 ? "месяц" : months < 5 ? "месяца" : "месяцев"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="36"
                  step="1"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--accent-color)] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(212,175,55,0.5)] [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[var(--accent-color)] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1 месяц</span>
                  <span>36 месяцев</span>
                </div>
              </div>

              {/* Процентная ставка */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                    Доходность годовых
                  </label>
                  <span className="text-2xl font-black" style={{ color: "var(--accent-color)" }}>
                    {rate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="80"
                  step="5"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--accent-color)] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(212,175,55,0.5)] [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[var(--accent-color)] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>20%</span>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - Результаты */}
          <div className="space-y-6">
            {/* Главная карточка результата */}
            <div className="bg-gradient-to-br from-[var(--accent-color)] to-[#b8922a] rounded-2xl p-8 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="trending_up" size={32} color="#000" ariaHidden={true} />
                <h3 className="text-lg font-bold text-black uppercase tracking-wide">
                  Ваш доход
                </h3>
              </div>
              <div className="mb-2">
                <div className="text-5xl md:text-6xl font-black text-black mb-2">
                  +{formatNumber(calculations.profit)} ₽
                </div>
                <div className="text-black/70 text-sm font-semibold">
                  Чистая прибыль за {months} {months === 1 ? "месяц" : months < 5 ? "месяца" : "месяцев"}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t-2 border-black/20">
                <div>
                  <div className="text-xs text-black/60 uppercase tracking-wide mb-1">
                    Итоговая сумма
                  </div>
                  <div className="text-2xl font-black text-black">
                    {formatNumber(calculations.totalReturn)} ₽
                  </div>
                </div>
                <div>
                  <div className="text-xs text-black/60 uppercase tracking-wide mb-1">
                    Доход в месяц
                  </div>
                  <div className="text-2xl font-black text-black">
                    {formatNumber(calculations.monthlyProfit)} ₽
                  </div>
                </div>
              </div>
            </div>

            {/* Сравнение с банком */}
            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="account_balance" size={24} color="var(--accent-color)" ariaHidden={true} />
                <h3 className="text-base font-bold text-white uppercase tracking-wide">
                  Сравнение с банковским депозитом
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-sm text-gray-400">Доход в банке (5% годовых)</span>
                  <span className="text-lg font-bold text-gray-300">
                    {formatNumber(calculations.bankProfit)} ₽
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm font-semibold text-white">Ваша выгода</span>
                  <div className="text-right">
                    <div className="text-2xl font-black" style={{ color: "var(--accent-color)" }}>
                      +{formatNumber(calculations.difference)} ₽
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      На {calculations.percentageDifference}% больше
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA кнопка */}
            <CTAButton
              className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-white/5 border-2 border-[var(--accent-color)] text-white font-bold text-lg uppercase tracking-wide hover:bg-[var(--accent-color)] hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
              ariaLabel="Начать инвестировать"
            >
              <Icon name="rocket_launch" size={24} ariaHidden={true} />
              Начать инвестировать
            </CTAButton>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <Icon name="info" size={24} color="var(--accent-color)" className="flex-shrink-0" ariaHidden={true} />
            <div>
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong className="text-white">Важно:</strong> Расчеты являются приблизительными и носят информационный характер. 
                Фактическая доходность зависит от конкретного объекта инвестирования, срока займа и рыночных условий. 
                Все инвестиции сопряжены с рисками.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
