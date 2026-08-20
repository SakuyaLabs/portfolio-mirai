import { Fragment } from "react";

const STATS = [
  { value: "15年", label: "地域での実績" },
  { value: "320件+", label: "累計施工実績" },
  { value: "15名", label: "従業員数" },
] as const;

/**
 * 実績数字。企画書⑤「事業内容が一目でわかるヒーロー＋実績数字」に対応。
 * ③FORGEのようなカウントアップ演出は行わず、静的に提示する（堅実さを損なわないため）。
 * `<dl>`直下はdt/ddのみで構成し、divでラップしない（①NAGI Phase 5のa11y反省点を踏襲）。
 */
export default function HeroStats() {
  return (
    <dl className="mt-10 grid auto-cols-fr grid-flow-col grid-rows-2 gap-x-6 gap-y-1 border-t border-iron/10 pt-6 sm:gap-x-10">
      {STATS.map((stat) => (
        <Fragment key={stat.label}>
          <dt className="font-sans-jp text-xs text-iron-600">{stat.label}</dt>
          <dd className="font-sans-jp mt-1 text-2xl font-bold text-iron sm:text-3xl">{stat.value}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
