# ts-jest & esm packages

Arrg this is so annoying. I just want to consume an ESM package from `node_modules` but jest is throwing the dreaded `Jest failed to parse a file: Unexpected token 'export'` error.

I'm using the following jest config, which AFAIK should prevent jest from attempting to transform the package in node_modules, but alas:

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
