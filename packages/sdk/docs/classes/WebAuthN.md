[@elytro/sdk](../README.md) / [Modules](../modules.md) / WebAuthN

# Class: WebAuthN

## Table of contents

### Constructors

- [constructor](WebAuthN.md#constructor)

### Methods

- [p256PublicKeyToKeyhash](WebAuthN.md#p256publickeytokeyhash)
- [publicKeyToKeyhash](WebAuthN.md#publickeytokeyhash)
- [recover](WebAuthN.md#recover)
- [recoverWebAuthN](WebAuthN.md#recoverwebauthn)
- [recoverWebAuthNPublicKey](WebAuthN.md#recoverwebauthnpublickey)
- [rs256PublicKeyToKeyhash](WebAuthN.md#rs256publickeytokeyhash)

## Constructors

### constructor

• **new WebAuthN**(): [`WebAuthN`](WebAuthN.md)

#### Returns

[`WebAuthN`](WebAuthN.md)

## Methods

### p256PublicKeyToKeyhash

▸ **p256PublicKeyToKeyhash**(`p256Key`): `string`

calculate the key hash

#### Parameters

| Name | Type |
| :------ | :------ |
| `p256Key` | [`ECCPoint`](../interfaces/ECCPoint.md) |

#### Returns

`string`

{string}

**`Static`**

#### Defined in

packages/sdk/src/tools/webauthn.ts:51

___

### publicKeyToKeyhash

▸ **publicKeyToKeyhash**(`publicKey`): `string`

public key to Keyhash

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`ECCPoint`](../interfaces/ECCPoint.md) \| [`RSAPublicKey`](../interfaces/RSAPublicKey.md) |

#### Returns

`string`

{string}

**`Static`**

**`Memberof`**

P256

#### Defined in

packages/sdk/src/tools/webauthn.ts:95

___

### recover

▸ **recover**(`rawMessage`, `r`, `s`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawMessage` | `string` |
| `r` | `string` |
| `s` | `string` |

#### Returns

`Object`

{{
        0: ECCPoint,
        1: ECCPoint
    }}

| Name | Type |
| :------ | :------ |
| `0` | [`ECCPoint`](../interfaces/ECCPoint.md) |
| `1` | [`ECCPoint`](../interfaces/ECCPoint.md) |

**`Static`**

**`Memberof`**

P256

#### Defined in

packages/sdk/src/tools/webauthn.ts:198

___

### recoverWebAuthN

▸ **recoverWebAuthN**(`message`, `r`, `s`, `authenticatorData`, `clientDataSuffix`, `clientDataPrefix?`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | userOp hash |
| `r` | `string` | r |
| `s` | `string` | s |
| `authenticatorData` | `string` | hex string of authenticatorData |
| `clientDataSuffix` | `string` | clientDataSuffix string |
| `clientDataPrefix?` | `string` | clientDataPrefix |

#### Returns

`Object`

{{
            0: ECCPoint,
            1: ECCPoint
        }}

| Name | Type |
| :------ | :------ |
| `0` | [`ECCPoint`](../interfaces/ECCPoint.md) |
| `1` | [`ECCPoint`](../interfaces/ECCPoint.md) |

**`Static`**

**`Memberof`**

WebAuthN

#### Defined in

packages/sdk/src/tools/webauthn.ts:125

___

### recoverWebAuthNPublicKey

▸ **recoverWebAuthNPublicKey**(`message`, `r`, `s`, `authenticatorData`, `clientDataSuffix`, `clientDataPrefix?`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | userOp hash |
| `r` | `string` | r |
| `s` | `string` | s |
| `authenticatorData` | `string` | hex string of authenticatorData |
| `clientDataSuffix` | `string` | clientDataSuffix string |
| `clientDataPrefix?` | `string` | clientDataPrefix |

#### Returns

`Object`

{{
            0: string,
            1: string
        }}

| Name | Type |
| :------ | :------ |
| `0` | `string` |
| `1` | `string` |

**`Static`**

**`Memberof`**

WebAuthN

#### Defined in

packages/sdk/src/tools/webauthn.ts:166

___

### rs256PublicKeyToKeyhash

▸ **rs256PublicKeyToKeyhash**(`rs256Key`): `string`

calculate the key hash

#### Parameters

| Name | Type |
| :------ | :------ |
| `rs256Key` | [`RSAPublicKey`](../interfaces/RSAPublicKey.md) |

#### Returns

`string`

{string}

**`Static`**

#### Defined in

packages/sdk/src/tools/webauthn.ts:66
