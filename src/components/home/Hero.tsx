import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse items-start justify-between gap-12 md:flex-row md:items-center">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
          Software Engineer
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-gray-500">
          I build clean, fast, and accessible web experiences. Currently focused on React and Next.js.
        </p>
        <div className="flex gap-4 pt-2">
          <Link href="mailto:septian.cahyo@samastanuswantara.com" className="border-b border-black pb-0.5 text-sm font-medium transition-colors hover:border-gray-600 hover:text-gray-600">
            Email Me
          </Link>
          <Link href="https://github.com/septiandwica" target="_blank" className="text-sm font-medium text-gray-500 transition-colors hover:text-black">
            GitHub
          </Link>
        </div>
      </div>
      
      <div className="relative size-32 shrink-0 md:size-40">
        <Image 
          src="/hero.png" 
          alt="tyann." 
          fill
          className="rounded-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
          priority
        />
      </div>
    </section>
  );
}
