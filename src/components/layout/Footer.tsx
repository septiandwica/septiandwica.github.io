"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { useEffect, useState } from "react";

const techQuotes = [
  "Talk is cheap. Show me the code. — Linus Torvalds",
  "Programs must be written for people to read, and only incidentally for machines to execute. — Harold Abelson",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
  "First, solve the problem. Then, write the code. — John Johnson",
  "Code is like humor. When you have to explain it, it's bad. — Cory House",
  "Fix the cause, not the symptom. — Steve Maguire",
  "Simplicity is the soul of efficiency. — Austin Freeman",
  "Before software can be reusable it first has to be usable. — Ralph Johnson",
  "Make it work, make it right, make it fast. — Kent Beck",
  "Optimism is an occupational hazard of programming: feedback is the treatment. — Kent Beck",
  "Truth can only be found in one place: the code. — Robert C. Martin",
  "It's not a bug. It's an undocumented feature. — Anonymous",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. — Dan Salomon",
  "Java is to JavaScript what car is to Carpet. — Chris Heilmann",
  "There are only two hard things in Computer Science: cache invalidation and naming things. — Phil Karlton"
];

export default function Footer() {
  const [quote, setQuote] = useState("");

  useEffect(() => {

    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    const timer = setTimeout(() => {
      setQuote(techQuotes[dayOfYear % techQuotes.length]);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="mx-auto mt-auto flex w-full max-w-3xl flex-col items-center border-t border-gray-100 px-6 py-16 text-center text-sm text-gray-500">
      <div className="flex flex-col items-center gap-6">
        <span className="text-2xl font-bold tracking-tight text-black">tyann.</span>
        
        <p className="flex min-h-[48px] max-w-md items-center justify-center text-base leading-relaxed text-gray-400 italic">
          {quote ? `"${quote}"` : ""}
        </p>

        <div className="mt-2 flex gap-6 text-gray-400">
          <Link href="https://github.com/septiandwica" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-black">
            <FaGithub size={22} />
          </Link>
          <Link href="https://linkedin.com/in/septiandwica" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-black">
            <FaLinkedin size={22} />
          </Link>
          <Link href="https://threads.net/@septian.dwica" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-black">
            <FaThreads size={22} />
          </Link>
        </div>
      </div>
      
      <div className="mt-16 flex w-full flex-col items-center justify-center border-t border-gray-100 pt-8 text-gray-400">
        <p>© {new Date().getFullYear()} tyann. All rights reserved.</p>
      </div>
    </footer>
  );
}
