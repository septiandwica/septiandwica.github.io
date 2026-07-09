import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="mx-auto hidden w-full max-w-3xl items-center justify-between px-6 py-12 md:flex">
      <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight transition-opacity hover:opacity-80">
        <Image src="/icon.svg" alt="Logo" width={32} height={32} />
       tyann.
      </Link>
      <div className="flex gap-6 text-sm text-gray-500">
        <Link href="/" className="transition-colors hover:text-black">About</Link>
        <Link href="/projects" className="transition-colors hover:text-black">Projects</Link>
        <Link href="/blog" className="transition-colors hover:text-black">Blog</Link>
        <Link href="/chat" className="transition-colors hover:text-black">Chat</Link>
        <Link href="/contact" className="transition-colors hover:text-black">Contact</Link>
      </div>
    </nav>
  );
}
