[@elytro/decoder](README.md) / Modules

# @elytro/decoder

## Table of contents

### Enumerations

- [AddressType](enums/AddressType.md)

### Classes

- [Err](classes/Err.md)
- [Ok](classes/Ok.md)

### Interfaces

- [DecodeResult](interfaces/DecodeResult.md)
- [Method](interfaces/Method.md)
- [TokenInfo](interfaces/TokenInfo.md)

### Type Aliases

- [Result](modules.md#result)

### Functions

- [DecodeUserOp](modules.md#decodeuserop)

## Type Aliases

### Result

Ƭ **Result**\<`T`, `E`\>: [`Ok`](classes/Ok.md)\<`T`, `E`\> \| [`Err`](classes/Err.md)\<`T`, `E`\>

Defines a Result type, which can be either Ok or Err.

#### Type parameters

| Name |
| :------ |
| `T` |
| `E` |

#### Defined in

result/lib.esm/Result.d.ts:4

## Functions

### DecodeUserOp

▸ **DecodeUserOp**(`chainId`, `entrypoint`, `userOperations`): `Promise`\<[`Result`](modules.md#result)\<[`DecodeResult`](interfaces/DecodeResult.md)[], `Error`\>\>

Decode the transaction data (userOp.calldata, interaction from elytrowallet contract only).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainId` | `number` |  |
| `entrypoint` | `string` | contract address |
| `userOperations` | `IUserOperation` | - |

#### Returns

`Promise`\<[`Result`](modules.md#result)\<[`DecodeResult`](interfaces/DecodeResult.md)[], `Error`\>\>

{Promise<Result<DecodeResult[], Error>>}

**`Static`**

**`Memberof`**

Decoder

#### Defined in

[decoder/src/decoder.ts:169](https://github.com/jayden-sudo/elytro-wallet-lib/blob/86ed41b3b7e27b9de5339986244a72cb1f25e2cf/packages/decoder/src/decoder.ts#L169)
