"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_STEADY = [0.4, 0, 0.2, 1] as const;

/** 事業内容セクションの見出し・リード文。 */
export default function BusinessHeading() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, ease: EASE_STEADY }}
      className="max-w-xl"
    >
      <p className="font-sans-jp text-sm tracking-[0.15em] text-green uppercase">Business</p>
      <h2 className="font-sans-jp mt-4 text-3xl leading-[1.5] font-bold text-iron sm:text-4xl">
        事業内容
      </h2>
      <p className="font-sans-jp mt-6 text-sm leading-loose text-iron-600 sm:text-base">
        新築・リフォーム・リノベーションの3つの領域で、それぞれのご要望に応じた家づくりをご提案しています。
      </p>
    </motion.div>
  );
}
