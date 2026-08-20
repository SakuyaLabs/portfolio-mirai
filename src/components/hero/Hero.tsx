import HeroStatement from "./HeroStatement";
import HeroVisual from "./HeroVisual";

/**
 * TOPページ セクション1｜Hero
 * 事業内容が一目でわかるヒーロー＋実績数字（docs/planning.md IA、企画書⑤サイト構成1.）。
 */
export default function Hero() {
  return (
    <section id="hero" aria-label="株式会社ミライ工務店 ブランドステートメント" className="relative overflow-hidden">
      <HeroVisual />
      <HeroStatement />
    </section>
  );
}
