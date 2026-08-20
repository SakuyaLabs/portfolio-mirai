"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import HeroStats from "./HeroStats";

const EASE_STEADY = [0.4, 0, 0.2, 1] as const;

/**
 * ブランドステートメント＋実績数字。①〜④の中で最も控えめなアニメーションに留め、
 * 単純なフェードインのみを使う（docs/planning.md Phase 2、意思決定ログ）。
 */
export default function HeroStatement() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, ease: EASE_STEADY }}
      className="relative z-10 mx-auto max-w-3xl px-6 py-20 sm:px-12 sm:py-28 lg:px-20"
    >
      <p className="font-sans-jp text-sm tracking-[0.15em] text-green uppercase">
        Mirai Construction Co., Ltd.
      </p>
      <h1 className="font-sans-jp mt-4 text-3xl leading-[1.5] font-bold text-iron sm:text-4xl lg:text-5xl">
        地域とともに、
        <br />
        堅実な家づくりを。
      </h1>
      <p className="font-sans-jp mt-6 max-w-xl text-sm leading-loose text-iron-600 sm:text-base">
        新築・リフォーム・リノベーション。創業から15年、地域に根ざして家づくりをしてきました。
        派手さより、住む人の暮らしに合うことを大切にしています。
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="font-sans-jp inline-flex w-fit items-center justify-center gap-2 rounded bg-iron px-8 py-3.5 text-sm font-medium text-white-off transition-colors duration-300 hover:bg-iron-700"
        >
          施工相談・見積り依頼
        </Link>
        <Link
          href="/works"
          className="font-sans-jp inline-flex w-fit items-center justify-center gap-2 rounded border border-iron/20 px-8 py-3.5 text-sm font-medium text-iron transition-colors duration-300 hover:border-green hover:text-green"
        >
          施工事例を見る
        </Link>
      </div>

      <HeroStats />
    </motion.div>
  );
}
