'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-32 pb-24 flex-1 text-center flex flex-col items-center justify-center">
      <h1 className="text-8xl font-black tracking-tighter text-gray-100 mb-6">Oops!</h1>
      <h2 className="text-2xl font-bold tracking-tight mb-4">Terjadi Kesalahan (Error)</h2>
      <p className="text-gray-500 mb-10 max-w-md mx-auto">
        Maaf, telah terjadi kesalahan sistem yang tidak terduga saat memuat halaman ini.
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
      >
        Coba Lagi
      </button>
    </div>
  );
}
