import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushrskiaa.tech"),
  title: "Ayush Kumar · Full-Stack Developer",
  description:
    "Ayush Kumar — ECE student at IIIT Manipur. I build full-stack web apps, CLI tools, and research tooling. Currently interning at Rupeeflo.",
  openGraph: {
    title: "Ayush Kumar · Full-Stack Developer",
    description:
      "ECE student at IIIT Manipur. Built tools at ISRO, shipped features for maritime and fintech startups.",
    url: "https://ayushrskiaa.tech",
    siteName: "Ayush Kumar",
    images: [
      {
        url: "https://opengraph.githubassets.com/1/ayushrskiaa/vaultenv",
        width: 1200,
        height: 630,
        alt: "Ayush Kumar portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar · Full-Stack Developer",
    description:
      "ECE student at IIIT Manipur. Built tools at ISRO, shipped features for maritime and fintech startups.",
    images: [
      "https://opengraph.githubassets.com/1/ayushrskiaa/vaultenv",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
