"use client";

import { useEffect } from 'react';

export default function ErrorContent({
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
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
      <h1 className="mb-6 text-8xl font-black tracking-tighter text-gray-100">Oops!</h1>
      <h2 className="mb-4 text-2xl font-bold tracking-tight">Terjadi Kesalahan (Error)</h2>
      <p className="mx-auto mb-10 max-w-md text-gray-500">
        Maaf, telah terjadi kesalahan sistem yang tidak terduga saat memuat halaman ini.
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
      >
        Coba Lagi
      </button>
    </div>
  );
}
