import Link from 'next/link'

export default function SkipToContent() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{ '--tw-ring-color': 'var(--accent-color)' } as any}
    >
      Перейти к основному содержимому
    </Link>
  )
}
