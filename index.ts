import { TSESLint } from "@typescript-eslint/utils";
import rule from "./rules/no-split-t";

export const rules = {
  "no-split-t": rule,
} satisfies Record<string, TSESLint.RuleModule<string, Array<unknown>>>;
