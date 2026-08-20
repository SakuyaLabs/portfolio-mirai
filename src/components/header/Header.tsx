import Link from "next/link";

const NAV_LINKS = [
  { href: "/works", label: "施工事例" },
  { href: "/about", label: "会社概要" },
  { href: "/careers", label: "採用情報" },
  { href: "/news", label: "お知らせ" },
  { href: "/contact", label: "お問い合わせ" },
] as const;

/**
 * サイトヘッダー。④はる法律事務所と同様、複数ページ構成のためナビゲーションを持つ
 * （docs/planning.md IA）。施主・採用検討者どちらのペルソナも迷わず目的のページへ辿り着けるようにする。
 */
export default function Header() {
  return (
    <header className="border-b border-iron/10 bg-white-soft">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-12 lg:px-20">
        <Link href="/" className="font-sans-jp text-lg font-bold text-iron">
          株式会社ミライ工務店
        </Link>
        <nav aria-label="メインナビゲーション">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans-jp text-sm text-iron-600">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors duration-300 hover:text-green">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
