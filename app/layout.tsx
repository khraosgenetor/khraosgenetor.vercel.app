import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 100",
});
const geistMono = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-mono",
  weight: "100 100",
});

export const metadata: Metadata = {
  title: "KhraosGenetor | Home",
  description: "Website for KhraosGenetor",
};

export default function RootLayout({ children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="heading-container">{children}</div>
      <Analytics />
      <SpeedInsights />
      </body>
      </html>
  );
}
