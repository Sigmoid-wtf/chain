/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "sigmoidtest.sigmoidtest";

/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}

export interface MsgCreateRequest {
  creator: string;
  senderAddress: string;
  amount: number;
}

export interface MsgCreateRequestResponse {
}

export interface MsgApproveRequest {
  creator: string;
  senderAddress: string;
  transactionId: string;
}

export interface MsgApproveRequestResponse {
}

export interface MsgProcessTransaction {
  creator: string;
  transactionId: string;
}

export interface MsgProcessTransactionResponse {
}

export interface MsgCreateUnstakeRequest {
  creator: string;
  unstakeAddress: string;
  amount: number;
}

export interface MsgCreateUnstakeRequestResponse {
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgCreateRequest(): MsgCreateRequest {
  return { creator: "", senderAddress: "", amount: 0 };
}

export const MsgCreateRequest = {
  encode(message: MsgCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.senderAddress !== "") {
      writer.uint32(18).string(message.senderAddress);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.senderAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: MsgCreateRequest): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.senderAddress !== "") {
      obj.senderAddress = message.senderAddress;
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateRequest>, I>>(base?: I): MsgCreateRequest {
    return MsgCreateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateRequest>, I>>(object: I): MsgCreateRequest {
    const message = createBaseMsgCreateRequest();
    message.creator = object.creator ?? "";
    message.senderAddress = object.senderAddress ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseMsgCreateRequestResponse(): MsgCreateRequestResponse {
  return {};
}

export const MsgCreateRequestResponse = {
  encode(_: MsgCreateRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCreateRequestResponse {
    return {};
  },

  toJSON(_: MsgCreateRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateRequestResponse>, I>>(base?: I): MsgCreateRequestResponse {
    return MsgCreateRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateRequestResponse>, I>>(_: I): MsgCreateRequestResponse {
    const message = createBaseMsgCreateRequestResponse();
    return message;
  },
};

function createBaseMsgApproveRequest(): MsgApproveRequest {
  return { creator: "", senderAddress: "", transactionId: "" };
}

export const MsgApproveRequest = {
  encode(message: MsgApproveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.senderAddress !== "") {
      writer.uint32(18).string(message.senderAddress);
    }
    if (message.transactionId !== "") {
      writer.uint32(26).string(message.transactionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.senderAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.transactionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgApproveRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
      transactionId: isSet(object.transactionId) ? String(object.transactionId) : "",
    };
  },

  toJSON(message: MsgApproveRequest): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.senderAddress !== "") {
      obj.senderAddress = message.senderAddress;
    }
    if (message.transactionId !== "") {
      obj.transactionId = message.transactionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgApproveRequest>, I>>(base?: I): MsgApproveRequest {
    return MsgApproveRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgApproveRequest>, I>>(object: I): MsgApproveRequest {
    const message = createBaseMsgApproveRequest();
    message.creator = object.creator ?? "";
    message.senderAddress = object.senderAddress ?? "";
    message.transactionId = object.transactionId ?? "";
    return message;
  },
};

function createBaseMsgApproveRequestResponse(): MsgApproveRequestResponse {
  return {};
}

export const MsgApproveRequestResponse = {
  encode(_: MsgApproveRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgApproveRequestResponse {
    return {};
  },

  toJSON(_: MsgApproveRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgApproveRequestResponse>, I>>(base?: I): MsgApproveRequestResponse {
    return MsgApproveRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgApproveRequestResponse>, I>>(_: I): MsgApproveRequestResponse {
    const message = createBaseMsgApproveRequestResponse();
    return message;
  },
};

function createBaseMsgProcessTransaction(): MsgProcessTransaction {
  return { creator: "", transactionId: "" };
}

export const MsgProcessTransaction = {
  encode(message: MsgProcessTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transactionId !== "") {
      writer.uint32(18).string(message.transactionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProcessTransaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transactionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgProcessTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      transactionId: isSet(object.transactionId) ? String(object.transactionId) : "",
    };
  },

  toJSON(message: MsgProcessTransaction): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.transactionId !== "") {
      obj.transactionId = message.transactionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgProcessTransaction>, I>>(base?: I): MsgProcessTransaction {
    return MsgProcessTransaction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgProcessTransaction>, I>>(object: I): MsgProcessTransaction {
    const message = createBaseMsgProcessTransaction();
    message.creator = object.creator ?? "";
    message.transactionId = object.transactionId ?? "";
    return message;
  },
};

function createBaseMsgProcessTransactionResponse(): MsgProcessTransactionResponse {
  return {};
}

export const MsgProcessTransactionResponse = {
  encode(_: MsgProcessTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProcessTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgProcessTransactionResponse {
    return {};
  },

  toJSON(_: MsgProcessTransactionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgProcessTransactionResponse>, I>>(base?: I): MsgProcessTransactionResponse {
    return MsgProcessTransactionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgProcessTransactionResponse>, I>>(_: I): MsgProcessTransactionResponse {
    const message = createBaseMsgProcessTransactionResponse();
    return message;
  },
};

function createBaseMsgCreateUnstakeRequest(): MsgCreateUnstakeRequest {
  return { creator: "", unstakeAddress: "", amount: 0 };
}

export const MsgCreateUnstakeRequest = {
  encode(message: MsgCreateUnstakeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.unstakeAddress !== "") {
      writer.uint32(18).string(message.unstakeAddress);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUnstakeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUnstakeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.unstakeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUnstakeRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      unstakeAddress: isSet(object.unstakeAddress) ? String(object.unstakeAddress) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: MsgCreateUnstakeRequest): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.unstakeAddress !== "") {
      obj.unstakeAddress = message.unstakeAddress;
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateUnstakeRequest>, I>>(base?: I): MsgCreateUnstakeRequest {
    return MsgCreateUnstakeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateUnstakeRequest>, I>>(object: I): MsgCreateUnstakeRequest {
    const message = createBaseMsgCreateUnstakeRequest();
    message.creator = object.creator ?? "";
    message.unstakeAddress = object.unstakeAddress ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseMsgCreateUnstakeRequestResponse(): MsgCreateUnstakeRequestResponse {
  return {};
}

export const MsgCreateUnstakeRequestResponse = {
  encode(_: MsgCreateUnstakeRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUnstakeRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUnstakeRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCreateUnstakeRequestResponse {
    return {};
  },

  toJSON(_: MsgCreateUnstakeRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateUnstakeRequestResponse>, I>>(base?: I): MsgCreateUnstakeRequestResponse {
    return MsgCreateUnstakeRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateUnstakeRequestResponse>, I>>(_: I): MsgCreateUnstakeRequestResponse {
    const message = createBaseMsgCreateUnstakeRequestResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  CreateRequest(request: MsgCreateRequest): Promise<MsgCreateRequestResponse>;
  ApproveRequest(request: MsgApproveRequest): Promise<MsgApproveRequestResponse>;
  ProcessTransaction(request: MsgProcessTransaction): Promise<MsgProcessTransactionResponse>;
  CreateUnstakeRequest(request: MsgCreateUnstakeRequest): Promise<MsgCreateUnstakeRequestResponse>;
}

export const MsgServiceName = "sigmoidtest.sigmoidtest.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateRequest = this.CreateRequest.bind(this);
    this.ApproveRequest = this.ApproveRequest.bind(this);
    this.ProcessTransaction = this.ProcessTransaction.bind(this);
    this.CreateUnstakeRequest = this.CreateUnstakeRequest.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  CreateRequest(request: MsgCreateRequest): Promise<MsgCreateRequestResponse> {
    const data = MsgCreateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateRequest", data);
    return promise.then((data) => MsgCreateRequestResponse.decode(_m0.Reader.create(data)));
  }

  ApproveRequest(request: MsgApproveRequest): Promise<MsgApproveRequestResponse> {
    const data = MsgApproveRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ApproveRequest", data);
    return promise.then((data) => MsgApproveRequestResponse.decode(_m0.Reader.create(data)));
  }

  ProcessTransaction(request: MsgProcessTransaction): Promise<MsgProcessTransactionResponse> {
    const data = MsgProcessTransaction.encode(request).finish();
    const promise = this.rpc.request(this.service, "ProcessTransaction", data);
    return promise.then((data) => MsgProcessTransactionResponse.decode(_m0.Reader.create(data)));
  }

  CreateUnstakeRequest(request: MsgCreateUnstakeRequest): Promise<MsgCreateUnstakeRequestResponse> {
    const data = MsgCreateUnstakeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateUnstakeRequest", data);
    return promise.then((data) => MsgCreateUnstakeRequestResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
