import type { Metadata } from "next";
import NewsHeading from "@/components/news/NewsHeading";
import NewsList from "@/components/news/NewsList";
import { getNewsPosts } from "@/lib/news/data";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "株式会社ミライ工務店からのお知らせ一覧です。",
};

/**
 * お知らせ一覧ページ。CMS運用を想定した更新型コンテンツ（docs/planning.md IA、企画書⑤サイト構成6.）。
 */
export default async function NewsPage() {
  const posts = await getNewsPosts();

  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20">
        <NewsHeading isPage />
        <div className="mt-14">
          <NewsList posts={posts} />
        </div>
      </div>
    </main>
  );
}
