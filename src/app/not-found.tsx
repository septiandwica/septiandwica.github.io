import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-32 pb-24 flex-1 text-center flex flex-col items-center justify-center">
      <h1 className="text-8xl font-black tracking-tighter text-gray-100 mb-6">404</h1>
      <h2 className="text-2xl font-bold tracking-tight mb-4">Page not found</h2>
      <p className="text-gray-500 mb-10 max-w-md mx-auto">
        Maaf, halaman yang Anda cari tidak ditemukan atau mungkin sudah dipindahkan.
      </p>
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
      >
        ← Kembali ke Beranda
      </Link>
    </div>
  );
}
