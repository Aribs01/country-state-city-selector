/** @type {import('jest').Config} */
module.exports = {
  transform: {}, // Do not use ts-jest or Babel for transformations
  testEnvironment: "node", // Use the Node environment for tests
  extensionsToTreatAsEsm: [".ts", ".tsx"], // Treat TypeScript files as ESM
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Supported file extensions
  runner: "tsx", // Use tsx as the test runner
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)"], // Match test files
};
