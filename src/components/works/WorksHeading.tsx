/** 施工事例セクション/ページの見出し・リード文。 */
export default function WorksHeading({ isPage = false }: { isPage?: boolean }) {
  const Heading = isPage ? "h1" : "h2";

  return (
    <div className="max-w-2xl">
      <p className="font-sans-jp text-sm tracking-[0.15em] text-green uppercase">Works</p>
      <Heading className="font-sans-jp mt-4 text-3xl leading-[1.5] font-bold text-iron sm:text-4xl">
        施工事例
      </Heading>
      <p className="font-sans-jp mt-6 text-sm leading-loose text-iron-600 sm:text-base">
        新築・リフォーム・リノベーションの施工事例をご紹介します。
      </p>
    </div>
  );
}
