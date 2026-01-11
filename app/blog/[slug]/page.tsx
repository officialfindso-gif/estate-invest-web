import Image from "next/image";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";

import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import { portableTextComponents } from "@/components/PortableTextComponents";

const query = groq`
*[_type=="post" && slug.current == $slug][0]{
  _id,
  title,
  excerpt,
  publishedAt,
  "slug": slug.current,

  category->{ title, "slug": slug.current },

  author->{
    name,
    title,
    image{ asset, alt }
  },

  mainImage{
    alt,
    asset
  },

  mainImageCaption,
  body
}
`;

type Params = { slug: string };

type SanityImage = {
  asset?: { _ref?: string };
  alt?: string;
};

type Post = {
  _id: string;
  title?: string;
  excerpt?: string;
  publishedAt?: string;
  slug?: string;

  category?: { title?: string; slug?: string };

  author?: {
    name?: string;
    title?: string;
    image?: SanityImage;
  };

  mainImage?: SanityImage;
  mainImageCaption?: string;

  body?: any[];
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  const post = await client.fetch<Post | null>(query, { slug });

  if (!post) return <div className="p-6">Не найдено</div>;

  // ✅ Безопасные URL-ы картинок (если asset._ref нет — не строим urlFor)
  const authorImageUrl =
    post.author?.image?.asset?._ref
      ? urlFor(post.author.image).width(96).height(96).url()
      : null;

  const mainImageUrl =
    post.mainImage?.asset?._ref
      ? urlFor(post.mainImage).width(1600).height(900).url()
      : null;

  const categoryTitle = post.category?.title
    ? post.category.title.toUpperCase()
    : "БЛОГ";

  const title = post.title ?? "Без названия";

  const published =
    post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString("ru-RU", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "";

  return (
    <main className="min-h-screen bg-[#171612] text-white">
      <div className="mx-auto w-full max-w-[960px] px-4 md:px-6 py-10">
        {/* Category badge */}
        <div className="mb-4">
          <span className="inline-flex items-center justify-center w-fit px-3 py-1 text-xs font-bold tracking-wider rounded" style={{ backgroundColor: 'rgba(212,175,55,0.1)', color: 'var(--accent-color)', borderColor: 'rgba(212,175,55,0.3)' }}>
            {categoryTitle}
          </span>
        </div>

        {/* Title + excerpt */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
          {title}
        </h1>

        {post.excerpt ? (
          <p className="mt-4 text-[#b6b1a0] text-lg md:text-xl font-light leading-relaxed">
            {post.excerpt}
          </p>
        ) : null}

        {/* Author row */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between border-y border-[#37342a] py-5 gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full overflow-hidden border border-[#37342a] bg-[#201d12]">
              {/* ✅ Не падаем, если фото автора нет */}
              {authorImageUrl ? (
                <Image
                  src={authorImageUrl}
                  alt={post.author?.image?.alt ?? post.author?.name ?? "Автор"}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              ) : null}
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-white text-sm font-bold leading-tight">
                {post.author?.name ?? "—"}
              </span>
              <span className="text-[#b6b1a0] text-xs leading-tight mt-1">
                {post.author?.title ?? ""}
              </span>
            </div>
          </div>

          <div className="text-[#b6b1a0] text-sm">{published}</div>
        </div>

        {/* Cover image */}
        {/* ✅ Рендерим только если URL реально получился */}
        {mainImageUrl ? (
          <figure className="mt-10">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#201d12]" style={{ borderColor: 'rgba(212,175,55,0.4)' }}>
              <Image
                src={mainImageUrl}
                alt={post.mainImage?.alt ?? title}
                fill
                sizes="(max-width: 960px) 100vw, 960px"
                className="object-cover"
                priority
              />
            </div>

            {post.mainImageCaption ? (
              <figcaption className="text-right text-[#6e6b62] text-xs mt-3">
                {post.mainImageCaption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}

        {/* Body */}
        <article className="mt-10 prose prose-invert max-w-none">
          <PortableText value={post.body ?? []} components={portableTextComponents} />
        </article>
      </div>
    </main>
  );
}
