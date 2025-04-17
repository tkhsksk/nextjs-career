import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Head from '@components/head';
import Header from '@components/header';
import Aside  from '@components/aside';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header />
      <div className="grid grid-cols-4 min-h-screen">
        <Aside />
        {children}
      </div>
      </body>
    </html>
  );
}
