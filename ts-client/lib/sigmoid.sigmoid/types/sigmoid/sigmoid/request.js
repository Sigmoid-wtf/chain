/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "sigmoid.sigmoid";
function createBaseRequest() {
    return { senderAddress: "", mintAddress: "", status: 0, amount: 0, timestamp: 0 };
}
export const Request = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderAddress !== "") {
            writer.uint32(10).string(message.senderAddress);
        }
        if (message.mintAddress !== "") {
            writer.uint32(18).string(message.mintAddress);
        }
        if (message.status !== 0) {
            writer.uint32(24).uint64(message.status);
        }
        if (message.amount !== 0) {
            writer.uint32(32).uint64(message.amount);
        }
        if (message.timestamp !== 0) {
            writer.uint32(40).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.status = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.amount = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.timestamp = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
            mintAddress: isSet(object.mintAddress) ? String(object.mintAddress) : "",
            status: isSet(object.status) ? Number(object.status) : 0,
            amount: isSet(object.amount) ? Number(object.amount) : 0,
            timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
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
        if (message.timestamp !== 0) {
            obj.timestamp = Math.round(message.timestamp);
        }
        return obj;
    },
    create(base) {
        return Request.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequest();
        message.senderAddress = object.senderAddress ?? "";
        message.mintAddress = object.mintAddress ?? "";
        message.status = object.status ?? 0;
        message.amount = object.amount ?? 0;
        message.timestamp = object.timestamp ?? 0;
        return message;
    },
};
const tsProtoGlobalThis = (() => {
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
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
