import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full max-w-3xl mx-auto px-6 py-12 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-3 font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity">
        <Image src="/icon.svg" alt="Logo" width={32} height={32} />
       tyann.
      </Link>
      <div className="flex gap-6 text-sm text-gray-500">
        <Link href="/#about" className="hover:text-black transition-colors">About</Link>
        <Link href="/#projects" className="hover:text-black transition-colors">Projects</Link>
        <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
      </div>
    </nav>
  );
}
