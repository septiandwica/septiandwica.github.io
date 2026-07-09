import Link from 'next/link';

export default function NotFoundContent() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
      <h1 className="mb-6 text-8xl font-black tracking-tighter text-gray-100">404</h1>
      <h2 className="mb-4 text-2xl font-bold tracking-tight">Page not found</h2>
      <p className="mx-auto mb-10 max-w-md text-gray-500">
        Maaf, halaman yang Anda cari tidak ditemukan atau mungkin sudah dipindahkan.
      </p>
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
      >
        ← Kembali ke Beranda
      </Link>
    </div>
  );
}
