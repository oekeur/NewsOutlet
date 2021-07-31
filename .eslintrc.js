module.exports = {
    env: {
        browser: true,
        es2021: true,
        "jest/globals": true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb-base",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "jest"],
    rules: {
        "react/self-closing-comp": [
            "error",
            {
                component: true,
                html: true,
            },
        ],
        "react/react-in-jsx-scope": "off",
        "array-callback-return": "off",
        "arrow-body-style": "off",
        "arrow-parens": "off",
        "comma-dangle": [
            "error",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "only-multiline",
            },
        ],
        "dot-notation": "off",
        "func-names": "off",
        "implicit-arrow-linebreak": "off",
        "import/extensions": [
            "error",
            "never",
            {
                ts: "never",
                tsx: "never",
                js: "never",
                jsx: "never",
                mjs: "never",
            },
        ],
        "import/no-duplicates": "off",
        "import/no-named-default": "off",
        "import/no-unassigned-import": "off",
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: [
                    "**/*.test.ts",
                    "**/*.test.tsx",
                    "jest.setup.ts",
                ],
            },
        ],
        "import/prefer-default-export": "off",
        "no-alert": "off",
        "no-confusing-arrow": "off",
        "no-console": "off",
        "no-param-reassign": "off",
        "no-unused-vars": ["warn", { args: "none" }],
        "object-curly-newline": "off",
        "padded-blocks": "off",
        "prefer-destructuring": "warn",
        "prefer-promise-reject-errors": "off",
        camelcase: "off",
        quotes: "off",
        "space-before-function-paren": "off",
    },
    globals: { React: "writable", JSX: true },
    settings: {
        react: {
            version: "detect",
        },
    },
    ignorePatterns: ["/node_modules", "/out", "/public", "/styles", ".next"],
};
