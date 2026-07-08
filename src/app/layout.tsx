import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tyann. | Software Engineer",
  description: "Personal portfolio and blog of tyann., a Software Engineer.",
  icons: {
    icon: '/icon.svg',
  },
};

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white text-black selection:bg-black selection:text-white">
        <Navbar />
        <main className="flex w-full flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
