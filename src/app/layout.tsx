import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lemon Lime Studio — Indie Game Studio",
  description:
    "Lemon Lime Studio is an indie game studio based in San Diego. A husband and wife team crafting games with heart and a splash of citrus.",
  keywords: ["indie game studio", "san diego", "lemon lime studio", "video games"],
  openGraph: {
    title: "Lemon Lime Studio",
    description: "Indie game studio based in San Diego. Crafting games with heart.",
    url: "https://lemonlimestudio.com",
    siteName: "Lemon Lime Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-inter)]">
        <Navigation />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
