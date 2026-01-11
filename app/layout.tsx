import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SkipToContent from "@/components/SkipToContent";
import Footer from "@/components/Footer";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import ContactModal from "@/components/ContactModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Вадим Фрунзе — Инвестиции в недвижимость и займы под залог",
  description: "Профессиональные стратегии инвестирования в недвижимость, займы под залог и управление капиталом. Реальные кейсы, экспертные материалы и проверенные решения.",
  keywords: ["инвестиции", "недвижимость", "займы под залог", "управление капиталом", "ROI", "кейсы", "Вадим Фрунзе"],
  authors: [{ name: "Вадим Фрунзе" }],
  openGraph: {
    title: "Вадим Фрунзе — Инвестиции в недвижимость и займы под залог",
    description: "Профессиональные стратегии инвестирования в недвижимость, займы под залог и управление капиталом.",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Вадим Фрунзе — Инвестиции в недвижимость",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Вадим Фрунзе — Инвестиции в недвижимость и займы под залог",
    description: "Профессиональные стратегии инвестирования в недвижимость, займы под залог и управление капиталом.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContactModalProvider>
          <SkipToContent />
          <Header />

          {children}

          <Footer />
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
