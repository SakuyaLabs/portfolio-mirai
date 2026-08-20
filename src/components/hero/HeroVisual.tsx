/**
 * Heroセクションの背景ビジュアル。写真は使わず、建材のグリッドと直線的な意匠で
 * 「堅実さ」を表現する（docs/planning.md ビジュアル素材の方針）。
 * ①〜④のような装飾的なグラデーション・光暈は使わず、直線のみで構成することで
 * 「奇をてらわない」トーンを保つ。
 */
export default function HeroVisual() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-white-soft">
      {/* 建材の板を思わせる縦のグリッドライン。8pxグリッドの倍数(64px)で配置し、
          デザインシステムの余白基準と一貫性を持たせる。 */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <pattern id="mirai-grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="64" stroke="var(--color-iron)" strokeOpacity="0.06" strokeWidth="1" />
            <line x1="0" y1="0" x2="64" y2="0" stroke="var(--color-iron)" strokeOpacity="0.04" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mirai-grid)" />
      </svg>

      {/* 右下に一本、深緑のアクセントライン。過剰な装飾を避けつつ視線の落ち着き先を作る。 */}
      <div className="absolute right-0 bottom-0 h-1 w-1/3 bg-green" />
    </div>
  );
}
