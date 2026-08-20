import Link from "next/link";
import { getWorksItems } from "@/lib/works/data";
import WorksCard from "./WorksCard";
import WorksHeading from "./WorksHeading";

/**
 * TOPページ セクション3｜施工事例（抜粋）
 * `/works`と同じ`getWorksItems()`を参照し、最新3件を抜粋表示する（docs/planning.md 導線設計）。
 */
export default async function WorksExcerpt() {
  const items = await getWorksItems();
  const latestItems = items.slice(0, 3);

  return (
    <section id="works" aria-label="施工事例" className="border-t border-iron/10 bg-white-off py-section-mobile lg:py-section">
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <WorksHeading />

        <ul className="mt-14 grid gap-6 sm:grid-cols-3">
          {latestItems.map((item) => (
            <WorksCard key={item.id} item={item} />
          ))}
        </ul>

        <div className="mt-10">
          <Link
            href="/works"
            className="font-sans-jp inline-flex items-center gap-2 text-sm text-iron transition-colors duration-300 hover:text-green"
          >
            施工事例をもっと見る
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
