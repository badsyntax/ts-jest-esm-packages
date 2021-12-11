# ts-jest & esm packages

Arrg this is so annoying. I just want to consume an ESM package from `node_modules` but jest is throwing the dreaded `Jest failed to parse a file: Unexpected token 'export'` error:

```console
 FAIL  src/esmPackage.test.ts
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.
```

I'm using the following jest config, which AFAIK should prevent jest from attempting to transform the package in `node_modules`, but alas:

```js
export default {
  testMatch: ["**/*.test.ts"],
  preset: "ts-jest/presets/default-esm", // or other ESM presets
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  verbose: true,
  transform: {},
};
```

Even though i've set `type: "module"` in my `package.json` jest can't seem to "understand" ESM syntax. I really don't know what jest is doing behind the scenes and it's annoying.

The "solution" is to use `--experimental-vm-modules`. Refer to `package.json`.
