import { PHILOSOPHY_POINTS } from "./philosophyData";

/** 企業理念。番号は装飾（listの順序情報と重複するため）としてaria-hiddenにする（①NAGIと同じ方針）。 */
export default function CompanyPhilosophy() {
  return (
    <section aria-label="企業理念" className="border-t border-iron/10 bg-white-off py-section-mobile lg:py-section">
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <p className="font-sans-jp text-sm tracking-[0.15em] text-green uppercase">Philosophy</p>
        <h2 className="font-sans-jp mt-4 text-2xl leading-[1.6] font-bold text-iron sm:text-3xl">
          企業理念
        </h2>

        <ol className="mt-14 divide-y divide-iron/10 border-t border-iron/10">
          {PHILOSOPHY_POINTS.map((point, index) => (
            <li
              key={point.title}
              className="grid grid-cols-[3rem_1fr] gap-x-6 gap-y-2 py-8 sm:grid-cols-[4rem_1fr] sm:gap-x-10"
            >
              <span aria-hidden="true" className="font-sans-jp text-2xl font-bold text-green">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-sans-jp text-lg font-bold text-iron">{point.title}</h3>
                <p className="font-sans-jp mt-3 max-w-md text-sm leading-loose text-iron-600 sm:text-base">
                  {point.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
