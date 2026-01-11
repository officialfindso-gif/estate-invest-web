import type { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 mb-6 text-2xl md:text-3xl font-black tracking-tight" style={{ color: 'var(--accent-color)' }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-4 text-white text-xl md:text-2xl font-bold">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-[#e8e6df] text-lg leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <div className="my-10 py-6 pr-6 pl-8 bg-gradient-to-r from-[#37342a]/30 to-transparent rounded-r-lg relative" style={{ borderLeftColor: 'var(--accent-color)' }}>
        <span className="absolute top-4 left-3 opacity-40 text-4xl font-serif" style={{ color: 'var(--accent-color)' }}>
          "
        </span>
        <p className="text-xl md:text-2xl text-white font-medium italic relative z-10 leading-relaxed">
          {children}
        </p>
      </div>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mb-10 space-y-4 pl-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-10 space-y-4 pl-6 list-decimal">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-4 text-[#e8e6df]">
        <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--accent-color)' }} />
        <span className="text-[#e8e6df] leading-relaxed">{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[#e8e6df] leading-relaxed">{children}</li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="font-semibold hover:text-white transition-colors underline underline-offset-4" style={{ color: 'var(--accent-color)' }}
        rel="noreferrer noopener"
        target={value?.blank ? "_blank" : undefined}
      >
        {children}
      </a>
    ),
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;

      const src = urlFor(value).width(1600).url();
      return (
        <figure className="my-10">
          <div className="relative w-full aspect-[16/8] rounded-lg overflow-hidden border border-[#37342a] bg-[#201d12]">
            <Image
              src={src}
              alt={value.alt ?? "Изображение"}
              fill
              sizes="(max-width: 960px) 100vw, 960px"
              className="object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          {value.caption ? (
            <figcaption className="text-center text-[#6e6b62] text-sm mt-3">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};
