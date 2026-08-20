export type HistoryEntry = {
  year: string;
  event: string;
};

/** 沿革。創業から現在までの主要な出来事（docs/planning.md IA、企画書⑤サイト構成4.）。 */
export const HISTORY_ENTRIES: HistoryEntry[] = [
  { year: "2010年", event: "地域のリフォーム工事を中心に、個人事業として創業。" },
  { year: "2013年", event: "株式会社ミライ工務店として法人化。新築工事の受注を開始。" },
  { year: "2017年", event: "従業員10名体制に。累計施工実績が100件を突破。" },
  { year: "2021年", event: "リノベーション事業を本格開始。中古住宅の購入相談にも対応。" },
  { year: "2025年", event: "累計施工実績320件超。従業員15名体制で地域の家づくりを支える。" },
];
