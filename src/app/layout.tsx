import type { Metadata } from "next";
import Script from "next/script";
import { Open_Sans, Poppins } from "next/font/google";
import "@/styles/global.scss";
import Layout from "@/components/layout";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

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
  description: "At Neophoenix, we build next-generation AI products and enterprise solutions that combine the power of Retrieval-Augmented Generation (RAG) with precision-driven prompt engineering. From white-label platforms to plug-and-play extensions, we empower businesses to unlock real-time intelligence and transform workflows at scale.",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Neophoenix",
    description: "At Neophoenix, we build next-generation AI products and enterprise solutions that combine the power of Retrieval-Augmented Generation (RAG) with precision-driven prompt engineering. From white-label platforms to plug-and-play extensions, we empower businesses to unlock real-time intelligence and transform workflows at scale.",
    url: "https://example.com",
    siteName: "Neophoenix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neophoenix",
    description: "At Neophoenix, we build next-generation AI products and enterprise solutions that combine the power of Retrieval-Augmented Generation (RAG) with precision-driven prompt engineering. From white-label platforms to plug-and-play extensions, we empower businesses to unlock real-time intelligence and transform workflows at scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <head>

        {/*  microsoft Clarity script */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "tj9glzhtds");`}
        </Script>

        


      </head>
      <body>
        <SmoothScrollProvider>
          <Layout>{children}</Layout>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
