[@soulwallet/result](../README.md) / [Modules](../modules.md) / Err

# Class: Err\<T, E\>

Defines an Err class, representing a failed operation result.

**`Export`**

## Type parameters

| Name |
| :------ |
| `T` |
| `E` |

## Table of contents

### Constructors

- [constructor](Err.md#constructor)

### Properties

- [\_error](Err.md#_error)

### Accessors

- [ERR](Err.md#err)
- [OK](Err.md#ok)

### Methods

- [isErr](Err.md#iserr)
- [isOk](Err.md#isok)

## Constructors

### constructor

• **new Err**\<`T`, `E`\>(`error`): [`Err`](Err.md)\<`T`, `E`\>

Creates an instance of Err.

#### Type parameters

| Name |
| :------ |
| `T` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `E` |

#### Returns

[`Err`](Err.md)\<`T`, `E`\>

**`Memberof`**

Err

#### Defined in

[Result.ts:86](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-result/src/Result.ts#L86)

## Properties

### \_error

• `Private` `Readonly` **\_error**: `undefined` \| `E` = `undefined`

#### Defined in

[Result.ts:79](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-result/src/Result.ts#L79)

## Accessors

### ERR

• `get` **ERR**(): `E`

Gets the error.

#### Returns

`E`

**`Memberof`**

Err

#### Defined in

[Result.ts:108](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-result/src/Result.ts#L108)

___

### OK

• `get` **OK**(): `T`

Gets the successful result value.

#### Returns

`T`

**`Memberof`**

Err

#### Defined in

[Result.ts:97](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-result/src/Result.ts#L97)

## Methods

### isErr

▸ **isErr**(): `boolean`

#### Returns

`boolean`

{boolean}

**`Memberof`**

Err

#### Defined in

[Result.ts:128](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-result/src/Result.ts#L128)

___

### isOk

▸ **isOk**(): `boolean`

#### Returns

`boolean`

{boolean}

**`Memberof`**

Err

#### Defined in

[Result.ts:118](https://github.com/SoulWallet/soulwalletlib/blob/fc04501/packages/soulwallet-result/src/Result.ts#L118)
