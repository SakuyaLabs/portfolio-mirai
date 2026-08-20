"use client";

import { useMemo, useState } from "react";
import { WORKS_CATEGORIES, type WorksCategory, type WorksItem } from "@/lib/works/data";
import WorksCard from "./WorksCard";

const ALL_VALUE = "all" as const;
type FilterValue = WorksCategory | typeof ALL_VALUE;

/**
 * カテゴリフィルタ付きの施工事例一覧。クライアント側の`useState`でフィルタ状態を持つ
 * （docs/planning.md 技術スタック、企画書⑤「カテゴリフィルタ付きの事例一覧」）。
 */
export default function WorksExplorer({ items }: { items: WorksItem[] }) {
  const [filter, setFilter] = useState<FilterValue>(ALL_VALUE);

  const filteredItems = useMemo(
    () => (filter === ALL_VALUE ? items : items.filter((item) => item.category === filter)),
    [items, filter],
  );

  return (
    <div>
      <div role="group" aria-label="カテゴリで絞り込む" className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter(ALL_VALUE)}
          aria-pressed={filter === ALL_VALUE}
          className={`font-sans-jp rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
            filter === ALL_VALUE
              ? "border-iron bg-iron text-white-off"
              : "border-iron/20 text-iron-600 hover:border-green hover:text-green"
          }`}
        >
          すべて
        </button>
        {WORKS_CATEGORIES.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => setFilter(category.value)}
            aria-pressed={filter === category.value}
            className={`font-sans-jp rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
              filter === category.value
                ? "border-iron bg-iron text-white-off"
                : "border-iron/20 text-iron-600 hover:border-green hover:text-green"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {filteredItems.length > 0 ? (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <WorksCard key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p className="font-sans-jp mt-10 text-sm text-iron-600">該当する施工事例が見つかりませんでした。</p>
      )}
    </div>
  );
}
