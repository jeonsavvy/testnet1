import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "JEON CHAN HYUK",
  description: "Personal Portfolio of Jeon Chan Hyuk - Catalog Operations & AI Enthusiast",
  openGraph: {
    title: "JEON CHAN HYUK - Portfolio",
    description: "Catalog Operations & AI Enthusiast. Explore my projects and career.",
    url: "https://jeonsavvy.github.io/testnet1", // Replace with your actual deployed URL if different
    siteName: "Jeon Chan Hyuk Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeon Chan Hyuk Portfolio",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GN7LGC2GZQ"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GN7LGC2GZQ');
          `}
        </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
