/** お知らせセクション/ページの見出し・リード文。 */
export default function NewsHeading({ isPage = false }: { isPage?: boolean }) {
  const Heading = isPage ? "h1" : "h2";

  return (
    <div className="max-w-2xl">
      <p className="font-sans-jp text-sm tracking-[0.15em] text-green uppercase">News</p>
      <Heading className="font-sans-jp mt-4 text-3xl leading-[1.5] font-bold text-iron sm:text-4xl">
        お知らせ
      </Heading>
    </div>
  );
}
