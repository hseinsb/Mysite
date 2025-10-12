import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hussein Sbeiti | Systems Architect",
  description: "I build systems that turn attention into operations and revenue. Funnels, automation, payments, and AI—designed like software, deployed like ops.",
  keywords: ["systems architect", "automation", "funnels", "payment systems", "AI", "Hussein Sbeiti"],
  authors: [{ name: "Hussein Sbeiti" }],
  creator: "Hussein Sbeiti",
  metadataBase: new URL("https://husseinsbeiti.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://husseinsbeiti.com",
    title: "Hussein Sbeiti | Systems Architect",
    description: "I build systems that turn attention into operations and revenue. Funnels, automation, payments, and AI—designed like software, deployed like ops.",
    siteName: "Hussein Sbeiti",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussein Sbeiti | Systems Architect",
    description: "I build systems that turn attention into operations and revenue. Funnels, automation, payments, and AI—designed like software, deployed like ops.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
