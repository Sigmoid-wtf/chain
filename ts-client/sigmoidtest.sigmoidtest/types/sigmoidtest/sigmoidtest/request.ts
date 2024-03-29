/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sigmoidtest.sigmoidtest";

export interface Request {
  senderAddress: string;
  mintAddress: string;
  status: number;
  amount: number;
}

function createBaseRequest(): Request {
  return { senderAddress: "", mintAddress: "", status: 0, amount: 0 };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.mintAddress !== "") {
      writer.uint32(18).string(message.mintAddress);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int32(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.senderAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mintAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
      mintAddress: isSet(object.mintAddress) ? String(object.mintAddress) : "",
      status: isSet(object.status) ? Number(object.status) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    if (message.senderAddress !== "") {
      obj.senderAddress = message.senderAddress;
    }
    if (message.mintAddress !== "") {
      obj.mintAddress = message.mintAddress;
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Request>, I>>(base?: I): Request {
    return Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.senderAddress = object.senderAddress ?? "";
    message.mintAddress = object.mintAddress ?? "";
    message.status = object.status ?? 0;
    message.amount = object.amount ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
