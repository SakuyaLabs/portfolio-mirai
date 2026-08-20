"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, INQUIRY_TYPES, type ContactFormValues } from "@/lib/contact/schema";

const inputClass =
  "w-full rounded border border-iron/20 bg-white-off px-4 py-2.5 font-sans-jp text-sm text-iron placeholder:text-iron-600 focus:border-green focus:outline-none";

const labelClass = "font-sans-jp mb-2 block text-xs text-iron-600";

/**
 * お問い合わせフォーム。実際のAPIには送信せず、クライアント側で送信を模擬して
 * デモ相談であることを明示する（docs/planning.md Concept Project表記の方針）。
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState<ContactFormValues | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", inquiryType: "construction", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSubmitted(values);
  }

  if (submitted) {
    const typeLabel = INQUIRY_TYPES.find((t) => t.value === submitted.inquiryType)?.label ?? submitted.inquiryType;

    return (
      <div className="rounded border border-iron/10 bg-white-soft p-6 sm:p-8">
        <p className="font-sans-jp text-sm tracking-[0.15em] text-green uppercase">Received</p>
        <h2 className="font-sans-jp mt-4 text-xl font-bold text-iron sm:text-2xl">
          お問い合わせありがとうございます、{submitted.name}様。
        </h2>

        <dl className="font-sans-jp mt-6 space-y-2 border-t border-iron/10 pt-5 text-sm text-iron-600">
          <div className="flex justify-between gap-4">
            <dt>お問い合わせ種別</dt>
            <dd className="text-iron">{typeLabel}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>連絡先</dt>
            <dd className="text-iron">{submitted.phone}</dd>
          </div>
        </dl>

        <p className="font-sans-jp mt-6 text-xs leading-relaxed text-iron-600">
          ※これはSakuyaLabsのポートフォリオ用Concept Projectのデモ相談です。実際のご相談は確定しておらず、
          ご入力内容の保存・連絡は行われません。実際の株式会社ミライ工務店という企業は存在しません。
        </p>

        <button
          type="button"
          onClick={() => {
            reset();
            setSubmitted(null);
          }}
          className="font-sans-jp mt-8 inline-flex items-center gap-2 text-sm text-iron transition-colors duration-300 hover:text-green"
        >
          別の内容で試す
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded border border-iron/10 bg-white-soft p-6 sm:p-8"
    >
      <div>
        <label htmlFor="name" className={labelClass}>
          お名前 <span className="text-green">必須</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={inputClass}
          placeholder="山田 太郎"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name ? (
          <p id="name-error" role="alert" className="mt-2 text-xs text-green">
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            電話番号 <span className="text-green">必須</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="090-1234-5678"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id="phone-error" role="alert" className="mt-2 text-xs text-green">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            メールアドレス（任意）
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-error" role="alert" className="mt-2 text-xs text-green">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="inquiryType" className={labelClass}>
          お問い合わせ種別 <span className="text-green">必須</span>
        </label>
        <select id="inquiryType" className={inputClass} {...register("inquiryType")}>
          {INQUIRY_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          お問い合わせ内容 <span className="text-green">必須</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="ご相談内容やご質問を、分かる範囲でご記入ください"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message ? (
          <p id="message-error" role="alert" className="mt-2 text-xs text-green">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <p className="font-sans-jp mt-6 text-xs leading-relaxed text-iron-600">
        ※これはSakuyaLabsのポートフォリオ用デモ相談フォームです。実際のご相談は確定せず、送信内容は保存・利用されません。
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="font-sans-jp mt-6 w-full rounded bg-iron px-6 py-3.5 text-sm font-medium text-white-off transition-colors duration-300 hover:bg-iron-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {submitting ? "送信中…" : "この内容で送信する（デモ）"}
      </button>
    </form>
  );
}
