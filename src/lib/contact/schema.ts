import { z } from "zod";

export const INQUIRY_TYPES = [
  { value: "construction", label: "施工相談・見積り依頼" },
  { value: "careers", label: "採用について" },
  { value: "other", label: "その他" },
] as const;

/**
 * お問い合わせフォームのバリデーション。施主向けの施工相談・見積り依頼に加え、
 * `/careers`からの導線も受け止められるよう、お問い合わせ種別を選択式にする
 * （docs/planning.md IA 6.、5.「/careersはお問い合わせページへの導線に留める」）。
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "お名前を入力してください")
    .max(60, "60文字以内で入力してください"),
  phone: z
    .string()
    .trim()
    .min(1, "電話番号を入力してください")
    .max(20, "20文字以内で入力してください")
    .regex(/^[0-9-]*$/, "数字とハイフンのみ入力してください"),
  email: z
    .string()
    .trim()
    .max(120, "120文字以内で入力してください")
    .email("メールアドレスの形式が正しくありません")
    .optional()
    .or(z.literal("")),
  inquiryType: z.enum(["construction", "careers", "other"]),
  message: z
    .string()
    .trim()
    .min(1, "お問い合わせ内容を入力してください")
    .max(1000, "1000文字以内で入力してください"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
