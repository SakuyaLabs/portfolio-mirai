/**
 * 代表挨拶。写真は使わず、姓の一文字を紋章のように据えた円形の意匠で人物像を象徴的に表現する
 * （①NAGIのStylistVisual、④はる法律事務所のLawyerVisualと同じ方針）。
 */
export default function CompanyMessage() {
  return (
    <section aria-label="代表挨拶" className="border-t border-iron/10 bg-white-soft py-section-mobile lg:py-section">
      <div className="mx-auto grid max-w-6xl items-start gap-16 px-6 sm:px-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-24 lg:px-20">
        <div className="flex items-center justify-center py-4 lg:py-0">
          <div className="relative flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56">
            <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="98" stroke="var(--color-green)" strokeWidth="1" />
              <circle cx="100" cy="100" r="88" stroke="var(--color-iron)" strokeOpacity="0.15" strokeWidth="1" />
            </svg>
            <span className="font-sans-jp text-5xl font-bold text-iron sm:text-6xl" aria-hidden="true">
              未
            </span>
          </div>
        </div>

        <div>
          <p className="font-sans-jp text-sm tracking-[0.15em] text-green uppercase">Message</p>
          <h2 className="font-sans-jp mt-4 text-2xl leading-[1.6] font-bold text-iron sm:text-3xl">
            代表挨拶
          </h2>

          <div className="font-sans-jp mt-6 space-y-4 text-sm leading-loose text-iron-600 sm:text-base">
            <p>
              株式会社ミライ工務店は、この地域で家づくりを続けて15年になります。大きな会社ではありませんが、
              一件一件のお客様と向き合う時間だけは、どこにも負けないと思っています。
            </p>
            <p>
              家は、建てて終わりではありません。住み始めてからの何十年こそが本番です。だからこそ、
              引き渡した後も気軽に相談していただける関係を、これからも大切にしていきます。
            </p>
          </div>

          <p className="font-sans-jp mt-8 text-sm text-iron">
            代表取締役　未来 一郎
          </p>
        </div>
      </div>
    </section>
  );
}
