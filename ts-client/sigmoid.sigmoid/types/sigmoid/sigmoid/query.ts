/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { MsgCreateUnstakeRequest } from "./tx";

export const protobufPackage = "sigmoid.sigmoid";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetAmountRequest {
  senderAddress: string;
}

export interface QueryGetAmountResponse {
  amount: number;
}

export interface QueryGetLastProcessedRequest {
}

export interface QueryGetLastProcessedResponse {
  transactionId: string;
}

export interface QueryGetPendingUnstakeRequestRequest {
}

export interface QueryGetPendingUnstakeRequestResponse {
  request: MsgCreateUnstakeRequest | undefined;
}

export interface QueryGetRaoStakedBalanceRequest {
}

export interface QueryGetRaoStakedBalanceResponse {
  raoStakedBalance: number;
}

export interface QueryGetSigtaoRateDRequest {
}

export interface QueryGetSigtaoRateDResponse {
  sigtaoRateD: number;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAmountRequest(): QueryGetAmountRequest {
  return { senderAddress: "" };
}

export const QueryGetAmountRequest = {
  encode(message: QueryGetAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAmountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.senderAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetAmountRequest {
    return { senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "" };
  },

  toJSON(message: QueryGetAmountRequest): unknown {
    const obj: any = {};
    if (message.senderAddress !== "") {
      obj.senderAddress = message.senderAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAmountRequest>, I>>(base?: I): QueryGetAmountRequest {
    return QueryGetAmountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAmountRequest>, I>>(object: I): QueryGetAmountRequest {
    const message = createBaseQueryGetAmountRequest();
    message.senderAddress = object.senderAddress ?? "";
    return message;
  },
};

function createBaseQueryGetAmountResponse(): QueryGetAmountResponse {
  return { amount: 0 };
}

export const QueryGetAmountResponse = {
  encode(message: QueryGetAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAmountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): QueryGetAmountResponse {
    return { amount: isSet(object.amount) ? Number(object.amount) : 0 };
  },

  toJSON(message: QueryGetAmountResponse): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAmountResponse>, I>>(base?: I): QueryGetAmountResponse {
    return QueryGetAmountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAmountResponse>, I>>(object: I): QueryGetAmountResponse {
    const message = createBaseQueryGetAmountResponse();
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseQueryGetLastProcessedRequest(): QueryGetLastProcessedRequest {
  return {};
}

export const QueryGetLastProcessedRequest = {
  encode(_: QueryGetLastProcessedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLastProcessedRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLastProcessedRequest();
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

  fromJSON(_: any): QueryGetLastProcessedRequest {
    return {};
  },

  toJSON(_: QueryGetLastProcessedRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetLastProcessedRequest>, I>>(base?: I): QueryGetLastProcessedRequest {
    return QueryGetLastProcessedRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetLastProcessedRequest>, I>>(_: I): QueryGetLastProcessedRequest {
    const message = createBaseQueryGetLastProcessedRequest();
    return message;
  },
};

function createBaseQueryGetLastProcessedResponse(): QueryGetLastProcessedResponse {
  return { transactionId: "" };
}

export const QueryGetLastProcessedResponse = {
  encode(message: QueryGetLastProcessedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionId !== "") {
      writer.uint32(10).string(message.transactionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLastProcessedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLastProcessedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryGetLastProcessedResponse {
    return { transactionId: isSet(object.transactionId) ? String(object.transactionId) : "" };
  },

  toJSON(message: QueryGetLastProcessedResponse): unknown {
    const obj: any = {};
    if (message.transactionId !== "") {
      obj.transactionId = message.transactionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetLastProcessedResponse>, I>>(base?: I): QueryGetLastProcessedResponse {
    return QueryGetLastProcessedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetLastProcessedResponse>, I>>(
    object: I,
  ): QueryGetLastProcessedResponse {
    const message = createBaseQueryGetLastProcessedResponse();
    message.transactionId = object.transactionId ?? "";
    return message;
  },
};

function createBaseQueryGetPendingUnstakeRequestRequest(): QueryGetPendingUnstakeRequestRequest {
  return {};
}

export const QueryGetPendingUnstakeRequestRequest = {
  encode(_: QueryGetPendingUnstakeRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingUnstakeRequestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingUnstakeRequestRequest();
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

  fromJSON(_: any): QueryGetPendingUnstakeRequestRequest {
    return {};
  },

  toJSON(_: QueryGetPendingUnstakeRequestRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPendingUnstakeRequestRequest>, I>>(
    base?: I,
  ): QueryGetPendingUnstakeRequestRequest {
    return QueryGetPendingUnstakeRequestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPendingUnstakeRequestRequest>, I>>(
    _: I,
  ): QueryGetPendingUnstakeRequestRequest {
    const message = createBaseQueryGetPendingUnstakeRequestRequest();
    return message;
  },
};

function createBaseQueryGetPendingUnstakeRequestResponse(): QueryGetPendingUnstakeRequestResponse {
  return { request: undefined };
}

export const QueryGetPendingUnstakeRequestResponse = {
  encode(message: QueryGetPendingUnstakeRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      MsgCreateUnstakeRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingUnstakeRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingUnstakeRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.request = MsgCreateUnstakeRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPendingUnstakeRequestResponse {
    return { request: isSet(object.request) ? MsgCreateUnstakeRequest.fromJSON(object.request) : undefined };
  },

  toJSON(message: QueryGetPendingUnstakeRequestResponse): unknown {
    const obj: any = {};
    if (message.request !== undefined) {
      obj.request = MsgCreateUnstakeRequest.toJSON(message.request);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPendingUnstakeRequestResponse>, I>>(
    base?: I,
  ): QueryGetPendingUnstakeRequestResponse {
    return QueryGetPendingUnstakeRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPendingUnstakeRequestResponse>, I>>(
    object: I,
  ): QueryGetPendingUnstakeRequestResponse {
    const message = createBaseQueryGetPendingUnstakeRequestResponse();
    message.request = (object.request !== undefined && object.request !== null)
      ? MsgCreateUnstakeRequest.fromPartial(object.request)
      : undefined;
    return message;
  },
};

function createBaseQueryGetRaoStakedBalanceRequest(): QueryGetRaoStakedBalanceRequest {
  return {};
}

export const QueryGetRaoStakedBalanceRequest = {
  encode(_: QueryGetRaoStakedBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRaoStakedBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRaoStakedBalanceRequest();
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

  fromJSON(_: any): QueryGetRaoStakedBalanceRequest {
    return {};
  },

  toJSON(_: QueryGetRaoStakedBalanceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetRaoStakedBalanceRequest>, I>>(base?: I): QueryGetRaoStakedBalanceRequest {
    return QueryGetRaoStakedBalanceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetRaoStakedBalanceRequest>, I>>(_: I): QueryGetRaoStakedBalanceRequest {
    const message = createBaseQueryGetRaoStakedBalanceRequest();
    return message;
  },
};

function createBaseQueryGetRaoStakedBalanceResponse(): QueryGetRaoStakedBalanceResponse {
  return { raoStakedBalance: 0 };
}

export const QueryGetRaoStakedBalanceResponse = {
  encode(message: QueryGetRaoStakedBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.raoStakedBalance !== 0) {
      writer.uint32(8).uint64(message.raoStakedBalance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRaoStakedBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRaoStakedBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.raoStakedBalance = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetRaoStakedBalanceResponse {
    return { raoStakedBalance: isSet(object.raoStakedBalance) ? Number(object.raoStakedBalance) : 0 };
  },

  toJSON(message: QueryGetRaoStakedBalanceResponse): unknown {
    const obj: any = {};
    if (message.raoStakedBalance !== 0) {
      obj.raoStakedBalance = Math.round(message.raoStakedBalance);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetRaoStakedBalanceResponse>, I>>(
    base?: I,
  ): QueryGetRaoStakedBalanceResponse {
    return QueryGetRaoStakedBalanceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetRaoStakedBalanceResponse>, I>>(
    object: I,
  ): QueryGetRaoStakedBalanceResponse {
    const message = createBaseQueryGetRaoStakedBalanceResponse();
    message.raoStakedBalance = object.raoStakedBalance ?? 0;
    return message;
  },
};

function createBaseQueryGetSigtaoRateDRequest(): QueryGetSigtaoRateDRequest {
  return {};
}

export const QueryGetSigtaoRateDRequest = {
  encode(_: QueryGetSigtaoRateDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSigtaoRateDRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSigtaoRateDRequest();
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

  fromJSON(_: any): QueryGetSigtaoRateDRequest {
    return {};
  },

  toJSON(_: QueryGetSigtaoRateDRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSigtaoRateDRequest>, I>>(base?: I): QueryGetSigtaoRateDRequest {
    return QueryGetSigtaoRateDRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSigtaoRateDRequest>, I>>(_: I): QueryGetSigtaoRateDRequest {
    const message = createBaseQueryGetSigtaoRateDRequest();
    return message;
  },
};

function createBaseQueryGetSigtaoRateDResponse(): QueryGetSigtaoRateDResponse {
  return { sigtaoRateD: 0 };
}

export const QueryGetSigtaoRateDResponse = {
  encode(message: QueryGetSigtaoRateDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sigtaoRateD !== 0) {
      writer.uint32(8).uint64(message.sigtaoRateD);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSigtaoRateDResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSigtaoRateDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sigtaoRateD = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetSigtaoRateDResponse {
    return { sigtaoRateD: isSet(object.sigtaoRateD) ? Number(object.sigtaoRateD) : 0 };
  },

  toJSON(message: QueryGetSigtaoRateDResponse): unknown {
    const obj: any = {};
    if (message.sigtaoRateD !== 0) {
      obj.sigtaoRateD = Math.round(message.sigtaoRateD);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSigtaoRateDResponse>, I>>(base?: I): QueryGetSigtaoRateDResponse {
    return QueryGetSigtaoRateDResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSigtaoRateDResponse>, I>>(object: I): QueryGetSigtaoRateDResponse {
    const message = createBaseQueryGetSigtaoRateDResponse();
    message.sigtaoRateD = object.sigtaoRateD ?? 0;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of GetAmount items. */
  GetAmount(request: QueryGetAmountRequest): Promise<QueryGetAmountResponse>;
  /** Queries a list of GetLastProcessed items. */
  GetLastProcessed(request: QueryGetLastProcessedRequest): Promise<QueryGetLastProcessedResponse>;
  /** Queries a list of GetPendingUnstakeRequest items. */
  GetPendingUnstakeRequest(
    request: QueryGetPendingUnstakeRequestRequest,
  ): Promise<QueryGetPendingUnstakeRequestResponse>;
  /** Queries a list of GetRaoStakedBalance items. */
  GetRaoStakedBalance(request: QueryGetRaoStakedBalanceRequest): Promise<QueryGetRaoStakedBalanceResponse>;
  /** Queries a list of GetSigtaoRateD items. */
  GetSigtaoRateD(request: QueryGetSigtaoRateDRequest): Promise<QueryGetSigtaoRateDResponse>;
}

export const QueryServiceName = "sigmoid.sigmoid.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.GetAmount = this.GetAmount.bind(this);
    this.GetLastProcessed = this.GetLastProcessed.bind(this);
    this.GetPendingUnstakeRequest = this.GetPendingUnstakeRequest.bind(this);
    this.GetRaoStakedBalance = this.GetRaoStakedBalance.bind(this);
    this.GetSigtaoRateD = this.GetSigtaoRateD.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  GetAmount(request: QueryGetAmountRequest): Promise<QueryGetAmountResponse> {
    const data = QueryGetAmountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAmount", data);
    return promise.then((data) => QueryGetAmountResponse.decode(_m0.Reader.create(data)));
  }

  GetLastProcessed(request: QueryGetLastProcessedRequest): Promise<QueryGetLastProcessedResponse> {
    const data = QueryGetLastProcessedRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetLastProcessed", data);
    return promise.then((data) => QueryGetLastProcessedResponse.decode(_m0.Reader.create(data)));
  }

  GetPendingUnstakeRequest(
    request: QueryGetPendingUnstakeRequestRequest,
  ): Promise<QueryGetPendingUnstakeRequestResponse> {
    const data = QueryGetPendingUnstakeRequestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPendingUnstakeRequest", data);
    return promise.then((data) => QueryGetPendingUnstakeRequestResponse.decode(_m0.Reader.create(data)));
  }

  GetRaoStakedBalance(request: QueryGetRaoStakedBalanceRequest): Promise<QueryGetRaoStakedBalanceResponse> {
    const data = QueryGetRaoStakedBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetRaoStakedBalance", data);
    return promise.then((data) => QueryGetRaoStakedBalanceResponse.decode(_m0.Reader.create(data)));
  }

  GetSigtaoRateD(request: QueryGetSigtaoRateDRequest): Promise<QueryGetSigtaoRateDResponse> {
    const data = QueryGetSigtaoRateDRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetSigtaoRateD", data);
    return promise.then((data) => QueryGetSigtaoRateDResponse.decode(_m0.Reader.create(data)));
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
