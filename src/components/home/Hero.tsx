import Image from "next/image";
import Link from "next/link";
import { 
  SiJavascript, SiTypescript, SiPython, SiPhp,
  SiReact, SiNextdotjs, SiVuedotjs, SiLaravel, 
  SiDjango, SiFastapi, SiNodedotjs 
} from "react-icons/si";

export default function Hero() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col-reverse items-start justify-between gap-12 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              TYANN
            </h1>
            <h2 className="text-xl font-medium text-gray-500">
              Software Engineer
            </h2>
          </div>
          
          <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
            A passionate Software Engineer dedicated to solving complex real-world problems through code. I specialize in architecting scalable systems, integrating intelligent AI solutions, and building intuitive cross-platform applications that deliver seamless user experiences.
          </p>
          
          <div className="flex gap-4 pt-2">
            <Link href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="border-b border-black pb-0.5 text-sm font-medium transition-colors hover:border-gray-600 hover:text-gray-600">
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
      </div>

      <div className="mt-16 space-y-8 border-t border-gray-100 pt-8">
        <div className="space-y-4">
          <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-gray-500 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              <SiJavascript className="text-gray-400 transition-colors group-hover:text-[#F7DF1E]" /> JavaScript
            </span>
            <span className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-gray-500 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              <SiTypescript className="text-gray-400 transition-colors group-hover:text-[#3178C6]" /> TypeScript
            </span>
            <span className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-gray-500 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              <SiPython className="text-gray-400 transition-colors group-hover:text-[#3776AB]" /> Python
            </span>
            <span className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-gray-500 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              <SiPhp className="text-gray-400 transition-colors group-hover:text-[#777BB4]" /> PHP
            </span>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Frameworks & Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-gray-500 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              <SiReact className="text-gray-400 transition-colors group-hover:text-[#61DAFB]" /> React.js
            </span>
            <span className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-gray-500 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              <SiReact className="text-gray-400 transition-colors group-hover:text-[#61DAFB]" /> React Native
            </span>
            <span className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-gray-500 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              <SiNextdotjs className="text-gray-400 transition-colors group-hover:text-black" /> Next.js
            </span>
            <span className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-gray-500 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              <SiVuedotjs className="text-gray-400 transition-colors group-hover:text-[#4FC08D]" /> Vue.js
            </span>
            <span className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-gray-500 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              <SiLaravel className="text-gray-400 transition-colors group-hover:text-[#FF2D20]" /> Laravel
            </span>
            <span className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-gray-500 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              <SiDjango className="text-gray-400 transition-colors group-hover:text-[#092E20]" /> Django (REST)
            </span>
            <span className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-gray-500 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              <SiFastapi className="text-gray-400 transition-colors group-hover:text-[#009688]" /> FastAPI
            </span>
            <span className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-gray-500 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              <SiNodedotjs className="text-gray-400 transition-colors group-hover:text-[#339933]" /> Node.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
