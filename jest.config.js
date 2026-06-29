module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["script.js", "!node_modules/**"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html"]
};
