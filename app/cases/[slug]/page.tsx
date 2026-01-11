import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/PortableTextComponents";

const query = groq`
*[_type=="cases" && slug.current == $slug][0]{
  _id,
  title,
  location,
  status,
  loanAmount,
  termMonths,
  yieldAnnual,
  cushion,
  summary,
  coverImage{ asset, alt },
  body
}
`;

type Params = { slug: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = await client.fetch(query, { slug });

  if (!c) return <div className="p-6">Не найдено</div>;

  return (
    <main className="min-h-screen bg-[#171612] text-white">
      <div className="mx-auto w-full max-w-[960px] px-4 md:px-6 py-10">
        <div className="mb-4">
          <span className="inline-flex items-center justify-center w-fit px-3 py-1 text-xs font-bold tracking-wider rounded" style={{ backgroundColor: 'rgba(212,175,55,0.1)', color: 'var(--accent-color)', borderColor: 'rgba(212,175,55,0.3)' }}>
            КЕЙС
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight">
          {c.title}
        </h1>

        {c.summary && (
          <p className="mt-4 text-[#b6b1a0] text-lg md:text-xl font-light leading-relaxed">
            {c.summary}
          </p>
        )}

        {c.coverImage?.asset && (
          <div className="mt-10">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#201d12]" style={{ borderColor: 'rgba(212,175,55,0.4)' }}>
              <Image
                src={urlFor(c.coverImage).width(1600).height(900).url()}
                alt={c.coverImage?.alt ?? c.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="rounded-lg border border-white/5 bg-black/20 p-4">
            <div className="text-[#b6b1a0] text-xs">Сумма</div>
            <div className="font-bold">{c.loanAmount ?? "—"} ₽</div>
          </div>
          <div className="rounded-lg border border-white/5 bg-black/20 p-4">
            <div className="text-[#b6b1a0] text-xs">Срок</div>
            <div className="font-bold">{c.termMonths ?? "—"} мес</div>
          </div>
          <div className="rounded-lg border border-white/5 bg-black/20 p-4">
            <div className="text-[#b6b1a0] text-xs">Доходность</div>
            <div className="font-bold" style={{ color: 'var(--accent-color)' }}>{c.yieldAnnual ?? "—"}%</div>
          </div>
          <div className="rounded-lg border border-white/5 bg-black/20 p-4">
            <div className="text-[#b6b1a0] text-xs">Запас</div>
            <div className="font-bold">{c.cushion ?? "—"}%</div>
          </div>
        </div>

        {c.body && (
          <article className="mt-10">
            <PortableText value={c.body} components={portableTextComponents} />
          </article>
        )}
      </div>
    </main>
  );
}
