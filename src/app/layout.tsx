import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#ec3750",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "HackPKD | A Hack Club Community in Palakkad",
    template: "%s | HackPKD",
  },
  description: "HackPKD is a local Hack Club community in Palakkad, Kerala. We are a free, global non-profit network of high schoolers who build, ship, and grow together.",
  keywords: ["HackPKD", "Hack Club", "Hack Club Kerala", "Student Community", "Coding", "Palakkad", "Kerala Tech", "High Schoolers", "Programming", "Learn to Code"],
  authors: [{ name: "HackPKD Community" }],
  creator: "HackPKD",
  publisher: "Hack Club",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "HackPKD | A Hack Club Community in Palakkad",
    description: "Build the future of Kerala, one club at a time. A community of high schoolers in Kerala building and shipping cool things.",
    url: "https://hackpkd.org",
    siteName: "HackPKD",
    images: [
      {
        url: "https://assets.hackclub.com/flag-standalone.svg",
        width: 800,
        height: 600,
        alt: "Hack Club Flag",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HackPKD | A Hack Club Community in Palakkad",
    description: "Build the future of Kerala, one club at a time. A community of high schoolers in Kerala building and shipping cool things.",
    images: ["https://assets.hackclub.com/flag-standalone.svg"],
    creator: "@hackclub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://hackpkd.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "HackPKD",
              "url": "https://hackpkd.org",
              "logo": "https://assets.hackclub.com/flag-standalone.svg",
              "description": "A local Hack Club community in Palakkad, Kerala for high schoolers to learn coding.",
              "parentOrganization": {
                "@type": "NGO",
                "name": "Hack Club",
                "url": "https://hackclub.com"
              },
              "location": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Palakkad",
                  "addressRegion": "Kerala",
                  "addressCountry": "IN"
                }
              },
              "sameAs": [
                "https://kerala.hackclub.com",
                "https://hackclub.com"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-[#1f2d3d] antialiased selection:bg-[#ec3750] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
