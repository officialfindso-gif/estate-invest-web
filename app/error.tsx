'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0a0b0d] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Что-то пошло не так</h1>
          <p className="text-gray-400 mb-6">
            Произошла ошибка при загрузке страницы. Попробуйте обновить страницу или вернуться на главную.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-[var(--accent-color)] text-black font-bold rounded-lg hover:bg-[var(--accent-color)]/90 transition-all"
          >
            Попробовать снова
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-white/5 text-white font-bold rounded-lg hover:bg-white/10 transition-all border border-white/10"
          >
            На главную
          </Link>
        </div>

        {error.digest && (
          <p className="mt-6 text-xs text-gray-500 font-mono">
            Код ошибки: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
