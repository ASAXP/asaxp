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
      displayName: "nextjs",
      transform: {
        "^.+\\.ts?$": "ts-jest",
      },
      testMatch: [
        "<rootDir>/packages/frontend/next-app/src/**/*.test.ts",
        "<rootDir>/packages/frontend/next-app/src/__test__/**/*.test.ts",
      ],
      testPathIgnorePatterns: ["<rootDir>/packages/backend/express-app/dist"],
    },
    {
      displayName: "express",
      transform: {
        "^.+\\.ts?$": "ts-jest",
      },
      testMatch: [
        "<rootDir>/packages/backend/express-app/src/**/*.test.ts",
        "<rootDir>/packages/backend/express-app/src/__test__/**/*.test.ts",
      ],
      testPathIgnorePatterns: ["<rootDir>/packages/backend/express-app/dist"],
    },
  ],
};
