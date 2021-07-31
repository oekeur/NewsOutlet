# Next.js Template

## Table of contents

-   [Setup](#setup)
-   [Editor setup](#editor-setup)
-   [Typescript](#typescript)
-   [StyleLint order](#stylelint-order)

## Setup

Install the app

-   `yarn install`

CLI commands

-   `yarn dev` or `yarn watch`: run the app in development mode: http://localhost:3000
-   `yarn run static`: build and run the app in production mode
-   `yarn run deploy`: build the site so it's ready for production

Format and test commands

-   `yarn run format`: Format all files with Prettier
-   `yarn run test`: Run Jest, currently only containing unit-tests
-   `yarn run lint`: Run ESLint and StyleLint
    -   `yarn run lint:js`: Run ESLint
    -   `yarn run lint:css`: Run StyleLint

## Editor setup

For a nicer dev experience install the `ESLint`, `StyleLint` and `Prettier` extensions.

You can also update the settings for VS-code so it auto formats the file on safe:

```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

## Typescript

The strict mode is currently disabled. If you prefer you can enable it in `tsconfig.json` (line 7).
