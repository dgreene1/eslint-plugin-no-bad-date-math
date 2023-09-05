module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.ts(x)?$": [
      "ts-jest",
      {
        babel: true,
        
      },
    ],
  },
  testMatch: [
    "<rootDir>/rules/**/*.test.ts",
    "<rootDir>/rules/**/*.test.tsx",
    "<rootDir>/rules/**/*.spec.ts",
    "<rootDir>/rules/**/*.spec.tsx",
  ],
  testPathIgnorePatterns: ["/node_modules/", "\\.d\\.ts$", "lib/.*"],
  moduleFileExtensions: ["js", "ts", "json"],
};
