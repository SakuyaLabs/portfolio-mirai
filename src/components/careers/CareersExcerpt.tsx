import Link from "next/link";

/**
 * TOPページ セクション｜採用情報導線
 * 詳細は`/careers`に譲り、TOPでは簡潔な一言と導線のみを置く（docs/planning.md IA、企画書⑤サイト構成5.）。
 */
export default function CareersExcerpt() {
  return (
    <section id="careers" aria-label="採用情報" className="border-t border-iron/10 bg-iron py-section-mobile lg:py-section">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center sm:px-12 lg:px-20">
        <div>
          <p className="font-sans-jp text-sm tracking-[0.15em] text-green-soft uppercase">Careers</p>
          <h2 className="font-sans-jp mt-3 text-2xl font-bold text-white-off sm:text-3xl">
            一緒に働きませんか。
          </h2>
          <p className="font-sans-jp mt-3 max-w-md text-sm leading-relaxed text-white-off/70">
            現場スタッフ・施工管理を中心に募集しています。
          </p>
        </div>

        <Link
          href="/careers"
          className="font-sans-jp inline-flex w-fit shrink-0 items-center gap-2 rounded border border-white-off/30 px-6 py-3 text-sm text-white-off transition-colors duration-300 hover:border-white-off"
        >
          採用情報を見る
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
