## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/spuerzjj/common-regex-fp
cd common-regex-fp
npm install
```

`npm run build` builds the library to `dist`, generating three files:

* `dist/index.cjs.js`
    A CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency. This corresponds to the `"main"` field in package.json
* `dist/index.esm.js`
    an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. This corresponds to the `"module"` field in package.json
* `dist/index.umd.js`
    a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json

`npm run dev` builds the library, then keeps rebuilding it whenever the source files change using [rollup-watch](https://github.com/rollup/rollup-watch).

`npm test` builds the library, then tests it.

## How to use

1. npm install 



## License

[MIT](LICENSE).
