import type { Metadata } from "next";
import Link from "next/link";
import PositionsList from "@/components/careers/PositionsList";

export const metadata: Metadata = {
  title: "採用情報",
  description: "株式会社ミライ工務店の採用情報。現場スタッフ・施工管理・事務スタッフを募集しています。",
};

/**
 * 採用情報ページ（簡易）。企画書⑤「採用サイト⑥への導線として最小限のみ設置」に対応し、
 * 応募フォームや詳細な選考フローはこのページには実装しない（⑥Nolanで実装予定の領域）。
 * 専用の採用サイトが未公開の間は、お問い合わせページへの導線に留める（docs/planning.md IA 4.）。
 */
export default function CareersPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20">
        <p className="font-sans-jp text-sm tracking-[0.15em] text-green uppercase">Careers</p>
        <h1 className="font-sans-jp mt-4 text-3xl leading-[1.5] font-bold text-iron sm:text-4xl">
          採用情報
        </h1>
        <p className="font-sans-jp mt-6 max-w-2xl text-sm leading-loose text-iron-600 sm:text-base">
          地域の暮らしを支える仕事です。経験の有無にかかわらず、家づくりに関わりたい方をお待ちしています。
        </p>

        <PositionsList />

        <div className="mt-14 rounded border border-iron/10 bg-white-off p-6 sm:p-7">
          <p className="font-sans-jp text-sm leading-relaxed text-iron-600">
            現在、採用専用サイトを準備中です。それまでの間、応募・お問い合わせは下記のフォームより承っております。
          </p>
          <Link
            href="/contact"
            className="font-sans-jp mt-5 inline-flex items-center gap-2 rounded bg-iron px-6 py-3 text-sm font-medium text-white-off transition-colors duration-300 hover:bg-iron-700"
          >
            採用について問い合わせる
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
