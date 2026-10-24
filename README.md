# @x12i/memorix-connector-sdk usage example

Memorix Connector SDK — defineConnector, workflow, checkpoint-aware collectStream, host/remote/testing surfaces, and conformance utilities.

This consuming application demonstrates **pull two fixture records through an in-memory connector harness** using the published npm package, pinned to `1.3.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Implement a connector with checkpoint-aware stream collection.
- Run the connector SDK's conformance utilities against an implementation.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-connector-sdk)
- [Implementation monorepo](https://github.com/x12i/memorix-mono-repo)
- [Reviewed package source](https://github.com/x12i/memorix-mono-repo/tree/b87d277ff9c40cedc18d5f4775642baf8a2d3df1/memorix-connector-sdk)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
