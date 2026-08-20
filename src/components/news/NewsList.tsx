import Link from "next/link";
import type { NewsPost } from "@/lib/news/data";

/** お知らせ一覧。各項目は詳細ページ（`/news/[slug]`）へのリンクを兼ねる。 */
export default function NewsList({ posts }: { posts: NewsPost[] }) {
  return (
    <ul className="divide-y divide-iron/10 border-t border-iron/10">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/news/${post.slug}`}
            className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8"
          >
            <span className="font-sans-jp shrink-0 text-xs text-iron-600 sm:w-24">{post.publishedAt}</span>
            <div className="flex-1">
              <p className="font-sans-jp text-sm font-bold text-iron transition-colors duration-300 group-hover:text-green sm:text-base">
                {post.title}
              </p>
              <p className="font-sans-jp mt-1 text-xs leading-relaxed text-iron-600 sm:text-sm">
                {post.excerpt}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
