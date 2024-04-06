/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sigmoidtest.sigmoidtest";

export interface FrontStakeRequest {
  sender: string;
  mint: string;
  status: number;
  amount: number;
  transactionId: string;
}

function createBaseFrontStakeRequest(): FrontStakeRequest {
  return { sender: "", mint: "", status: 0, amount: 0, transactionId: "" };
}

export const FrontStakeRequest = {
  encode(message: FrontStakeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.mint !== "") {
      writer.uint32(18).string(message.mint);
    }
    if (message.status !== 0) {
      writer.uint32(24).uint64(message.status);
    }
    if (message.amount !== 0) {
      writer.uint32(32).uint64(message.amount);
    }
    if (message.transactionId !== "") {
      writer.uint32(42).string(message.transactionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FrontStakeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrontStakeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mint = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): FrontStakeRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      mint: isSet(object.mint) ? String(object.mint) : "",
      status: isSet(object.status) ? Number(object.status) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      transactionId: isSet(object.transactionId) ? String(object.transactionId) : "",
    };
  },

  toJSON(message: FrontStakeRequest): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.mint !== "") {
      obj.mint = message.mint;
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    if (message.transactionId !== "") {
      obj.transactionId = message.transactionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FrontStakeRequest>, I>>(base?: I): FrontStakeRequest {
    return FrontStakeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FrontStakeRequest>, I>>(object: I): FrontStakeRequest {
    const message = createBaseFrontStakeRequest();
    message.sender = object.sender ?? "";
    message.mint = object.mint ?? "";
    message.status = object.status ?? 0;
    message.amount = object.amount ?? 0;
    message.transactionId = object.transactionId ?? "";
    return message;
  },
};

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
