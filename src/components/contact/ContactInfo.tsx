/** 電話でのお問い合わせ案内。フォーム以外の選択肢を残す（docs/planning.md 導線設計）。 */
export default function ContactInfo() {
  return (
    <div className="rounded border border-iron/10 bg-white-soft p-6 sm:p-7">
      <p className="font-sans-jp text-xs tracking-[0.15em] text-iron-600 uppercase">Tel</p>
      <a
        href="tel:0120-000-000"
        className="font-sans-jp mt-2 block text-3xl font-bold text-iron transition-colors duration-300 hover:text-green sm:text-4xl"
      >
        0120-000-000
      </a>
      <p className="font-sans-jp mt-3 text-xs leading-relaxed text-iron-600">
        受付時間 平日8:00–18:00。お急ぎの場合はお電話でのご相談をお勧めします。
      </p>
    </div>
  );
}
