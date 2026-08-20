import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "施工相談・見積り依頼、採用に関するお問い合わせを承っています。",
};

/**
 * お問い合わせページ。施工相談・見積り依頼を完結させる（docs/planning.md IA 6.）。
 */
export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20">
        <p className="font-sans-jp text-sm tracking-[0.15em] text-green uppercase">Contact</p>
        <h1 className="font-sans-jp mt-4 text-3xl leading-[1.5] font-bold text-iron sm:text-4xl">
          お問い合わせ。
        </h1>
        <p className="font-sans-jp mt-6 max-w-2xl text-sm leading-loose text-iron-600 sm:text-base">
          施工相談・見積り依頼、採用に関するお問い合わせなど、お気軽にご連絡ください。
        </p>
      </div>

      <section aria-label="お問い合わせ方法" className="border-t border-iron/10 bg-white-off py-section-mobile lg:py-section">
        <div className="mx-auto grid max-w-4xl gap-10 px-6 sm:px-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16 lg:px-20">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
