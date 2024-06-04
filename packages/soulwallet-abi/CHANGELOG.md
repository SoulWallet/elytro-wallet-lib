# @soulwallet/abi

## 0.3.3

### Patch Changes

- 37f7773: - @soulwallet/decoder@0.3.2

  - Updated offline bytes4 list

  - @soulwallet/assets@0.3.1
    - Updated offline token list
  - @soulwallet/abi@0.3.2
    - Added zkEmail ABI
  - @soulwallet/sdk@0.3.5
    - Added static function `initializeData`
  - @soulwallet/zkemail
    - Server side zkEmail

## 0.3.2

### Patch Changes

- 910f948: Update to the latest contract version compatible.

## 0.3.1

### Patch Changes

- b080ac3: 1. Compatibility with [savings](https://github.com/SoulWallet/soul-wallet-contract/commit/09082c1837df7c8c2f026b2e38775201a3bbf3bf) branch. 2. Removed `IL1KeyStore` from @soulwallet/sdk, added `SocialRecovery`.

## 0.3.0

### Minor Changes

- 32f4da1: EntryPoint v0.7.0 Compatible

## 0.2.0

### Minor Changes

- ba276ce: Updated to support the latest contract

## 0.1.4

### Patch Changes

- fee433c: Updating Project License to Reflect Accurate Licensing

## 0.1.3

### Patch Changes

- 010e96d: - @soulwallet/keyvault

  - Updated ethers.js -> 6.8.1

  - @soulwallet/decoder

    - Updated bytes4 dictionary for contracts

  - @soulwallet/assets

    - Updated ERC20 database

      ```shell
      + Big Time
      + iExec RLC
      ```

  - @soulwallet/abi

    - Updated contract ABI

      - ```
        ABI_KeystoreProof.ts
        	lastestProofL1BlockNumber -> latestProofL1BlockNumber

        ABI_SoulWallet.ts
        	hash -> rawHash
        ```

  - @soulwallet/sdk

    - Supported RS256 signature algorithm

      ```js
      export interface RSAPublicKey {
        /**
         * Hex string of public exponent
         *
         * @type {string}
         * @memberof RSAPublicKey
         */
        e: string;

        /**
         * Hex string of public key
         *
         * @type {string}
         * @memberof RSAPublicKey
         */
        n: string;
      }
      ```

## 0.1.2

### Patch Changes

- passkey version merged into soulwallet@npmjs.com

## 0.1.1

### Patch Changes

- fe0c28b: Initial release of the package.
