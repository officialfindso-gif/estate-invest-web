import Link from "next/link";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import FeatureCard from "@/components/FeatureCard";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Hero from "@/components/Hero";
import Card from "@/components/ui/Card";
import ProblemSection from "@/components/ProblemSection";
import AudienceSelection from "@/components/AudienceSelection";
import ProgramModules from "@/components/ProgramModules";
import UnderwritingSection from "@/components/UnderwritingSection";
import MotivationSection from "@/components/MotivationSection";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import RegistrationSection from "@/components/RegistrationSection";
import AuthorSection from "@/components/AuthorSection";
import FAQSection from "@/components/FAQSection";
import type { Post, Case } from "@/types/sanity";
export const revalidate = 60; // обновление данных раз в минуту (можно 300)

const latestPostsQuery = groq`
*[_type=="post" && defined(slug.current)]
| order(publishedAt desc)[0...3]{
  _id,
  title,
  excerpt,
  publishedAt,
  "slug": slug.current,
  "category": categories[0]->{ title, "slug": slug.current },
  mainImage{ asset, alt }
}
`;

const latestCasesQuery = groq`
*[_type=="case" && defined(slug.current)]
| order(publishedAt desc, _createdAt desc)[0...2]{
  _id,
  title,
  summary,
  "slug": slug.current,
  location,
  status,
  loanAmount,
  termMonths,
  yieldAnnual,
  cushion,
  coverImage{ asset, alt }
}
`;

function formatRuDate(date?: string) {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString("ru-RU");
  } catch {
    return "";
  }
}

