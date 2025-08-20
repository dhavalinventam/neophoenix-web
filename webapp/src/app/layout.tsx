import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "@/styles/global.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Neophoenix",
    template: "%s | Neophoenix",
  },
  description: "Modern Next.js 14 app with SCSS modules and TypeScript.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Neophoenix",
    description: "Modern Next.js 14 app with SCSS modules and TypeScript.",
    url: "https://example.com",
    siteName: "Neophoenix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neophoenix",
    description: "Modern Next.js 14 app with SCSS modules and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
