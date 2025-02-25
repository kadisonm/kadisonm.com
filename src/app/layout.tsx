import Footer from '@/components/footer'
import Header from '@/components/header'
import DevNotice from '@/components/devnotice';

import "@/styles/globals.scss";
import { Inter } from "next/font/google";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kadison McLellan",
  description: "My portfolio, blog, web apps, and more!",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
      </head>
      <body className={inter.className}>
        <DevNotice />
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}