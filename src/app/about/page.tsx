import type { Metadata } from "next";
import AboutHeading from "@/components/about/AboutHeading";
import CompanyHistory from "@/components/about/CompanyHistory";
import CompanyMessage from "@/components/about/CompanyMessage";
import CompanyOverview from "@/components/about/CompanyOverview";
import CompanyPhilosophy from "@/components/about/CompanyPhilosophy";

export const metadata: Metadata = {
  title: "会社概要",
  description: "株式会社ミライ工務店の代表挨拶・企業理念・沿革・会社概要をご紹介します。",
};

/**
 * 会社概要ページ。沿革・代表挨拶・企業理念で信頼感を構築する
 * （docs/planning.md IA、企画書⑤サイト構成4.）。
 */
export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <AboutHeading />
      <CompanyMessage />
      <CompanyPhilosophy />
      <CompanyHistory />
      <CompanyOverview />
    </main>
  );
}
