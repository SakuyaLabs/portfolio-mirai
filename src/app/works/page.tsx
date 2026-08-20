import type { Metadata } from "next";
import WorksExplorer from "@/components/works/WorksExplorer";
import WorksHeading from "@/components/works/WorksHeading";
import { getWorksItems } from "@/lib/works/data";

export const metadata: Metadata = {
  title: "施工事例",
  description: "新築・リフォーム・リノベーションの施工事例をカテゴリ別にご紹介します。",
};

/**
 * 施工事例一覧ページ。カテゴリフィルタ付き（docs/planning.md IA、企画書⑤サイト構成2.）。
 */
export default async function WorksPage() {
  const items = await getWorksItems();

  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20">
        <WorksHeading isPage />
        <div className="mt-14">
          <WorksExplorer items={items} />
        </div>
      </div>
    </main>
  );
}
