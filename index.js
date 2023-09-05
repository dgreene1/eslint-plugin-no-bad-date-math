"use strict";

module.exports = {
  configs: {
    all: {
      plugins: ["no-bad-date-math"],
      rules: {
        "no-bad-date-math/no-split-t": "warn",
      },
    },
  },
  rules: {
    "no-split-t": require("./rules/no-split-t.ts"),
  },
};
