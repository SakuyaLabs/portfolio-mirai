export type WorksCategory = "new-build" | "reform" | "renovation";

export type WorksCategoryMeta = {
  value: WorksCategory;
  label: string;
};

export const WORKS_CATEGORIES: WorksCategoryMeta[] = [
  { value: "new-build", label: "新築" },
  { value: "reform", label: "リフォーム" },
  { value: "renovation", label: "リノベーション" },
];

export type WorksItem = {
  id: string;
  title: string;
  category: WorksCategory;
  location: string;
  completedAt: string;
  summary: string;
};

/**
 * 施工事例のモックデータ。
 *
 * 【CMSスキーマ設計の意図】
 * 実データは現状このファイル内の配列として保持しているが、フィールド構成
 * （title / category / location / completedAt / summary）は、そのまま
 * microCMS等の外部CMSのコンテンツモデルとして定義できる粒度にしてある。
 * カテゴリ（`category`）は将来CMS側でセレクトフィールドとして定義する想定のため、
 * 文字列の直書きではなく`WorksCategory`のユニオン型で管理している。
 * 詳細ページ（施工事例の個別ページ）を追加する場合も、`id`をそのままslugとして
 * 転用できる構成にしている。
 *
 * データ取得は必ず`getWorksItems()`を経由させ、コンポーネント側からこの配列を
 * 直接importしない。CMS移行時は、この関数の内部実装を`fetch`呼び出しに置き換える
 * だけで済み、呼び出し側（ページ・コンポーネント）の変更は不要になる。
 */
const WORKS_ITEMS: WorksItem[] = [
  {
    id: "new-build-01",
    title: "平屋の家（○○市）",
    category: "new-build",
    location: "○○市",
    completedAt: "2025-03",
    summary: "回遊動線を意識した平屋。家事のしやすさを最優先に設計しました。",
  },
  {
    id: "new-build-02",
    title: "二世帯住宅（○○町）",
    category: "new-build",
    location: "○○町",
    completedAt: "2024-11",
    summary: "玄関を分けつつ、共用のリビングでつながる二世帯住宅。",
  },
  {
    id: "reform-01",
    title: "水回り一新リフォーム（○○市）",
    category: "reform",
    location: "○○市",
    completedAt: "2025-01",
    summary: "キッチン・浴室・洗面をまとめて改修。工期は2週間でした。",
  },
  {
    id: "reform-02",
    title: "外壁・屋根塗装（○○区）",
    category: "reform",
    location: "○○区",
    completedAt: "2024-09",
    summary: "築15年の外壁塗装。断熱性能も同時に向上させました。",
  },
  {
    id: "renovation-01",
    title: "中古マンションフルリノベーション（○○市）",
    category: "renovation",
    location: "○○市",
    completedAt: "2025-02",
    summary: "築25年のマンションを購入と同時にフルリノベーション。間取りから見直しました。",
  },
  {
    id: "renovation-02",
    title: "古民家再生（○○町）",
    category: "renovation",
    location: "○○町",
    completedAt: "2024-06",
    summary: "築40年の古民家の骨組みを活かしながら、断熱・耐震性能を向上させました。",
  },
];

/**
 * 施工事例を取得する。現状はモックデータをそのまま返すが、Promiseを返す
 * シグネチャにしておくことで、将来`fetch`ベースのCMS呼び出しに置き換えても
 * 呼び出し側の実装（`await getWorksItems()`）を変えずに済む。
 */
export async function getWorksItems(): Promise<WorksItem[]> {
  return WORKS_ITEMS;
}
