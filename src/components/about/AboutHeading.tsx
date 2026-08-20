/** 会社概要ページの見出し・リード文。 */
export default function AboutHeading() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20">
      <p className="font-sans-jp text-sm tracking-[0.15em] text-green uppercase">About</p>
      <h1 className="font-sans-jp mt-4 text-3xl leading-[1.5] font-bold text-iron sm:text-4xl">
        会社概要
      </h1>
      <p className="font-sans-jp mt-6 max-w-2xl text-sm leading-loose text-iron-600 sm:text-base">
        地域に根ざして15年。私たちがどんな会社か、代表の言葉と歩みでご紹介します。
      </p>
    </div>
  );
}
