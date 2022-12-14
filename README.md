# Mirror World Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/mirrorworld)](https://www.npmjs.com/package/@fern-api/mirrorworld)

This repository contains the unified Node.JS SDK for all the Mirror World APIs.

## Documentation

API documentation is available at <https://developer.mirrorworld.fun/>.

## Usage

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/mirrorworld-typescript-example?file=app.ts&view=editor)

```
npm install @fern-api/mirrorworld # or yarn add @fern-api/mirrorworld
```

```typescript
const client = new MirrorworldApiClient({
    apiKey: 'YOUR_API_KEY_HERE',
});

const response = await client.marketplaces.mint.mintNft('devnet', {
    collectionMint: '9pd6wUcfZpPBsrQFxqEkMjfbyaqraQRsiQtD8D4wqa6W',
    name: 'new asset',
    symbol: 'NA',
    url: 'https://market-assets.mirrorworld.fun/gen1/1.json',
});

console.log(
    'Received response from Mirror World!',
    JSON.stringify(response, undefined, 4)
);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-mirrorworld/mirrorworld-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
