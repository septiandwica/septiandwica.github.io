import Link from "next/link";

export default function BackButton({ href, text }: { href: string, text: string }) {
  return (
    <Link 
      href={href}
      className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors"
    >
      <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      {text}
    </Link>
  );
}
