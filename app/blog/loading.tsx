export default function BlogLoading() {
  return (
    <main className="min-h-screen bg-[#0a0b0d] pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-12">
          <div className="h-10 w-32 bg-white/5 rounded-lg animate-pulse mb-4" />
          <div className="h-12 w-64 bg-white/5 rounded-lg animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <article key={i} className="bg-white/5 rounded-2xl overflow-hidden">
              <div className="aspect-video bg-white/5 animate-pulse" />
              <div className="p-6 space-y-4">
                <div className="h-6 bg-white/5 rounded animate-pulse w-3/4" />
                <div className="h-4 bg-white/5 rounded animate-pulse" />
                <div className="h-4 bg-white/5 rounded animate-pulse w-5/6" />
                <div className="flex gap-2 pt-2">
                  <div className="h-6 w-20 bg-white/5 rounded-full animate-pulse" />
                  <div className="h-6 w-24 bg-white/5 rounded-full animate-pulse" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
