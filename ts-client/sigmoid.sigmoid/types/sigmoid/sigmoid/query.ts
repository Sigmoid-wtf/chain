/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Request } from "./request";
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

export interface QueryGetFrontPendingStakeRequestRequest {
  address: string;
}

export interface QueryGetFrontPendingStakeRequestResponse {
  request: Request | undefined;
}

export interface QueryGetFrontPendingUnstakeRequestRequest {
  address: string;
}

export interface QueryGetFrontPendingUnstakeRequestResponse {
  request: Request | undefined;
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

function createBaseQueryGetFrontPendingStakeRequestRequest(): QueryGetFrontPendingStakeRequestRequest {
  return { address: "" };
}

export const QueryGetFrontPendingStakeRequestRequest = {
  encode(message: QueryGetFrontPendingStakeRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFrontPendingStakeRequestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFrontPendingStakeRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryGetFrontPendingStakeRequestRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetFrontPendingStakeRequestRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetFrontPendingStakeRequestRequest>, I>>(
    base?: I,
  ): QueryGetFrontPendingStakeRequestRequest {
    return QueryGetFrontPendingStakeRequestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetFrontPendingStakeRequestRequest>, I>>(
    object: I,
  ): QueryGetFrontPendingStakeRequestRequest {
    const message = createBaseQueryGetFrontPendingStakeRequestRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetFrontPendingStakeRequestResponse(): QueryGetFrontPendingStakeRequestResponse {
  return { request: undefined };
}

export const QueryGetFrontPendingStakeRequestResponse = {
  encode(message: QueryGetFrontPendingStakeRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFrontPendingStakeRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFrontPendingStakeRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.request = Request.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetFrontPendingStakeRequestResponse {
    return { request: isSet(object.request) ? Request.fromJSON(object.request) : undefined };
  },

  toJSON(message: QueryGetFrontPendingStakeRequestResponse): unknown {
    const obj: any = {};
    if (message.request !== undefined) {
      obj.request = Request.toJSON(message.request);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetFrontPendingStakeRequestResponse>, I>>(
    base?: I,
  ): QueryGetFrontPendingStakeRequestResponse {
    return QueryGetFrontPendingStakeRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetFrontPendingStakeRequestResponse>, I>>(
    object: I,
  ): QueryGetFrontPendingStakeRequestResponse {
    const message = createBaseQueryGetFrontPendingStakeRequestResponse();
    message.request = (object.request !== undefined && object.request !== null)
      ? Request.fromPartial(object.request)
      : undefined;
    return message;
  },
};

function createBaseQueryGetFrontPendingUnstakeRequestRequest(): QueryGetFrontPendingUnstakeRequestRequest {
  return { address: "" };
}

export const QueryGetFrontPendingUnstakeRequestRequest = {
  encode(message: QueryGetFrontPendingUnstakeRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFrontPendingUnstakeRequestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFrontPendingUnstakeRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryGetFrontPendingUnstakeRequestRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetFrontPendingUnstakeRequestRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetFrontPendingUnstakeRequestRequest>, I>>(
    base?: I,
  ): QueryGetFrontPendingUnstakeRequestRequest {
    return QueryGetFrontPendingUnstakeRequestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetFrontPendingUnstakeRequestRequest>, I>>(
    object: I,
  ): QueryGetFrontPendingUnstakeRequestRequest {
    const message = createBaseQueryGetFrontPendingUnstakeRequestRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetFrontPendingUnstakeRequestResponse(): QueryGetFrontPendingUnstakeRequestResponse {
  return { request: undefined };
}

export const QueryGetFrontPendingUnstakeRequestResponse = {
  encode(message: QueryGetFrontPendingUnstakeRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFrontPendingUnstakeRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFrontPendingUnstakeRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.request = Request.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetFrontPendingUnstakeRequestResponse {
    return { request: isSet(object.request) ? Request.fromJSON(object.request) : undefined };
  },

  toJSON(message: QueryGetFrontPendingUnstakeRequestResponse): unknown {
    const obj: any = {};
    if (message.request !== undefined) {
      obj.request = Request.toJSON(message.request);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetFrontPendingUnstakeRequestResponse>, I>>(
    base?: I,
  ): QueryGetFrontPendingUnstakeRequestResponse {
    return QueryGetFrontPendingUnstakeRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetFrontPendingUnstakeRequestResponse>, I>>(
    object: I,
  ): QueryGetFrontPendingUnstakeRequestResponse {
    const message = createBaseQueryGetFrontPendingUnstakeRequestResponse();
    message.request = (object.request !== undefined && object.request !== null)
      ? Request.fromPartial(object.request)
      : undefined;
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
  /** Queries a list of GetFrontPendingStakeRequest items. */
  GetFrontPendingStakeRequest(
    request: QueryGetFrontPendingStakeRequestRequest,
  ): Promise<QueryGetFrontPendingStakeRequestResponse>;
  /** Queries a list of GetFrontPendingUnstakeRequest items. */
  GetFrontPendingUnstakeRequest(
    request: QueryGetFrontPendingUnstakeRequestRequest,
  ): Promise<QueryGetFrontPendingUnstakeRequestResponse>;
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
    this.GetFrontPendingStakeRequest = this.GetFrontPendingStakeRequest.bind(this);
    this.GetFrontPendingUnstakeRequest = this.GetFrontPendingUnstakeRequest.bind(this);
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

  GetFrontPendingStakeRequest(
    request: QueryGetFrontPendingStakeRequestRequest,
  ): Promise<QueryGetFrontPendingStakeRequestResponse> {
    const data = QueryGetFrontPendingStakeRequestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetFrontPendingStakeRequest", data);
    return promise.then((data) => QueryGetFrontPendingStakeRequestResponse.decode(_m0.Reader.create(data)));
  }

  GetFrontPendingUnstakeRequest(
    request: QueryGetFrontPendingUnstakeRequestRequest,
  ): Promise<QueryGetFrontPendingUnstakeRequestResponse> {
    const data = QueryGetFrontPendingUnstakeRequestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetFrontPendingUnstakeRequest", data);
    return promise.then((data) => QueryGetFrontPendingUnstakeRequestResponse.decode(_m0.Reader.create(data)));
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
