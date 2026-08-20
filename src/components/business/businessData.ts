export type BusinessPillar = {
  number: string;
  title: string;
  body: string;
};

/**
 * 事業内容の3本柱。企画書⑤「新築／リフォーム／リノベの3本柱を整理」に対応。
 */
export const BUSINESS_PILLARS: BusinessPillar[] = [
  {
    number: "01",
    title: "新築",
    body: "土地探しから設計・施工まで、一貫してご相談いただけます。家族構成やライフスタイルに合わせた間取りをご提案します。",
  },
  {
    number: "02",
    title: "リフォーム",
    body: "水回りの改修から外壁塗装まで、部分的な工事にも対応します。住みながらの工事にも配慮したスケジュールを組みます。",
  },
  {
    number: "03",
    title: "リノベーション",
    body: "中古住宅の購入と合わせたフルリノベーションにも対応。間取りから見直し、暮らしに合わせて一新します。",
  },
];
