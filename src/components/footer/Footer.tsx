import Link from "next/link";

const NAV_LINKS = [
  { href: "/works", label: "施工事例" },
  { href: "/about", label: "会社概要" },
  { href: "/careers", label: "採用情報" },
  { href: "/news", label: "お知らせ" },
  { href: "/contact", label: "お問い合わせ" },
] as const;

/**
 * サイトフッター。ナビゲーションに加え、実在企業との誤認を避けるための
 * 「Concept Project by SakuyaLabs」表記を常時表示する（企画書4-2、docs/planning.md）。
 */
export default function Footer() {
  return (
    <footer className="border-t border-iron/10 bg-iron text-white-off">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-12 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="font-sans-jp text-xl font-bold text-white-off">株式会社ミライ工務店</p>
            <p className="font-sans-jp mt-2 text-xs tracking-[0.1em] text-green-soft">
              新築・リフォーム・リノベーション
            </p>
          </div>

          <nav aria-label="フッターナビゲーション">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 font-sans-jp text-xs tracking-wide text-white-off/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors duration-300 hover:text-white-off">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white-off/15 pt-8 text-xs text-white-off/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans-jp leading-relaxed">
            本サイトは
            <a
              href="https://sakuyalabs.com"
              className="mx-1 text-green-soft underline decoration-white-off/30 underline-offset-4 transition-colors hover:text-white-off"
            >
              SakuyaLabs
            </a>
            によるポートフォリオ用のConcept Project（架空案件）です。実在の企業ではありません。
          </p>
          <p className="font-sans-jp tracking-wide">
            © {new Date().getFullYear()} 株式会社ミライ工務店 — Concept Project
          </p>
        </div>
      </div>
    </footer>
  );
}
