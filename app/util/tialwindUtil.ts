import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwindのクラス名をマージするユーティリティ関数
 * @param inputs クラス名のリスト
 * @returns 最適化されたクラス名
 */
export function cn(...inputs: (string | undefined | null | boolean)[]) {
  return twMerge(clsx(inputs));
}
