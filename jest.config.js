/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  moduleFileExtensions: ["ts", "js"],
  transformIgnorePatterns: ["/node_modules", "./**/*/node_modules"],
  projects: [
    {
      displayName: "express",
      transform: {
        "^.+\\.ts?$": "ts-jest",
      },
      testMatch: [
        "<rootDir>/packages/backend/express-app/src/**/*.test.ts",
        "<rootDir>/packages/backend/express-app/src/**/test/*.test.ts",
      ],
      testPathIgnorePatterns: ["<rootDir>/packages/backend/express-app/dist"],
    },
  ],
};
