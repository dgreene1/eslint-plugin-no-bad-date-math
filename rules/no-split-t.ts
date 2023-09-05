import { TSESLint, AST_NODE_TYPES } from "@typescript-eslint/utils";

type MessageId = "noSplitT";

const rule: TSESLint.RuleModule<MessageId> = {
  defaultOptions: [],
  meta: {
    type: "suggestion",
    messages: {
      noSplitT:
        "Splitting a date time string on the character T is considered ill advised.",
    },
    schema: [], // no options
  },
  create: (context) => ({
    CallExpression: (node) => {
      if (node.callee.type !== AST_NODE_TYPES.MemberExpression) {
        return;
      }

      if (
        node.callee.property.type === AST_NODE_TYPES.Identifier &&
        node.callee.property.name === "split" &&
        node.arguments.find(
          (i) => i.type === AST_NODE_TYPES.Literal && i.value === "T"
        )
      ) {
        return context.report({
          node,
          messageId: "noSplitT",
        });
      }

      return;
    },
  }),
};

export default rule;
