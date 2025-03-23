"use client"; // Marca este componente como Client Component

import { Geist, Geist_Mono } from "next/font/google";
import { SessionProvider } from "next-auth/react"; // Importa SessionProvider
import "./globals.css";
import { metadata } from "./metadata"; // Importa metadata

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Envuelve children en SessionProvider */}
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}