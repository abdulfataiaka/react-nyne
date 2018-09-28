module.exports = {
  setupFiles: [
    "<rootDir>/src/jestSetup.js"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/index.js",
    "!src/helpers/*.js"
  ],
  coverageDirectory: "coverage"
}
