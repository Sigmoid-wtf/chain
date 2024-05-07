/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "sigmoid.sigmoid";

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

export interface MsgApproveUnstakeRequest {
  creator: string;
  unstakeAddress: string;
  transactionId: string;
}

export interface MsgApproveUnstakeRequestResponse {
}

export interface MsgSetRaoCurrentStakedBalance {
  creator: string;
  raoCurrentStakedBalance: number;
}

export interface MsgSetRaoCurrentStakedBalanceResponse {
}

export interface MsgCreateBridgeRequest {
  creator: string;
  erc20Address: string;
  amount: number;
}

export interface MsgCreateBridgeRequestResponse {
}

export interface MsgApproveBridgeRequest {
  creator: string;
  address: string;
}

export interface MsgApproveBridgeRequestResponse {
}

export interface MsgIncomeBridgeRequest {
  creator: string;
  address: string;
  amount: number;
}

export interface MsgIncomeBridgeRequestResponse {
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

function createBaseMsgApproveUnstakeRequest(): MsgApproveUnstakeRequest {
  return { creator: "", unstakeAddress: "", transactionId: "" };
}

export const MsgApproveUnstakeRequest = {
  encode(message: MsgApproveUnstakeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.unstakeAddress !== "") {
      writer.uint32(18).string(message.unstakeAddress);
    }
    if (message.transactionId !== "") {
      writer.uint32(26).string(message.transactionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveUnstakeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveUnstakeRequest();
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

  fromJSON(object: any): MsgApproveUnstakeRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      unstakeAddress: isSet(object.unstakeAddress) ? String(object.unstakeAddress) : "",
      transactionId: isSet(object.transactionId) ? String(object.transactionId) : "",
    };
  },

  toJSON(message: MsgApproveUnstakeRequest): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.unstakeAddress !== "") {
      obj.unstakeAddress = message.unstakeAddress;
    }
    if (message.transactionId !== "") {
      obj.transactionId = message.transactionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgApproveUnstakeRequest>, I>>(base?: I): MsgApproveUnstakeRequest {
    return MsgApproveUnstakeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgApproveUnstakeRequest>, I>>(object: I): MsgApproveUnstakeRequest {
    const message = createBaseMsgApproveUnstakeRequest();
    message.creator = object.creator ?? "";
    message.unstakeAddress = object.unstakeAddress ?? "";
    message.transactionId = object.transactionId ?? "";
    return message;
  },
};

function createBaseMsgApproveUnstakeRequestResponse(): MsgApproveUnstakeRequestResponse {
  return {};
}

export const MsgApproveUnstakeRequestResponse = {
  encode(_: MsgApproveUnstakeRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveUnstakeRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveUnstakeRequestResponse();
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

  fromJSON(_: any): MsgApproveUnstakeRequestResponse {
    return {};
  },

  toJSON(_: MsgApproveUnstakeRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgApproveUnstakeRequestResponse>, I>>(
    base?: I,
  ): MsgApproveUnstakeRequestResponse {
    return MsgApproveUnstakeRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgApproveUnstakeRequestResponse>, I>>(
    _: I,
  ): MsgApproveUnstakeRequestResponse {
    const message = createBaseMsgApproveUnstakeRequestResponse();
    return message;
  },
};

function createBaseMsgSetRaoCurrentStakedBalance(): MsgSetRaoCurrentStakedBalance {
  return { creator: "", raoCurrentStakedBalance: 0 };
}

export const MsgSetRaoCurrentStakedBalance = {
  encode(message: MsgSetRaoCurrentStakedBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.raoCurrentStakedBalance !== 0) {
      writer.uint32(16).uint64(message.raoCurrentStakedBalance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRaoCurrentStakedBalance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRaoCurrentStakedBalance();
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
          if (tag !== 16) {
            break;
          }

          message.raoCurrentStakedBalance = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetRaoCurrentStakedBalance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      raoCurrentStakedBalance: isSet(object.raoCurrentStakedBalance) ? Number(object.raoCurrentStakedBalance) : 0,
    };
  },

  toJSON(message: MsgSetRaoCurrentStakedBalance): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.raoCurrentStakedBalance !== 0) {
      obj.raoCurrentStakedBalance = Math.round(message.raoCurrentStakedBalance);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetRaoCurrentStakedBalance>, I>>(base?: I): MsgSetRaoCurrentStakedBalance {
    return MsgSetRaoCurrentStakedBalance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetRaoCurrentStakedBalance>, I>>(
    object: I,
  ): MsgSetRaoCurrentStakedBalance {
    const message = createBaseMsgSetRaoCurrentStakedBalance();
    message.creator = object.creator ?? "";
    message.raoCurrentStakedBalance = object.raoCurrentStakedBalance ?? 0;
    return message;
  },
};

function createBaseMsgSetRaoCurrentStakedBalanceResponse(): MsgSetRaoCurrentStakedBalanceResponse {
  return {};
}

export const MsgSetRaoCurrentStakedBalanceResponse = {
  encode(_: MsgSetRaoCurrentStakedBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRaoCurrentStakedBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRaoCurrentStakedBalanceResponse();
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

  fromJSON(_: any): MsgSetRaoCurrentStakedBalanceResponse {
    return {};
  },

  toJSON(_: MsgSetRaoCurrentStakedBalanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetRaoCurrentStakedBalanceResponse>, I>>(
    base?: I,
  ): MsgSetRaoCurrentStakedBalanceResponse {
    return MsgSetRaoCurrentStakedBalanceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetRaoCurrentStakedBalanceResponse>, I>>(
    _: I,
  ): MsgSetRaoCurrentStakedBalanceResponse {
    const message = createBaseMsgSetRaoCurrentStakedBalanceResponse();
    return message;
  },
};

function createBaseMsgCreateBridgeRequest(): MsgCreateBridgeRequest {
  return { creator: "", erc20Address: "", amount: 0 };
}

export const MsgCreateBridgeRequest = {
  encode(message: MsgCreateBridgeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.erc20Address !== "") {
      writer.uint32(18).string(message.erc20Address);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBridgeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBridgeRequest();
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

          message.erc20Address = reader.string();
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

  fromJSON(object: any): MsgCreateBridgeRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      erc20Address: isSet(object.erc20Address) ? String(object.erc20Address) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: MsgCreateBridgeRequest): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.erc20Address !== "") {
      obj.erc20Address = message.erc20Address;
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateBridgeRequest>, I>>(base?: I): MsgCreateBridgeRequest {
    return MsgCreateBridgeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateBridgeRequest>, I>>(object: I): MsgCreateBridgeRequest {
    const message = createBaseMsgCreateBridgeRequest();
    message.creator = object.creator ?? "";
    message.erc20Address = object.erc20Address ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseMsgCreateBridgeRequestResponse(): MsgCreateBridgeRequestResponse {
  return {};
}

export const MsgCreateBridgeRequestResponse = {
  encode(_: MsgCreateBridgeRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBridgeRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBridgeRequestResponse();
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

  fromJSON(_: any): MsgCreateBridgeRequestResponse {
    return {};
  },

  toJSON(_: MsgCreateBridgeRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateBridgeRequestResponse>, I>>(base?: I): MsgCreateBridgeRequestResponse {
    return MsgCreateBridgeRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateBridgeRequestResponse>, I>>(_: I): MsgCreateBridgeRequestResponse {
    const message = createBaseMsgCreateBridgeRequestResponse();
    return message;
  },
};

function createBaseMsgApproveBridgeRequest(): MsgApproveBridgeRequest {
  return { creator: "", address: "" };
}

export const MsgApproveBridgeRequest = {
  encode(message: MsgApproveBridgeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveBridgeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveBridgeRequest();
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

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgApproveBridgeRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgApproveBridgeRequest): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgApproveBridgeRequest>, I>>(base?: I): MsgApproveBridgeRequest {
    return MsgApproveBridgeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgApproveBridgeRequest>, I>>(object: I): MsgApproveBridgeRequest {
    const message = createBaseMsgApproveBridgeRequest();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgApproveBridgeRequestResponse(): MsgApproveBridgeRequestResponse {
  return {};
}

export const MsgApproveBridgeRequestResponse = {
  encode(_: MsgApproveBridgeRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveBridgeRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveBridgeRequestResponse();
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

  fromJSON(_: any): MsgApproveBridgeRequestResponse {
    return {};
  },

  toJSON(_: MsgApproveBridgeRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgApproveBridgeRequestResponse>, I>>(base?: I): MsgApproveBridgeRequestResponse {
    return MsgApproveBridgeRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgApproveBridgeRequestResponse>, I>>(_: I): MsgApproveBridgeRequestResponse {
    const message = createBaseMsgApproveBridgeRequestResponse();
    return message;
  },
};

function createBaseMsgIncomeBridgeRequest(): MsgIncomeBridgeRequest {
  return { creator: "", address: "", amount: 0 };
}

export const MsgIncomeBridgeRequest = {
  encode(message: MsgIncomeBridgeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncomeBridgeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncomeBridgeRequest();
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

          message.address = reader.string();
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

  fromJSON(object: any): MsgIncomeBridgeRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: MsgIncomeBridgeRequest): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgIncomeBridgeRequest>, I>>(base?: I): MsgIncomeBridgeRequest {
    return MsgIncomeBridgeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgIncomeBridgeRequest>, I>>(object: I): MsgIncomeBridgeRequest {
    const message = createBaseMsgIncomeBridgeRequest();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseMsgIncomeBridgeRequestResponse(): MsgIncomeBridgeRequestResponse {
  return {};
}

export const MsgIncomeBridgeRequestResponse = {
  encode(_: MsgIncomeBridgeRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncomeBridgeRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncomeBridgeRequestResponse();
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

  fromJSON(_: any): MsgIncomeBridgeRequestResponse {
    return {};
  },

  toJSON(_: MsgIncomeBridgeRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgIncomeBridgeRequestResponse>, I>>(base?: I): MsgIncomeBridgeRequestResponse {
    return MsgIncomeBridgeRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgIncomeBridgeRequestResponse>, I>>(_: I): MsgIncomeBridgeRequestResponse {
    const message = createBaseMsgIncomeBridgeRequestResponse();
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
  ApproveUnstakeRequest(request: MsgApproveUnstakeRequest): Promise<MsgApproveUnstakeRequestResponse>;
  SetRaoCurrentStakedBalance(request: MsgSetRaoCurrentStakedBalance): Promise<MsgSetRaoCurrentStakedBalanceResponse>;
  CreateBridgeRequest(request: MsgCreateBridgeRequest): Promise<MsgCreateBridgeRequestResponse>;
  ApproveBridgeRequest(request: MsgApproveBridgeRequest): Promise<MsgApproveBridgeRequestResponse>;
  IncomeBridgeRequest(request: MsgIncomeBridgeRequest): Promise<MsgIncomeBridgeRequestResponse>;
}

export const MsgServiceName = "sigmoid.sigmoid.Msg";
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
    this.ApproveUnstakeRequest = this.ApproveUnstakeRequest.bind(this);
    this.SetRaoCurrentStakedBalance = this.SetRaoCurrentStakedBalance.bind(this);
    this.CreateBridgeRequest = this.CreateBridgeRequest.bind(this);
    this.ApproveBridgeRequest = this.ApproveBridgeRequest.bind(this);
    this.IncomeBridgeRequest = this.IncomeBridgeRequest.bind(this);
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

  ApproveUnstakeRequest(request: MsgApproveUnstakeRequest): Promise<MsgApproveUnstakeRequestResponse> {
    const data = MsgApproveUnstakeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ApproveUnstakeRequest", data);
    return promise.then((data) => MsgApproveUnstakeRequestResponse.decode(_m0.Reader.create(data)));
  }

  SetRaoCurrentStakedBalance(request: MsgSetRaoCurrentStakedBalance): Promise<MsgSetRaoCurrentStakedBalanceResponse> {
    const data = MsgSetRaoCurrentStakedBalance.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetRaoCurrentStakedBalance", data);
    return promise.then((data) => MsgSetRaoCurrentStakedBalanceResponse.decode(_m0.Reader.create(data)));
  }

  CreateBridgeRequest(request: MsgCreateBridgeRequest): Promise<MsgCreateBridgeRequestResponse> {
    const data = MsgCreateBridgeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateBridgeRequest", data);
    return promise.then((data) => MsgCreateBridgeRequestResponse.decode(_m0.Reader.create(data)));
  }

  ApproveBridgeRequest(request: MsgApproveBridgeRequest): Promise<MsgApproveBridgeRequestResponse> {
    const data = MsgApproveBridgeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ApproveBridgeRequest", data);
    return promise.then((data) => MsgApproveBridgeRequestResponse.decode(_m0.Reader.create(data)));
  }

  IncomeBridgeRequest(request: MsgIncomeBridgeRequest): Promise<MsgIncomeBridgeRequestResponse> {
    const data = MsgIncomeBridgeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "IncomeBridgeRequest", data);
    return promise.then((data) => MsgIncomeBridgeRequestResponse.decode(_m0.Reader.create(data)));
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
