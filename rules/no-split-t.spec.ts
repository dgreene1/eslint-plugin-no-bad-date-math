import rule from "./no-split-t";
import { RuleTester } from "@typescript-eslint/rule-tester";

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
});

ruleTester.run("no-split-t", rule, {
  valid: [`string.split('-');`, `string.split('Tab')`, `string.split('T ')`],
  invalid: [
    {
      code: `date.toString().split('T');`,
      errors: [
        {
          messageId: "noSplitT",
        },
      ],
    },
    {
      code: `
      const getCurrentDate = () => {
        return new Date().toISOString().split('T')[0];
      };`,
      errors: [
        {
          messageId: "noSplitT",
        },
      ],
    },
    {
      code: `export const dateToYMD = (date?: Date | null) => (date ? date.toISOString().split('T')[0] : '');`,
      errors: [
        {
          messageId: "noSplitT",
        },
      ],
    },
    {
      code: `
      class Foo extends Component {
        handleClick() {
            const dateString = date.toString().split('T');
          }
      }`,
      errors: [
        {
          messageId: "noSplitT",
        },
      ],
    },
  ],
});
