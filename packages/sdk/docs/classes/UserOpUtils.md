[@elytro/sdk](../README.md) / [Modules](../modules.md) / UserOpUtils

# Class: UserOpUtils

UserOpUtils

**`Export`**

UserOpUtils

## Table of contents

### Constructors

- [constructor](UserOpUtils.md#constructor)

### Methods

- [getUserOpHash](UserOpUtils.md#getuserophash)
- [packUserOp](UserOpUtils.md#packuserop)
- [packedUserOperationToJSON](UserOpUtils.md#packeduseroperationtojson)
- [packedUserOperationToTuple](UserOpUtils.md#packeduseroperationtotuple)
- [unpackUserOp](UserOpUtils.md#unpackuserop)
- [userOperationFromJSON](UserOpUtils.md#useroperationfromjson)
- [userOperationToJSON](UserOpUtils.md#useroperationtojson)

## Constructors

### constructor

• **new UserOpUtils**(): [`UserOpUtils`](UserOpUtils.md)

#### Returns

[`UserOpUtils`](UserOpUtils.md)

## Methods

### getUserOpHash

▸ **getUserOpHash**(`userOp`, `entryPoint`, `chainId`): `string`

getUserOpHash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) \| [`PackedUserOperation`](../modules.md#packeduseroperation) | UserOperation |
| `entryPoint` | `string` | entryPoint contract address |
| `chainId` | `number` | chainId |

#### Returns

`string`

{string}

**`Static`**

**`Memberof`**

UserOpUtils

#### Defined in

packages/sdk/src/userOpUtils.ts:65

___

### packUserOp

▸ **packUserOp**(`userOp`): [`PackedUserOperation`](../modules.md#packeduseroperation)

packUserOp

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |

#### Returns

[`PackedUserOperation`](../modules.md#packeduseroperation)

{PackedUserOperation}

**`Static`**

**`Memberof`**

UserOpUtils

#### Defined in

packages/sdk/src/userOpUtils.ts:77

___

### packedUserOperationToJSON

▸ **packedUserOperationToJSON**(`packedUserOp`): `string`

packedUserOperationToJSON

#### Parameters

| Name | Type |
| :------ | :------ |
| `packedUserOp` | [`PackedUserOperation`](../modules.md#packeduseroperation) |

#### Returns

`string`

{string}

**`Static`**

**`Memberof`**

UserOpUtils

#### Defined in

packages/sdk/src/userOpUtils.ts:25

___

### packedUserOperationToTuple

▸ **packedUserOperationToTuple**(`packedUserOp`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `packedUserOp` | [`PackedUserOperation`](../modules.md#packeduseroperation) |

#### Returns

`string`

#### Defined in

packages/sdk/src/userOpUtils.ts:13

___

### unpackUserOp

▸ **unpackUserOp**(`packedUserOp`): [`UserOperation`](../modules.md#useroperation)

unpackUserOp

#### Parameters

| Name | Type |
| :------ | :------ |
| `packedUserOp` | [`PackedUserOperation`](../modules.md#packeduseroperation) |

#### Returns

[`UserOperation`](../modules.md#useroperation)

{UserOperation}

**`Static`**

**`Memberof`**

UserOpUtils

#### Defined in

packages/sdk/src/userOpUtils.ts:89

___

### userOperationFromJSON

▸ **userOperationFromJSON**(`json`): [`UserOperation`](../modules.md#useroperation)

userOperationFromJSON

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`UserOperation`](../modules.md#useroperation)

{UserOperation} UserOperation

**`Static`**

**`Memberof`**

UserOpUtils

#### Defined in

packages/sdk/src/userOpUtils.ts:51

___

### userOperationToJSON

▸ **userOperationToJSON**(`userOp`): `string`

userOperationToJSON

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) | UserOperation |

#### Returns

`string`

{string} json

**`Static`**

**`Memberof`**

UserOpUtils

#### Defined in

packages/sdk/src/userOpUtils.ts:39
