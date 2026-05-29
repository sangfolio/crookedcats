import type { Metadata } from "next";
import { Inter, Rock_Salt } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const displayFont = Rock_Salt({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crookedcats.com"),
  title: "Crooked Cats · Up to no good. As cats do.",
  description:
    "A love story. Two people. The end of the world. Our first game is in the works — drop your email to get the first whisper.",
  keywords: ["indie game studio", "san diego", "crooked cats", "video games"],
  icons: {
    icon: "/images/zeus.png",
  },
  openGraph: {
    title: "Crooked Cats",
    description: "Up to no good. As cats do. An indie game studio in San Diego.",
    url: "https://crookedcats.com",
    siteName: "Crooked Cats",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crooked Cats",
    description: "Up to no good. As cats do. An indie game studio in San Diego.",
    creator: "@han_topia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${displayFont.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-inter)]">
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
