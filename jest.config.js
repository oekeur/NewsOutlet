// jest.config.js
module.exports = {
    setupFilesAfterEnv: ["./jest.setup.ts"],
    testPathIgnorePatterns: [".next/", "node_modules/", "/interfaces/spec.ts"],
    moduleNameMapper: {
        "\\.(scss|sass|css)$": "identity-obj-proxy",
    },
};
