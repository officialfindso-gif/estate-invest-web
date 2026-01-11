export default function CaseLoading() {
  return (
    <main className="min-h-screen bg-[#0a0b0d] pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-8">
          <div className="h-8 w-24 bg-[var(--accent-color)]/10 rounded-full animate-pulse mb-4" />
          <div className="h-12 bg-white/5 rounded-lg animate-pulse mb-4" />
          <div className="h-12 bg-white/5 rounded-lg animate-pulse w-4/5 mb-6" />
          
          <div className="flex gap-2 mb-6">
            <div className="h-6 w-20 bg-white/5 rounded-full animate-pulse" />
            <div className="h-6 w-24 bg-white/5 rounded-full animate-pulse" />
          </div>
        </div>

        <div className="aspect-video bg-white/5 rounded-2xl animate-pulse mb-12" />

        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div key={i} className="h-4 bg-white/5 rounded animate-pulse" style={{ width: `${85 + Math.random() * 15}%` }} />
          ))}
        </div>
      </article>
    </main>
  );
}
