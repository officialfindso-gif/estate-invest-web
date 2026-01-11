import Link from "next/link";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";

const postsQuery = groq`
*[_type=="post"]
| order(publishedAt desc){
  _id,
  title,
  excerpt,
  publishedAt,
  "slug": slug.current,
  "category": categories[0]->{
    title,
    "slug": slug.current
  },
  mainImage{ asset, alt }
}
`;

// Demo articles data
const demoArticles = [
  {
    _id: "demo-1",
    title: "Тренды коммерческой недвижимости 2024: Офисы vs Коворкинги",
    excerpt: "Глубокий анализ изменения спроса на офисные пространства в условиях гибридной работы. Стоит ли инвестировать в классические бизнес-центры?",
    badge: "АНАЛИТИКА",
    badgeStyle: "gold",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv6zjDJeuMJWigSev3foge5orT5vrjTdTxzhcuBjWRBYRVihVxyAsbTbfOpR-u4i2yJSNopM9zFJo_0EJxABiXU0rW4M9xtFiXlmwX12_u7EUMLDIRbeD8PdOGFhXkos1KtEOIf-Dz_GFl3no9QjCiARd8ZHO260TvSsvkFHaPUm48vQ80cWC5zOUfAR_d-lHh7O2yHeyYtwFXT4srnx1wB2zGjq-D2P3BqFus2shkxYMo0NKPuaM9B5J9x5mYEHQXsalAKj3jzt4",
  },
  {
    _id: "demo-2",
    title: "Редевелопмент исторического особняка: ROI 28%",
    excerpt: "Практический кейс реконструкции здания XIX века под элитные апартаменты. Разбор сметы, сроков и итоговой доходности проекта.",
    badge: "КЕЙСЫ",
    badgeStyle: "border",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrPsnsVAtcLtyn88Bgl9jP5e3qeBMjsfzj_J_Xqe7D3gGNI2vYMcigV7h9MuglVULc0ShPpWCqI7qmp-Nd9rSzsLu4rrvUDBtfz7qcue8eWJEeGwzF3SHwTtWCUf_DkPhEFJav2MIVZjYP6zaQBsBcnVj5vSLg8HNkZi9XndeL9KhcmNcmm7R82qABjmU-7TmG5QRqFsmbFe1CU7E60vfcW5qI2NMCzLkomLOMTnDC87QQP6fhgABJltWVNSFulB8YV5KY3kmH_XQ",
  },
  {
    _id: "demo-3",
    title: "Налоговые льготы для иностранных инвесторов в 2024",
    excerpt: "Как законно оптимизировать налогообложение при покупке недвижимости за рубежом. Обзор юрисдикций с самыми выгодными условиями.",
    badge: "ЮРИДИЧЕСКИЕ ТОНКОСТИ",
    badgeStyle: "border",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUy14KQn0Yf_GXd1DvgzNidg93eKLKDazZhGcizIxhvCKU5TMPcRC80KCOv3iRh8thWlSH1jEg-g_cdQHIWBbBWMnSJMoePQCm9XAPMGpRvnv5ZQpU4GUHABellw-7Oe9oVZARLQbRCsG6_T4mVsXmfWjDIYyUuFNn9QUeCWQyF00tYwTKlTZ-AdP_F1dLAXKClKLvyI4Wxhsd_OlSTwOEMhhi1mP7Mws07RRp9hMXMYd6kdMXeH4qk9JjlN5G5THBNE01uLdjlAs",
  },
  {
    _id: "demo-4",
    title: "Доходность: Жилая vs Складская недвижимость",
    excerpt: "Сравнительный анализ двух популярных секторов. Почему склады становятся \"новым золотом\" для частных инвесторов.",
    badge: "АНАЛИТИКА",
    badgeStyle: "gold",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvoeIaVRMWgyi4Hz3zpS6zjHNh73PUrltHd-2Aamrj-C8dAFnkN08hbA9wt0BLqShu_nA-iExSIujFMMahLX3-GfBFkbjIqEP8hgxjC64lhPowwrIzqQM325e8cqr_77e20EeSzTw70hnjjE7OIVJvOxozTVxLZ03huhXnbFktpKnAbg0kyb7Wvc-Cvg49Co2i9ZTHsyUtAG4ZQEiTRFTJkUzXim0P6Wha-n4PflkrsYnWHFBRMfUGgEBFC6ptBww82UmvR4_fJD8",
  },
  {
    _id: "demo-5",
    title: "Как оценить ликвидность объекта перед покупкой",
    excerpt: "Чек-лист из 10 пунктов для начинающего инвестора. На какие неочевидные факторы обращать внимание при первом осмотре.",
    badge: "ОБУЧЕНИЕ",
    badgeStyle: "border",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvsJBBL0yZJVcXZvhIzBf6vYsDorIxcdv5RlO87waMLSGGwngOYiKZn2Kb8BKBSUZq0qIM2-5Eex5ti3P1bb9pGF4ozYTL2qNzOhDrVePdIPeewg9A6OUk2Vx6d6ALaHlrNpB3Fq4_yHC6LJUj911jZg9JDhYTSZ_eFF0DSqic0fzebihFDbsdrb9g2SdQwusCrk7oMYoF7jsYI6Cr0uNnQOwYj-ObHGtPalCfz3YOXSvU7MJgSez0RLoigXbOhC3FIH5GOeHJbuA",
  },
  {
    _id: "demo-6",
    title: "Дубай или Лондон: Где безопаснее \"парковать\" капитал?",
    excerpt: "Сравниваем два крупнейших хаба недвижимости по параметрам доходности, стабильности валюты и защиты прав собственника.",
    badge: "АНАЛИТИКА",
    badgeStyle: "gold",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdc5bIudB5sqz-ZUQEbPjycsv_4QKMdoLm_m3svGHSI0zgRmu_P-8ag8KbSY3PYSJ1NKYLvOgncLP9bND0P5ReakbzE_XDA0Va08JhEgYSgvBO5TpIXRs2OPQgI_8z-Fb5dLL3mBEY42ogcVTOtWOSx_J1kbcuNFVOo8_ZgnSMMxvNt9ZJRzjZWaAJDW7-h-oLyw6x_2f0d5UsjyVv_FMtKy_oXImApKGb93k3Rkt3IBNZyT6liOIX9LivzkGYfCUL07fTh62C310",
  },
];

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = parseInt(page || "1", 10);
  const articlesPerPage = 9;

  const posts = await client.fetch(postsQuery);

  // Combine real posts with demo articles
  const allArticles = [
    ...posts.map((post: any) => ({
      _id: post._id,
      title: post.title,
      excerpt: post.excerpt,
      badge: post.category?.title?.toUpperCase() ?? "БЛОГ",
      badgeStyle: "gold",
      imageUrl: post.mainImage?.asset ? urlFor(post.mainImage).width(1200).height(700).url() : null,
      imageAlt: post.mainImage?.alt ?? post.title,
      slug: post.slug,
      isReal: true,
    })),
    ...demoArticles.map(demo => ({ ...demo, isReal: false })),
  ];

  // Calculate pagination
  const totalArticles = allArticles.length;
  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = allArticles.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen bg-[#171612] text-white">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center bg-[#171612]">
        <div className="w-full max-w-[1280px] px-4 sm:px-10 py-10 lg:py-16">
          <div className="relative rounded-2xl overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center p-8 lg:p-16 gap-8 bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(23, 22, 18, 0.7), rgba(23, 22, 18, 0.9)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrBQf1oNPqJs5XpF06E2d07TInV9g08yDlUUjQOfkE7P8MfT_OhpymxPJnfAHSwrp1wm8fGFgTTlWvU1dydMpk3v-HkRjw_1rYTNT97l53ou574KvZCVwG-FHwpqoGMunQ0wFwIOLqLnGWOTxqcYZzTre1GnjY1-Hbasnhmm1ZTgr-Y1PuOG03ZqwEC1tyktYrvFwAbVj4uddfN4XJEHIS1stlKHaK5lhyN3EWhpqL7dQtg7xVEEE_EPDNc05YMa2ZMKOySZp9BK0')"}}>
            <div className="flex flex-col gap-4 max-w-3xl z-10">
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                БАЗА ЗНАНИЙ <span style={{color: 'var(--accent-color)'}}>ИНВЕСТОРА</span>
              </h1>
              <h2 className="text-[#b6b1a0] text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                Экспертные идеи, рыночные стратегии и юридические нюансы для высокодоходных инвестиций в премиальную недвижимость.
              </h2>
            </div>
            
            <div className="w-full max-w-[600px] z-10">
              <div className="flex w-full items-stretch rounded-lg h-12 sm:h-14 bg-[#25231d] border border-[#514c3e] focus-within:border-[var(--accent-color)] transition-colors">
                <div className="flex items-center justify-center pl-4 pr-2 text-[#b6b1a0]">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input 
                  className="flex w-full bg-transparent text-white placeholder:text-[#b6b1a0]/50 border-none focus:ring-0 text-sm sm:text-base font-normal h-full" 
                  placeholder="Поиск статей, аналитики и кейсов..."
                />
                <div className="p-1">
                  <button className="h-full px-6 text-[#171612] text-sm font-bold rounded-md transition-colors" style={{backgroundColor: 'var(--accent-color)'}}>
                    Найти
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="w-full bg-[#171612] sticky top-0 z-40 border-b border-[#37342a]/50 backdrop-blur-md bg-opacity-95">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="flex items-center gap-8 overflow-x-auto py-1"  style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            <Link href="/blog" className="flex items-center justify-center border-b-2 py-4 min-w-max px-2" style={{borderColor: 'var(--accent-color)'}}>
              <p className="text-sm font-bold tracking-[0.015em] text-white">Все статьи</p>
            </Link>
            <Link href="/blog?filter=cases" className="flex items-center justify-center border-b-2 border-transparent hover:border-[#514c3e] text-[#b6b1a0] hover:text-white py-4 min-w-max px-2 transition-all">
              <p className="text-sm font-bold tracking-[0.015em]">Кейсы</p>
            </Link>
            <Link href="/blog?filter=analytics" className="flex items-center justify-center border-b-2 border-transparent hover:border-[#514c3e] text-[#b6b1a0] hover:text-white py-4 min-w-max px-2 transition-all">
              <p className="text-sm font-bold tracking-[0.015em]">Аналитика рынка</p>
            </Link>
            <Link href="/blog?filter=legal" className="flex items-center justify-center border-b-2 border-transparent hover:border-[#514c3e] text-[#b6b1a0] hover:text-white py-4 min-w-max px-2 transition-all">
              <p className="text-sm font-bold tracking-[0.015em]">Юридические тонкости</p>
            </Link>
            <Link href="/blog?filter=education" className="flex items-center justify-center border-b-2 border-transparent hover:border-[#514c3e] text-[#b6b1a0] hover:text-white py-4 min-w-max px-2 transition-all">
              <p className="text-sm font-bold tracking-[0.015em]">Обучение</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="w-full bg-[#171612]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedArticles.map((article) => (
              <article key={article._id} className="group flex flex-col h-full bg-[#1e1d18] border border-[#37342a] hover:border-[var(--accent-color)]/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/50 hover:-translate-y-1">
                {/* Image */}
                <div className="aspect-video w-full relative overflow-hidden">
                  {article.imageUrl ? (
                    <>
                      {article.isReal ? (
                        <Image
                          src={article.imageUrl}
                          alt={article.imageAlt || article.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url(${article.imageUrl})`}} />
                      )}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-[#0a0b0d]" />
                  )}
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    {article.badgeStyle === "gold" ? (
                      <span className="inline-block px-3 py-1 text-[#171612] text-xs font-bold rounded uppercase tracking-wider" style={{backgroundColor: 'var(--accent-color)'}}>
                        {article.badge}
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 bg-[#171612] border text-xs font-bold rounded uppercase tracking-wider" style={{borderColor: 'var(--accent-color)', color: 'var(--accent-color)'}}>
                        {article.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <h3 className="text-white text-xl font-bold leading-tight group-hover:text-[var(--accent-color)] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#b6b1a0] text-sm font-normal leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-2">
                    {article.isReal ? (
                      <Link href={`/blog/${article.slug}`} className="inline-flex items-center text-sm font-bold hover:text-white transition-colors gap-2 group/link" style={{color: 'var(--accent-color)'}}>
                        Читать далее
                        <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                      </Link>
                    ) : (
                      <span className="inline-flex items-center text-sm font-bold gap-2" style={{color: 'var(--accent-color)'}}>
                        Читать далее
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center mt-16 pb-8">
              <nav className="flex items-center gap-2">
                {/* Previous Button */}
                {currentPage > 1 ? (
                  <Link 
                    href={`/blog?page=${currentPage - 1}`}
                    className="flex size-10 items-center justify-center rounded-lg border border-[#37342a] text-white hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors"
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </Link>
                ) : (
                  <button 
                    disabled
                    className="flex size-10 items-center justify-center rounded-lg border border-[#37342a] text-[#37342a] cursor-not-allowed"
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                )}

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  // Show first page, last page, current page, and pages around current
                  const showPage = 
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1);

                  // Show ellipsis
                  const showEllipsisBefore = pageNum === currentPage - 2 && currentPage > 3;
                  const showEllipsisAfter = pageNum === currentPage + 2 && currentPage < totalPages - 2;

                  if (showEllipsisBefore || showEllipsisAfter) {
                    return (
                      <span key={`ellipsis-${pageNum}`} className="flex size-10 items-center justify-center text-[#b6b1a0]">
                        ...
                      </span>
                    );
                  }

                  if (!showPage) return null;

                  if (pageNum === currentPage) {
                    return (
                      <button 
                        key={pageNum}
                        className="flex size-10 items-center justify-center rounded-lg text-[#171612] font-bold" 
                        style={{backgroundColor: 'var(--accent-color)'}}
                      >
                        {pageNum}
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={pageNum}
                      href={`/blog?page=${pageNum}`}
                      className="flex size-10 items-center justify-center rounded-lg border border-[#37342a] text-white hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors"
                    >
                      {pageNum}
                    </Link>
                  );
                })}

                {/* Next Button */}
                {currentPage < totalPages ? (
                  <Link
                    href={`/blog?page=${currentPage + 1}`}
                    className="flex size-10 items-center justify-center rounded-lg border border-[#37342a] text-white hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors"
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="flex size-10 items-center justify-center rounded-lg border border-[#37342a] text-[#37342a] cursor-not-allowed"
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                )}
              </nav>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
