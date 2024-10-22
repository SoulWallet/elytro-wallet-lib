[@elytro/sdk](../README.md) / [Modules](../modules.md) / Bundler

# Class: Bundler

## Implements

- `IBundler`

## Table of contents

### Constructors

- [constructor](Bundler.md#constructor)

### Properties

- [bundler](Bundler.md#bundler)

### Methods

- [eth\_chainId](Bundler.md#eth_chainid)
- [eth\_estimateUserOperationGas](Bundler.md#eth_estimateuseroperationgas)
- [eth\_getUserOperationByHash](Bundler.md#eth_getuseroperationbyhash)
- [eth\_getUserOperationReceipt](Bundler.md#eth_getuseroperationreceipt)
- [eth\_sendUserOperation](Bundler.md#eth_senduseroperation)
- [eth\_supportedEntryPoints](Bundler.md#eth_supportedentrypoints)

## Constructors

### constructor

• **new Bundler**(`bundler`): [`Bundler`](Bundler.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bundler` | `string` \| `JsonRpcProvider` |

#### Returns

[`Bundler`](Bundler.md)

#### Defined in

packages/sdk/src/bundler.ts:11

## Properties

### bundler

• `Private` **bundler**: `JsonRpcProvider`

#### Defined in

packages/sdk/src/bundler.ts:9

## Methods

### eth\_chainId

▸ **eth_chainId**(): `Promise`\<[`Result`](../modules.md#result)\<`number`, `Error`\>\>

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`number`, `Error`\>\>

#### Implementation of

IBundler.eth\_chainId

#### Defined in

packages/sdk/src/bundler.ts:148

___

### eth\_estimateUserOperationGas

▸ **eth_estimateUserOperationGas**(`entryPoint`, `userOp`, `stateOverride?`): `Promise`\<[`Result`](../modules.md#result)\<[`UserOpGas`](../interfaces/UserOpGas.md), [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryPoint` | `string` |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |
| `stateOverride?` | `Record`\<`string`, `StateOverride`\> |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<[`UserOpGas`](../interfaces/UserOpGas.md), [`UserOpErrors`](UserOpErrors.md)\>\>

#### Implementation of

IBundler.eth\_estimateUserOperationGas

#### Defined in

packages/sdk/src/bundler.ts:46

___

### eth\_getUserOperationByHash

▸ **eth_getUserOperationByHash**(`userOpHash`): `Promise`\<[`Result`](../modules.md#result)\<``null`` \| [`UserOpDetail`](../interfaces/UserOpDetail.md), `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOpHash` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<``null`` \| [`UserOpDetail`](../interfaces/UserOpDetail.md), `Error`\>\>

#### Implementation of

IBundler.eth\_getUserOperationByHash

#### Defined in

packages/sdk/src/bundler.ts:80

___

### eth\_getUserOperationReceipt

▸ **eth_getUserOperationReceipt**(`userOpHash`): `Promise`\<[`Result`](../modules.md#result)\<``null`` \| [`UserOpReceipt`](../interfaces/UserOpReceipt.md), `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOpHash` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<``null`` \| [`UserOpReceipt`](../interfaces/UserOpReceipt.md), `Error`\>\>

#### Implementation of

IBundler.eth\_getUserOperationReceipt

#### Defined in

packages/sdk/src/bundler.ts:101

___

### eth\_sendUserOperation

▸ **eth_sendUserOperation**(`entryPoint`, `userOp`): `Promise`\<[`Result`](../modules.md#result)\<`string`, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryPoint` | `string` |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Implementation of

IBundler.eth\_sendUserOperation

#### Defined in

packages/sdk/src/bundler.ts:21

___

### eth\_supportedEntryPoints

▸ **eth_supportedEntryPoints**(): `Promise`\<[`Result`](../modules.md#result)\<`string`[], `Error`\>\>

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`[], `Error`\>\>

#### Implementation of

IBundler.eth\_supportedEntryPoints

#### Defined in

packages/sdk/src/bundler.ts:122
