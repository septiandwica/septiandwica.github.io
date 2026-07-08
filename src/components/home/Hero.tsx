import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-12">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Software Engineer
        </h1>
        <p className="text-lg text-gray-500 max-w-md leading-relaxed">
          I build clean, fast, and accessible web experiences. Currently focused on React and Next.js.
        </p>
        <div className="flex gap-4 pt-2">
          <Link href="mailto:septian.cahyo@samastanuswantara.com" className="text-sm font-medium border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
            Email Me
          </Link>
          <Link href="https://github.com/septiandwica" target="_blank" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
            GitHub
          </Link>
        </div>
      </div>
      
      <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
        <Image 
          src="/hero.png" 
          alt="tyann." 
          fill
          className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
          priority
        />
      </div>
    </section>
  );
}