export default async function Page() {
  const [posts, cases] = await Promise.all([
    client.fetch(latestPostsQuery),
    client.fetch(latestCasesQuery),
  ]);

  return (
    <main id="main-content" className="min-h-screen bg-[#171612] text-white">
      {/* HERO — full-width section */}
        <Hero />

      {/* PROBLEMS — second section (surrogate reality) */}
        <ProblemSection />

      {/* AUDIENCE SELECTION — choose your role */}
        <AudienceSelection />

      {/* PROGRAM MODULES — course modules */}
        <ProgramModules />

      {/* UNDERWRITING — security and process */}
        <UnderwritingSection />

      {/* MOTIVATION — financial freedom calculator */}
        <MotivationSection />

      {/* INVESTMENT CALCULATOR — calculate your returns */}
        <InvestmentCalculator />

      {/* REGISTRATION — sign up form */}
        <RegistrationSection />

      {/* AUTHOR — founder profile */}
        <AuthorSection />

      {/* FAQ — frequently asked questions */}
        <FAQSection />

      {/* Main content container (constrained) */}
      <div className="relative mx-auto w-full max-w-[1200px] px-4 md:px-10 lg:px-16 py-12 md:py-16">

        {/* LATEST POSTS */}
        <section className="py-8 md:py-12">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight tracking-[-0.02em] text-white mb-4 uppercase">
              ПОЛЕЗНЫЕ МАТЕРИАЛЫ И <span style={{ color: 'var(--accent-color)' }}>КЕЙСЫ</span>
            </h2>
            <p className="text-[#a0a0a0] text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Разбираем рынок, делимся опытом и показываем реальные цифры.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {posts?.map((post: Post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col h-full bg-[#201e1b] border border-[#333] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(212,175,53,0.15)] hover:border-[var(--accent-color)] cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-square w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/30 z-10 transition-opacity group-hover:bg-black/10" />
                  {post.mainImage?.asset ? (
                    <Image
                      src={urlFor(post.mainImage).width(1200).height(700).url()}
                      alt={post.mainImage?.alt ?? post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#23201a]" />
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-3 py-1 bg-[var(--accent-color)]/90 text-[#171612] text-xs font-bold tracking-wider uppercase rounded-sm backdrop-blur-sm">
                      {post.category?.title ?? "БЛОГ"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6 md:p-7">
                  <h3 className="text-white text-xl font-bold leading-snug mb-3 group-hover:text-[var(--accent-color)] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium mt-auto" style={{ color: 'var(--accent-color)' }}>
                    <span className="mr-2 border-b border-transparent group-hover:border-[var(--accent-color)] transition-all">
                      Читать статью
                    </span>
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center">
            <Link
              href="/blog"
              className="group flex items-center justify-center px-8 py-3 bg-transparent border text-white text-sm font-semibold tracking-wider uppercase rounded transition-all duration-300 hover:bg-[var(--accent-color)] hover:text-[#171612]"
              style={{ borderColor: 'var(--accent-color)' }}
            >
              <span>ПЕРЕЙТИ В БЛОГ</span>
              <span className="material-symbols-outlined ml-2 text-[20px] transition-transform group-hover:translate-x-1">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </section>

        {/* CASES */}
        <section className="py-8 md:py-12">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-12">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em] uppercase text-center relative pb-4">
              Реальные кейсы инвесторов
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full" style={{ backgroundColor: 'var(--accent-color)' }}></span>
            </h2>
            <p className="text-[#b6b1a0] mt-4 text-center max-w-2xl">
              Изучите структуру наших сделок: от суммы займа до итоговой доходности. Прозрачные цифры подтвержденные реальными выплатами.
            </p>
          </div>

          {/* Cases Grid */}
          <div className="flex flex-col gap-8 max-w-[1200px] mx-auto w-full">
            {cases && cases.length > 0 ? (
              // Real cases from Sanity
              cases.map((c: Case) => (
                <Link
                  key={c._id}
                  href={`/cases/${c.slug}`}
                  className="group relative flex flex-col lg:flex-row overflow-hidden rounded-xl bg-[#23201a] border hover:border-[var(--accent-color)] transition-colors duration-300 shadow-2xl"
                  style={{ borderColor: 'rgba(212,175,53,0.4)' }}
                >
                  {/* Image */}
                  <div className="w-full lg:w-5/12 h-64 lg:h-auto relative overflow-hidden">
                    {c.coverImage?.asset ? (
                      <>
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-transparent lg:to-[#23201a]/90 z-10" />
                        <Image
                          src={urlFor(c.coverImage).width(1600).height(900).url()}
                          alt={c.coverImage?.alt ?? c.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-[#1a1a1a]" />
                    )}
                    
                    {c.location && (
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider border border-white/10 flex items-center gap-1 z-20">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        {c.location}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-7/12 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-white leading-tight">{c.title}</h3>
                        {c.status && (
                          <span className="px-3 py-1 rounded text-sm font-semibold whitespace-nowrap hidden sm:block" style={{ backgroundColor: 'rgba(212,175,53,0.2)', color: 'var(--accent-color)' }}>
                            {c.status}
                          </span>
                        )}
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-y-6 gap-x-4 my-6 p-5 bg-black/20 rounded-lg border border-white/5">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--accent-color)' }}>payments</span>
                          <div className="flex flex-col">
                            <span className="text-[#b6b1a0] text-xs uppercase tracking-wider">Сумма займа</span>
                            <span className="text-white font-bold text-lg tabular-nums">{c.loanAmount ?? "—"} ₽</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--accent-color)' }}>calendar_month</span>
                          <div className="flex flex-col">
                            <span className="text-[#b6b1a0] text-xs uppercase tracking-wider">Срок</span>
                            <span className="text-white font-bold text-lg tabular-nums">{c.termMonths ?? "—"} месяцев</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--accent-color)' }}>trending_up</span>
                          <div className="flex flex-col">
                            <span className="text-[#b6b1a0] text-xs uppercase tracking-wider">Доходность</span>
                            <span className="font-bold text-xl tabular-nums" style={{ color: 'var(--accent-color)' }}>{c.yieldAnnual ?? "—"}% годовых</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--accent-color)' }}>pie_chart</span>
                          <div className="flex flex-col">
                            <span className="text-[#b6b1a0] text-xs uppercase tracking-wider">Запас прочности</span>
                            <span className="text-white font-bold text-lg tabular-nums">{c.cushion ?? "—"}%</span>
                          </div>
                        </div>
                      </div>

                      {c.summary && (
                        <div className="mb-6">
                          <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide opacity-80">Суть сделки</h4>
                          <p className="text-[#b6b1a0] text-sm leading-relaxed">{c.summary}</p>
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between group-hover:border-[var(--accent-color)]/30 transition-colors">
                      <span className="flex items-center gap-2 font-medium text-sm uppercase tracking-wider hover:text-white transition-colors" style={{ color: 'var(--accent-color)' }}>
                        Смотреть детали сделки
                        <span className="material-symbols-outlined text-[18px] transform transition-transform group-hover:translate-x-1">arrow_forward</span>
                      </span>
                      <span className="text-xs text-[#5a564a] hidden sm:inline-block">ID: {c._id.slice(-8)}</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              // Demo cases when no real data
              <>
                <article className="group relative flex flex-col lg:flex-row overflow-hidden rounded-xl bg-[#23201a] border hover:border-[var(--accent-color)] transition-colors duration-300 shadow-2xl" style={{ borderColor: 'rgba(212,175,53,0.4)' }}>
                  <div className="w-full lg:w-5/12 h-64 lg:h-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgDfB5oKS_zYXffJ0GfwQhRAcgSWXU-7EgM6SitbZ_5sGfqZyNS5iSaodldalwmgDpKmu9lPIwYWWbDphdRmvJXSlRKTNgQm6psETc4MNJ9-Ne-XrZVTedZAubqyJXCF5R42QdRqKlA7eex-jQhROeM_R61488nOdDAYLj13Sa16fsHY6P1wrBkYUSXxrO90XUkDpxCcgu0Xjs6ORSMknM_MqI3WqXJGrTI2jRXKOciNrtQjHP38qoESmWySE7AfgZTkAXQuT0ftI')" }} />
                    <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-transparent lg:to-[#23201a]/90" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider border border-white/10 flex items-center gap-1 z-20">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      Москва, ЦАО
                    </div>
                  </div>

                  <div className="w-full lg:w-7/12 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-white leading-tight">Займ под залог квартиры</h3>
                        <span className="px-3 py-1 rounded text-sm font-semibold whitespace-nowrap hidden sm:block" style={{ backgroundColor: 'rgba(212,175,53,0.2)', color: 'var(--accent-color)' }}>
                          Закрыт
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-y-6 gap-x-4 my-6 p-5 bg-black/20 rounded-lg border border-white/5">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--accent-color)' }}>payments</span>
                          <div className="flex flex-col">
                            <span className="text-[#b6b1a0] text-xs uppercase tracking-wider">Сумма займа</span>
                            <span className="text-white font-bold text-lg tabular-nums">5 000 000 ₽</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--accent-color)' }}>calendar_month</span>
                          <div className="flex flex-col">
                            <span className="text-[#b6b1a0] text-xs uppercase tracking-wider">Срок</span>
                            <span className="text-white font-bold text-lg tabular-nums">12 месяцев</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--accent-color)' }}>trending_up</span>
                          <div className="flex flex-col">
                            <span className="text-[#b6b1a0] text-xs uppercase tracking-wider">Доходность</span>
                            <span className="font-bold text-xl tabular-nums" style={{ color: 'var(--accent-color)' }}>48% годовых</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--accent-color)' }}>pie_chart</span>
                          <div className="flex flex-col">
                            <span className="text-[#b6b1a0] text-xs uppercase tracking-wider">Запас прочности</span>
                            <span className="text-white font-bold text-lg tabular-nums">45%</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide opacity-80">Суть сделки</h4>
                        <p className="text-[#b6b1a0] text-sm leading-relaxed">
                          Финансирование расширения бизнеса под залог жилой недвижимости в центре Москвы. Инвестор получал ежемесячные аннуитетные платежи. Полный возврат тела долга и процентов был произведен точно в срок.
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between group-hover:border-[var(--accent-color)]/30 transition-colors">
                      <span className="flex items-center gap-2 font-medium text-sm uppercase tracking-wider transition-colors" style={{ color: 'var(--accent-color)' }}>
                        Смотреть детали сделки
                        <span className="material-symbols-outlined text-[18px] transform transition-transform group-hover:translate-x-1">arrow_forward</span>
                      </span>
                      <span className="text-xs text-[#5a564a] hidden sm:inline-block">ID Сделки: #MSK-2023-84</span>
                    </div>
                  </div>
                </article>

                <article className="group relative flex flex-col lg:flex-row overflow-hidden rounded-xl bg-[#23201a] border hover:border-[var(--accent-color)] transition-colors duration-300 shadow-2xl" style={{ borderColor: 'rgba(212,175,53,0.4)' }}>
                  <div className="w-full lg:w-5/12 h-64 lg:h-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEpPzdpb2XIAivaMF_-_HujUZl12w0Shp6oO912SjzNHsQPI1IRsLF0j3FHgKP9HCakjJT8GA60jB-B1KoB5Oc3cOSg4-wwDJi2h68JT-OVg_eCAMIfT79TjvnDV53iGVfJy1dALXSKfyp_zOFk_q1JyXxIiOnT5RzZvuhlZiANXycQuCHDPq5-Zk-QopUQtdnffZlGJr8W--w0i-x_O9DoSwfJ3o7np2gnZeWig6K_ejnNhnOdor_5k38BLbFFcOB-Gbl3wNuYrU')" }} />
                    <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-transparent lg:to-[#23201a]/90" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider border border-white/10 flex items-center gap-1 z-20">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      Барвиха, МО
                    </div>
                  </div>

                  <div className="w-full lg:w-7/12 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-white leading-tight">Бридж-кредит на покупку дома</h3>
                        <span className="px-3 py-1 rounded text-sm font-semibold whitespace-nowrap hidden sm:block bg-emerald-900/40 text-emerald-400 border border-emerald-800/50">
                          Рефинансирован
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-y-6 gap-x-4 my-6 p-5 bg-black/20 rounded-lg border border-white/5">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--accent-color)' }}>payments</span>
                          <div className="flex flex-col">
                            <span className="text-[#b6b1a0] text-xs uppercase tracking-wider">Сумма займа</span>
                            <span className="text-white font-bold text-lg tabular-nums">12 500 000 ₽</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--accent-color)' }}>schedule</span>
                          <div className="flex flex-col">
                            <span className="text-[#b6b1a0] text-xs uppercase tracking-wider">Срок</span>
                            <span className="text-white font-bold text-lg tabular-nums">6 месяцев</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--accent-color)' }}>percent</span>
                          <div className="flex flex-col">
                            <span className="text-[#b6b1a0] text-xs uppercase tracking-wider">Доходность</span>
                            <span className="font-bold text-xl tabular-nums" style={{ color: 'var(--accent-color)' }}>36% годовых</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--accent-color)' }}>security</span>
                          <div className="flex flex-col">
                            <span className="text-[#b6b1a0] text-xs uppercase tracking-wider">Запас прочности</span>
                            <span className="text-white font-bold text-lg tabular-nums">50%</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide opacity-80">Суть сделки</h4>
                        <p className="text-[#b6b1a0] text-sm leading-relaxed">
                          Краткосрочный бридж-кредит под залог элитной загородной недвижимости. Заемщик использовал средства для закрытия кассового разрыва. Успешный выход из сделки через рефинансирование банковским кредитом.
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between group-hover:border-[var(--accent-color)]/30 transition-colors">
                      <span className="flex items-center gap-2 font-medium text-sm uppercase tracking-wider transition-colors" style={{ color: 'var(--accent-color)' }}>
                        Смотреть детали сделки
                        <span className="material-symbols-outlined text-[18px] transform transition-transform group-hover:translate-x-1">arrow_forward</span>
                      </span>
                      <span className="text-xs text-[#5a564a] hidden sm:inline-block">ID Сделки: #BAR-2023-12</span>
                    </div>
                  </div>
                </article>
              </>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-14 border-t border-[#37342a]">
          <div className="rounded-2xl p-7 md:p-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between" style={{ borderColor: 'rgba(212,175,55,0.3)', backgroundColor: 'rgba(212,175,55,0.1)' }}>
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-black text-white">
                Хочешь подбор стратегии под себя?
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#b6b1a0]">
                Оставь контакт — подготовим список шагов и материалов под твою цель.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold text-[#050505] transition-colors" style={{ backgroundColor: 'var(--accent-color)', '--hover-bg': '#b59325' } as any}
              >
                Начать с базы знаний
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center rounded-lg bg-transparent px-6 py-3 text-sm font-bold text-white transition-colors" style={{ borderColor: 'rgba(212,175,55,0.4)', '--hover-bg': 'rgba(212,175,55,0.1)' } as any}
              >
                Посмотреть кейсы
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-xs text-[#6e6b62] border-t border-[#37342a]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} frunze. Все права защищены.</div>
            <div className="flex gap-6">
              <Link href="/blog" className="hover:text-white transition-colors">
                Материалы
              </Link>
              <Link href="/cases" className="hover:text-white transition-colors">
                Кейсы
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
