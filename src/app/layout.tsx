import type { Metadata } from "next";
import "./globals.css";
import Navigation from '@/components/landing/nav/navigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "My porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <header className="bg-customColor1-800 text-white p-6 md:p-4 w-full justify-between fixed">
          <div className="flex items-center justify-between md:flex-row  w-full">
            <button>
              <Link href="/">
                <h1 className="text-3xl font-bold">My Portfolio</h1>
              </Link>
            </button>
            <div>
              <Navigation />
            </div>
          </div>
        </header>
        {children}</body>
    </html>
  );
}
