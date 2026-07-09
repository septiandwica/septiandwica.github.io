import { Metadata } from "next";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | tyann.",
  description: "Get in touch with me.",
};

export default function ContactPage() {
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:septian.cahyo@samastanuswantara.com",
      icon: Mail,
      text: "septian.cahyo@samastanuswantara.com",
    },
    {
      name: "GitHub",
      href: "https://github.com/septiandwica",
      icon: FaGithub,
      text: "@septiandwica",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/septiandwica",
      icon: FaLinkedin,
      text: "tyann.",
    },
    {
      name: "Threads",
      href: "https://threads.net/@septian.dwica",
      icon: FaThreads,
      text: "@septian.dwica",
    }
  ];

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 pt-16 pb-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Contact</h1>
        <p className="mt-4 text-gray-600">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 mt-8">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition-colors hover:bg-gray-50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <link.icon className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{link.name}</p>
              <p className="text-sm text-gray-500">{link.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
