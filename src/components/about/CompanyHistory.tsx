import { Fragment } from "react";
import { HISTORY_ENTRIES } from "./historyData";

/**
 * 沿革。時系列の出来事を示す性質上、`<dl>`（年＝dt／出来事＝dd）として実装する。
 * `<dl>`直下はdt/ddのみで構成し、divでラップしない（①NAGI Phase 5のa11y反省点を踏襲）。
 * `<dl>`自体を2列グリッドコンテナにし、各dt/ddに境界線を個別に付けることで
 * （行の先頭要素のみ`first:border-t-0`で除外）、直下要素の制約を守ったまま年表の見た目を再現する。
 */
export default function CompanyHistory() {
  return (
    <section aria-label="沿革" className="border-t border-iron/10 bg-white-soft py-section-mobile lg:py-section">
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <p className="font-sans-jp text-sm tracking-[0.15em] text-green uppercase">History</p>
        <h2 className="font-sans-jp mt-4 text-2xl leading-[1.6] font-bold text-iron sm:text-3xl">
          沿革
        </h2>

        <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-[6rem_1fr] gap-x-6 sm:grid-cols-[8rem_1fr]">
          {HISTORY_ENTRIES.map((entry) => (
            <Fragment key={entry.year}>
              <dt className="font-sans-jp border-t border-iron/10 py-5 text-sm font-bold text-iron first:border-t-0 first:pt-0">
                {entry.year}
              </dt>
              <dd className="font-sans-jp border-t border-iron/10 py-5 text-sm leading-relaxed text-iron-600 first:border-t-0 first:pt-0">
                {entry.event}
              </dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
}
