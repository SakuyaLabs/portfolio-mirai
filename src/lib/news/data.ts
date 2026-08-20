export type NewsPost = {
  slug: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  body: string[];
};

/**
 * お知らせのモックデータ。
 *
 * 【CMSスキーマ設計の意図】
 * `/works`（施工事例）と同じ方針で、フィールド構成（slug / title / publishedAt / excerpt / body）を
 * microCMS等の外部CMSのコンテンツモデルとしてそのまま定義できる粒度にしてある。
 * `body`は段落ごとの配列にしており、CMS側でリッチエディタ（複数段落のテキストフィールド）を
 * 導入した場合の構造とも親和性を持たせている。`slug`はCMS側でも一意なフィールドとして
 * 管理しやすいよう、英数字とハイフンのみで構成する。
 *
 * データ取得は必ず`getNewsPosts()`/`getNewsPost()`を経由させ、コンポーネント側からこの配列を
 * 直接importしない（`/works`のデータ層と同じ設計方針。詳細は`src/lib/works/data.ts`のコメント参照）。
 */
const NEWS_POSTS: NewsPost[] = [
  {
    slug: "spring-campaign-2026",
    title: "春のリフォーム相談キャンペーンを開始しました",
    publishedAt: "2026-03-01",
    excerpt: "3月末までにご相談いただいた方を対象に、現地調査を無料で承ります。",
    body: [
      "この春、リフォームをご検討中の方を対象に、現地調査無料キャンペーンを開始しました。",
      "「見積りだけでも取ってみたい」という段階からご相談いただけます。キャンペーン期間は3月31日までです。",
      "お問い合わせフォームにて「春のキャンペーンを見た」とお伝えいただくとスムーズです。",
    ],
  },
  {
    slug: "new-build-completion-report",
    title: "○○市の新築工事が完成しました",
    publishedAt: "2026-01-20",
    excerpt: "回遊動線を意識した平屋住宅が完成し、お引き渡しいたしました。",
    body: [
      "○○市にて施工を進めておりました新築工事が完成し、お引き渡しを行いました。",
      "家事のしやすさを最優先に、キッチン・洗濯・物干しが一直線でつながる回遊動線を採用しています。",
      "施工事例ページにも詳細を掲載していますので、ぜひご覧ください。",
    ],
  },
  {
    slug: "year-end-new-year-hours",
    title: "年末年始の営業について",
    publishedAt: "2025-12-15",
    excerpt: "12月29日から1月4日まで、年末年始休業とさせていただきます。",
    body: [
      "誠に勝手ながら、12月29日から1月4日まで年末年始休業とさせていただきます。",
      "休業期間中のお問い合わせは、1月5日以降、順次ご対応いたします。",
      "緊急のご相談（水回りのトラブル等）については、お電話にてご連絡ください。",
    ],
  },
  {
    slug: "safety-training-2025",
    title: "現場安全研修を実施しました",
    publishedAt: "2025-10-10",
    excerpt: "全スタッフを対象に、年1回の現場安全研修を実施しました。",
    body: [
      "毎年恒例の現場安全研修を、全スタッフを対象に実施しました。",
      "熱中症対策や高所作業時の安全確保など、季節に応じたテーマを扱っています。",
      "安全な現場運営を、これからも続けてまいります。",
    ],
  },
];

/** お知らせ一覧を取得する（公開日の新しい順）。 */
export async function getNewsPosts(): Promise<NewsPost[]> {
  return [...NEWS_POSTS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

/** slugを指定して単一のお知らせを取得する。該当がない場合は`undefined`を返す。 */
export async function getNewsPost(slug: string): Promise<NewsPost | undefined> {
  return NEWS_POSTS.find((post) => post.slug === slug);
}
