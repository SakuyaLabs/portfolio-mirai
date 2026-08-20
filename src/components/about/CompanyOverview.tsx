import { Fragment } from "react";

const OVERVIEW_ITEMS = [
  { label: "商号", value: "株式会社ミライ工務店" },
  { label: "所在地", value: "◯◯県◯◯市◯◯町1-2-3" },
  { label: "設立", value: "2013年4月" },
  { label: "資本金", value: "500万円" },
  { label: "代表者", value: "代表取締役　未来 一郎" },
  { label: "従業員数", value: "15名" },
  { label: "事業内容", value: "新築工事、リフォーム工事、リノベーション工事の請負" },
] as const;

/**
 * 会社概要（基本情報表）。`<dl>`直下はdt/ddのみで構成し、divでラップしない
 * （①NAGI Phase 5のa11y反省点を踏襲、CompanyHistoryと同じ2列グリッド方式）。
 */
export default function CompanyOverview() {
  return (
    <section aria-label="会社概要" className="border-t border-iron/10 bg-white-off py-section-mobile lg:py-section">
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <p className="font-sans-jp text-sm tracking-[0.15em] text-green uppercase">Overview</p>
        <h2 className="font-sans-jp mt-4 text-2xl leading-[1.6] font-bold text-iron sm:text-3xl">
          会社概要
        </h2>

        <dl className="mt-14 grid max-w-2xl grid-cols-[6rem_1fr] gap-x-6 sm:grid-cols-[8rem_1fr]">
          {OVERVIEW_ITEMS.map((item) => (
            <Fragment key={item.label}>
              <dt className="font-sans-jp border-t border-iron/10 py-4 text-sm text-iron-600 first:border-t-0 first:pt-0">
                {item.label}
              </dt>
              <dd className="font-sans-jp border-t border-iron/10 py-4 text-sm text-iron first:border-t-0 first:pt-0">
                {item.value}
              </dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
}
