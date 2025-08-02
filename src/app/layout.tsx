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
    icon: '/images/png-png-urbanbrush-1733.jpg',
    shortcut: '/images/png-png-urbanbrush-1733.jpg',
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
      <body
        className={`${spectral.variable} antialiased`}
        suppressHydrationWarning
        style={{ cursor: 'none' }}
      >
        <link href="https://fonts.googleapis.com/css2?family=Zen+Antique+Soft:wght@400&display=swap" rel="stylesheet" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
