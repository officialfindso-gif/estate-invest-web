import Link from "next/link";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";

const casessQuery = groq`
*[_type=="cases"] | order(publishedAt desc)[0...50]{
  _id,
  title,
  "slug": slug.current,
  location,
  status,
  loanAmount,
  termMonths,
  yieldAnnual,
  cushion,
  summary,
  coverImage{ asset, alt }
}
`;

export default async function Page() {
  const casess = await client.fetch(casessQuery);

  return (
    <main className="min-h-screen bg-[#171612] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-10 lg:px-16 py-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            РЕАЛЬНЫЕ <span style={{ color: 'var(--accent-color)' }}>КЕЙСЫ</span>
          </h1>
          <p className="mt-3 text-[#b6b1a0] max-w-2xl">
            Структура сделок, цифры и итоговая доходность.
          </p>
        </div>

        {casess.length === 0 ? (
          <div className="rounded-xl border border-[#37342a] bg-[#201d12] p-6">
            <div className="text-lg font-bold">Кейсов пока нет</div>
            <div className="mt-2 text-[#b6b1a0] text-sm">
              Добавь первый кейс в Sanity → “Кейсы” → “Create”.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {casess.map((c: any) => (
              <Link
                key={c._id}
                href={`/casess/${c.slug}`}
                className="group rounded-xl overflow-hidden border border-[#37342a] bg-[#201d12] transition-all" style={{ '--hover-border': 'rgba(212,175,55,0.6)' } as any}
              >
                <div className="relative h-56 bg-black/20">
                  {c.coverImage?.asset ? (
                    <Image
                      src={urlFor(c.coverImage).width(1600).height(900).url()}
                      alt={c.coverImage?.alt ?? c.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    <div className="h-full w-full bg-[#23201a]" />
                  )}

                  {c.location && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-[#171612]/80 border border-white/10 text-white text-[11px] font-semibold rounded-full">
                        {c.location}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="text-lg font-bold leading-snug transition-colors" style={{ '--group-hover-text': 'var(--accent-color)' } as any}>
                    {c.title}
                  </div>

                  {c.summary && (
                    <div className="mt-3 text-sm text-[#b6b1a0] line-clamp-3">
                      {c.summary}
                    </div>
                  )}

                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-lg border border-white/5 bg-black/20 p-3">
                      <div className="text-[#b6b1a0] text-xs">Сумма</div>
                      <div className="font-bold">{c.loanAmount ?? "—"} ₽</div>
                    </div>
                    <div className="rounded-lg border border-white/5 bg-black/20 p-3">
                      <div className="text-[#b6b1a0] text-xs">Срок</div>
                      <div className="font-bold">{c.termMonths ?? "—"} мес</div>
                    </div>
                    <div className="rounded-lg border border-white/5 bg-black/20 p-3">
                      <div className="text-[#b6b1a0] text-xs">Доходность</div>
                      <div className="font-bold" style={{ color: 'var(--accent-color)' }}>{c.yieldAnnual ?? "—"}%</div>
                    </div>
                    <div className="rounded-lg border border-white/5 bg-black/20 p-3">
                      <div className="text-[#b6b1a0] text-xs">Запас</div>
                      <div className="font-bold">{c.cushion ?? "—"}%</div>
                    </div>
                  </div>

                  <div className="mt-5 text-xs text-[#6e6b62] flex items-center justify-between">
                    <span>{c.status ?? ""}</span>
                    <span className="font-bold" style={{ color: 'var(--accent-color)' }}>Смотреть →</span>
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
