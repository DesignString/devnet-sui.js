var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AuthorityQuorumSignInfo: () => AuthorityQuorumSignInfo,
  AuthoritySignature: () => AuthoritySignature,
  BalanceChangeType: () => BalanceChangeType,
  Base64DataBuffer: () => Base64DataBuffer,
  COIN_TYPE_ARG_REGEX: () => COIN_TYPE_ARG_REGEX,
  CertifiedTransaction: () => CertifiedTransaction,
  CheckpointEvent: () => CheckpointEvent,
  Coin: () => Coin,
  CoinBalanceChangeEvent: () => CoinBalanceChangeEvent,
  CoinMetadataStruct: () => CoinMetadataStruct,
  DEFAULT_ED25519_DERIVATION_PATH: () => DEFAULT_ED25519_DERIVATION_PATH,
  DEFAULT_SECP256K1_DERIVATION_PATH: () => DEFAULT_SECP256K1_DERIVATION_PATH,
  Delegation: () => Delegation,
  DeleteObjectEvent: () => DeleteObjectEvent,
  DevInspectResults: () => DevInspectResults,
  Ed25519Keypair: () => Ed25519Keypair,
  Ed25519PublicKey: () => Ed25519PublicKey,
  EpochChangeEvent: () => EpochChangeEvent,
  EpochId: () => EpochId,
  EventId: () => EventId,
  ExecutionStatus: () => ExecutionStatus,
  ExecutionStatusType: () => ExecutionStatusType,
  GasCostSummary: () => GasCostSummary,
  GenericAuthoritySignature: () => GenericAuthoritySignature,
  GetObjectDataResponse: () => GetObjectDataResponse,
  GetOwnedObjectsResponse: () => GetOwnedObjectsResponse,
  GetTxnDigestsResponse: () => GetTxnDigestsResponse,
  HexDataBuffer: () => HexDataBuffer,
  ID_STRUCT_NAME: () => ID_STRUCT_NAME,
  JsonRpcProvider: () => JsonRpcProvider,
  JsonRpcProviderWithCache: () => JsonRpcProviderWithCache,
  LocalTxnDataSerializer: () => LocalTxnDataSerializer,
  MIST_PER_SUI: () => MIST_PER_SUI,
  MOVE_STDLIB_ADDRESS: () => MOVE_STDLIB_ADDRESS,
  MoveCall: () => MoveCall,
  MoveEvent: () => MoveEvent,
  MovePackageContent: () => MovePackageContent,
  MutateObjectEvent: () => MutateObjectEvent,
  NETWORK_TO_API: () => NETWORK_TO_API,
  Network: () => Network,
  NewObjectEvent: () => NewObjectEvent,
  OBJECT_MODULE_NAME: () => OBJECT_MODULE_NAME,
  ObjectContentFields: () => ObjectContentFields,
  ObjectId: () => ObjectId,
  ObjectOwner: () => ObjectOwner,
  ObjectStatus: () => ObjectStatus,
  ObjectType: () => ObjectType,
  OwnedObjectRef: () => OwnedObjectRef,
  PAY_JOIN_COIN_FUNC_NAME: () => PAY_JOIN_COIN_FUNC_NAME,
  PAY_MODULE_NAME: () => PAY_MODULE_NAME,
  PAY_SPLIT_COIN_VEC_FUNC_NAME: () => PAY_SPLIT_COIN_VEC_FUNC_NAME,
  PaginatedEvents: () => PaginatedEvents,
  PaginatedTransactionDigests: () => PaginatedTransactionDigests,
  Pay: () => Pay,
  PayAllSui: () => PayAllSui,
  PaySui: () => PaySui,
  Provider: () => Provider,
  PublishEvent: () => PublishEvent,
  RawSigner: () => RawSigner,
  RpcTxnDataSerializer: () => RpcTxnDataSerializer,
  SIGNATURE_SCHEME_TO_FLAG: () => SIGNATURE_SCHEME_TO_FLAG,
  SUI_ADDRESS_LENGTH: () => SUI_ADDRESS_LENGTH,
  SUI_FRAMEWORK_ADDRESS: () => SUI_FRAMEWORK_ADDRESS,
  SUI_TYPE_ARG: () => SUI_TYPE_ARG,
  Secp256k1Keypair: () => Secp256k1Keypair,
  Secp256k1PublicKey: () => Secp256k1PublicKey,
  SequenceNumber: () => SequenceNumber,
  SignerWithProvider: () => SignerWithProvider,
  SubscriptionEvent: () => SubscriptionEvent,
  SubscriptionId: () => SubscriptionId,
  SuiAddress: () => SuiAddress,
  SuiCertifiedTransactionEffects: () => SuiCertifiedTransactionEffects,
  SuiChangeEpoch: () => SuiChangeEpoch,
  SuiData: () => SuiData,
  SuiEvent: () => SuiEvent,
  SuiEventEnvelope: () => SuiEventEnvelope,
  SuiExecuteTransactionResponse: () => SuiExecuteTransactionResponse,
  SuiJsonValue: () => SuiJsonValue,
  SuiMoveAbilitySet: () => SuiMoveAbilitySet,
  SuiMoveFunctionArgType: () => SuiMoveFunctionArgType,
  SuiMoveFunctionArgTypes: () => SuiMoveFunctionArgTypes,
  SuiMoveModuleId: () => SuiMoveModuleId,
  SuiMoveNormalizedField: () => SuiMoveNormalizedField,
  SuiMoveNormalizedFunction: () => SuiMoveNormalizedFunction,
  SuiMoveNormalizedModule: () => SuiMoveNormalizedModule,
  SuiMoveNormalizedModules: () => SuiMoveNormalizedModules,
  SuiMoveNormalizedStruct: () => SuiMoveNormalizedStruct,
  SuiMoveNormalizedStructType: () => SuiMoveNormalizedStructType,
  SuiMoveNormalizedType: () => SuiMoveNormalizedType,
  SuiMoveNormalizedTypeParameterType: () => SuiMoveNormalizedTypeParameterType,
  SuiMoveObject: () => SuiMoveObject,
  SuiMovePackage: () => SuiMovePackage,
  SuiMoveStructTypeParameter: () => SuiMoveStructTypeParameter,
  SuiMoveVisibility: () => SuiMoveVisibility,
  SuiObject: () => SuiObject,
  SuiObjectInfo: () => SuiObjectInfo,
  SuiObjectRef: () => SuiObjectRef,
  SuiPackage: () => SuiPackage,
  SuiParsedMergeCoinResponse: () => SuiParsedMergeCoinResponse,
  SuiParsedPublishResponse: () => SuiParsedPublishResponse,
  SuiParsedSplitCoinResponse: () => SuiParsedSplitCoinResponse,
  SuiParsedTransactionResponse: () => SuiParsedTransactionResponse,
  SuiTransactionAuthSignersResponse: () => SuiTransactionAuthSignersResponse,
  SuiTransactionData: () => SuiTransactionData,
  SuiTransactionKind: () => SuiTransactionKind,
  SuiTransactionResponse: () => SuiTransactionResponse,
  SuiTransferSui: () => SuiTransferSui,
  TRANSACTION_DATA_TYPE_TAG: () => TRANSACTION_DATA_TYPE_TAG,
  TransactionBytes: () => TransactionBytes,
  TransactionDigest: () => TransactionDigest,
  TransactionEffects: () => TransactionEffects,
  TransferObject: () => TransferObject,
  TransferObjectEvent: () => TransferObjectEvent,
  TypeTagSerializer: () => TypeTagSerializer,
  UID_STRUCT_NAME: () => UID_STRUCT_NAME,
  assert: () => import_superstruct11.assert,
  bcs: () => bcs,
  bytesEqual: () => bytesEqual,
  deserializeTransactionBytesToTransactionData: () => deserializeTransactionBytesToTransactionData,
  extractMutableReference: () => extractMutableReference,
  extractReference: () => extractReference,
  extractStructTag: () => extractStructTag,
  fromExportedKeypair: () => fromExportedKeypair,
  generateTransactionDigest: () => generateTransactionDigest,
  getCertifiedTransaction: () => getCertifiedTransaction,
  getChangeEpochTransaction: () => getChangeEpochTransaction,
  getCoinAfterMerge: () => getCoinAfterMerge,
  getCoinAfterSplit: () => getCoinAfterSplit,
  getCreatedObjects: () => getCreatedObjects,
  getEvents: () => getEvents,
  getExecutionStatus: () => getExecutionStatus,
  getExecutionStatusError: () => getExecutionStatusError,
  getExecutionStatusGasSummary: () => getExecutionStatusGasSummary,
  getExecutionStatusType: () => getExecutionStatusType,
  getMoveCallTransaction: () => getMoveCallTransaction,
  getMoveObject: () => getMoveObject,
  getMoveObjectType: () => getMoveObjectType,
  getMovePackageContent: () => getMovePackageContent,
  getNewlyCreatedCoinRefsAfterSplit: () => getNewlyCreatedCoinRefsAfterSplit,
  getNewlyCreatedCoinsAfterSplit: () => getNewlyCreatedCoinsAfterSplit,
  getObjectDeletedResponse: () => getObjectDeletedResponse,
  getObjectExistsResponse: () => getObjectExistsResponse,
  getObjectFields: () => getObjectFields,
  getObjectId: () => getObjectId,
  getObjectNotExistsResponse: () => getObjectNotExistsResponse,
  getObjectOwner: () => getObjectOwner,
  getObjectPreviousTransactionDigest: () => getObjectPreviousTransactionDigest,
  getObjectReference: () => getObjectReference,
  getObjectType: () => getObjectType,
  getObjectVersion: () => getObjectVersion,
  getParsedMergeCoinResponse: () => getParsedMergeCoinResponse,
  getParsedPublishResponse: () => getParsedPublishResponse,
  getParsedSplitCoinResponse: () => getParsedSplitCoinResponse,
  getPayAllSuiTransaction: () => getPayAllSuiTransaction,
  getPaySuiTransaction: () => getPaySuiTransaction,
  getPayTransaction: () => getPayTransaction,
  getPublishTransaction: () => getPublishTransaction,
  getSharedObjectInitialVersion: () => getSharedObjectInitialVersion,
  getTimestampFromTransactionResponse: () => getTimestampFromTransactionResponse,
  getTotalGasUsed: () => getTotalGasUsed,
  getTransactionAuthorityQuorumSignInfo: () => getTransactionAuthorityQuorumSignInfo,
  getTransactionData: () => getTransactionData,
  getTransactionDigest: () => getTransactionDigest,
  getTransactionEffects: () => getTransactionEffects,
  getTransactionGasBudget: () => getTransactionGasBudget,
  getTransactionGasObject: () => getTransactionGasObject,
  getTransactionGasPrice: () => getTransactionGasPrice,
  getTransactionKindName: () => getTransactionKindName,
  getTransactionSender: () => getTransactionSender,
  getTransactionSignature: () => getTransactionSignature,
  getTransactions: () => getTransactions,
  getTransferObjectTransaction: () => getTransferObjectTransaction,
  getTransferSuiAmount: () => getTransferSuiAmount,
  getTransferSuiTransaction: () => getTransferSuiTransaction,
  hasPublicTransfer: () => hasPublicTransfer,
  is: () => import_superstruct11.is,
  isImmutableObject: () => isImmutableObject,
  isSharedObject: () => isSharedObject,
  isValidBIP32Path: () => isValidBIP32Path,
  isValidHardenedPath: () => isValidHardenedPath,
  isValidSuiAddress: () => isValidSuiAddress,
  isValidSuiObjectId: () => isValidSuiObjectId,
  isValidTransactionDigest: () => isValidTransactionDigest,
  mnemonicToSeed: () => mnemonicToSeed,
  mnemonicToSeedHex: () => mnemonicToSeedHex,
  normalizeSuiAddress: () => normalizeSuiAddress,
  normalizeSuiObjectId: () => normalizeSuiObjectId,
  parseVersionFromString: () => parseVersionFromString,
  versionToString: () => versionToString
});
module.exports = __toCommonJS(src_exports);

// src/cryptography/ed25519-keypair.ts
var import_tweetnacl2 = __toESM(require("tweetnacl"));

// src/serialization/base64.ts
var import_bcs = require("@mysten/bcs");
var Base64DataBuffer = class {
  data;
  constructor(data) {
    if (typeof data === "string") {
      this.data = (0, import_bcs.fromB64)(data);
    } else {
      this.data = data;
    }
  }
  getData() {
    return this.data;
  }
  getLength() {
    return this.data.length;
  }
  toString() {
    return (0, import_bcs.toB64)(this.data);
  }
};

// src/cryptography/ed25519-publickey.ts
var import_js_sha3 = __toESM(require("js-sha3"));
var import_bcs2 = require("@mysten/bcs");

