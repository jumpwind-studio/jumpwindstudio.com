import { cx } from "@/lib/cva";

/**
 * Combines multiple class names into a single string.
 *
 * @param inputs Classes to combine.
 * @returns Combined classes.
 *
 * @example cn("font-bold", "font-semibold") => "font-semibold"
 */
export const cn: typeof cx = (...inputs) => {
  return cx(inputs);
};
