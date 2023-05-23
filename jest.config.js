/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: ["/node_modules/(?!(react-bootstrap-tagsinput))"],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@routes/(.*)$": "<rootDir>/src/routes/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@state/(.*)$": "<rootDir>/src/state/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
  },
};

module.exports = config;
