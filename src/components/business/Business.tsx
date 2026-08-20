import BusinessHeading from "./BusinessHeading";
import BusinessPillars from "./BusinessPillars";

/**
 * TOPページ セクション2｜事業内容
 * 新築／リフォーム／リノベの3本柱を整理する（docs/planning.md IA、企画書⑤サイト構成2.）。
 */
export default function Business() {
  return (
    <section id="business" aria-label="事業内容" className="border-t border-iron/10 bg-white-soft py-section-mobile lg:py-section">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 sm:px-12 lg:grid-cols-2 lg:gap-24 lg:px-20">
        <BusinessHeading />
        <BusinessPillars />
      </div>
    </section>
  );
}
