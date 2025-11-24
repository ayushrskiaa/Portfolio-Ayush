import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayush-portfolio.vercel.app"),
  title: "Ayush Kumar · Full-Stack Web Developer",
  description:
    "Ayush Kumar is a full-stack developer and DSA enthusiast from IIIT Manipur building thoughtful web experiences and research tooling.",
  openGraph: {
    title: "Ayush Kumar · Product-focused full-stack developer",
    description:
      "Engineering immersive UI, performant APIs, and research platforms across India and beyond.",
    url: "https://ayush-portfolio.vercel.app",
    siteName: "Ayush Kumar Portfolio",
    images: [
      {
        url: "https://opengraph.githubassets.com/1/ayushrskiaa/Restaurant-Reservation",
        width: 1200,
        height: 630,
        alt: "Ayush Kumar portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar · Product-focused full-stack developer",
    description:
      "Full-stack developer crafting intuitive interfaces, robust systems, and research tooling.",
    images: [
      "https://opengraph.githubassets.com/1/ayushrskiaa/Restaurant-Reservation",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
