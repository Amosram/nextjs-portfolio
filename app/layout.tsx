import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarMain from "@/components/Navbar";

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Amosram Dev",
  description: "Best portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-black-100`}
      >
        <NavbarMain/>
        {children}
      </body>
    </html>
  );
}
