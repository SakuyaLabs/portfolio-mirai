import { POSITIONS } from "./positionsData";

/**
 * 募集職種の簡易一覧。応募フォームは実装せず、お問い合わせページへ誘導する（docs/planning.md IA 4.）。
 * このページではh1の直後に位置し中間のh2を挟まないため、各職種見出しはh2にする
 * （Lighthouseのheading-order監査で検出したPhase 5の反省点）。
 */
export default function PositionsList() {
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-3">
      {POSITIONS.map((position) => (
        <li key={position.title} className="rounded border border-iron/10 bg-white-soft p-6">
          <span className="font-sans-jp inline-block rounded-full bg-green/10 px-3 py-1 text-xs text-green">
            {position.type}
          </span>
          <h2 className="font-sans-jp mt-4 text-base font-bold text-iron">{position.title}</h2>
          <p className="font-sans-jp mt-3 text-sm leading-relaxed text-iron-600">{position.summary}</p>
        </li>
      ))}
    </ul>
  );
}
