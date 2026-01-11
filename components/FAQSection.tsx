"use client";

import React from "react";
import Icon from "@/components/ui/Icon";
import CTAButton from "@/components/ui/CTAButton";

export default function FAQSection() {
  const faqs = [
    {
      icon: "gavel",
      question: "Что будет, если заемщик перестанет платить?",
      answer:
        'В случае невыплаты включается четкий юридический механизм реализации залога. Так как мы выдаем займы с низким соотношением суммы займа к стоимости залога (обычно до 50–60% от рыночной стоимости), продажа объекта полностью покрывает тело долга, набежавшие проценты и все судебные издержки. Даже при срочной продаже с дисконтом вы остаетесь в плюсе и возвращаете свои средства.',
      highlights: ["низким соотношением суммы займа к стоимости залога", "50–60%"],
    },
    {
      icon: "trending_down",
      question: "А что если цены на недвижимость сильно упадут?",
      answer:
        "Мы закладываем запас прочности в 40-50%. Исторически, даже в самые тяжелые кризисы, недвижимость редко падала более чем на 20-30% в моменте. Кроме того, займы выдаются на короткий срок (6-12 месяцев), что снижает риски долгосрочных колебаний рынка. Перед сделкой мы проводим глубокую аналитику ликвидности объекта, чтобы исключить неликвид.",
      highlights: ["запас прочности в 40-50%"],
    },
    {
      icon: "group_add",
      question: "Зачем вы этому учите? Разве вы не плодите себе конкурентов?",
      answer:
        "Рынок частного кредитования под залог огромен и продолжает расти. Одной компании невозможно охватить все заявки. Мы строим экосистему партнеров, а не конкурентов. Обучая вас, мы получаем надежных соинвесторов для крупных сделок и расширяем географию присутствия. Вместе мы можем закрывать сделки, которые в одиночку были бы нам не под силу.",
      highlights: ["экосистему партнеров"],
    },
  ];

  return (
    <section className="w-full px-4 md:px-8 py-16 md:py-24 flex flex-col gap-12">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 text-[var(--accent-color)] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-pulse"></span>
            Вопросы и ответы
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            FAQ (Отработка страхов)
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Мы понимаем ваши сомнения. Вот честные ответы на самые сложные вопросы о рисках, гарантиях и рынке.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="w-full max-w-[960px] mx-auto flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group p-1 rounded-xl bg-[#1a1a1a] border border-[#333] open:border-[var(--accent-color)]/50 hover:border-[var(--accent-color)]/30 transition-all duration-300 shadow-sm"
              open={index === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 md:p-6 select-none">
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] shrink-0">
                    <Icon name={faq.icon} size={24} ariaHidden={true} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[var(--accent-color)] transition-colors text-left">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black/30 text-gray-400 group-open:bg-[var(--accent-color)] group-open:text-white transition-all duration-300 group-open:rotate-180 shrink-0">
                  <Icon name="expand_more" size={20} ariaHidden={true} />
                </div>
              </summary>
              <div className="px-5 md:px-6 pb-6 pt-0 ml-0 md:ml-14">
                <div className="h-px w-full bg-[#333] mb-4"></div>
                <p className="text-[#a0a0a0] text-base leading-relaxed">
                  {(() => {
                    let text = faq.answer;
                    const parts: React.ReactNode[] = [];
                    let lastIndex = 0;

                    faq.highlights.forEach((highlight) => {
                      const index = text.indexOf(highlight, lastIndex);
                      if (index !== -1) {
                        parts.push(text.substring(lastIndex, index));
                        parts.push(
                          <span key={index} className="text-[var(--accent-color)] font-bold">
                            {highlight}
                          </span>
                        );
                        lastIndex = index + highlight.length;
                      }
                    });

                    parts.push(text.substring(lastIndex));
                    return parts;
                  })()}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6 mt-4">
          <p className="text-gray-400 text-sm font-medium">Не нашли ответ на свой вопрос?</p>
          <CTAButton
            className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-black rounded-lg font-bold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:translate-y-0 active:shadow-none overflow-hidden"
            ariaLabel="Задать вопрос эксперту"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <Icon name="chat" size={20} className="relative z-10" ariaHidden={true} />
            <span className="relative z-10">Задать вопрос эксперту</span>
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
