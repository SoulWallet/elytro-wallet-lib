[@elytro/sdk](../README.md) / [Modules](../modules.md) / WalletFactory

# Class: WalletFactory

## Table of contents

### Constructors

- [constructor](WalletFactory.md#constructor)

### Methods

- [calcSalt](WalletFactory.md#calcsalt)
- [calcWalletAddressSalt](WalletFactory.md#calcwalletaddresssalt)
- [getWalletAddress](WalletFactory.md#getwalletaddress)
- [getWalletAddressByIndex](WalletFactory.md#getwalletaddressbyindex)
- [proxyCode](WalletFactory.md#proxycode)

## Constructors

### constructor

• **new WalletFactory**(): [`WalletFactory`](WalletFactory.md)

#### Returns

[`WalletFactory`](WalletFactory.md)

## Methods

### calcSalt

▸ **calcSalt**(`initializer`, `salt`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializer` | `string` |
| `salt` | `string` |

#### Returns

`string`

#### Defined in

[packages/sdk/src/tools/walletFactory.ts:23](https://github.com/jayden-sudo/elytro-wallet-lib/blob/86ed41b3b7e27b9de5339986244a72cb1f25e2cf/packages/sdk/src/tools/walletFactory.ts#L23)

___

### calcWalletAddressSalt

▸ **calcWalletAddressSalt**(`index`, `chainId`): `string`

get wallet address salt from readable index
baseSalt = keccak256(bytes(chainId))
Salt = baseSalt + index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | readable index |
| `chainId` | `string` \| `number` | number or hex string(must start with 0x) |

#### Returns

`string`

{string} bytes32 salt

**`Static`**

**`Memberof`**

WalletFactory

#### Defined in

[packages/sdk/src/tools/walletFactory.ts:45](https://github.com/jayden-sudo/elytro-wallet-lib/blob/86ed41b3b7e27b9de5339986244a72cb1f25e2cf/packages/sdk/src/tools/walletFactory.ts#L45)

___

### getWalletAddress

▸ **getWalletAddress**(`elytroWalletFactoryAddress`, `implementation`, `initializer`, `salt`): `string`

get wallet address

#### Parameters

| Name | Type |
| :------ | :------ |
| `elytroWalletFactoryAddress` | `string` |
| `implementation` | `string` |
| `initializer` | `string` |
| `salt` | `string` |

#### Returns

`string`

{string}

**`Static`**

**`Memberof`**

WalletFactory

#### Defined in

[packages/sdk/src/tools/walletFactory.ts:75](https://github.com/jayden-sudo/elytro-wallet-lib/blob/86ed41b3b7e27b9de5339986244a72cb1f25e2cf/packages/sdk/src/tools/walletFactory.ts#L75)

___

### getWalletAddressByIndex

▸ **getWalletAddressByIndex**(`elytroWalletFactoryAddress`, `implementation`, `initializer`, `index`, `chainId`): `string`

get wallet address by readable index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elytroWalletFactoryAddress` | `string` |  |
| `implementation` | `string` |  |
| `initializer` | `string` |  |
| `index` | `number` |  |
| `chainId` | `string` \| `number` | number or hex string(must start with 0x) |

#### Returns

`string`

{string}

**`Static`**

**`Memberof`**

WalletFactory

#### Defined in

[packages/sdk/src/tools/walletFactory.ts:99](https://github.com/jayden-sudo/elytro-wallet-lib/blob/86ed41b3b7e27b9de5339986244a72cb1f25e2cf/packages/sdk/src/tools/walletFactory.ts#L99)

___

### proxyCode

▸ **proxyCode**(`implementation`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `implementation` | `string` |

#### Returns

`string`

#### Defined in

[packages/sdk/src/tools/walletFactory.ts:6](https://github.com/jayden-sudo/elytro-wallet-lib/blob/86ed41b3b7e27b9de5339986244a72cb1f25e2cf/packages/sdk/src/tools/walletFactory.ts#L6)
