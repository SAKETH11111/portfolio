import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

// Adding Zen Antique Soft font from Google Fonts
const zenAntique = {
  variable: "--font-zen-antique",
  fontFamily: "'Zen Antique Soft', serif",
};

export const metadata: Metadata = {
  title: "Rudaiba - Portfolio",
  description: "Portfolio of Rudaiba",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/png-png-urbanbrush-1733.jpg', type: 'image/jpeg' }
    ],
    shortcut: '/favicon.ico',
    apple: '/images/png-png-urbanbrush-1733.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/png-png-urbanbrush-1733.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/png-png-urbanbrush-1733.jpg" />
        <link href="https://fonts.googleapis.com/css2?family=Zen+Antique+Soft:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${spectral.variable} antialiased`}
        suppressHydrationWarning
        style={{ cursor: 'none' }}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
