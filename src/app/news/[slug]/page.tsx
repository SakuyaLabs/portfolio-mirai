import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsPost, getNewsPosts } from "@/lib/news/data";

type Params = { slug: string };

/**
 * お知らせ詳細ページ。CLAUDE.mdの方針通り、サイト内で唯一`generateStaticParams`による
 * SSGを使うページ（④はる法律事務所のような検索意図別の独立SEOページが本案件の核心ではないため、
 * 他ページは通常の静的ページとして実装している）。
 */
export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getNewsPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getNewsPost(slug);
  if (!post) notFound();

  return (
    <main className="flex flex-1 flex-col">
      <article className="mx-auto max-w-3xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20">
        <nav aria-label="パンくずリスト" className="font-sans-jp text-xs text-iron-600">
          <Link href="/news" className="transition-colors duration-300 hover:text-green">
            お知らせ
          </Link>
        </nav>

        <p className="font-sans-jp mt-6 text-xs text-iron-600">{post.publishedAt}</p>
        <h1 className="font-sans-jp mt-3 text-2xl leading-[1.6] font-bold text-iron sm:text-3xl">
          {post.title}
        </h1>

        <div className="font-sans-jp mt-8 space-y-5 border-t border-iron/10 pt-8 text-sm leading-loose text-iron-600 sm:text-base">
          {post.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <Link
          href="/news"
          className="font-sans-jp mt-12 inline-flex items-center gap-2 text-sm text-iron transition-colors duration-300 hover:text-green"
        >
          <span aria-hidden="true">←</span>
          お知らせ一覧へ戻る
        </Link>
      </article>
    </main>
  );
}
