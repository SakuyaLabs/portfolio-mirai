import Link from "next/link";
import { getNewsPosts } from "@/lib/news/data";
import NewsHeading from "./NewsHeading";
import NewsList from "./NewsList";

/**
 * TOPページ セクション｜お知らせ（抜粋）
 * `/news`と同じ`getNewsPosts()`を参照し、最新3件を抜粋表示する（docs/planning.md IA、企画書⑤サイト構成6.）。
 */
export default async function NewsExcerpt() {
  const posts = await getNewsPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <section id="news" aria-label="お知らせ" className="border-t border-iron/10 bg-white-soft py-section-mobile lg:py-section">
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <NewsHeading />

        <div className="mt-14 max-w-3xl">
          <NewsList posts={latestPosts} />
        </div>

        <div className="mt-10">
          <Link
            href="/news"
            className="font-sans-jp inline-flex items-center gap-2 text-sm text-iron transition-colors duration-300 hover:text-green"
          >
            お知らせをもっと見る
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
