export type Position = {
  title: string;
  type: string;
  summary: string;
};

/**
 * 募集職種。企画書⑤「採用情報（簡易）：採用サイト⑥への導線として最小限のみ設置」に対応し、
 * 詳細な応募フローや応募フォームはこのページには実装しない（⑥Nolanで実装予定の領域）。
 */
export const POSITIONS: Position[] = [
  { title: "現場スタッフ（大工・とび）", type: "正社員", summary: "未経験可。先輩の下で基礎から学べます。" },
  { title: "施工管理", type: "正社員", summary: "工程・品質・安全管理を担当。現場経験者歓迎。" },
  { title: "事務・営業サポート", type: "正社員・パート", summary: "見積り作成やお客様対応など、現場を支える仕事です。" },
];