// src/cryptography/publickey.ts
function bytesEqual(a, b) {
  if (a === b)
    return true;
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
var SIGNATURE_SCHEME_TO_FLAG = {
  ED25519: 0,
  Secp256k1: 1
};

// src/cryptography/ed25519-publickey.ts
var PUBLIC_KEY_SIZE = 32;
var Ed25519PublicKey = class {
  data;
  constructor(value) {
    if (typeof value === "string") {
      this.data = (0, import_bcs2.fromB64)(value);
    } else if (value instanceof Uint8Array) {
      this.data = value;
    } else {
      this.data = Uint8Array.from(value);
    }
    if (this.data.length !== PUBLIC_KEY_SIZE) {
      throw new Error(
        `Invalid public key input. Expected ${PUBLIC_KEY_SIZE} bytes, got ${this.data.length}`
      );
    }
  }
  equals(publicKey) {
    return bytesEqual(this.toBytes(), publicKey.toBytes());
  }
  toBase64() {
    return (0, import_bcs2.toB64)(this.toBytes());
  }
  toBytes() {
    return this.data;
  }
  toString() {
    return this.toBase64();
  }
  toSuiAddress() {
    let tmp = new Uint8Array(PUBLIC_KEY_SIZE + 1);
    tmp.set([SIGNATURE_SCHEME_TO_FLAG["ED25519"]]);
    tmp.set(this.toBytes(), 1);
    return import_js_sha3.default.sha3_256(tmp).slice(0, 40);
  }
};

// src/cryptography/mnemonics.ts
var import_bcs3 = require("@mysten/bcs");
var import_bip39 = require("@scure/bip39");
function isValidHardenedPath(path) {
  if (!new RegExp("^m\\/44'\\/784'\\/[0-9]+'\\/[0-9]+'\\/[0-9]+'+$").test(path)) {
    return false;
  }
  return true;
}
function isValidBIP32Path(path) {
  if (!new RegExp("^m\\/54'\\/784'\\/[0-9]+'\\/[0-9]+\\/[0-9]+$").test(path)) {
    return false;
  }
  return true;
}
function mnemonicToSeed(mnemonics) {
  return (0, import_bip39.mnemonicToSeedSync)(mnemonics, "");
}
function mnemonicToSeedHex(mnemonics) {
  return (0, import_bcs3.toHEX)(mnemonicToSeed(mnemonics));
}

// src/utils/ed25519-hd-key.ts
var import_sha512 = require("@noble/hashes/sha512");
var import_hmac = require("@noble/hashes/hmac");
var import_tweetnacl = __toESM(require("tweetnacl"));
var import_bcs4 = require("@mysten/bcs");
var ED25519_CURVE = "ed25519 seed";
var HARDENED_OFFSET = 2147483648;
var pathRegex = new RegExp("^m(\\/[0-9]+')+$");
var replaceDerive = (val) => val.replace("'", "");
var getMasterKeyFromSeed = (seed) => {
  const h = import_hmac.hmac.create(import_sha512.sha512, ED25519_CURVE);
  const I = h.update((0, import_bcs4.fromHEX)(seed)).digest();
  const IL = I.slice(0, 32);
  const IR = I.slice(32);
  return {
    key: IL,
    chainCode: IR
  };
};
var CKDPriv = ({ key, chainCode }, index) => {
  const indexBuffer = new ArrayBuffer(4);
  const cv = new DataView(indexBuffer);
  cv.setUint32(0, index);
  const data = new Uint8Array(1 + key.length + indexBuffer.byteLength);
  data.set(new Uint8Array(1).fill(0));
  data.set(key, 1);
  data.set(
    new Uint8Array(indexBuffer, 0, indexBuffer.byteLength),
    key.length + 1
  );
  const I = import_hmac.hmac.create(import_sha512.sha512, chainCode).update(data).digest();
  const IL = I.slice(0, 32);
  const IR = I.slice(32);
  return {
    key: IL,
    chainCode: IR
  };
};
var getPublicKey = (privateKey, withZeroByte = true) => {
  const keyPair = import_tweetnacl.default.sign.keyPair.fromSeed(privateKey);
  const signPk = keyPair.secretKey.subarray(32);
  const newArr = new Uint8Array(signPk.length + 1);
  newArr.set([0]);
  newArr.set(signPk, 1);
  return withZeroByte ? newArr : signPk;
};
var isValidPath = (path) => {
  if (!pathRegex.test(path)) {
    return false;
  }
  return !path.split("/").slice(1).map(replaceDerive).some(isNaN);
};
var derivePath = (path, seed, offset = HARDENED_OFFSET) => {
  if (!isValidPath(path)) {
    throw new Error("Invalid derivation path");
  }
  const { key, chainCode } = getMasterKeyFromSeed(seed);
  const segments = path.split("/").slice(1).map(replaceDerive).map((el) => parseInt(el, 10));
  return segments.reduce(
    (parentKeys, segment) => CKDPriv(parentKeys, segment + offset),
    { key, chainCode }
  );
};

// src/cryptography/ed25519-keypair.ts
var import_bcs5 = require("@mysten/bcs");
var DEFAULT_ED25519_DERIVATION_PATH = "m/44'/784'/0'/0'/0'";
var Ed25519Keypair = class {
  keypair;
  constructor(keypair) {
    if (keypair) {
      this.keypair = keypair;
    } else {
      this.keypair = import_tweetnacl2.default.sign.keyPair();
    }
  }
  getKeyScheme() {
    return "ED25519";
  }
  static generate() {
    return new Ed25519Keypair(import_tweetnacl2.default.sign.keyPair());
  }
  static fromSecretKey(secretKey, options) {
    const secretKeyLength = secretKey.length;
    if (secretKeyLength != 64) {
      if (secretKeyLength == 32) {
        throw new Error(
          "Wrong secretKey size. Expected 64 bytes, got 32. Similar function exists: fromSeed(seed: Uint8Array)"
        );
      }
      throw new Error(
        `Wrong secretKey size. Expected 64 bytes, got ${secretKeyLength}.`
      );
    }
    const keypair = import_tweetnacl2.default.sign.keyPair.fromSecretKey(secretKey);
    if (!options || !options.skipValidation) {
      const encoder = new TextEncoder();
      const signData = encoder.encode("sui validation");
      const signature = import_tweetnacl2.default.sign.detached(signData, keypair.secretKey);
      if (!import_tweetnacl2.default.sign.detached.verify(signData, signature, keypair.publicKey)) {
        throw new Error("provided secretKey is invalid");
      }
    }
    return new Ed25519Keypair(keypair);
  }
  static fromSeed(seed) {
    const seedLength = seed.length;
    if (seedLength != 32) {
      throw new Error(`Wrong seed size. Expected 32 bytes, got ${seedLength}.`);
    }
    return new Ed25519Keypair(import_tweetnacl2.default.sign.keyPair.fromSeed(seed));
  }
  getPublicKey() {
    return new Ed25519PublicKey(this.keypair.publicKey);
  }
  signData(data) {
    return new Base64DataBuffer(
      import_tweetnacl2.default.sign.detached(data.getData(), this.keypair.secretKey)
    );
  }
  static deriveKeypair(mnemonics, path) {
    if (path == null) {
      path = DEFAULT_ED25519_DERIVATION_PATH;
    }
    if (!isValidHardenedPath(path)) {
      throw new Error("Invalid derivation path");
    }
    const { key } = derivePath(path, mnemonicToSeedHex(mnemonics));
    const pubkey = getPublicKey(key, false);
    let fullPrivateKey = new Uint8Array(64);
    fullPrivateKey.set(key);
    fullPrivateKey.set(pubkey, 32);
    return new Ed25519Keypair({ publicKey: pubkey, secretKey: fullPrivateKey });
  }
  export() {
    return {
      schema: "ED25519",
      privateKey: (0, import_bcs5.toB64)(this.keypair.secretKey)
    };
  }
};

// src/cryptography/secp256k1-keypair.ts
var secp = __toESM(require("@noble/secp256k1"));
var import_hmac2 = require("@noble/hashes/hmac");
var import_sha256 = require("@noble/hashes/sha256");

// src/cryptography/secp256k1-publickey.ts
var import_bcs6 = require("@mysten/bcs");
var import_js_sha32 = __toESM(require("js-sha3"));
var SECP256K1_PUBLIC_KEY_SIZE = 33;
var Secp256k1PublicKey = class {
  data;
  constructor(value) {
    if (typeof value === "string") {
      this.data = (0, import_bcs6.fromB64)(value);
    } else if (value instanceof Uint8Array) {
      this.data = value;
    } else {
      this.data = Uint8Array.from(value);
    }
    if (this.data.length !== SECP256K1_PUBLIC_KEY_SIZE) {
      throw new Error(
        `Invalid public key input. Expected ${SECP256K1_PUBLIC_KEY_SIZE} bytes, got ${this.data.length}`
      );
    }
  }
  equals(publicKey) {
    return bytesEqual(this.toBytes(), publicKey.toBytes());
  }
  toBase64() {
    return (0, import_bcs6.toB64)(this.toBytes());
  }
  toBytes() {
    return this.data;
  }
  toString() {
    return this.toBase64();
  }
  toSuiAddress() {
    let tmp = new Uint8Array(SECP256K1_PUBLIC_KEY_SIZE + 1);
    tmp.set([SIGNATURE_SCHEME_TO_FLAG["Secp256k1"]]);
    tmp.set(this.toBytes(), 1);
    return import_js_sha32.default.sha3_256(tmp).slice(0, 40);
  }
};

// src/cryptography/secp256k1-keypair.ts
var import_secp256k1 = require("@noble/secp256k1");
var import_bip32 = require("@scure/bip32");
var import_bcs7 = require("@mysten/bcs");
var DEFAULT_SECP256K1_DERIVATION_PATH = "m/54'/784'/0'/0/0";
secp.utils.hmacSha256Sync = (key, ...msgs) => {
  const h = import_hmac2.hmac.create(import_sha256.sha256, key);
  msgs.forEach((msg) => h.update(msg));
  return h.digest();
};
var Secp256k1Keypair = class {
  keypair;
  constructor(keypair) {
    if (keypair) {
      this.keypair = keypair;
    } else {
      const secretKey = secp.utils.randomPrivateKey();
      const publicKey = secp.getPublicKey(secretKey, true);
      this.keypair = { publicKey, secretKey };
    }
  }
  getKeyScheme() {
    return "Secp256k1";
  }
  static generate() {
    const secretKey = secp.utils.randomPrivateKey();
    const publicKey = secp.getPublicKey(secretKey, true);
    return new Secp256k1Keypair({ publicKey, secretKey });
  }
  static fromSecretKey(secretKey, options) {
    const publicKey = secp.getPublicKey(secretKey, true);
    if (!options || !options.skipValidation) {
      const encoder = new TextEncoder();
      const signData = encoder.encode("sui validation");
      const msgHash = (0, import_sha256.sha256)(signData);
      const signature = secp.signSync(msgHash, secretKey);
      if (!secp.verify(signature, msgHash, publicKey, { strict: true })) {
        throw new Error("Provided secretKey is invalid");
      }
    }
    return new Secp256k1Keypair({ publicKey, secretKey });
  }
  static fromSeed(seed) {
    let publicKey = secp.getPublicKey(seed, true);
    return new Secp256k1Keypair({ publicKey, secretKey: seed });
  }
  getPublicKey() {
    return new Secp256k1PublicKey(this.keypair.publicKey);
  }
  signData(data) {
    const msgHash = (0, import_sha256.sha256)(data.getData());
    const [sig, rec_id] = secp.signSync(msgHash, this.keypair.secretKey, {
      canonical: true,
      recovered: true
    });
    var recoverable_sig = new Uint8Array(65);
    recoverable_sig.set(import_secp256k1.Signature.fromDER(sig).toCompactRawBytes());
    recoverable_sig.set([rec_id], 64);
    return new Base64DataBuffer(recoverable_sig);
  }
  static deriveKeypair(path, mnemonics) {
    if (!isValidBIP32Path(path)) {
      throw new Error("Invalid derivation path");
    }
    const key = import_bip32.HDKey.fromMasterSeed(mnemonicToSeed(mnemonics)).derive(path);
    if (key.publicKey == null || key.privateKey == null) {
      throw new Error("Invalid key");
    }
    return new Secp256k1Keypair({
      publicKey: key.publicKey,
      secretKey: key.privateKey
    });
  }
  export() {
    return {
      schema: "Secp256k1",
      privateKey: (0, import_bcs7.toB64)(this.keypair.secretKey)
    };
  }
};

// src/cryptography/keypair.ts
var import_bcs8 = require("@mysten/bcs");
function fromExportedKeypair(keypair) {
  const secretKey = (0, import_bcs8.fromB64)(keypair.privateKey);
  switch (keypair.schema) {
    case "ED25519":
      return Ed25519Keypair.fromSecretKey(secretKey);
    case "Secp256k1":
      return Secp256k1Keypair.fromSecretKey(secretKey);
    default:
      throw new Error(`Invalid keypair schema ${keypair.schema}`);
  }
}

// src/providers/provider.ts
var Provider = class {
};

// src/rpc/client.ts
var import_browser = __toESM(require("jayson/lib/client/browser/index.js"));
var import_cross_fetch = __toESM(require("cross-fetch"));
var import_superstruct = require("superstruct");
var TYPE_MISMATCH_ERROR = `The response returned from RPC server does not match the TypeScript definition. This is likely because the SDK version is not compatible with the RPC server. Please update your SDK version to the latest. `;
var ValidResponse = (0, import_superstruct.object)({
  jsonrpc: (0, import_superstruct.literal)("2.0"),
  id: (0, import_superstruct.string)(),
  result: (0, import_superstruct.any)()
});
var ErrorResponse = (0, import_superstruct.object)({
  jsonrpc: (0, import_superstruct.literal)("2.0"),
  id: (0, import_superstruct.string)(),
  error: (0, import_superstruct.object)({
    code: (0, import_superstruct.any)(),
    message: (0, import_superstruct.string)(),
    data: (0, import_superstruct.optional)((0, import_superstruct.any)())
  })
});
var JsonRpcClient = class {
  rpcClient;
  constructor(url, httpHeaders) {
    this.rpcClient = this.createRpcClient(url, httpHeaders);
  }
  createRpcClient(url, httpHeaders) {
    const client = new import_browser.default(
      async (request, callback) => {
        const options = {
          method: "POST",
          body: request,
          headers: Object.assign(
            {
              "Content-Type": "application/json"
            },
            httpHeaders || {}
          )
        };
        try {
          let res = await (0, import_cross_fetch.default)(url, options);
          const result = await res.text();
          if (res.ok) {
            callback(null, result);
          } else {
            callback(new Error(`${res.status} ${res.statusText}: ${result}`));
          }
        } catch (err) {
          if (err instanceof Error)
            callback(err);
        }
      },
      {}
    );
    return client;
  }
  async requestWithType(method, args, struct, skipDataValidation = false) {
    const response = await this.request(method, args);
    if ((0, import_superstruct.is)(response, ErrorResponse)) {
      throw new Error(`RPC Error: ${response.error.message}`);
    } else if ((0, import_superstruct.is)(response, ValidResponse)) {
      const expectedSchema = (0, import_superstruct.is)(response.result, struct);
      const errMsg = TYPE_MISMATCH_ERROR + `Result received was: ${JSON.stringify(response.result)}`;
      if (skipDataValidation && !expectedSchema) {
        console.warn(errMsg);
        return response.result;
      } else if (!expectedSchema) {
        throw new Error(`RPC Error: ${errMsg}`);
      }
      return response.result;
    }
    throw new Error(`Unexpected RPC Response: ${response}`);
  }
  async request(method, args) {
    return new Promise((resolve, reject) => {
      this.rpcClient.request(method, args, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  }
  async batchRequestWithType(requests, struct, skipDataValidation = false) {
    const responses = await this.batchRequest(requests);
    const validResponses = responses.filter(
      (response) => (0, import_superstruct.is)(response, ValidResponse) && (skipDataValidation || (0, import_superstruct.is)(response.result, struct))
    );
    if (responses.length > validResponses.length) {
      console.warn(
        `Batch request contains invalid responses. ${responses.length - validResponses.length} of the ${responses.length} requests has invalid schema.`
      );
      const exampleTypeMismatch = responses.find(
        (r) => !(0, import_superstruct.is)(r.result, struct)
      );
      const exampleInvalidResponseIndex = responses.findIndex(
        (r) => !(0, import_superstruct.is)(r, ValidResponse)
      );
      if (exampleTypeMismatch) {
        console.warn(
          TYPE_MISMATCH_ERROR + `One example mismatch is: ${JSON.stringify(
            exampleTypeMismatch.result
          )}`
        );
      }
      if (exampleInvalidResponseIndex !== -1) {
        console.warn(
          `The request ${JSON.stringify(
            requests[exampleInvalidResponseIndex]
          )} within a batch request returns an invalid response ${JSON.stringify(
            responses[exampleInvalidResponseIndex]
          )}`
        );
      }
    }
    return validResponses.map(
      (response) => response.result
    );
  }
  async batchRequest(requests) {
    return new Promise((resolve, reject) => {
      if (requests.length === 0)
        resolve([]);
      const batch = requests.map((params) => {
        return this.rpcClient.request(params.method, params.args);
      });
      this.rpcClient.request(batch, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  }
};

// src/types/common.ts
var import_superstruct2 = require("superstruct");

// src/serialization/base58.ts
var import_bs58 = __toESM(require("bs58"));
var Base58DataBuffer = class {
  data;
  constructor(data) {
    if (typeof data === "string") {
      this.data = import_bs58.default.decode(data);
    } else {
      this.data = data;
    }
  }
  getData() {
    return this.data;
  }
  getLength() {
    return this.data.length;
  }
  toString() {
    return import_bs58.default.encode(this.data);
  }
};

// src/types/sui-bcs.ts
var import_bcs9 = require("@mysten/bcs");
var bcs = new import_bcs9.BCS((0, import_bcs9.getSuiMoveConfig)());
bcs.registerType(
  "utf8string",
  (writer, str) => {
    const bytes = Array.from(new TextEncoder().encode(str));
    return writer.writeVec(bytes, (writer2, el) => writer2.write8(el));
  },
  (reader) => {
    let bytes = reader.readVec((reader2) => reader2.read8());
    return new TextDecoder().decode(new Uint8Array(bytes));
  }
).registerType(
  "ObjectDigest",
  (writer, str) => {
    let bytes = Array.from((0, import_bcs9.decodeStr)(str, "base64"));
    return writer.writeVec(bytes, (writer2, el) => writer2.write8(el));
  },
  (reader) => {
    let bytes = reader.readVec((reader2) => reader2.read8());
    return (0, import_bcs9.encodeStr)(new Uint8Array(bytes), "base64");
  }
);
bcs.registerStructType("SuiObjectRef", {
  objectId: "address",
  version: "u64",
  digest: "ObjectDigest"
});
bcs.registerStructType("TransferObjectTx", {
  recipient: "address",
  object_ref: "SuiObjectRef"
});
bcs.registerStructType("PayTx", {
  coins: "vector<SuiObjectRef>",
  recipients: "vector<address>",
  amounts: "vector<u64>"
});
bcs.registerStructType("PaySuiTx", {
  coins: "vector<SuiObjectRef>",
  recipients: "vector<address>",
  amounts: "vector<u64>"
});
bcs.registerStructType("PayAllSuiTx", {
  coins: "vector<SuiObjectRef>",
  recipient: "address"
});
bcs.registerEnumType("Option<T>", {
  None: null,
  Some: "T"
});
bcs.registerStructType("TransferSuiTx", {
  recipient: "address",
  amount: "Option<u64>"
});
bcs.registerStructType("PublishTx", {
  modules: "vector<vector<u8>>"
});
bcs.registerStructType("SharedObjectRef", {
  objectId: "address",
  initialSharedVersion: "u64"
}).registerEnumType("ObjectArg", {
  ImmOrOwned: "SuiObjectRef",
  Shared: "SharedObjectRef"
}).registerEnumType("CallArg", {
  Pure: "vector<u8>",
  Object: "ObjectArg",
  ObjVec: "vector<ObjectArg>"
});
bcs.registerEnumType("TypeTag", {
  bool: null,
  u8: null,
  u64: null,
  u128: null,
  address: null,
  signer: null,
  vector: "TypeTag",
  struct: "StructTag",
  u16: null,
  u32: null,
  u256: null
}).registerStructType("StructTag", {
  address: "address",
  module: "string",
  name: "string",
  typeParams: "vector<TypeTag>"
});
bcs.registerStructType("MoveCallTx", {
  package: "SuiObjectRef",
  module: "string",
  function: "string",
  typeArguments: "vector<TypeTag>",
  arguments: "vector<CallArg>"
});
bcs.registerEnumType("Transaction", {
  TransferObject: "TransferObjectTx",
  Publish: "PublishTx",
  Call: "MoveCallTx",
  TransferSui: "TransferSuiTx",
  Pay: "PayTx",
  PaySui: "PaySuiTx",
  PayAllSui: "PayAllSuiTx"
});
bcs.registerEnumType("TransactionKind", {
  Single: "Transaction",
  Batch: "vector<Transaction>"
});
bcs.registerStructType("TransactionData", {
  kind: "TransactionKind",
  sender: "address",
  gasPayment: "SuiObjectRef",
  gasPrice: "u64",
  gasBudget: "u64"
});
var TRANSACTION_DATA_TYPE_TAG = Array.from("TransactionData::").map(
  (e) => e.charCodeAt(0)
);
function deserializeTransactionBytesToTransactionData(useIntentSigning, bytes) {
  if (useIntentSigning) {
    return bcs.de("TransactionData", bytes.getData());
  } else {
    return bcs.de(
      "TransactionData",
      bytes.getData().slice(TRANSACTION_DATA_TYPE_TAG.length)
    );
  }
}
bcs.registerStructType("SenderSignedData", {
  data: "TransactionData",
  txSignature: "vector<u8>"
});

// src/cryptography/hash.ts
var import_bcs10 = require("@mysten/bcs");
var import_js_sha33 = __toESM(require("js-sha3"));
function sha256Hash(typeTag, data) {
  const hash = import_js_sha33.default.sha3_256.create();
  const typeTagBytes = Array.from(`${typeTag}::`).map((e) => e.charCodeAt(0));
  const dataWithTag = new Uint8Array(typeTagBytes.length + data.length);
  dataWithTag.set(typeTagBytes);
  dataWithTag.set(data, typeTagBytes.length);
  hash.update(dataWithTag);
  return (0, import_bcs10.fromHEX)(hash.hex());
}

// src/types/common.ts
var TransactionDigest = (0, import_superstruct2.string)();
var ObjectId = (0, import_superstruct2.string)();
var SuiAddress = (0, import_superstruct2.string)();
var SequenceNumber = (0, import_superstruct2.number)();
var ObjectOwner = (0, import_superstruct2.union)([
  (0, import_superstruct2.object)({
    AddressOwner: SuiAddress
  }),
  (0, import_superstruct2.object)({
    ObjectOwner: SuiAddress
  }),
  (0, import_superstruct2.object)({
    Shared: (0, import_superstruct2.object)({
      initial_shared_version: (0, import_superstruct2.number)()
    })
  }),
  (0, import_superstruct2.literal)("Immutable")
]);
var SuiJsonValue = (0, import_superstruct2.unknown)();
var TX_DIGEST_LENGTH = 32;
function isValidTransactionDigest(value, serializationFmt) {
  let buffer;
  try {
    if (serializationFmt === "base58") {
      buffer = new Base58DataBuffer(value);
    } else {
      buffer = new Base64DataBuffer(value);
    }
    return buffer.getLength() === TX_DIGEST_LENGTH;
  } catch (e) {
    return false;
  }
}
var SUI_ADDRESS_LENGTH = 20;
function isValidSuiAddress(value) {
  return isHex(value) && getHexByteLength(value) === SUI_ADDRESS_LENGTH;
}
function isValidSuiObjectId(value) {
  return isValidSuiAddress(value);
}
function normalizeSuiAddress(value, forceAdd0x = false) {
  let address = value.toLowerCase();
  if (!forceAdd0x && address.startsWith("0x")) {
    address = address.slice(2);
  }
  return `0x${address.padStart(SUI_ADDRESS_LENGTH * 2, "0")}`;
}
function normalizeSuiObjectId(value, forceAdd0x = false) {
  return normalizeSuiAddress(value, forceAdd0x);
}
function generateTransactionDigest(data, signatureScheme, signature, publicKey, serializationFmt, excludeSig = false) {
  const signatureBytes = (typeof signature === "string" ? new Base64DataBuffer(signature) : signature).getData();
  let pk;
  switch (signatureScheme) {
    case "ED25519":
      pk = publicKey instanceof Ed25519PublicKey ? publicKey : new Ed25519PublicKey(publicKey);
      break;
    case "Secp256k1":
      pk = publicKey instanceof Secp256k1PublicKey ? publicKey : new Secp256k1PublicKey(publicKey);
  }
  const publicKeyBytes = pk.toBytes();
  const schemeByte = new Uint8Array([
    SIGNATURE_SCHEME_TO_FLAG[signatureScheme]
  ]);
  const txSignature = new Uint8Array(
    1 + signatureBytes.length + publicKeyBytes.length
  );
  txSignature.set(schemeByte);
  txSignature.set(signatureBytes, 1);
  txSignature.set(publicKeyBytes, 1 + signatureBytes.length);
  const senderSignedData = {
    data,
    txSignature
  };
  const senderSignedDataBytes = bcs.ser("SenderSignedData", senderSignedData).toBytes();
  let hash;
  if (excludeSig) {
    const txBytes = bcs.ser("TransactionData", data).toBytes();
    hash = sha256Hash("TransactionData", txBytes);
  } else {
    hash = sha256Hash("SenderSignedData", senderSignedDataBytes);
  }
  return serializationFmt === "base58" ? new Base58DataBuffer(hash).toString() : new Base64DataBuffer(hash).toString();
}
function isHex(value) {
  return /^(0x|0X)?[a-fA-F0-9]+$/.test(value) && value.length % 2 === 0;
}
function getHexByteLength(value) {
  return /^(0x|0X)/.test(value) ? (value.length - 2) / 2 : value.length / 2;
}

// src/types/objects.ts
var import_superstruct3 = require("superstruct");
var ObjectType = (0, import_superstruct3.union)([(0, import_superstruct3.literal)("moveObject"), (0, import_superstruct3.literal)("package")]);
var SuiObjectRef = (0, import_superstruct3.object)({
  digest: TransactionDigest,
  objectId: (0, import_superstruct3.string)(),
  version: (0, import_superstruct3.number)()
});
var SuiObjectInfo = (0, import_superstruct3.assign)(
  SuiObjectRef,
  (0, import_superstruct3.object)({
    type: (0, import_superstruct3.string)(),
    owner: ObjectOwner,
    previousTransaction: TransactionDigest
  })
);
var ObjectContentFields = (0, import_superstruct3.record)((0, import_superstruct3.string)(), (0, import_superstruct3.any)());
var MovePackageContent = (0, import_superstruct3.record)((0, import_superstruct3.string)(), (0, import_superstruct3.string)());
var SuiMoveObject = (0, import_superstruct3.object)({
  type: (0, import_superstruct3.string)(),
  fields: ObjectContentFields,
  has_public_transfer: (0, import_superstruct3.optional)((0, import_superstruct3.boolean)())
});
var SuiMovePackage = (0, import_superstruct3.object)({
  disassembled: MovePackageContent
});
var SuiData = (0, import_superstruct3.union)([
  (0, import_superstruct3.assign)(SuiMoveObject, (0, import_superstruct3.object)({ dataType: (0, import_superstruct3.literal)("moveObject") })),
  (0, import_superstruct3.assign)(SuiMovePackage, (0, import_superstruct3.object)({ dataType: (0, import_superstruct3.literal)("package") }))
]);
var MIST_PER_SUI = BigInt(1e9);
var SuiObject = (0, import_superstruct3.object)({
  data: SuiData,
  owner: ObjectOwner,
  previousTransaction: TransactionDigest,
  storageRebate: (0, import_superstruct3.number)(),
  reference: SuiObjectRef
});
var ObjectStatus = (0, import_superstruct3.union)([
  (0, import_superstruct3.literal)("Exists"),
  (0, import_superstruct3.literal)("NotExists"),
  (0, import_superstruct3.literal)("Deleted")
]);
var GetOwnedObjectsResponse = (0, import_superstruct3.array)(SuiObjectInfo);
var GetObjectDataResponse = (0, import_superstruct3.object)({
  status: ObjectStatus,
  details: (0, import_superstruct3.union)([SuiObject, ObjectId, SuiObjectRef])
});
function getObjectExistsResponse(resp) {
  return resp.status !== "Exists" ? void 0 : resp.details;
}
function getObjectDeletedResponse(resp) {
  return resp.status !== "Deleted" ? void 0 : resp.details;
}
function getObjectNotExistsResponse(resp) {
  return resp.status !== "NotExists" ? void 0 : resp.details;
}
function getObjectReference(resp) {
  return getObjectExistsResponse(resp)?.reference || getObjectDeletedResponse(resp);
}
function getObjectId(data) {
  if ("objectId" in data) {
    return data.objectId;
  }
  return getObjectReference(data)?.objectId ?? getObjectNotExistsResponse(data);
}
function getObjectVersion(data) {
  if ("version" in data) {
    return data.version;
  }
  return getObjectReference(data)?.version;
}
function getObjectType(resp) {
  return getObjectExistsResponse(resp)?.data.dataType;
}
function getObjectPreviousTransactionDigest(resp) {
  return getObjectExistsResponse(resp)?.previousTransaction;
}
function getObjectOwner(resp) {
  return getObjectExistsResponse(resp)?.owner;
}
function getSharedObjectInitialVersion(resp) {
  const owner = getObjectOwner(resp);
  if (typeof owner === "object" && "Shared" in owner) {
    return owner.Shared.initial_shared_version;
  } else {
    return void 0;
  }
}
function isSharedObject(resp) {
  const owner = getObjectOwner(resp);
  return typeof owner === "object" && "Shared" in owner;
}
function isImmutableObject(resp) {
  const owner = getObjectOwner(resp);
  return owner === "Immutable";
}
function getMoveObjectType(resp) {
  return getMoveObject(resp)?.type;
}
function getObjectFields(resp) {
  if ("fields" in resp) {
    return resp.fields;
  }
  return getMoveObject(resp)?.fields;
}
function getMoveObject(data) {
  const suiObject = "data" in data ? data : getObjectExistsResponse(data);
  if (suiObject?.data.dataType !== "moveObject") {
    return void 0;
  }
  return suiObject.data;
}
function hasPublicTransfer(data) {
  return getMoveObject(data)?.has_public_transfer ?? false;
}
function getMovePackageContent(data) {
  if ("disassembled" in data) {
    return data.disassembled;
  }
  const suiObject = getObjectExistsResponse(data);
  if (suiObject?.data.dataType !== "package") {
    return void 0;
  }
  return suiObject.data.disassembled;
}

// src/types/events.ts
var import_superstruct4 = require("superstruct");
var BalanceChangeType = (0, import_superstruct4.union)([
  (0, import_superstruct4.literal)("Gas"),
  (0, import_superstruct4.literal)("Pay"),
  (0, import_superstruct4.literal)("Receive")
]);
var MoveEvent = (0, import_superstruct4.object)({
  packageId: ObjectId,
  transactionModule: (0, import_superstruct4.string)(),
  sender: SuiAddress,
  type: (0, import_superstruct4.string)(),
  fields: (0, import_superstruct4.record)((0, import_superstruct4.string)(), (0, import_superstruct4.any)()),
  bcs: (0, import_superstruct4.string)()
});
var PublishEvent = (0, import_superstruct4.object)({
  sender: SuiAddress,
  packageId: ObjectId,
  version: (0, import_superstruct4.optional)((0, import_superstruct4.number)()),
  digest: (0, import_superstruct4.optional)((0, import_superstruct4.string)())
});
var CoinBalanceChangeEvent = (0, import_superstruct4.object)({
  packageId: ObjectId,
  transactionModule: (0, import_superstruct4.string)(),
  sender: SuiAddress,
  owner: ObjectOwner,
  changeType: BalanceChangeType,
  coinType: (0, import_superstruct4.string)(),
  coinObjectId: ObjectId,
  version: SequenceNumber,
  amount: (0, import_superstruct4.number)()
});
var TransferObjectEvent = (0, import_superstruct4.object)({
  packageId: ObjectId,
  transactionModule: (0, import_superstruct4.string)(),
  sender: SuiAddress,
  recipient: ObjectOwner,
  objectType: (0, import_superstruct4.string)(),
  objectId: ObjectId,
  version: SequenceNumber
});
var MutateObjectEvent = (0, import_superstruct4.object)({
  packageId: ObjectId,
  transactionModule: (0, import_superstruct4.string)(),
  sender: SuiAddress,
  objectType: (0, import_superstruct4.string)(),
  objectId: ObjectId,
  version: SequenceNumber
});
var DeleteObjectEvent = (0, import_superstruct4.object)({
  packageId: ObjectId,
  transactionModule: (0, import_superstruct4.string)(),
  sender: SuiAddress,
  objectId: ObjectId,
  version: SequenceNumber
});
var NewObjectEvent = (0, import_superstruct4.object)({
  packageId: ObjectId,
  transactionModule: (0, import_superstruct4.string)(),
  sender: SuiAddress,
  recipient: ObjectOwner,
  objectType: (0, import_superstruct4.string)(),
  objectId: ObjectId,
  version: SequenceNumber
});
var EpochChangeEvent = (0, import_superstruct4.union)([(0, import_superstruct4.bigint)(), (0, import_superstruct4.number)()]);
var CheckpointEvent = (0, import_superstruct4.union)([(0, import_superstruct4.bigint)(), (0, import_superstruct4.number)()]);
var SuiEvent = (0, import_superstruct4.union)([
  (0, import_superstruct4.object)({ moveEvent: MoveEvent }),
  (0, import_superstruct4.object)({ publish: PublishEvent }),
  (0, import_superstruct4.object)({ coinBalanceChange: CoinBalanceChangeEvent }),
  (0, import_superstruct4.object)({ transferObject: TransferObjectEvent }),
  (0, import_superstruct4.object)({ mutateObject: MutateObjectEvent }),
  (0, import_superstruct4.object)({ deleteObject: DeleteObjectEvent }),
  (0, import_superstruct4.object)({ newObject: NewObjectEvent }),
  (0, import_superstruct4.object)({ epochChange: EpochChangeEvent }),
  (0, import_superstruct4.object)({ checkpoint: CheckpointEvent })
]);
var EventId = (0, import_superstruct4.object)({
  txSeq: (0, import_superstruct4.number)(),
  eventSeq: (0, import_superstruct4.number)()
});
var SuiEventEnvelope = (0, import_superstruct4.object)({
  timestamp: (0, import_superstruct4.number)(),
  txDigest: TransactionDigest,
  id: EventId,
  event: SuiEvent
});
var PaginatedEvents = (0, import_superstruct4.object)({
  data: (0, import_superstruct4.array)(SuiEventEnvelope),
  nextCursor: (0, import_superstruct4.union)([EventId, (0, import_superstruct4.literal)(null)])
});
var SubscriptionId = (0, import_superstruct4.number)();
var SubscriptionEvent = (0, import_superstruct4.object)({
  subscription: SubscriptionId,
  result: SuiEventEnvelope
});

// src/types/transactions.ts
var import_superstruct5 = require("superstruct");
var EpochId = (0, import_superstruct5.number)();
var TransferObject = (0, import_superstruct5.object)({
  recipient: SuiAddress,
  objectRef: SuiObjectRef
});
var SuiTransferSui = (0, import_superstruct5.object)({
  recipient: SuiAddress,
  amount: (0, import_superstruct5.union)([(0, import_superstruct5.number)(), (0, import_superstruct5.literal)(null)])
});
var SuiChangeEpoch = (0, import_superstruct5.object)({
  epoch: EpochId,
  storage_charge: (0, import_superstruct5.number)(),
  computation_charge: (0, import_superstruct5.number)()
});
var Pay = (0, import_superstruct5.object)({
  coins: (0, import_superstruct5.array)(SuiObjectRef),
  recipients: (0, import_superstruct5.array)(SuiAddress),
  amounts: (0, import_superstruct5.array)((0, import_superstruct5.number)())
});
var PaySui = (0, import_superstruct5.object)({
  coins: (0, import_superstruct5.array)(SuiObjectRef),
  recipients: (0, import_superstruct5.array)(SuiAddress),
  amounts: (0, import_superstruct5.array)((0, import_superstruct5.number)())
});
var PayAllSui = (0, import_superstruct5.object)({
  coins: (0, import_superstruct5.array)(SuiObjectRef),
  recipient: SuiAddress
});
var MoveCall = (0, import_superstruct5.object)({
  package: SuiObjectRef,
  module: (0, import_superstruct5.string)(),
  function: (0, import_superstruct5.string)(),
  typeArguments: (0, import_superstruct5.optional)((0, import_superstruct5.array)((0, import_superstruct5.string)())),
  arguments: (0, import_superstruct5.array)(SuiJsonValue)
});
var SuiTransactionKind = (0, import_superstruct5.union)([
  (0, import_superstruct5.object)({ TransferObject }),
  (0, import_superstruct5.object)({ Publish: SuiMovePackage }),
  (0, import_superstruct5.object)({ Call: MoveCall }),
  (0, import_superstruct5.object)({ TransferSui: SuiTransferSui }),
  (0, import_superstruct5.object)({ ChangeEpoch: SuiChangeEpoch }),
  (0, import_superstruct5.object)({ Pay }),
  (0, import_superstruct5.object)({ PaySui }),
  (0, import_superstruct5.object)({ PayAllSui })
]);
var SuiTransactionData = (0, import_superstruct5.object)({
  transactions: (0, import_superstruct5.array)(SuiTransactionKind),
  sender: SuiAddress,
  gasPayment: SuiObjectRef,
  gasPrice: (0, import_superstruct5.optional)((0, import_superstruct5.number)()),
  gasBudget: (0, import_superstruct5.number)()
});
var AuthoritySignature = (0, import_superstruct5.string)();
var GenericAuthoritySignature = (0, import_superstruct5.union)([
  AuthoritySignature,
  (0, import_superstruct5.array)(AuthoritySignature)
]);
var AuthorityQuorumSignInfo = (0, import_superstruct5.object)({
  epoch: EpochId,
  signature: GenericAuthoritySignature,
  signers_map: (0, import_superstruct5.array)((0, import_superstruct5.number)())
});
var CertifiedTransaction = (0, import_superstruct5.object)({
  transactionDigest: TransactionDigest,
  data: SuiTransactionData,
  txSignature: (0, import_superstruct5.string)(),
  authSignInfo: AuthorityQuorumSignInfo
});
var GasCostSummary = (0, import_superstruct5.object)({
  computationCost: (0, import_superstruct5.number)(),
  storageCost: (0, import_superstruct5.number)(),
  storageRebate: (0, import_superstruct5.number)()
});
var ExecutionStatusType = (0, import_superstruct5.union)([
  (0, import_superstruct5.literal)("success"),
  (0, import_superstruct5.literal)("failure")
]);
var ExecutionStatus = (0, import_superstruct5.object)({
  status: ExecutionStatusType,
  error: (0, import_superstruct5.optional)((0, import_superstruct5.string)())
});
var OwnedObjectRef = (0, import_superstruct5.object)({
  owner: ObjectOwner,
  reference: SuiObjectRef
});
var TransactionEffects = (0, import_superstruct5.object)({
  status: ExecutionStatus,
  gasUsed: GasCostSummary,
  sharedObjects: (0, import_superstruct5.optional)((0, import_superstruct5.array)(SuiObjectRef)),
  transactionDigest: TransactionDigest,
  created: (0, import_superstruct5.optional)((0, import_superstruct5.array)(OwnedObjectRef)),
  mutated: (0, import_superstruct5.optional)((0, import_superstruct5.array)(OwnedObjectRef)),
  unwrapped: (0, import_superstruct5.optional)((0, import_superstruct5.array)(OwnedObjectRef)),
  deleted: (0, import_superstruct5.optional)((0, import_superstruct5.array)(SuiObjectRef)),
  wrapped: (0, import_superstruct5.optional)((0, import_superstruct5.array)(SuiObjectRef)),
  gasObject: OwnedObjectRef,
  events: (0, import_superstruct5.optional)((0, import_superstruct5.array)(SuiEvent)),
  dependencies: (0, import_superstruct5.optional)((0, import_superstruct5.array)(TransactionDigest))
});
var ReturnValueType = (0, import_superstruct5.tuple)([(0, import_superstruct5.array)((0, import_superstruct5.number)()), (0, import_superstruct5.string)()]);
var MutableReferenceOutputType = (0, import_superstruct5.tuple)([(0, import_superstruct5.number)(), (0, import_superstruct5.array)((0, import_superstruct5.number)()), (0, import_superstruct5.string)()]);
var ExecutionResultType = (0, import_superstruct5.object)({
  mutableReferenceOutputs: (0, import_superstruct5.optional)((0, import_superstruct5.array)(MutableReferenceOutputType)),
  returnValues: (0, import_superstruct5.optional)((0, import_superstruct5.array)(ReturnValueType))
});
var DevInspectResultTupleType = (0, import_superstruct5.tuple)([(0, import_superstruct5.number)(), ExecutionResultType]);
var DevInspectResultsType = (0, import_superstruct5.union)([
  (0, import_superstruct5.object)({ Ok: (0, import_superstruct5.array)(DevInspectResultTupleType) }),
  (0, import_superstruct5.object)({ Err: (0, import_superstruct5.string)() })
]);
var DevInspectResults = (0, import_superstruct5.object)({
  effects: TransactionEffects,
  results: DevInspectResultsType
});
var SuiTransactionAuthSignersResponse = (0, import_superstruct5.object)({
  signers: (0, import_superstruct5.array)((0, import_superstruct5.string)())
});
var SuiCertifiedTransactionEffects = (0, import_superstruct5.object)({
  transactionEffectsDigest: (0, import_superstruct5.string)(),
  authSignInfo: AuthorityQuorumSignInfo,
  effects: TransactionEffects
});
var SuiExecuteTransactionResponse = (0, import_superstruct5.union)([
  (0, import_superstruct5.object)({ TxCert: (0, import_superstruct5.object)({ certificate: CertifiedTransaction }) }),
  (0, import_superstruct5.object)({
    EffectsCert: (0, import_superstruct5.object)({
      certificate: CertifiedTransaction,
      effects: SuiCertifiedTransactionEffects,
      confirmed_local_execution: (0, import_superstruct5.boolean)()
    })
  })
]);
var GetTxnDigestsResponse = (0, import_superstruct5.array)(TransactionDigest);
var PaginatedTransactionDigests = (0, import_superstruct5.object)({
  data: (0, import_superstruct5.array)(TransactionDigest),
  nextCursor: (0, import_superstruct5.union)([TransactionDigest, (0, import_superstruct5.literal)(null)])
});
var TransactionBytes = (0, import_superstruct5.object)({
  txBytes: (0, import_superstruct5.string)(),
  gas: SuiObjectRef,
  inputObjects: (0, import_superstruct5.unknown)()
});
var SuiParsedMergeCoinResponse = (0, import_superstruct5.object)({
  updatedCoin: SuiObject,
  updatedGas: SuiObject
});
var SuiParsedSplitCoinResponse = (0, import_superstruct5.object)({
  updatedCoin: SuiObject,
  newCoins: (0, import_superstruct5.array)(SuiObject),
  updatedGas: SuiObject
});
var SuiPackage = (0, import_superstruct5.object)({
  digest: (0, import_superstruct5.string)(),
  objectId: (0, import_superstruct5.string)(),
  version: (0, import_superstruct5.number)()
});
var SuiParsedPublishResponse = (0, import_superstruct5.object)({
  createdObjects: (0, import_superstruct5.array)(SuiObject),
  package: SuiPackage,
  updatedGas: SuiObject
});
var SuiParsedTransactionResponse = (0, import_superstruct5.union)([
  (0, import_superstruct5.object)({ SplitCoin: SuiParsedSplitCoinResponse }),
  (0, import_superstruct5.object)({ MergeCoin: SuiParsedMergeCoinResponse }),
  (0, import_superstruct5.object)({ Publish: SuiParsedPublishResponse })
]);
var SuiTransactionResponse = (0, import_superstruct5.object)({
  certificate: CertifiedTransaction,
  effects: TransactionEffects,
  timestamp_ms: (0, import_superstruct5.union)([(0, import_superstruct5.number)(), (0, import_superstruct5.literal)(null)]),
  parsed_data: (0, import_superstruct5.union)([SuiParsedTransactionResponse, (0, import_superstruct5.literal)(null)])
});
function getCertifiedTransaction(tx) {
  if ("certificate" in tx) {
    return tx.certificate;
  } else if ("TxCert" in tx) {
    return tx.TxCert.certificate;
  } else if ("EffectsCert" in tx) {
    return tx.EffectsCert.certificate;
  }
  return void 0;
}
function getTransactionDigest(tx) {
  if ("transactionDigest" in tx) {
    return tx.transactionDigest;
  }
  const ctxn = getCertifiedTransaction(tx);
  return ctxn.transactionDigest;
}
function getTransactionSignature(tx) {
  return tx.txSignature;
}
function getTransactionAuthorityQuorumSignInfo(tx) {
  return tx.authSignInfo;
}
function getTransactionData(tx) {
  return tx.data;
}
function getTransactionSender(tx) {
  return tx.data.sender;
}
function getTransactionGasObject(tx) {
  return tx.data.gasPayment;
}
function getTransactionGasPrice(tx) {
  return tx.data.gasPrice;
}
function getTransactionGasBudget(tx) {
  return tx.data.gasBudget;
}
function getTransferObjectTransaction(data) {
  return "TransferObject" in data ? data.TransferObject : void 0;
}
function getPublishTransaction(data) {
  return "Publish" in data ? data.Publish : void 0;
}
function getMoveCallTransaction(data) {
  return "Call" in data ? data.Call : void 0;
}
function getTransferSuiTransaction(data) {
  return "TransferSui" in data ? data.TransferSui : void 0;
}
function getPayTransaction(data) {
  return "Pay" in data ? data.Pay : void 0;
}
function getPaySuiTransaction(data) {
  return "PaySui" in data ? data.PaySui : void 0;
}
function getPayAllSuiTransaction(data) {
  return "PayAllSui" in data ? data.PayAllSui : void 0;
}
function getChangeEpochTransaction(data) {
  return "ChangeEpoch" in data ? data.ChangeEpoch : void 0;
}
function getTransactions(data) {
  return data.data.transactions;
}
function getTransferSuiAmount(data) {
  return "TransferSui" in data && data.TransferSui.amount ? BigInt(data.TransferSui.amount) : null;
}
function getTransactionKindName(data) {
  return Object.keys(data)[0];
}
function getExecutionStatusType(data) {
  return getExecutionStatus(data)?.status;
}
function getExecutionStatus(data) {
  return getTransactionEffects(data)?.status;
}
function getExecutionStatusError(data) {
  return getExecutionStatus(data)?.error;
}
function getExecutionStatusGasSummary(data) {
  if ((0, import_superstruct5.is)(data, TransactionEffects)) {
    return data.gasUsed;
  }
  return getTransactionEffects(data)?.gasUsed;
}
function getTotalGasUsed(data) {
  const gasSummary = getExecutionStatusGasSummary(data);
  return gasSummary ? gasSummary.computationCost + gasSummary.storageCost - gasSummary.storageRebate : void 0;
}
function getTransactionEffects(data) {
  if ("effects" in data) {
    return data.effects;
  }
  return "EffectsCert" in data ? data.EffectsCert.effects.effects : void 0;
}
function getEvents(data) {
  return getTransactionEffects(data)?.events;
}
function getCreatedObjects(data) {
  return getTransactionEffects(data)?.created;
}
function getTimestampFromTransactionResponse(data) {
  return "timestamp_ms" in data ? data.timestamp_ms ?? void 0 : void 0;
}
function getParsedSplitCoinResponse(data) {
  const parsed = data.parsed_data;
  return parsed && "SplitCoin" in parsed ? parsed.SplitCoin : void 0;
}
function getParsedMergeCoinResponse(data) {
  const parsed = data.parsed_data;
  return parsed && "MergeCoin" in parsed ? parsed.MergeCoin : void 0;
}
function getParsedPublishResponse(data) {
  const parsed = data.parsed_data;
  return parsed && "Publish" in parsed ? parsed.Publish : void 0;
}
function getCoinAfterMerge(data) {
  return getParsedMergeCoinResponse(data)?.updatedCoin;
}
function getCoinAfterSplit(data) {
  return getParsedSplitCoinResponse(data)?.updatedCoin;
}
function getNewlyCreatedCoinsAfterSplit(data) {
  return getParsedSplitCoinResponse(data)?.newCoins;
}
function getNewlyCreatedCoinRefsAfterSplit(data) {
  if ("EffectsCert" in data) {
    const effects = data.EffectsCert.effects.effects;
    return effects.created?.map((c) => c.reference);
  }
  return void 0;
}

// src/types/option.ts
function getOption(option) {
  if (typeof option === "object" && option !== null && "type" in option && option.type.startsWith("0x1::option::Option<")) {
    return void 0;
  }
  return option;
}

// src/types/framework.ts
var import_superstruct6 = require("superstruct");
var SUI_FRAMEWORK_ADDRESS = "0x2";
var MOVE_STDLIB_ADDRESS = "0x1";
var OBJECT_MODULE_NAME = "object";
var UID_STRUCT_NAME = "UID";
var ID_STRUCT_NAME = "ID";
var SUI_TYPE_ARG = `${SUI_FRAMEWORK_ADDRESS}::sui::SUI`;
var PAY_MODULE_NAME = "pay";
var PAY_SPLIT_COIN_VEC_FUNC_NAME = "split_vec";
var PAY_JOIN_COIN_FUNC_NAME = "join";
var COIN_TYPE_ARG_REGEX = /^0x2::coin::Coin<(.+)>$/;
var CoinMetadataStruct = (0, import_superstruct6.object)({
  decimals: (0, import_superstruct6.number)(),
  name: (0, import_superstruct6.string)(),
  symbol: (0, import_superstruct6.string)(),
  description: (0, import_superstruct6.string)(),
  iconUrl: (0, import_superstruct6.union)([(0, import_superstruct6.string)(), (0, import_superstruct6.literal)(null)]),
  id: (0, import_superstruct6.union)([ObjectId, (0, import_superstruct6.literal)(null)])
});
var Coin = class {
  static isCoin(data) {
    return Coin.getType(data)?.match(COIN_TYPE_ARG_REGEX) != null;
  }
  static getCoinType(type) {
    const [, res] = type.match(COIN_TYPE_ARG_REGEX) ?? [];
    return res || null;
  }
  static getCoinTypeArg(obj) {
    const type = Coin.getType(obj);
    return type ? Coin.getCoinType(type) : null;
  }
  static isSUI(obj) {
    const arg = Coin.getCoinTypeArg(obj);
    return arg ? Coin.getCoinSymbol(arg) === "SUI" : false;
  }
  static getCoinSymbol(coinTypeArg) {
    return coinTypeArg.substring(coinTypeArg.lastIndexOf(":") + 1);
  }
  static getCoinStructTag(coinTypeArg) {
    return {
      address: normalizeSuiObjectId(coinTypeArg.split("::")[0]),
      module: coinTypeArg.split("::")[1],
      name: coinTypeArg.split("::")[2],
      typeParams: []
    };
  }
  static getID(obj) {
    if ("fields" in obj) {
      return obj.fields.id.id;
    }
    return getObjectId(obj);
  }
  static selectCoinsWithBalanceGreaterThanOrEqual(coins, amount, exclude = []) {
    return Coin.sortByBalance(
      coins.filter(
        (c) => !exclude.includes(Coin.getID(c)) && Coin.getBalance(c) >= amount
      )
    );
  }
  static selectCoinWithBalanceGreaterThanOrEqual(coins, amount, exclude = []) {
    return coins.find(
      (c) => !exclude.includes(Coin.getID(c)) && Coin.getBalance(c) >= amount
    );
  }
  static selectCoinSetWithCombinedBalanceGreaterThanOrEqual(coins, amount, exclude = []) {
    const sortedCoins = Coin.sortByBalance(
      coins.filter((c) => !exclude.includes(Coin.getID(c)))
    );
    const total = Coin.totalBalance(sortedCoins);
    if (total < amount) {
      return [];
    } else if (total === amount) {
      return sortedCoins;
    }
    let sum = BigInt(0);
    let ret = [];
    while (sum < total) {
      const target = amount - sum;
      const coinWithSmallestSufficientBalance = sortedCoins.find(
        (c) => Coin.getBalance(c) >= target
      );
      if (coinWithSmallestSufficientBalance) {
        ret.push(coinWithSmallestSufficientBalance);
        break;
      }
      const coinWithLargestBalance = sortedCoins.pop();
      ret.push(coinWithLargestBalance);
      sum += Coin.getBalance(coinWithLargestBalance);
    }
    return Coin.sortByBalance(ret);
  }
  static totalBalance(coins) {
    return coins.reduce(
      (partialSum, c) => partialSum + Coin.getBalance(c),
      BigInt(0)
    );
  }
  static sortByBalance(coins) {
    return coins.sort(
      (a, b) => Coin.getBalance(a) < Coin.getBalance(b) ? -1 : Coin.getBalance(a) > Coin.getBalance(b) ? 1 : 0
    );
  }
  static getBalance(data) {
    if (!Coin.isCoin(data)) {
      return void 0;
    }
    const balance = getObjectFields(data)?.balance;
    return BigInt(balance);
  }
  static getZero() {
    return BigInt(0);
  }
  static getType(data) {
    if ("status" in data) {
      return getMoveObjectType(data);
    }
    return data.type;
  }
  static async newPayTransaction(allCoins, coinTypeArg, amountToSend, recipient, gasBudget) {
    const isSuiTransfer = coinTypeArg === SUI_TYPE_ARG;
    const coinsOfTransferType = allCoins.filter(
      (aCoin) => Coin.getCoinTypeArg(aCoin) === coinTypeArg
    );
    const coinsOfGas = isSuiTransfer ? coinsOfTransferType : allCoins.filter((aCoin) => Coin.isSUI(aCoin));
    const gasCoin = Coin.selectCoinWithBalanceGreaterThanOrEqual(
      coinsOfGas,
      BigInt(gasBudget)
    );
    if (!gasCoin) {
      throw new Error(
        `Unable to find a coin to cover the gas budget ${gasBudget}`
      );
    }
    const totalAmountIncludingGas = amountToSend + BigInt(
      isSuiTransfer ? BigInt(gasBudget) - BigInt(Coin.getBalance(gasCoin) || 0) : 0
    );
    const inputCoinObjs = totalAmountIncludingGas > 0 ? await Coin.selectCoinSetWithCombinedBalanceGreaterThanOrEqual(
      coinsOfTransferType,
      totalAmountIncludingGas,
      isSuiTransfer ? [Coin.getID(gasCoin)] : []
    ) : [];
    if (totalAmountIncludingGas > 0 && !inputCoinObjs.length) {
      const totalBalanceOfTransferType = Coin.totalBalance(coinsOfTransferType);
      const suggestedAmountToSend = totalBalanceOfTransferType - BigInt(isSuiTransfer ? gasBudget : 0);
      throw new Error(
        `Coin balance ${totalBalanceOfTransferType} is not sufficient to cover the transfer amount ${amountToSend}. Try reducing the transfer amount to ${suggestedAmountToSend}.`
      );
    }
    if (isSuiTransfer) {
      inputCoinObjs.unshift(gasCoin);
    }
    return {
      kind: isSuiTransfer ? "paySui" : "pay",
      data: {
        inputCoins: inputCoinObjs.map(Coin.getID),
        recipients: [recipient],
        amounts: [Number(amountToSend)],
        gasBudget: Number(gasBudget)
      }
    };
  }
};
var _Delegation = class {
  suiObject;
  static isDelegationSuiObject(obj) {
    return "type" in obj.data && obj.data.type === _Delegation.SUI_OBJECT_TYPE;
  }
  constructor(obj) {
    this.suiObject = obj;
  }
  nextRewardUnclaimedEpoch() {
    return this.suiObject.data.fields.next_reward_unclaimed_epoch;
  }
  activeDelegation() {
    return BigInt(getOption(this.suiObject.data.fields.active_delegation) || 0);
  }
  delegateAmount() {
    return this.suiObject.data.fields.delegate_amount;
  }
  endingEpoch() {
    return getOption(this.suiObject.data.fields.ending_epoch);
  }
  validatorAddress() {
    return this.suiObject.data.fields.validator_address;
  }
  isActive() {
    return this.activeDelegation() > 0 && !this.endingEpoch();
  }
  hasUnclaimedRewards(epoch) {
    return this.nextRewardUnclaimedEpoch() <= epoch && (this.isActive() || (this.endingEpoch() || 0) > epoch);
  }
};
var Delegation = _Delegation;
__publicField(Delegation, "SUI_OBJECT_TYPE", "0x2::delegation::Delegation");

// src/types/version.ts
var import_femver = require("@suchipi/femver");
function parseVersionFromString(version) {
  return (0, import_femver.parse)(version);
}
function versionToString(version) {
  const { major, minor, patch } = version;
  return `${major}.${minor}.${patch}`;
}

// src/types/normalized.ts
var import_superstruct7 = require("superstruct");
var SuiMoveFunctionArgType = (0, import_superstruct7.union)([
  (0, import_superstruct7.string)(),
  (0, import_superstruct7.object)({ Object: (0, import_superstruct7.string)() })
]);
var SuiMoveFunctionArgTypes = (0, import_superstruct7.array)(SuiMoveFunctionArgType);
var SuiMoveModuleId = (0, import_superstruct7.object)({
  address: (0, import_superstruct7.string)(),
  name: (0, import_superstruct7.string)()
});
var SuiMoveVisibility = (0, import_superstruct7.union)([
  (0, import_superstruct7.literal)("Private"),
  (0, import_superstruct7.literal)("Public"),
  (0, import_superstruct7.literal)("Friend")
]);
var SuiMoveAbilitySet = (0, import_superstruct7.object)({
  abilities: (0, import_superstruct7.array)((0, import_superstruct7.string)())
});
var SuiMoveStructTypeParameter = (0, import_superstruct7.object)({
  constraints: SuiMoveAbilitySet,
  is_phantom: (0, import_superstruct7.boolean)()
});
var SuiMoveNormalizedTypeParameterType = (0, import_superstruct7.object)({
  TypeParameter: (0, import_superstruct7.number)()
});
function isSuiMoveNormalizedType(value) {
  if (!value)
    return false;
  if (typeof value === "string")
    return true;
  if ((0, import_superstruct7.is)(value, SuiMoveNormalizedTypeParameterType))
    return true;
  if (isSuiMoveNormalizedStructType(value))
    return true;
  if (typeof value !== "object")
    return false;
  const valueProperties = value;
  if ((0, import_superstruct7.is)(valueProperties.Reference, SuiMoveNormalizedType))
    return true;
  if ((0, import_superstruct7.is)(valueProperties.MutableReference, SuiMoveNormalizedType))
    return true;
  if ((0, import_superstruct7.is)(valueProperties.Vector, SuiMoveNormalizedType))
    return true;
  return false;
}
var SuiMoveNormalizedType = (0, import_superstruct7.define)(
  "SuiMoveNormalizedType",
  isSuiMoveNormalizedType
);
function isSuiMoveNormalizedStructType(value) {
  if (!value || typeof value !== "object")
    return false;
  const valueProperties = value;
  if (!valueProperties.Struct || typeof valueProperties.Struct !== "object")
    return false;
  const structProperties = valueProperties.Struct;
  if (typeof structProperties.address !== "string" || typeof structProperties.module !== "string" || typeof structProperties.name !== "string" || !Array.isArray(structProperties.type_arguments) || !structProperties.type_arguments.every(
    (value2) => isSuiMoveNormalizedType(value2)
  )) {
    return false;
  }
  return true;
}
var SuiMoveNormalizedStructType = (0, import_superstruct7.define)(
  "SuiMoveNormalizedStructType",
  isSuiMoveNormalizedStructType
);
var SuiMoveNormalizedFunction = (0, import_superstruct7.object)({
  visibility: SuiMoveVisibility,
  is_entry: (0, import_superstruct7.boolean)(),
  type_parameters: (0, import_superstruct7.array)(SuiMoveAbilitySet),
  parameters: (0, import_superstruct7.array)(SuiMoveNormalizedType),
  return_: (0, import_superstruct7.array)(SuiMoveNormalizedType)
});
var SuiMoveNormalizedField = (0, import_superstruct7.object)({
  name: (0, import_superstruct7.string)(),
  type_: SuiMoveNormalizedType
});
var SuiMoveNormalizedStruct = (0, import_superstruct7.object)({
  abilities: SuiMoveAbilitySet,
  type_parameters: (0, import_superstruct7.array)(SuiMoveStructTypeParameter),
  fields: (0, import_superstruct7.array)(SuiMoveNormalizedField)
});
var SuiMoveNormalizedModule = (0, import_superstruct7.object)({
  file_format_version: (0, import_superstruct7.number)(),
  address: (0, import_superstruct7.string)(),
  name: (0, import_superstruct7.string)(),
  friends: (0, import_superstruct7.array)(SuiMoveModuleId),
  structs: (0, import_superstruct7.record)((0, import_superstruct7.string)(), SuiMoveNormalizedStruct),
  exposed_functions: (0, import_superstruct7.record)((0, import_superstruct7.string)(), SuiMoveNormalizedFunction)
});
var SuiMoveNormalizedModules = (0, import_superstruct7.record)(
  (0, import_superstruct7.string)(),
  SuiMoveNormalizedModule
);
function extractMutableReference(normalizedType) {
  return typeof normalizedType === "object" && "MutableReference" in normalizedType ? normalizedType.MutableReference : void 0;
}
function extractReference(normalizedType) {
  return typeof normalizedType === "object" && "Reference" in normalizedType ? normalizedType.Reference : void 0;
}
function extractStructTag(normalizedType) {
  if (typeof normalizedType === "object" && "Struct" in normalizedType) {
    return normalizedType;
  }
  const ref = extractReference(normalizedType);
  const mutRef = extractMutableReference(normalizedType);
  if (typeof ref === "object" && "Struct" in ref) {
    return ref;
  }
  if (typeof mutRef === "object" && "Struct" in mutRef) {
    return mutRef;
  }
  return void 0;
}

// src/rpc/websocket-client.ts
var import_superstruct8 = require("superstruct");
var import_rpc_websockets = require("rpc-websockets");
var getWebsocketUrl = (httpUrl, port) => {
  const url = new URL(httpUrl);
  url.protocol = url.protocol.replace("http", "ws");
  url.port = (port ?? 9001).toString();
  return url.toString();
};
var isMinimumSubscriptionMessage = (msg) => msg && "subscription" in msg && typeof msg["subscription"] === "number" && "result" in msg && typeof msg["result"] === "object";
var DEFAULT_CLIENT_OPTIONS = {
  connectTimeout: 15e3,
  callTimeout: 3e4,
  reconnectInterval: 3e3,
  maxReconnects: 5
};
var SUBSCRIBE_EVENT_METHOD = "sui_subscribeEvent";
var UNSUBSCRIBE_EVENT_METHOD = "sui_unsubscribeEvent";
var WebsocketClient = class {
  constructor(endpoint, skipValidation, options = DEFAULT_CLIENT_OPTIONS) {
    this.endpoint = endpoint;
    this.skipValidation = skipValidation;
    this.options = options;
    if (this.endpoint.startsWith("http"))
      this.endpoint = getWebsocketUrl(this.endpoint);
    this.rpcClient = new import_rpc_websockets.Client(this.endpoint, {
      reconnect_interval: this.options.reconnectInterval,
      max_reconnects: this.options.maxReconnects,
      autoconnect: false
    });
  }
  rpcClient;
  connectionState = 0 /* NotConnected */;
  connectionTimeout = null;
  isSetup = false;
  connectionPromise = null;
  eventSubscriptions = /* @__PURE__ */ new Map();
  setupSocket() {
    if (this.isSetup)
      return;
    this.rpcClient.on("open", () => {
      if (this.connectionTimeout) {
        clearTimeout(this.connectionTimeout);
        this.connectionTimeout = null;
      }
      this.connectionState = 2 /* Connected */;
      this.rpcClient.socket.on(
        "message",
        this.onSocketMessage.bind(this)
      );
    });
    this.rpcClient.on("close", () => {
      this.connectionState = 0 /* NotConnected */;
    });
    this.rpcClient.on("error", console.error);
    this.isSetup = true;
  }
  onSocketMessage(rawMessage) {
    const msg = JSON.parse(rawMessage);
    const params = msg.params;
    if (msg.method === SUBSCRIBE_EVENT_METHOD) {
      if (this.skipValidation && isMinimumSubscriptionMessage(params)) {
        const sub = this.eventSubscriptions.get(params.subscription);
        if (sub)
          sub.onMessage(params.result);
      } else if ((0, import_superstruct8.is)(params, SubscriptionEvent)) {
        const sub = this.eventSubscriptions.get(params.subscription);
        if (sub)
          sub.onMessage(params.result);
      }
    }
  }
  async connect() {
    if (this.connectionPromise)
      return this.connectionPromise;
    if (this.connectionState === 2 /* Connected */)
      return Promise.resolve();
    this.setupSocket();
    this.rpcClient.connect();
    this.connectionState = 1 /* Connecting */;
    this.connectionPromise = new Promise((resolve, reject) => {
      this.connectionTimeout = setTimeout(
        () => reject(new Error("timeout")),
        this.options.connectTimeout
      );
      this.rpcClient.once("open", () => {
        this.refreshSubscriptions();
        this.connectionPromise = null;
        resolve();
      });
      this.rpcClient.once("error", (err) => {
        this.connectionPromise = null;
        reject(err);
      });
    });
    return this.connectionPromise;
  }
  async refreshSubscriptions() {
    if (this.eventSubscriptions.size === 0)
      return;
    try {
      let newSubs = /* @__PURE__ */ new Map();
      let newSubsArr = await Promise.all(
        Array.from(this.eventSubscriptions.values()).map(async (sub) => {
          const onMessage = sub.onMessage;
          const filter = sub.filter;
          if (!filter || !onMessage)
            return Promise.resolve(null);
          const id = await this.subscribeEvent(filter, onMessage);
          return { id, onMessage, filter };
        })
      );
      newSubsArr.forEach((entry) => {
        if (entry === null)
          return;
        const filter = entry.filter;
        const onMessage = entry.onMessage;
        newSubs.set(entry.id, { filter, onMessage });
      });
      this.eventSubscriptions = newSubs;
    } catch (err) {
      throw new Error(`error refreshing event subscriptions: ${err}`);
    }
  }
  async subscribeEvent(filter, onMessage) {
    try {
      if (this.connectionState != 2 /* Connected */)
        await this.connect();
      let subId = await this.rpcClient.call(
        SUBSCRIBE_EVENT_METHOD,
        [filter],
        this.options.callTimeout
      );
      this.eventSubscriptions.set(subId, { filter, onMessage });
      return subId;
    } catch (err) {
      throw new Error(
        `Error subscribing to event: ${err}, filter: ${JSON.stringify(filter)}`
      );
    }
  }
  async unsubscribeEvent(id) {
    try {
      if (this.connectionState != 2 /* Connected */)
        await this.connect();
      let removedOnNode = await this.rpcClient.call(
        UNSUBSCRIBE_EVENT_METHOD,
        [id],
        this.options.callTimeout
      );
      return this.eventSubscriptions.delete(id) || removedOnNode;
    } catch (err) {
      throw new Error(
        `Error unsubscribing from event: ${err}, subscription: ${id}`
      );
    }
  }
};

// src/utils/api-endpoints.ts
var Network = /* @__PURE__ */ ((Network2) => {
  Network2["LOCAL"] = "LOCAL";
  Network2["DEVNET"] = "DEVNET";
  return Network2;
})(Network || {});
var NETWORK_TO_API = {
  ["LOCAL" /* LOCAL */]: {
    fullNode: "http://127.0.0.1:9000",
    faucet: "http://127.0.0.1:9123/gas"
  },
  ["DEVNET" /* DEVNET */]: {
    fullNode: "https://fullnode.devnet.sui.io/",
    faucet: "https://faucet.devnet.sui.io/gas"
  }
};

// src/rpc/faucet-client.ts
var import_cross_fetch2 = __toESM(require("cross-fetch"));
var FaucetRateLimitError = class extends Error {
};
async function requestSuiFromFaucet(endpoint, recipient, httpHeaders) {
  const res = await (0, import_cross_fetch2.default)(endpoint, {
    method: "POST",
    body: JSON.stringify({
      FixedAmountRequest: {
        recipient
      }
    }),
    headers: {
      "Content-Type": "application/json",
      ...httpHeaders || {}
    }
  });
  if (res.status === 429) {
    throw new FaucetRateLimitError(
      `Too many requests from this client have been sent to the faucet. Please retry later`
    );
  }
  let parsed;
  try {
    parsed = await res.json();
  } catch (e) {
    throw new Error(
      `Ecountered error when parsing response from faucet, error: ${e}, status ${res.status}, response ${res}`
    );
  }
  if (parsed.error) {
    throw new Error(`Faucet returns error: ${parsed.error}`);
  }
  return parsed;
}

// src/providers/json-rpc-provider.ts
var import_femver2 = require("@suchipi/femver");
var import_superstruct9 = require("superstruct");
var DEFAULT_OPTIONS = {
  skipDataValidation: true,
  socketOptions: DEFAULT_CLIENT_OPTIONS,
  versionCacheTimoutInSeconds: 600
};
var JsonRpcProvider = class extends Provider {
  constructor(endpoint = "DEVNET" /* DEVNET */, options = DEFAULT_OPTIONS) {
    super();
    this.options = options;
    if (Object.values(Network).includes(endpoint)) {
      this.endpoints = NETWORK_TO_API[endpoint];
    } else {
      this.endpoints = {
        fullNode: endpoint,
        faucet: options.faucetURL
      };
    }
    const opts = { ...DEFAULT_OPTIONS, ...options };
    this.client = new JsonRpcClient(this.endpoints.fullNode);
    this.wsClient = new WebsocketClient(
      this.endpoints.fullNode,
      opts.skipDataValidation,
      opts.socketOptions
    );
  }
  endpoints;
  client;
  wsClient;
  rpcApiVersion;
  cacheExpiry;
  async getRpcApiVersion() {
    if (this.rpcApiVersion && this.cacheExpiry && this.cacheExpiry <= Date.now()) {
      return this.rpcApiVersion;
    }
    try {
      const resp = await this.client.requestWithType(
        "rpc.discover",
        [],
        (0, import_superstruct9.any)(),
        this.options.skipDataValidation
      );
      this.rpcApiVersion = parseVersionFromString(resp.info.version);
      this.cacheExpiry = Date.now() + (this.options.versionCacheTimoutInSeconds ?? 0);
      return this.rpcApiVersion;
    } catch (err) {
      console.warn("Error fetching version number of the RPC API", err);
    }
    return void 0;
  }
  async getCoinMetadata(coinType) {
    try {
      const version = await this.getRpcApiVersion();
      if (version && (0, import_femver2.lt)(versionToString(version), "0.17.0")) {
        const [packageId, module2, symbol] = coinType.split("::");
        if (normalizeSuiAddress(packageId) !== normalizeSuiAddress("0x2") || module2 != "sui" || symbol !== "SUI") {
          throw new Error(
            "only SUI coin is supported in getCoinMetadata for RPC version priort to 0.17.0."
          );
        }
        return {
          decimals: 9,
          name: "Sui",
          symbol: "SUI",
          description: "",
          iconUrl: null,
          id: null
        };
      }
      return await this.client.requestWithType(
        "sui_getCoinMetadata",
        [coinType],
        CoinMetadataStruct,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(`Error fetching CoinMetadata for ${coinType}: ${err}`);
    }
  }
  async requestSuiFromFaucet(recipient, httpHeaders) {
    if (!this.endpoints.faucet) {
      throw new Error("Faucet URL is not specified");
    }
    return requestSuiFromFaucet(this.endpoints.faucet, recipient, httpHeaders);
  }
  async getMoveFunctionArgTypes(packageId, moduleName, functionName) {
    try {
      return await this.client.requestWithType(
        "sui_getMoveFunctionArgTypes",
        [packageId, moduleName, functionName],
        SuiMoveFunctionArgTypes,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(
        `Error fetching Move function arg types with package object ID: ${packageId}, module name: ${moduleName}, function name: ${functionName}`
      );
    }
  }
  async getNormalizedMoveModulesByPackage(packageId) {
    try {
      return await this.client.requestWithType(
        "sui_getNormalizedMoveModulesByPackage",
        [packageId],
        SuiMoveNormalizedModules,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(
        `Error fetching package: ${err} for package ${packageId}`
      );
    }
  }
  async getNormalizedMoveModule(packageId, moduleName) {
    try {
      return await this.client.requestWithType(
        "sui_getNormalizedMoveModule",
        [packageId, moduleName],
        SuiMoveNormalizedModule,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(
        `Error fetching module: ${err} for package ${packageId}, module ${moduleName}`
      );
    }
  }
  async getNormalizedMoveFunction(packageId, moduleName, functionName) {
    try {
      return await this.client.requestWithType(
        "sui_getNormalizedMoveFunction",
        [packageId, moduleName, functionName],
        SuiMoveNormalizedFunction,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(
        `Error fetching function: ${err} for package ${packageId}, module ${moduleName} and function ${functionName}`
      );
    }
  }
  async getNormalizedMoveStruct(packageId, moduleName, structName) {
    try {
      return await this.client.requestWithType(
        "sui_getNormalizedMoveStruct",
        [packageId, moduleName, structName],
        SuiMoveNormalizedStruct,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(
        `Error fetching struct: ${err} for package ${packageId}, module ${moduleName} and struct ${structName}`
      );
    }
  }
  async getObjectsOwnedByAddress(address) {
    try {
      if (!address || !isValidSuiAddress(normalizeSuiAddress(address))) {
        throw new Error("Invalid Sui address");
      }
      return await this.client.requestWithType(
        "sui_getObjectsOwnedByAddress",
        [address],
        GetOwnedObjectsResponse,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(
        `Error fetching owned object: ${err} for address ${address}`
      );
    }
  }
  async getGasObjectsOwnedByAddress(address) {
    const objects = await this.getObjectsOwnedByAddress(address);
    return objects.filter((obj) => Coin.isSUI(obj));
  }
  async getCoinBalancesOwnedByAddress(address, typeArg) {
    const objects = await this.getObjectsOwnedByAddress(address);
    const coinIds = objects.filter(
      (obj) => Coin.isCoin(obj) && (typeArg === void 0 || typeArg === Coin.getCoinTypeArg(obj))
    ).map((c) => c.objectId);
    return await this.getObjectBatch(coinIds);
  }
  async selectCoinsWithBalanceGreaterThanOrEqual(address, amount, typeArg = SUI_TYPE_ARG, exclude = []) {
    const coins = await this.getCoinBalancesOwnedByAddress(address, typeArg);
    return await Coin.selectCoinsWithBalanceGreaterThanOrEqual(
      coins,
      amount,
      exclude
    );
  }
  async selectCoinSetWithCombinedBalanceGreaterThanOrEqual(address, amount, typeArg = SUI_TYPE_ARG, exclude = []) {
    const coins = await this.getCoinBalancesOwnedByAddress(address, typeArg);
    return await Coin.selectCoinSetWithCombinedBalanceGreaterThanOrEqual(
      coins,
      amount,
      exclude
    );
  }
  async getObjectsOwnedByObject(objectId) {
    try {
      if (!objectId || !isValidSuiObjectId(normalizeSuiObjectId(objectId))) {
        throw new Error("Invalid Sui Object id");
      }
      return await this.client.requestWithType(
        "sui_getObjectsOwnedByObject",
        [objectId],
        GetOwnedObjectsResponse,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(
        `Error fetching owned object: ${err} for objectId ${objectId}`
      );
    }
  }
  async getObject(objectId) {
    try {
      if (!objectId || !isValidSuiObjectId(normalizeSuiObjectId(objectId))) {
        throw new Error("Invalid Sui Object id");
      }
      return await this.client.requestWithType(
        "sui_getObject",
        [objectId],
        GetObjectDataResponse,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(`Error fetching object info: ${err} for id ${objectId}`);
    }
  }
  async getObjectRef(objectId) {
    const resp = await this.getObject(objectId);
    return getObjectReference(resp);
  }
  async getObjectBatch(objectIds) {
    try {
      const requests = objectIds.map((id) => {
        if (!id || !isValidSuiObjectId(normalizeSuiObjectId(id))) {
          throw new Error(`Invalid Sui Object id ${id}`);
        }
        return {
          method: "sui_getObject",
          args: [id]
        };
      });
      return await this.client.batchRequestWithType(
        requests,
        GetObjectDataResponse,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(
        `Error fetching object info: ${err} for ids [${objectIds}]`
      );
    }
  }
  async getTransactions(query, cursor = null, limit = null, order = "descending") {
    try {
      return await this.client.requestWithType(
        "sui_getTransactions",
        [query, cursor, limit, order === "descending"],
        PaginatedTransactionDigests,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(
        `Error getting transactions for query: ${err} for query ${query}`
      );
    }
  }
  async getTransactionsForObject(objectID, descendingOrder = true) {
    const requests = [
      {
        method: "sui_getTransactions",
        args: [{ InputObject: objectID }, null, null, descendingOrder]
      },
      {
        method: "sui_getTransactions",
        args: [{ MutatedObject: objectID }, null, null, descendingOrder]
      }
    ];
    try {
      if (!objectID || !isValidSuiObjectId(normalizeSuiObjectId(objectID))) {
        throw new Error("Invalid Sui Object id");
      }
      const results = await this.client.batchRequestWithType(
        requests,
        PaginatedTransactionDigests,
        this.options.skipDataValidation
      );
      return [...results[0].data, ...results[1].data];
    } catch (err) {
      throw new Error(
        `Error getting transactions for object: ${err} for id ${objectID}`
      );
    }
  }
  async getTransactionsForAddress(addressID, descendingOrder = true) {
    const requests = [
      {
        method: "sui_getTransactions",
        args: [{ ToAddress: addressID }, null, null, descendingOrder]
      },
      {
        method: "sui_getTransactions",
        args: [{ FromAddress: addressID }, null, null, descendingOrder]
      }
    ];
    try {
      if (!addressID || !isValidSuiAddress(normalizeSuiAddress(addressID))) {
        throw new Error("Invalid Sui address");
      }
      const results = await this.client.batchRequestWithType(
        requests,
        PaginatedTransactionDigests,
        this.options.skipDataValidation
      );
      return [...results[0].data, ...results[1].data];
    } catch (err) {
      throw new Error(
        `Error getting transactions for address: ${err} for id ${addressID}`
      );
    }
  }
  async getTransactionWithEffects(digest) {
    try {
      if (!isValidTransactionDigest(digest, "base58")) {
        throw new Error("Invalid Transaction digest");
      }
      const resp = await this.client.requestWithType(
        "sui_getTransaction",
        [digest],
        SuiTransactionResponse,
        this.options.skipDataValidation
      );
      return resp;
    } catch (err) {
      throw new Error(
        `Error getting transaction with effects: ${err} for digest ${digest}`
      );
    }
  }
  async getTransactionWithEffectsBatch(digests) {
    try {
      const requests = digests.map((d) => {
        if (!isValidTransactionDigest(d, "base58")) {
          throw new Error(`Invalid Transaction digest ${d}`);
        }
        return {
          method: "sui_getTransaction",
          args: [d]
        };
      });
      return await this.client.batchRequestWithType(
        requests,
        SuiTransactionResponse,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(
        `Error getting transaction effects: ${err} for digests [${digests}]`
      );
    }
  }
  async executeTransaction(txnBytes, signatureScheme, signature, pubkey, requestType = "WaitForEffectsCert") {
    try {
      let resp;
      let version = await this.getRpcApiVersion();
      if (version?.major === 0 && version?.minor < 18) {
        resp = await this.client.requestWithType(
          "sui_executeTransaction",
          [
            txnBytes.toString(),
            signatureScheme,
            signature.toString(),
            pubkey.toString(),
            requestType
          ],
          SuiExecuteTransactionResponse,
          this.options.skipDataValidation
        );
      } else {
        const serialized_sig = new Uint8Array(
          1 + signature.getLength() + pubkey.toBytes().length
        );
        serialized_sig.set([SIGNATURE_SCHEME_TO_FLAG[signatureScheme]]);
        serialized_sig.set(signature.getData(), 1);
        serialized_sig.set(pubkey.toBytes(), 1 + signature.getLength());
        resp = await this.client.requestWithType(
          "sui_executeTransactionSerializedSig",
          [
            txnBytes.toString(),
            new Base64DataBuffer(serialized_sig).toString(),
            requestType
          ],
          SuiExecuteTransactionResponse,
          this.options.skipDataValidation
        );
      }
      return resp;
    } catch (err) {
      throw new Error(`Error executing transaction with request type: ${err}`);
    }
  }
  async getTotalTransactionNumber() {
    try {
      const resp = await this.client.requestWithType(
        "sui_getTotalTransactionNumber",
        [],
        (0, import_superstruct9.number)(),
        this.options.skipDataValidation
      );
      return resp;
    } catch (err) {
      throw new Error(`Error fetching total transaction number: ${err}`);
    }
  }
  async getTransactionDigestsInRange(start, end) {
    try {
      return await this.client.requestWithType(
        "sui_getTransactionsInRange",
        [start, end],
        GetTxnDigestsResponse,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(
        `Error fetching transaction digests in range: ${err} for range ${start}-${end}`
      );
    }
  }
  async getTransactionAuthSigners(digest) {
    try {
      return await this.client.requestWithType(
        "sui_getTransactionAuthSigners",
        [digest],
        SuiTransactionAuthSignersResponse,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(`Error fetching transaction auth signers: ${err}`);
    }
  }
  async getEvents(query, cursor, limit, order = "descending") {
    try {
      return await this.client.requestWithType(
        "sui_getEvents",
        [query, cursor, limit, order === "descending"],
        PaginatedEvents,
        this.options.skipDataValidation
      );
    } catch (err) {
      throw new Error(
        `Error getting events for query: ${err} for query ${query}`
      );
    }
  }
  async subscribeEvent(filter, onMessage) {
    return this.wsClient.subscribeEvent(filter, onMessage);
  }
  async unsubscribeEvent(id) {
    return this.wsClient.unsubscribeEvent(id);
  }
  async devInspectTransaction(txBytes) {
    try {
      const resp = await this.client.requestWithType(
        "sui_devInspectTransaction",
        [txBytes],
        DevInspectResults,
        this.options.skipDataValidation
      );
      return resp;
    } catch (err) {
      throw new Error(
        `Error dev inspect transaction with request type: ${err}`
      );
    }
  }
  async devInspectMoveCall(sender, moveCall) {
    try {
      const resp = await this.client.requestWithType(
        "sui_devInspectMoveCall",
        [
          sender,
          moveCall.packageObjectId,
          moveCall.module,
          moveCall.function,
          moveCall.typeArguments,
          moveCall.arguments
        ],
        DevInspectResults,
        this.options.skipDataValidation
      );
      return resp;
    } catch (err) {
      throw new Error(`Error dev inspect move call with request type: ${err}`);
    }
  }
  async dryRunTransaction(txBytes) {
    try {
      const resp = await this.client.requestWithType(
        "sui_dryRunTransaction",
        [txBytes],
        TransactionEffects,
        this.options.skipDataValidation
      );
      return resp;
    } catch (err) {
      throw new Error(
        `Error dry running transaction with request type: ${err}`
      );
    }
  }
};

// src/providers/json-rpc-provider-with-cache.ts
var import_superstruct10 = require("superstruct");
var JsonRpcProviderWithCache = class extends JsonRpcProvider {
  objectRefs = /* @__PURE__ */ new Map();
  async getObjectsOwnedByAddress(address) {
    const resp = await super.getObjectsOwnedByAddress(address);
    resp.forEach((r) => this.updateObjectRefCache(r));
    return resp;
  }
  async getObjectsOwnedByObject(objectId) {
    const resp = await super.getObjectsOwnedByObject(objectId);
    resp.forEach((r) => this.updateObjectRefCache(r));
    return resp;
  }
  async getObject(objectId) {
    const resp = await super.getObject(objectId);
    this.updateObjectRefCache(resp);
    return resp;
  }
  async getObjectRef(objectId, skipCache = false) {
    const normalizedId = normalizeSuiObjectId(objectId);
    if (!skipCache && this.objectRefs.has(normalizedId)) {
      return this.objectRefs.get(normalizedId);
    }
    const ref = await super.getObjectRef(objectId);
    this.updateObjectRefCache(ref);
    return ref;
  }
  async getObjectBatch(objectIds) {
    const resp = await super.getObjectBatch(objectIds);
    resp.forEach((r) => this.updateObjectRefCache(r));
    return resp;
  }
  async executeTransaction(txnBytes, signatureScheme, signature, pubkey, requestType = "WaitForEffectsCert") {
    if (requestType !== "WaitForEffectsCert") {
      console.warn(
        `It's not recommended to use JsonRpcProviderWithCache with the request type other than 'WaitForEffectsCert' for executeTransaction. Using the '${requestType}' may result in stale cache and a failure in subsequent transactions.`
      );
    }
    const resp = await super.executeTransaction(
      txnBytes,
      signatureScheme,
      signature,
      pubkey,
      requestType
    );
    const effects = getTransactionEffects(resp);
    if (effects != null) {
      this.updateObjectRefCacheFromTransactionEffects(effects);
    }
    return resp;
  }
  updateObjectRefCache(newData) {
    if (newData == null) {
      return;
    }
    const ref = (0, import_superstruct10.is)(newData, SuiObjectRef) ? newData : getObjectReference(newData);
    if (ref != null) {
      this.objectRefs.set(ref.objectId, ref);
    }
  }
  updateObjectRefCacheFromTransactionEffects(effects) {
    effects.created?.forEach((r) => this.updateObjectRefCache(r.reference));
    effects.mutated?.forEach((r) => this.updateObjectRefCache(r.reference));
    effects.unwrapped?.forEach((r) => this.updateObjectRefCache(r.reference));
    effects.wrapped?.forEach((r) => this.updateObjectRefCache(r));
    effects.deleted?.forEach((r) => this.objectRefs.delete(r.objectId));
  }
};

// src/serialization/hex.ts
var import_bcs11 = require("@mysten/bcs");
var HexDataBuffer = class {
  _data;
  constructor(data) {
    if (typeof data === "string") {
      this._data = (0, import_bcs11.fromHEX)(data);
    } else {
      this._data = data;
    }
  }
  getData() {
    return this._data;
  }
  getLength() {
    return this._data.length;
  }
  toString() {
    return (0, import_bcs11.toHEX)(this._data);
  }
};

// src/signers/txn-data-serializers/rpc-txn-data-serializer.ts
var RpcTxnDataSerializer = class {
  constructor(endpoint, skipDataValidation = false) {
    this.skipDataValidation = skipDataValidation;
    this.client = new JsonRpcClient(endpoint);
  }
  client;
  async serializeToBytes(signerAddress, unserializedTxn, mode = "Commit") {
    let endpoint;
    let args;
    switch (unserializedTxn.kind) {
      case "transferObject":
        const t = unserializedTxn.data;
        endpoint = "sui_transferObject";
        args = [
          signerAddress,
          t.objectId,
          t.gasPayment,
          t.gasBudget,
          t.recipient
        ];
        break;
      case "transferSui":
        const transferSui = unserializedTxn.data;
        endpoint = "sui_transferSui";
        args = [
          signerAddress,
          transferSui.suiObjectId,
          transferSui.gasBudget,
          transferSui.recipient,
          transferSui.amount
        ];
        break;
      case "pay":
        const pay = unserializedTxn.data;
        endpoint = "sui_pay";
        args = [
          signerAddress,
          pay.inputCoins,
          pay.recipients,
          pay.amounts,
          pay.gasPayment,
          pay.gasBudget
        ];
        break;
      case "paySui":
        const paySui = unserializedTxn.data;
        endpoint = "sui_paySui";
        args = [
          signerAddress,
          paySui.inputCoins,
          paySui.recipients,
          paySui.amounts,
          paySui.gasBudget
        ];
        break;
      case "payAllSui":
        const payAllSui = unserializedTxn.data;
        endpoint = "sui_payAllSui";
        args = [
          signerAddress,
          payAllSui.inputCoins,
          payAllSui.recipient,
          payAllSui.gasBudget
        ];
        break;
      case "moveCall":
        const moveCall = unserializedTxn.data;
        endpoint = "sui_moveCall";
        args = [
          signerAddress,
          moveCall.packageObjectId,
          moveCall.module,
          moveCall.function,
          moveCall.typeArguments,
          moveCall.arguments,
          moveCall.gasPayment,
          moveCall.gasBudget,
          mode
        ];
        break;
      case "mergeCoin":
        const mergeCoin = unserializedTxn.data;
        endpoint = "sui_mergeCoins";
        args = [
          signerAddress,
          mergeCoin.primaryCoin,
          mergeCoin.coinToMerge,
          mergeCoin.gasPayment,
          mergeCoin.gasBudget
        ];
        break;
      case "splitCoin":
        const splitCoin = unserializedTxn.data;
        endpoint = "sui_splitCoin";
        args = [
          signerAddress,
          splitCoin.coinObjectId,
          splitCoin.splitAmounts,
          splitCoin.gasPayment,
          splitCoin.gasBudget
        ];
        break;
      case "publish":
        const publish = unserializedTxn.data;
        endpoint = "sui_publish";
        args = [
          signerAddress,
          publish.compiledModules,
          publish.gasPayment,
          publish.gasBudget
        ];
        break;
    }
    try {
      const resp = await this.client.requestWithType(
        endpoint,
        args,
        TransactionBytes,
        this.skipDataValidation
      );
      return new Base64DataBuffer(resp.txBytes);
    } catch (e) {
      throw new Error(
        `Encountered error when calling RpcTxnDataSerialize for a ${unserializedTxn.kind} transaction for address ${signerAddress} for transaction ${JSON.stringify(
          unserializedTxn,
          null,
          2
        )}: ${e}`
      );
    }
  }
};

// src/signers/txn-data-serializers/call-arg-serializer.ts
var MOVE_CALL_SER_ERROR = "Move call argument serialization error:";
var STD_ASCII_MODULE_NAME = "ascii";
var STD_ASCII_STRUCT_NAME = "String";
var STD_UTF8_MODULE_NAME = "string";
var STD_UTF8_STRUCT_NAME = "String";
var RESOLVED_SUI_ID = {
  address: SUI_FRAMEWORK_ADDRESS,
  module: OBJECT_MODULE_NAME,
  name: ID_STRUCT_NAME
};
var RESOLVED_ASCII_STR = {
  address: MOVE_STDLIB_ADDRESS,
  module: STD_ASCII_MODULE_NAME,
  name: STD_ASCII_STRUCT_NAME
};
var RESOLVED_UTF8_STR = {
  address: MOVE_STDLIB_ADDRESS,
  module: STD_UTF8_MODULE_NAME,
  name: STD_UTF8_STRUCT_NAME
};
var isTypeFunc = (type) => (t) => typeof t === type;
var isSameStruct = (a, b) => a.address === b.address && a.module === b.module && a.name === b.name;
var CallArgSerializer = class {
  constructor(provider) {
    this.provider = provider;
  }
  async extractObjectIds(txn) {
    const args = await this.serializeMoveCallArguments(txn);
    return args.map(
      (arg) => "ObjVec" in arg ? Array.from(arg.ObjVec).map((a) => ({
        Object: a
      })) : arg
    ).flat().map((arg) => {
      if ("Object" in arg) {
        const objectArg = arg.Object;
        if ("Shared" in objectArg) {
          return objectArg.Shared.objectId;
        } else {
          return objectArg.ImmOrOwned.objectId;
        }
      }
      return null;
    }).filter((a) => a != null);
  }
  async serializeMoveCallArguments(txn) {
    const userParams = await this.extractNormalizedFunctionParams(
      txn.packageObjectId,
      txn.module,
      txn.function
    );
    if (userParams.length !== txn.arguments.length) {
      throw new Error(
        `${MOVE_CALL_SER_ERROR} expect ${userParams.length} arguments, received ${txn.arguments.length} arguments`
      );
    }
    return Promise.all(
      userParams.map(
        async (param, i) => this.newCallArg(param, txn.arguments[i])
      )
    );
  }
  async deserializeCallArgs(txn) {
    const userParams = await this.extractNormalizedFunctionParams(
      txn.Call.package.objectId,
      txn.Call.module,
      txn.Call.function
    );
    return Promise.all(
      userParams.map(
        async (param, i) => this.deserializeCallArg(param, txn.Call.arguments[i])
      )
    );
  }
  async extractNormalizedFunctionParams(packageId, module2, functionName) {
    const normalized = await this.provider.getNormalizedMoveFunction(
      normalizeSuiObjectId(packageId),
      module2,
      functionName
    );
    const params = normalized.parameters;
    const hasTxContext = params.length > 0 && this.isTxContext(params.at(-1));
    return hasTxContext ? params.slice(0, params.length - 1) : params;
  }
  async newObjectArg(objectId) {
    const object8 = await this.provider.getObject(objectId);
    const initialSharedVersion = getSharedObjectInitialVersion(object8);
    if (initialSharedVersion) {
      return { Shared: { objectId, initialSharedVersion } };
    }
    return { ImmOrOwned: getObjectReference(object8) };
  }
  async newCallArg(expectedType, argVal) {
    const serType = this.getPureSerializationType(expectedType, argVal);
    if (serType !== void 0) {
      return {
        Pure: bcs.ser(serType, argVal).toBytes()
      };
    }
    const structVal = extractStructTag(expectedType);
    if (structVal != null || typeof expectedType === "object" && "TypeParameter" in expectedType) {
      if (typeof argVal !== "string") {
        throw new Error(
          `${MOVE_CALL_SER_ERROR} expect the argument to be an object id string, got ${JSON.stringify(
            argVal,
            null,
            2
          )}`
        );
      }
      return { Object: await this.newObjectArg(argVal) };
    }
    if (typeof expectedType === "object" && "Vector" in expectedType && typeof expectedType.Vector === "object" && "Struct" in expectedType.Vector) {
      if (!Array.isArray(argVal)) {
        throw new Error(
          `Expect ${argVal} to be a array, received ${typeof argVal}`
        );
      }
      return {
        ObjVec: await Promise.all(
          argVal.map((arg) => this.newObjectArg(arg))
        )
      };
    }
    throw new Error(
      `Unknown call arg type ${JSON.stringify(expectedType, null, 2)} for value ${JSON.stringify(argVal, null, 2)}`
    );
  }
  extractIdFromObjectArg(arg) {
    if ("ImmOrOwned" in arg) {
      return arg.ImmOrOwned.objectId;
    }
    return arg.Shared.objectId;
  }
  async deserializeCallArg(expectedType, argVal) {
    if ("Object" in argVal) {
      return this.extractIdFromObjectArg(argVal.Object);
    } else if ("ObjVec" in argVal) {
      return Array.from(argVal.ObjVec).map(
        (o) => this.extractIdFromObjectArg(o)
      );
    }
    const serType = this.getPureSerializationType(expectedType, void 0);
    return bcs.de(serType, Uint8Array.from(argVal.Pure));
  }
  getPureSerializationType(normalizedType, argVal) {
    const allowedTypes = [
      "Address",
      "Bool",
      "U8",
      "U16",
      "U32",
      "U64",
      "U128",
      "U256"
    ];
    if (typeof normalizedType === "string" && allowedTypes.includes(normalizedType)) {
      if (normalizedType in ["U8", "U16", "U32", "U64", "U128", "U256"]) {
        this.checkArgVal(isTypeFunc("number"), argVal, "number");
      } else if (normalizedType === "Bool") {
        this.checkArgVal(isTypeFunc("boolean"), argVal, "boolean");
      } else if (normalizedType === "Address") {
        this.checkArgVal(
          (t) => typeof t === "string" && isValidSuiAddress(t),
          argVal,
          "valid SUI address"
        );
      }
      return normalizedType.toLowerCase();
    } else if (typeof normalizedType === "string") {
      throw new Error(
        `${MOVE_CALL_SER_ERROR} unknown pure normalized type ${JSON.stringify(
          normalizedType,
          null,
          2
        )}`
      );
    }
    if ("Vector" in normalizedType) {
      if ((argVal === void 0 || typeof argVal === "string") && normalizedType.Vector === "U8") {
        return "string";
      }
      if (argVal !== void 0 && !Array.isArray(argVal)) {
        throw new Error(
          `Expect ${argVal} to be a array, received ${typeof argVal}`
        );
      }
      const innerType = this.getPureSerializationType(
        normalizedType.Vector,
        argVal ? argVal[0] : void 0
      );
      if (innerType === void 0) {
        return void 0;
      }
      return `vector<${innerType}>`;
    }
    if ("Struct" in normalizedType) {
      if (isSameStruct(normalizedType.Struct, RESOLVED_ASCII_STR)) {
        return "string";
      } else if (isSameStruct(normalizedType.Struct, RESOLVED_UTF8_STR)) {
        return "utf8string";
      } else if (isSameStruct(normalizedType.Struct, RESOLVED_SUI_ID)) {
        return "address";
      }
    }
    return void 0;
  }
  checkArgVal(check, argVal, expectedType) {
    if (argVal === void 0) {
      return;
    }
    if (!check(argVal)) {
      throw new Error(
        `Expect ${argVal} to be ${expectedType}, received ${typeof argVal}`
      );
    }
  }
  isTxContext(param) {
    const struct = extractStructTag(param)?.Struct;
    return extractMutableReference(param) != null && struct?.address === "0x2" && struct?.module === "tx_context" && struct?.name === "TxContext";
  }
};

// src/signers/txn-data-serializers/type-tag-serializer.ts
var VECTOR_REGEX = /^vector<(.+)>$/;
var STRUCT_REGEX = /^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;
var TypeTagSerializer = class {
  static parseFromStr(str, normalizeAddress = false) {
    if (str === "address") {
      return { address: null };
    } else if (str === "bool") {
      return { bool: null };
    } else if (str === "u8") {
      return { u8: null };
    } else if (str === "u16") {
      return { u16: null };
    } else if (str === "u32") {
      return { u32: null };
    } else if (str === "u64") {
      return { u64: null };
    } else if (str === "u128") {
      return { u128: null };
    } else if (str === "u256") {
      return { u256: null };
    } else if (str === "signer") {
      return { signer: null };
    }
    const vectorMatch = str.match(VECTOR_REGEX);
    if (vectorMatch) {
      return {
        vector: TypeTagSerializer.parseFromStr(
          vectorMatch[1],
          normalizeAddress
        )
      };
    }
    const structMatch = str.match(STRUCT_REGEX);
    if (structMatch) {
      const address = normalizeAddress ? normalizeSuiAddress(structMatch[1]) : structMatch[1];
      return {
        struct: {
          address,
          module: structMatch[2],
          name: structMatch[3],
          typeParams: structMatch[5] === void 0 ? [] : TypeTagSerializer.parseStructTypeArgs(
            structMatch[5],
            normalizeAddress
          )
        }
      };
    }
    throw new Error(
      `Encountered unexpected token when parsing type args for ${str}`
    );
  }
  static parseStructTypeArgs(str, normalizeAddress = false) {
    const tok = [];
    let word = "";
    let nestedAngleBrackets = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === "<") {
        nestedAngleBrackets++;
      }
      if (char === ">") {
        nestedAngleBrackets--;
      }
      if (nestedAngleBrackets === 0 && char === ",") {
        tok.push(word.trim());
        word = "";
        continue;
      }
      word += char;
    }
    tok.push(word.trim());
    return tok.map(
      (tok2) => TypeTagSerializer.parseFromStr(tok2, normalizeAddress)
    );
  }
  static tagToString(tag) {
    if ("bool" in tag) {
      return "bool";
    }
    if ("u8" in tag) {
      return "u8";
    }
    if ("u16" in tag) {
      return "u16";
    }
    if ("u32" in tag) {
      return "u32";
    }
    if ("u64" in tag) {
      return "u64";
    }
    if ("u128" in tag) {
      return "u128";
    }
    if ("u256" in tag) {
      return "u256";
    }
    if ("address" in tag) {
      return "address";
    }
    if ("signer" in tag) {
      return "signer";
    }
    if ("vector" in tag) {
      return `vector<${TypeTagSerializer.tagToString(tag.vector)}>`;
    }
    if ("struct" in tag) {
      const struct = tag.struct;
      const typeParams = struct.typeParams.map(TypeTagSerializer.tagToString).join(", ");
      return `${struct.address}::${struct.module}::${struct.name}${typeParams ? `<${typeParams}>` : ""}`;
    }
    throw new Error("Invalid TypeTag");
  }
};

// src/signers/txn-data-serializers/local-txn-data-serializer.ts
var LocalTxnDataSerializer = class {
  constructor(provider) {
    this.provider = provider;
  }
  async serializeToBytes(signerAddress, txn, _mode = "Commit") {
    try {
      const version = await this.provider.getRpcApiVersion();
      const useIntentSigning = version != null && version.major >= 0 && version.minor > 18;
      return await this.serializeTransactionData(
        useIntentSigning,
        await this.constructTransactionData(signerAddress, txn)
      );
    } catch (e) {
      throw new Error(
        `Encountered error when serializing a ${txn.kind} transaction for address ${signerAddress} for transaction ${JSON.stringify(
          txn,
          null,
          2
        )}: ${e}`
      );
    }
  }
  async constructTransactionData(signerAddress, unserializedTxn) {
    let tx;
    let gasPayment;
    switch (unserializedTxn.kind) {
      case "transferObject":
        const t = unserializedTxn.data;
        const objectRef = await this.provider.getObjectRef(t.objectId);
        tx = {
          TransferObject: {
            recipient: t.recipient,
            object_ref: objectRef
          }
        };
        gasPayment = t.gasPayment;
        break;
      case "transferSui":
        const transferSui = unserializedTxn.data;
        tx = {
          TransferSui: {
            recipient: transferSui.recipient,
            amount: transferSui.amount == null ? { None: null } : { Some: transferSui.amount }
          }
        };
        gasPayment = transferSui.suiObjectId;
        break;
      case "pay":
        const pay = unserializedTxn.data;
        const inputCoinRefs = (await Promise.all(
          pay.inputCoins.map((coin) => this.provider.getObjectRef(coin))
        )).map((ref) => ref);
        tx = {
          Pay: {
            coins: inputCoinRefs,
            recipients: pay.recipients,
            amounts: pay.amounts
          }
        };
        gasPayment = pay.gasPayment;
        break;
      case "paySui":
        const paySui = unserializedTxn.data;
        const paySuiInputCoinRefs = (await Promise.all(
          paySui.inputCoins.map((coin) => this.provider.getObjectRef(coin))
        )).map((ref) => ref);
        tx = {
          PaySui: {
            coins: paySuiInputCoinRefs,
            recipients: paySui.recipients,
            amounts: paySui.amounts
          }
        };
        gasPayment = paySui.inputCoins[0];
        break;
      case "payAllSui":
        const payAllSui = unserializedTxn.data;
        const payAllSuiInputCoinRefs = (await Promise.all(
          payAllSui.inputCoins.map((coin) => this.provider.getObjectRef(coin))
        )).map((ref) => ref);
        tx = {
          PayAllSui: {
            coins: payAllSuiInputCoinRefs,
            recipient: payAllSui.recipient
          }
        };
        gasPayment = payAllSui.inputCoins[0];
        break;
      case "moveCall":
        const moveCall = unserializedTxn.data;
        const pkg = await this.provider.getObjectRef(moveCall.packageObjectId);
        tx = {
          Call: {
            package: pkg,
            module: moveCall.module,
            function: moveCall.function,
            typeArguments: moveCall.typeArguments.map(
              (a) => typeof a === "string" ? TypeTagSerializer.parseFromStr(a, true) : a
            ),
            arguments: await new CallArgSerializer(
              this.provider
            ).serializeMoveCallArguments(moveCall)
          }
        };
        gasPayment = moveCall.gasPayment;
        break;
      case "mergeCoin":
        const mergeCoin = unserializedTxn.data;
        return this.constructTransactionData(signerAddress, {
          kind: "moveCall",
          data: {
            packageObjectId: SUI_FRAMEWORK_ADDRESS,
            module: PAY_MODULE_NAME,
            function: PAY_JOIN_COIN_FUNC_NAME,
            typeArguments: [await this.getCoinStructTag(mergeCoin.coinToMerge)],
            arguments: [mergeCoin.primaryCoin, mergeCoin.coinToMerge],
            gasPayment: mergeCoin.gasPayment,
            gasBudget: mergeCoin.gasBudget
          }
        });
      case "splitCoin":
        const splitCoin = unserializedTxn.data;
        return this.constructTransactionData(signerAddress, {
          kind: "moveCall",
          data: {
            packageObjectId: SUI_FRAMEWORK_ADDRESS,
            module: PAY_MODULE_NAME,
            function: PAY_SPLIT_COIN_VEC_FUNC_NAME,
            typeArguments: [
              await this.getCoinStructTag(splitCoin.coinObjectId)
            ],
            arguments: [splitCoin.coinObjectId, splitCoin.splitAmounts],
            gasPayment: splitCoin.gasPayment,
            gasBudget: splitCoin.gasBudget
          }
        });
      case "publish":
        const publish = unserializedTxn.data;
        tx = {
          Publish: {
            modules: publish.compiledModules
          }
        };
        gasPayment = publish.gasPayment;
        break;
    }
    return this.constructTransactionDataHelper(
      tx,
      unserializedTxn,
      gasPayment,
      signerAddress
    );
  }
  async selectGasPaymentForTransaction(txn, signerAddress, exclude = []) {
    if (txn.kind === "bytes") {
      return void 0;
    }
    const coins = await this.provider.selectCoinsWithBalanceGreaterThanOrEqual(
      signerAddress,
      BigInt(txn.data.gasBudget),
      SUI_TYPE_ARG,
      exclude.concat(await this.extractObjectIds(txn))
    );
    return coins.length > 0 ? Coin.getID(coins[0]) : void 0;
  }
  async extractObjectIds(txn) {
    const ret = await this.extractInputObjectIds(txn);
    if ("gasPayment" in txn.data && txn.data["gasPayment"]) {
      ret.push(txn.data["gasPayment"]);
    }
    return ret;
  }
  async extractInputObjectIds(txn) {
    switch (txn.kind) {
      case "moveCall":
        return await new CallArgSerializer(this.provider).extractObjectIds(
          txn.data
        );
      case "transferSui":
        return [txn.data.suiObjectId];
      case "transferObject":
        return [txn.data.objectId];
      case "mergeCoin":
        return [txn.data.primaryCoin, txn.data.coinToMerge];
      case "splitCoin":
        return [txn.data.coinObjectId];
      case "pay":
        return txn.data.inputCoins;
    }
    return [];
  }
  async getCoinStructTag(coinId) {
    const coin = await this.provider.getObject(coinId);
    const coinTypeArg = Coin.getCoinTypeArg(coin);
    if (coinTypeArg == null) {
      throw new Error(`Object ${coinId} is not a valid coin type`);
    }
    return { struct: Coin.getCoinStructTag(coinTypeArg) };
  }
  async constructTransactionDataHelper(tx, originalTx, gasObjectId, signerAddress) {
    if (gasObjectId === void 0) {
      gasObjectId = await this.selectGasPaymentForTransaction(
        originalTx,
        signerAddress
      );
      if (gasObjectId === void 0) {
        throw new Error(
          `Unable to select a gas object with balance greater than or equal to ${originalTx.data.gasBudget}`
        );
      }
    }
    const gasPayment = await this.provider.getObjectRef(gasObjectId);
    return {
      kind: {
        Single: tx
      },
      gasPayment,
      gasPrice: 1,
      gasBudget: originalTx.data.gasBudget,
      sender: signerAddress
    };
  }
  async serializeTransactionData(useIntentSigning, tx, size = 8192) {
    const dataBytes = bcs.ser("TransactionData", tx, size).toBytes();
    if (useIntentSigning) {
      return new Base64DataBuffer(dataBytes);
    } else {
      const serialized = new Uint8Array(
        TRANSACTION_DATA_TYPE_TAG.length + dataBytes.length
      );
      serialized.set(TRANSACTION_DATA_TYPE_TAG);
      serialized.set(dataBytes, TRANSACTION_DATA_TYPE_TAG.length);
      return new Base64DataBuffer(serialized);
    }
  }
  async deserializeTransactionBytesToSignableTransaction(useIntentSigning, bytes) {
    return this.transformTransactionDataToSignableTransaction(
      deserializeTransactionBytesToTransactionData(useIntentSigning, bytes)
    );
  }
  async transformTransactionDataToSignableTransaction(tx) {
    if ("Single" in tx.kind) {
      return this.transformTransactionToSignableTransaction(
        tx.kind.Single,
        tx.gasBudget,
        tx.gasPayment
      );
    }
    return Promise.all(
      tx.kind.Batch.map(
        (t) => this.transformTransactionToSignableTransaction(
          t,
          tx.gasBudget,
          tx.gasPayment
        )
      )
    );
  }
  async transformTransactionToSignableTransaction(tx, gasBudget, gasPayment) {
    if ("Pay" in tx) {
      return {
        kind: "pay",
        data: {
          inputCoins: tx.Pay.coins.map((c) => c.objectId),
          recipients: tx.Pay.recipients,
          amounts: tx.Pay.amounts,
          gasPayment: gasPayment?.objectId,
          gasBudget
        }
      };
    } else if ("Call" in tx) {
      return {
        kind: "moveCall",
        data: {
          packageObjectId: tx.Call.package.objectId,
          module: tx.Call.module,
          function: tx.Call.function,
          typeArguments: tx.Call.typeArguments,
          arguments: await new CallArgSerializer(
            this.provider
          ).deserializeCallArgs(tx),
          gasPayment: gasPayment?.objectId,
          gasBudget
        }
      };
    } else if ("TransferObject" in tx) {
      return {
        kind: "transferObject",
        data: {
          objectId: tx.TransferObject.object_ref.objectId,
          recipient: tx.TransferObject.recipient,
          gasPayment: gasPayment?.objectId,
          gasBudget
        }
      };
    } else if ("TransferSui" in tx) {
      return {
        kind: "transferSui",
        data: {
          suiObjectId: gasPayment.objectId,
          recipient: tx.TransferSui.recipient,
          amount: "Some" in tx.TransferSui.amount ? tx.TransferSui.amount.Some : null,
          gasBudget
        }
      };
    } else if ("Publish" in tx) {
      return {
        kind: "publish",
        data: {
          compiledModules: tx.Publish.modules,
          gasPayment: gasPayment?.objectId,
          gasBudget
        }
      };
    }
    throw new Error(`Unsupported transaction type ${tx}`);
  }
};

// src/providers/void-provider.ts
var VoidProvider = class extends Provider {
  async getRpcApiVersion() {
    throw this.newError("getRpcApiVersion");
  }
  getCoinMetadata(_coinType) {
    throw new Error("getCoinMetadata");
  }
  async requestSuiFromFaucet(_recipient, _httpHeaders) {
    throw this.newError("requestSuiFromFaucet");
  }
  async getObjectsOwnedByAddress(_address) {
    throw this.newError("getObjectsOwnedByAddress");
  }
  async getGasObjectsOwnedByAddress(_address) {
    throw this.newError("getGasObjectsOwnedByAddress");
  }
  async getCoinBalancesOwnedByAddress(_address, _typeArg) {
    throw this.newError("getCoinBalancesOwnedByAddress");
  }
  async selectCoinsWithBalanceGreaterThanOrEqual(_address, _amount, _typeArg, _exclude = []) {
    throw this.newError("selectCoinsWithBalanceGreaterThanOrEqual");
  }
  async selectCoinSetWithCombinedBalanceGreaterThanOrEqual(_address, _amount, _typeArg, _exclude) {
    throw this.newError("selectCoinSetWithCombinedBalanceGreaterThanOrEqual");
  }
  async getObject(_objectId) {
    throw this.newError("getObject");
  }
  async getObjectRef(_objectId) {
    throw this.newError("getObjectRef");
  }
  async getTransaction(_digest) {
    throw this.newError("getTransaction");
  }
  async executeTransaction(_txnBytes, _signatureScheme, _signature, _pubkey, _requestType) {
    throw this.newError("executeTransaction with request Type");
  }
  devInspectTransaction(_txBytes) {
    throw this.newError("devInspectTransaction");
  }
  async devInspectMoveCall(_sender, _moveCall) {
    throw this.newError("devInspectMoveCall");
  }
  dryRunTransaction(_txBytes) {
    throw this.newError("dryRunTransaction");
  }
  async getTotalTransactionNumber() {
    throw this.newError("getTotalTransactionNumber");
  }
  async getTransactionDigestsInRange(_start, _end) {
    throw this.newError("getTransactionDigestsInRange");
  }
  async getMoveFunctionArgTypes(_objectId, _moduleName, _functionName) {
    throw this.newError("getMoveFunctionArgTypes");
  }
  async getNormalizedMoveModulesByPackage(_objectId) {
    throw this.newError("getNormalizedMoveModulesByPackage");
  }
  async getNormalizedMoveModule(_objectId, _moduleName) {
    throw this.newError("getNormalizedMoveModule");
  }
  async getNormalizedMoveFunction(_objectId, _moduleName, _functionName) {
    throw this.newError("getNormalizedMoveFunction");
  }
  async getNormalizedMoveStruct(_objectId, _oduleName, _structName) {
    throw this.newError("getNormalizedMoveStruct");
  }
  async syncAccountState(_address) {
    throw this.newError("syncAccountState");
  }
  async subscribeEvent(_filter, _onMessage) {
    throw this.newError("subscribeEvent");
  }
  async unsubscribeEvent(_id) {
    throw this.newError("unsubscribeEvent");
  }
  newError(operation) {
    return new Error(`Please use a valid provider for ${operation}`);
  }
  async getTransactions(_query, _cursor, _limit, _order) {
    throw this.newError("getTransactions");
  }
  async getEvents(_query, _cursor, _limit, _order) {
    throw this.newError("getEvents");
  }
};

// src/signers/signer-with-provider.ts
var INTENT_BYTES = [0, 0, 0];
var SignerWithProvider = class {
  provider;
  serializer;
  async requestSuiFromFaucet(httpHeaders) {
    return this.provider.requestSuiFromFaucet(
      await this.getAddress(),
      httpHeaders
    );
  }
  constructor(provider, serializer) {
    this.provider = provider || new VoidProvider();
    let endpoint = "";
    let skipDataValidation = false;
    if (this.provider instanceof JsonRpcProvider) {
      endpoint = this.provider.endpoints.fullNode;
      skipDataValidation = this.provider.options.skipDataValidation;
    }
    this.serializer = serializer || new RpcTxnDataSerializer(endpoint, skipDataValidation);
  }
  async signAndExecuteTransaction(transaction, requestType = "WaitForLocalExecution") {
    if (transaction instanceof Base64DataBuffer || transaction.kind === "bytes") {
      const txBytes = transaction instanceof Base64DataBuffer ? transaction : new Base64DataBuffer(transaction.data);
      const version = await this.provider.getRpcApiVersion();
      let dataToSign;
      let txBytesToSubmit;
      if (version?.major == 0 && version?.minor < 19) {
        dataToSign = txBytes;
        txBytesToSubmit = txBytes;
      } else {
        const intentMessage = new Uint8Array(
          INTENT_BYTES.length + txBytes.getLength()
        );
        intentMessage.set(INTENT_BYTES);
        intentMessage.set(txBytes.getData(), INTENT_BYTES.length);
        dataToSign = new Base64DataBuffer(intentMessage);
        txBytesToSubmit = txBytes;
      }
      const sig = await this.signData(dataToSign);
      return await this.provider.executeTransaction(
        txBytesToSubmit,
        sig.signatureScheme,
        sig.signature,
        sig.pubKey,
        requestType
      );
    }
    return await this.signAndExecuteTransaction(
      await this.serializer.serializeToBytes(
        await this.getAddress(),
        transaction,
        "Commit"
      ),
      requestType
    );
  }
  async getTransactionDigest(tx) {
    let txBytes;
    if (tx instanceof Base64DataBuffer || tx.kind === "bytes") {
      txBytes = tx instanceof Base64DataBuffer ? tx : new Base64DataBuffer(tx.data);
    } else {
      txBytes = await this.serializer.serializeToBytes(
        await this.getAddress(),
        tx,
        "DevInspect"
      );
    }
    const version = await this.provider.getRpcApiVersion();
    const useIntentSigning = version != null && version.major >= 0 && version.minor > 18;
    let dataToSign;
    if (useIntentSigning) {
      const intentMessage = new Uint8Array(
        INTENT_BYTES.length + txBytes.getLength()
      );
      intentMessage.set(INTENT_BYTES);
      intentMessage.set(txBytes.getData(), INTENT_BYTES.length);
      dataToSign = new Base64DataBuffer(intentMessage);
    } else {
      dataToSign = txBytes;
    }
    const sig = await this.signData(dataToSign);
    const data = deserializeTransactionBytesToTransactionData(
      useIntentSigning,
      txBytes
    );
    return generateTransactionDigest(
      data,
      sig.signatureScheme,
      sig.signature,
      sig.pubKey,
      version?.major == 0 && version?.minor < 18 ? "base64" : "base58",
      version?.major == 0 && version?.minor < 18 ? false : true
    );
  }
  async devInspectTransaction(tx) {
    const address = await this.getAddress();
    let devInspectTxBytes;
    if (typeof tx === "string") {
      devInspectTxBytes = tx;
    } else if (tx instanceof Base64DataBuffer) {
      devInspectTxBytes = tx.toString();
    } else {
      switch (tx.kind) {
        case "bytes":
          devInspectTxBytes = new Base64DataBuffer(tx.data).toString();
          break;
        default:
          devInspectTxBytes = (await this.serializer.serializeToBytes(address, tx, "DevInspect")).toString();
          break;
      }
    }
    return this.provider.devInspectTransaction(devInspectTxBytes);
  }
  async dryRunTransaction(tx) {
    const address = await this.getAddress();
    let dryRunTxBytes;
    if (typeof tx === "string") {
      dryRunTxBytes = tx;
    } else if (tx instanceof Base64DataBuffer) {
      dryRunTxBytes = tx.toString();
    } else {
      switch (tx.kind) {
        case "bytes":
          dryRunTxBytes = new Base64DataBuffer(tx.data).toString();
          break;
        default:
          dryRunTxBytes = (await this.serializer.serializeToBytes(address, tx, "Commit")).toString();
          break;
      }
    }
    return this.provider.dryRunTransaction(dryRunTxBytes);
  }
  async transferObject(transaction, requestType = "WaitForLocalExecution") {
    return this.signAndExecuteTransaction(
      { kind: "transferObject", data: transaction },
      requestType
    );
  }
  async transferSui(transaction, requestType = "WaitForLocalExecution") {
    return this.signAndExecuteTransaction(
      { kind: "transferSui", data: transaction },
      requestType
    );
  }
  async pay(transaction, requestType = "WaitForLocalExecution") {
    return this.signAndExecuteTransaction(
      { kind: "pay", data: transaction },
      requestType
    );
  }
  async paySui(transaction, requestType = "WaitForLocalExecution") {
    return this.signAndExecuteTransaction(
      { kind: "paySui", data: transaction },
      requestType
    );
  }
  async payAllSui(transaction, requestType = "WaitForLocalExecution") {
    return this.signAndExecuteTransaction(
      { kind: "payAllSui", data: transaction },
      requestType
    );
  }
  async mergeCoin(transaction, requestType = "WaitForLocalExecution") {
    return this.signAndExecuteTransaction(
      { kind: "mergeCoin", data: transaction },
      requestType
    );
  }
  async splitCoin(transaction, requestType = "WaitForLocalExecution") {
    return this.signAndExecuteTransaction(
      { kind: "splitCoin", data: transaction },
      requestType
    );
  }
  async executeMoveCall(transaction, requestType = "WaitForLocalExecution") {
    return this.signAndExecuteTransaction(
      { kind: "moveCall", data: transaction },
      requestType
    );
  }
  async publish(transaction, requestType = "WaitForLocalExecution") {
    return this.signAndExecuteTransaction(
      { kind: "publish", data: transaction },
      requestType
    );
  }
  async getGasCostEstimation(...args) {
    const txEffects = await this.dryRunTransaction(...args);
    const gasEstimation = getTotalGasUsed(txEffects);
    if (typeof gasEstimation === "undefined") {
      throw new Error("Failed to estimate the gas cost from transaction");
    }
    return gasEstimation;
  }
};

// src/signers/raw-signer.ts
var RawSigner = class extends SignerWithProvider {
  keypair;
  constructor(keypair, provider, serializer) {
    super(provider, serializer);
    this.keypair = keypair;
  }
  async getAddress() {
    return this.keypair.getPublicKey().toSuiAddress();
  }
  async signData(data) {
    return {
      signatureScheme: this.keypair.getKeyScheme(),
      signature: this.keypair.signData(data),
      pubKey: this.keypair.getPublicKey()
    };
  }
  connect(provider) {
    return new RawSigner(this.keypair, provider);
  }
};

// src/index.ts
var import_superstruct11 = require("superstruct");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthorityQuorumSignInfo,
  AuthoritySignature,
  BalanceChangeType,
  Base64DataBuffer,
  COIN_TYPE_ARG_REGEX,
  CertifiedTransaction,
  CheckpointEvent,
  Coin,
  CoinBalanceChangeEvent,
  CoinMetadataStruct,
  DEFAULT_ED25519_DERIVATION_PATH,
  DEFAULT_SECP256K1_DERIVATION_PATH,
  Delegation,
  DeleteObjectEvent,
  DevInspectResults,
  Ed25519Keypair,
  Ed25519PublicKey,
  EpochChangeEvent,
  EpochId,
  EventId,
  ExecutionStatus,
  ExecutionStatusType,
  GasCostSummary,
  GenericAuthoritySignature,
  GetObjectDataResponse,
  GetOwnedObjectsResponse,
  GetTxnDigestsResponse,
  HexDataBuffer,
  ID_STRUCT_NAME,
  JsonRpcProvider,
  JsonRpcProviderWithCache,
  LocalTxnDataSerializer,
  MIST_PER_SUI,
  MOVE_STDLIB_ADDRESS,
  MoveCall,
  MoveEvent,
  MovePackageContent,
  MutateObjectEvent,
  NETWORK_TO_API,
  Network,
  NewObjectEvent,
  OBJECT_MODULE_NAME,
  ObjectContentFields,
  ObjectId,
  ObjectOwner,
  ObjectStatus,
  ObjectType,
  OwnedObjectRef,
  PAY_JOIN_COIN_FUNC_NAME,
  PAY_MODULE_NAME,
  PAY_SPLIT_COIN_VEC_FUNC_NAME,
  PaginatedEvents,
  PaginatedTransactionDigests,
  Pay,
  PayAllSui,
  PaySui,
  Provider,
  PublishEvent,
  RawSigner,
  RpcTxnDataSerializer,
  SIGNATURE_SCHEME_TO_FLAG,
  SUI_ADDRESS_LENGTH,
  SUI_FRAMEWORK_ADDRESS,
  SUI_TYPE_ARG,
  Secp256k1Keypair,
  Secp256k1PublicKey,
  SequenceNumber,
  SignerWithProvider,
  SubscriptionEvent,
  SubscriptionId,
  SuiAddress,
  SuiCertifiedTransactionEffects,
  SuiChangeEpoch,
  SuiData,
  SuiEvent,
  SuiEventEnvelope,
  SuiExecuteTransactionResponse,
  SuiJsonValue,
  SuiMoveAbilitySet,
  SuiMoveFunctionArgType,
  SuiMoveFunctionArgTypes,
  SuiMoveModuleId,
  SuiMoveNormalizedField,
  SuiMoveNormalizedFunction,
  SuiMoveNormalizedModule,
  SuiMoveNormalizedModules,
  SuiMoveNormalizedStruct,
  SuiMoveNormalizedStructType,
  SuiMoveNormalizedType,
  SuiMoveNormalizedTypeParameterType,
  SuiMoveObject,
  SuiMovePackage,
  SuiMoveStructTypeParameter,
  SuiMoveVisibility,
  SuiObject,
  SuiObjectInfo,
  SuiObjectRef,
  SuiPackage,
  SuiParsedMergeCoinResponse,
  SuiParsedPublishResponse,
  SuiParsedSplitCoinResponse,
  SuiParsedTransactionResponse,
  SuiTransactionAuthSignersResponse,
  SuiTransactionData,
  SuiTransactionKind,
  SuiTransactionResponse,
  SuiTransferSui,
  TRANSACTION_DATA_TYPE_TAG,
  TransactionBytes,
  TransactionDigest,
  TransactionEffects,
  TransferObject,
  TransferObjectEvent,
  TypeTagSerializer,
  UID_STRUCT_NAME,
  assert,
  bcs,
  bytesEqual,
  deserializeTransactionBytesToTransactionData,
  extractMutableReference,
  extractReference,
  extractStructTag,
  fromExportedKeypair,
  generateTransactionDigest,
  getCertifiedTransaction,
  getChangeEpochTransaction,
  getCoinAfterMerge,
  getCoinAfterSplit,
  getCreatedObjects,
  getEvents,
  getExecutionStatus,
  getExecutionStatusError,
  getExecutionStatusGasSummary,
  getExecutionStatusType,
  getMoveCallTransaction,
  getMoveObject,
  getMoveObjectType,
  getMovePackageContent,
  getNewlyCreatedCoinRefsAfterSplit,
  getNewlyCreatedCoinsAfterSplit,
  getObjectDeletedResponse,
  getObjectExistsResponse,
  getObjectFields,
  getObjectId,
  getObjectNotExistsResponse,
  getObjectOwner,
  getObjectPreviousTransactionDigest,
  getObjectReference,
  getObjectType,
  getObjectVersion,
  getParsedMergeCoinResponse,
  getParsedPublishResponse,
  getParsedSplitCoinResponse,
  getPayAllSuiTransaction,
  getPaySuiTransaction,
  getPayTransaction,
  getPublishTransaction,
  getSharedObjectInitialVersion,
  getTimestampFromTransactionResponse,
  getTotalGasUsed,
  getTransactionAuthorityQuorumSignInfo,
  getTransactionData,
  getTransactionDigest,
  getTransactionEffects,
  getTransactionGasBudget,
  getTransactionGasObject,
  getTransactionGasPrice,
  getTransactionKindName,
  getTransactionSender,
  getTransactionSignature,
  getTransactions,
  getTransferObjectTransaction,
  getTransferSuiAmount,
  getTransferSuiTransaction,
  hasPublicTransfer,
  is,
  isImmutableObject,
  isSharedObject,
  isValidBIP32Path,
  isValidHardenedPath,
  isValidSuiAddress,
  isValidSuiObjectId,
  isValidTransactionDigest,
  mnemonicToSeed,
  mnemonicToSeedHex,
  normalizeSuiAddress,
  normalizeSuiObjectId,
  parseVersionFromString,
  versionToString
});
//# sourceMappingURL=index.js.map