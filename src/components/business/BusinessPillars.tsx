"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { BUSINESS_PILLARS } from "./businessData";

const EASE_STEADY = [0.4, 0, 0.2, 1] as const;

/**
 * 新築・リフォーム・リノベーションの3本柱。番号は装飾（listの順序情報と重複するため）として
 * aria-hiddenにし、各項目のタイトルはh2に続くh3として実装する（①NAGIのConceptPillarsと同じ方針）。
 */
export default function BusinessPillars() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
  };

  const item: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: shouldReduceMotion ? 0.3 : 0.5, ease: EASE_STEADY } },
  };

  return (
    <motion.ol
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-16 divide-y divide-iron/10 border-t border-iron/10 lg:mt-0"
    >
      {BUSINESS_PILLARS.map((pillar) => (
        <motion.li
          key={pillar.number}
          variants={item}
          className="grid grid-cols-[3rem_1fr] gap-x-6 gap-y-2 py-8 sm:grid-cols-[4rem_1fr] sm:gap-x-10"
        >
          <span aria-hidden="true" className="font-sans-jp text-2xl font-bold text-green">
            {pillar.number}
          </span>
          <div>
            <h3 className="font-sans-jp text-lg font-bold text-iron">{pillar.title}</h3>
            <p className="font-sans-jp mt-3 max-w-md text-sm leading-loose text-iron-600 sm:text-base">
              {pillar.body}
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
