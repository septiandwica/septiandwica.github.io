import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tyann. | Software Engineer",
  description: "Personal portfolio and blog of tyann., a Software Engineer.",
  icons: {
    icon: '/icon.svg',
  },
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomBar from "@/components/layout/BottomBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white pb-28 text-black selection:bg-black selection:text-white md:pb-0">
        <Navbar />
        <main className="flex w-full flex-1 flex-col">
          {children}
        </main>
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}
