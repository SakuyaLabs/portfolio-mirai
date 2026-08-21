import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mirai.sakuyalabs.com"),
  alternates: { canonical: "/" },
  title: {
    default: "株式会社ミライ工務店 | 新築・リフォームのご相談",
    template: "%s | 株式会社ミライ工務店",
  },
  description:
    "地域密着で15年、新築・リフォーム・リノベーションを手がける工務店。堅実な家づくりをお約束します。",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "株式会社ミライ工務店",
    description: "地域密着の新築・リフォーム・リノベーション工務店。",
    siteName: "株式会社ミライ工務店",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社ミライ工務店",
    description: "地域密着の新築・リフォーム・リノベーション工務店。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white-off text-iron">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
