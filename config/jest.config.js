const { resolve } = require( "path" );

module.exports = async () => {
    return {
        rootDir: resolve( __dirname, ".." ),
        verbose: true,
        collectCoverage: true,
        testRegex: "(/__tests__/.*)\\.(spec)\\.(ts|tsx)$",
        testEnvironment: "jsdom",
        setupFilesAfterEnv: [ "@testing-library/jest-dom/extend-expect" ],
        transform: {
            "\\.[jt]sx?$": [ "babel-jest", { configFile: "./config/babel.config.js" } ],
        },
        collectCoverageFrom: [
            "**/res/**/*.ts",
            "**/res/**/*.tsx",
            "**/src/**/*.ts",
            "**/src/**/*.tsx",
        ],
        coveragePathIgnorePatterns: [
            "(/__mocks__/.*)\\.(ts|tsx)$",
            "(/__tests__/.*)\\.(spec)\\.(ts|tsx)$",
            "global.d.ts",
        ],
        moduleFileExtensions: [
            "ts",
            "tsx",
            "js",
            "jsx",
            "json",
        ],
        moduleNameMapper: {
            "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/res/__mocks__/staticfiles.mock.js",
            "@components/(.*)": "<rootDir>/src/components/$1",
            "@containers/(.*)": "<rootDir>/src/containers/$1",
            "@pages/(.*)": "<rootDir>/src/pages/$1",
            "@services/(.*)": "<rootDir>/src/services/$1",
            "@utils/(.*)": "<rootDir>/src/utils/$1",
            "@store/(.*)": "<rootDir>/src/store/$1",
            "@res/(.*)": "<rootDir>/res/$1",
            "@type/(.*)": "<rootDir>/src/types/$1",
            "@mocks/(.*)": "<rootDir>/__mocks__/$1",
        },
        globals: {
            __ENVIRONMENT__: "production",
            __IS_DEVELOPMENT__: false,
            __IS_PRODUCTION__: true,
            __NAME__: "test-app",
            __VERSION__: "1.0.0-test",
        },
        coverageReporters: [
            "lcov",
            "html",
        ],
        testURL: "https://test.com",
    }
};