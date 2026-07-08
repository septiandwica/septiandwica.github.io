import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-6 py-12 mt-auto border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
      <p>© {new Date().getFullYear()} tyann.</p>
      <Link href="#" className="hover:text-black transition-colors">Back to top</Link>
    </footer>
  );
}
