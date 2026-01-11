export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0b0d] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-[var(--accent-color)]/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-[var(--accent-color)] rounded-full animate-spin" />
        </div>
        <p className="text-gray-400 text-sm font-medium">Загрузка...</p>
      </div>
    </div>
  );
}
