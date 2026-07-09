"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderGit2, BookOpen, MessageSquare, UserCircle } from "lucide-react";

export default function BottomBar() {
  const pathname = usePathname();

  const navItems = [
    { name: "About", path: "/", icon: Home },
    { name: "Projects", path: "/projects", icon: FolderGit2 },
    { name: "Blog", path: "/blog", icon: BookOpen },
    { name: "Chat", path: "/chat", icon: MessageSquare },
    { name: "Contact", path: "/contact", icon: UserCircle },
  ];

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 md:hidden">
      <nav className="flex w-full max-w-sm justify-around rounded-full border border-gray-200 bg-white/80 p-2 shadow-lg backdrop-blur-md">
        {navItems.map((item) => {
          const isActive =
            pathname === item.path ||
            (item.path !== "/" && pathname?.startsWith(item.path));
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex flex-col items-center justify-center gap-1 rounded-full px-3 py-2 transition-colors ${
                isActive ? "text-black" : "text-gray-400 hover:bg-gray-50 hover:text-black"
              }`}
            >
              <Icon size={20} className={isActive ? "fill-black/10 stroke-black" : "stroke-[1.5]"} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
