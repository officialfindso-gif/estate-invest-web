import Link from "next/link";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";

const categoriesQuery = groq`
*[_type=="category"] | order(order asc, title asc){
  _id,
  title,
  "slug": slug.current
}
`;

// Статьи
const postsQuery = groq`
*[
  _type=="post"
  && ($category == null || category->slug.current == $category)
  && ($q == null || title match $q || excerpt match $q || pt::text(body) match $q)
]
| order(publishedAt desc)[0...50]{
  _id,
  _type,
  title,
  excerpt,
  publishedAt,
  "slug": slug.current,
  category->{ title, "slug": slug.current },
  mainImage{ asset, alt }
}
`;

// Кейсы (подстрой имена полей под твой casesType, если отличаются)
const casessQuery = groq`
*[
  _type=="cases"
  && (!defined($q) || title match $q || excerpt match $q || summary match $q || pt::text(body) match $q)
]
| order(publishedAt desc)[0...50]{
  _id,
  _type,
  title,
  excerpt,
  summary,
  publishedAt,
  "slug": slug.current,
  coverImage{ asset, alt }
}
`;

type SearchParams = { category?: string; q?: string };

function buildHref(opts: { category?: string; q?: string }) {
  const params = new URLSearchParams();
  if (opts.category && opts.category !== "all") params.set("category", opts.category);
  if (opts.q && opts.q.trim()) params.set("q", opts.q.trim());
  const s = params.toString();
  return s ? `/blog?${s}` : "/blog";
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { category, q } = await searchParams;

  const activeCategory = typeof category === "string" ? category : "all";
  const qRaw = typeof q === "string" ? q.trim() : "";
  const qForMatch = qRaw ? `${qRaw}*` : null;

  const categories = await client.fetch(categoriesQuery);

  // Вкладки: "Все статьи" + категории + "Кейсы"
  // (если хочешь "Кейсы" третьей — переставим)
  const tabs: Array<{ title: string; slug: string }> = [
    { title: "Все статьи", slug: "all" },
    ...categories.map((c: any) => ({ title: c.title, slug: c.slug })),
  ];

  // Достаём контент по активной вкладке
  const iscasessTab = activeCategory === "casess";
  const isAllTab = activeCategory === "all";

  const [posts, casess] = await Promise.all([
    iscasessTab ? Promise.resolve([]) : client.fetch(postsQuery, {
      category: !isAllTab ? activeCategory : null,
      q: qForMatch ?? null,
    }),
    isAllTab || iscasessTab
      ? client.fetch(casessQuery, { q: qForMatch ?? null })
      : Promise.resolve([]),
  ]);

  // Собираем единый список для “all”
  const items = (isAllTab ? [...posts, ...casess] : iscasessTab ? casess : posts)
    .map((x: any) => {
      const image = x.mainImage?.asset ? x.mainImage : x.coverImage?.asset ? x.coverImage : null;
      const excerpt = x.excerpt ?? x.summary ?? "";
      const href = x._type === "cases" ? `/casess/${x.slug}` : `/blog/${x.slug}`;
      const badge = x._type === "cases" ? "Кейс" : (x.category?.title ?? "Блог");
      return {
        _id: x._id,
        _type: x._type,
        title: x.title,
        excerpt,
        publishedAt: x.publishedAt,
        href,
        badge,
        image,
      };
    })
    .sort((a: any, b: any) => {
      const da = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const db = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return db - da;
    })
    .slice(0, 50);

  return (
    <main className="min-h-screen bg-[#171612] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-10 lg:px-16 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            БАЗА ЗНАНИЙ <span style={{ color: 'var(--accent-color)' }}>ИНВЕСТОРА</span>
          </h1>
          <p className="mt-3 text-[#b6b1a0] max-w-2xl">
            Статьи, аналитика, кейсы и юридические нюансы — всё в одном месте.
          </p>
        </div>

        {/* Tabs + Search */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-[#37342a] pb-4 mb-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-6">
            {tabs.map((t) => {
              const isActive = t.slug === activeCategory;
              return (
                <Link
                  key={t.slug}
                  href={buildHref({ category: t.slug, q: qRaw })}
                  className={`text-sm font-semibold transition-colors ${
                    isActive ? "text-white" : "text-[#b6b1a0] hover:text-white"
                  }`}
                >
                  <span className="relative">
                    {t.title}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 h-0.5 w-full" style={{ backgroundColor: 'var(--accent-color)' }} />
                    )}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Search */}
          <form action="/blog" method="get" className="w-full md:w-[360px]">
            {activeCategory !== "all" && (
              <input type="hidden" name="category" value={activeCategory} />
            )}
            <input
              name="q"
              defaultValue={qRaw}
              placeholder="Поиск по материалам…"
              className="w-full rounded-lg bg-[#201d12] border border-[#37342a] px-4 py-2 text-sm text-white placeholder-[#6e6b62] focus:outline-none focus:ring-2" style={{ '--tw-ring-color': 'rgba(212,175,55,0.4)' } as any}
            />
          </form>
        </div>

        {/* Empty */}
        {items.length === 0 ? (
          <div className="rounded-xl border border-[#37342a] bg-[#201d12] p-6">
            <div className="text-lg font-bold">Ничего не найдено</div>
            <div className="mt-2 text-[#b6b1a0] text-sm">
              Попробуй изменить вкладку или запрос поиска.
            </div>
            <Link
              className="inline-flex mt-4 text-sm font-bold hover:text-white transition-colors" style={{ color: 'var(--accent-color)' }}
              href="/blog"
            >
              Сбросить фильтры →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {items.map((item: any) => (
              <Link
                key={item._id}
                href={item.href}
                className="group rounded-xl overflow-hidden border border-[#37342a] bg-[#201d12] transition-all" style={{ '--hover-border-color': 'rgba(212,175,55,0.6)' } as any}
              >
                <div className="relative h-52 bg-black/20">
                  {item.image?.asset ? (
                    <Image
                      src={urlFor(item.image).width(1200).height(700).url()}
                      alt={item.image?.alt ?? item.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    <div className="h-full w-full bg-[#171612]" />
                  )}

                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#171612]/80 text-[10px] font-bold tracking-wider uppercases rounded" style={{ borderColor: 'rgba(212,175,55,0.3)', color: 'var(--accent-color)' }}>
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-lg font-bold leading-snug transition-colors group-hover:" style={{ '--group-hover-color': 'var(--accent-color)' } as any}>
                    {item.title}
                  </div>
                  <div className="mt-3 text-sm text-[#b6b1a0] line-clamp-3">
                    {item.excerpt}
                  </div>

                  <div className="mt-5 text-xs text-[#6e6b62] flex items-center justify-between">
                    <span>
                      {item.publishedAt
                        ? new Date(item.publishedAt).toLocaleDateString("ru-RU")
                        : ""}
                    </span>
                    <span className="font-bold" style={{ color: 'var(--accent-color)' }}>Читать →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
