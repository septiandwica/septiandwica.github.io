import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto mt-auto flex w-full max-w-3xl items-center justify-between border-t border-gray-100 px-6 py-12 text-sm text-gray-400">
      <p>© {new Date().getFullYear()} tyann.</p>
      <Link href="#" className="transition-colors hover:text-black">Back to top</Link>
    </footer>
  );
}
