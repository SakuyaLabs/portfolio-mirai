export type PhilosophyPoint = {
  title: string;
  body: string;
};

/** 企業理念。3つの姿勢を掲げる（docs/planning.md IA、企画書⑤サイト構成4.）。 */
export const PHILOSOPHY_POINTS: PhilosophyPoint[] = [
  {
    title: "地域に根ざす",
    body: "この土地の気候や暮らし方を知っているからこそできる提案があります。地域密着を、これからも続けます。",
  },
  {
    title: "長く付き合う",
    body: "工事が終わった後も、点検・相談をいつでも受け付けます。一度きりの関係で終わらせません。",
  },
  {
    title: "誠実に伝える",
    body: "都合の良いことだけでなく、費用や工期の見通しも正直にお伝えします。信頼は、正直さの積み重ねだと考えています。",
  },
];
