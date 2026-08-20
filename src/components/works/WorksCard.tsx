import { WORKS_CATEGORIES, type WorksItem } from "@/lib/works/data";

/** 施工事例カード。写真は使わず、カテゴリ帯とテキスト情報のみで構成する（docs/planning.md ビジュアル素材の方針）。 */
export default function WorksCard({ item }: { item: WorksItem }) {
  const categoryLabel = WORKS_CATEGORIES.find((c) => c.value === item.category)?.label ?? item.category;

  return (
    <li className="rounded border border-iron/10 bg-white-soft p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="font-sans-jp rounded-full bg-green/10 px-3 py-1 text-xs text-green">
          {categoryLabel}
        </span>
        <span className="font-sans-jp text-xs text-iron-600">{item.completedAt}</span>
      </div>

      <h3 className="font-sans-jp mt-4 text-base font-bold text-iron">{item.title}</h3>
      <p className="font-sans-jp mt-1 text-xs text-iron-600">{item.location}</p>
      <p className="font-sans-jp mt-3 text-sm leading-relaxed text-iron-600">{item.summary}</p>
    </li>
  );
}
