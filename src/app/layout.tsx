import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Hussein Sbeiti | Systems Architect & Automation Expert",
  description: "I build systems that turn attention into operations and revenue. Funnels, automation, payments, and AI—designed like software, deployed like ops.",
  keywords: ["systems architect", "automation", "funnels", "payment systems", "AI workflows", "business automation", "Hussein Sbeiti", "workflow automation"],
  authors: [{ name: "Hussein Sbeiti" }],
  creator: "Hussein Sbeiti",
  metadataBase: new URL("https://hussbuilds.com"),
  alternates: {
    canonical: "https://hussbuilds.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hussbuilds.com",
    title: "Hussein Sbeiti | Systems Architect & Automation Expert",
    description: "I build systems that turn attention into operations and revenue. Funnels, automation, payments, and AI—designed like software, deployed like ops.",
    siteName: "HussBuilds",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HussBuilds - Systems Architecture & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussein Sbeiti | Systems Architect & Automation Expert",
    description: "I build systems that turn attention into operations and revenue. Funnels, automation, payments, and AI—designed like software, deployed like ops.",
    creator: "@husseinsbeiti",
    images: ["/og-image.png"],
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HussBuilds',
    url: 'https://hussbuilds.com',
    logo: 'https://hussbuilds.com/logo.png',
    description: 'Systems architecture and automation services. Building funnels, AI workflows, and payment systems.',
    founder: {
      '@type': 'Person',
      name: 'Hussein Sbeiti',
      jobTitle: 'Systems Architect',
    },
    sameAs: [
      'https://twitter.com/husseinsbeiti',
      'https://linkedin.com/in/husseinsbeiti',
      'https://github.com/hseinsb',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hussein.sbeiti.wb@gmail.com',
      contactType: 'Customer Service',
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HussBuilds',
    url: 'https://hussbuilds.com',
    description: 'I build systems that turn attention into operations and revenue. Funnels, automation, payments, and AI.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://hussbuilds.com/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {/* JSON-LD Schema Markup */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        
        {children}
      </body>
    </html>
  );
}
