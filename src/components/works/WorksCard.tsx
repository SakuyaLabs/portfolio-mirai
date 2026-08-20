import { WORKS_CATEGORIES, type WorksItem } from "@/lib/works/data";

/**
 * 施工事例カード。写真は使わず、カテゴリ帯とテキスト情報のみで構成する（docs/planning.md ビジュアル素材の方針）。
 * `headingLevel`：このコンポーネントは`/works`ページ（h1の直後、`h2`が必要）とTOPページの
 * 抜粋セクション（`h2`見出しの下、`h3`が必要）の両方で使われるため、見出しレベルを呼び出し側で
 * 指定できるようにしている（Lighthouseのheading-order監査で検出したPhase 5の反省点）。
 */
export default function WorksCard({
  item,
  headingLevel: Heading = "h3",
}: {
  item: WorksItem;
  headingLevel?: "h2" | "h3";
}) {
  const categoryLabel = WORKS_CATEGORIES.find((c) => c.value === item.category)?.label ?? item.category;

  return (
    <li className="rounded border border-iron/10 bg-white-soft p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="font-sans-jp rounded-full bg-green/10 px-3 py-1 text-xs text-green">
          {categoryLabel}
        </span>
        <span className="font-sans-jp text-xs text-iron-600">{item.completedAt}</span>
      </div>

      <Heading className="font-sans-jp mt-4 text-base font-bold text-iron">{item.title}</Heading>
      <p className="font-sans-jp mt-1 text-xs text-iron-600">{item.location}</p>
      <p className="font-sans-jp mt-3 text-sm leading-relaxed text-iron-600">{item.summary}</p>
    </li>
  );
}
