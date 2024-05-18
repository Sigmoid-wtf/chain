/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Request } from "./request";
import { MsgCreateBridgeRequest, MsgCreateUnstakeRequest } from "./tx";
export const protobufPackage = "sigmoid.sigmoid";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return QueryParamsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return QueryParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAmountRequest() {
    return { senderAddress: "" };
}
export const QueryGetAmountRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderAddress !== "") {
            writer.uint32(10).string(message.senderAddress);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.senderAddress !== "") {
            obj.senderAddress = message.senderAddress;
        }
        return obj;
    },
    create(base) {
        return QueryGetAmountRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAmountRequest();
        message.senderAddress = object.senderAddress ?? "";
        return message;
    },
};
function createBaseQueryGetAmountResponse() {
    return { amount: 0 };
}
export const QueryGetAmountResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== 0) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.amount = longToNumber(reader.uint64());
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
        return { amount: isSet(object.amount) ? Number(object.amount) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount !== 0) {
            obj.amount = Math.round(message.amount);
        }
        return obj;
    },
    create(base) {
        return QueryGetAmountResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAmountResponse();
        message.amount = object.amount ?? 0;
        return message;
    },
};
function createBaseQueryGetLastProcessedRequest() {
    return {};
}
export const QueryGetLastProcessedRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return QueryGetLastProcessedRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetLastProcessedRequest();
        return message;
    },
};
function createBaseQueryGetLastProcessedResponse() {
    return { transactionId: "" };
}
export const QueryGetLastProcessedResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.transactionId !== "") {
            writer.uint32(10).string(message.transactionId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { transactionId: isSet(object.transactionId) ? String(object.transactionId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.transactionId !== "") {
            obj.transactionId = message.transactionId;
        }
        return obj;
    },
    create(base) {
        return QueryGetLastProcessedResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetLastProcessedResponse();
        message.transactionId = object.transactionId ?? "";
        return message;
    },
};
function createBaseQueryGetPendingUnstakeRequestRequest() {
    return {};
}
export const QueryGetPendingUnstakeRequestRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return QueryGetPendingUnstakeRequestRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetPendingUnstakeRequestRequest();
        return message;
    },
};
function createBaseQueryGetPendingUnstakeRequestResponse() {
    return { request: undefined };
}
export const QueryGetPendingUnstakeRequestResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.request !== undefined) {
            MsgCreateUnstakeRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { request: isSet(object.request) ? MsgCreateUnstakeRequest.fromJSON(object.request) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.request !== undefined) {
            obj.request = MsgCreateUnstakeRequest.toJSON(message.request);
        }
        return obj;
    },
    create(base) {
        return QueryGetPendingUnstakeRequestResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetPendingUnstakeRequestResponse();
        message.request = (object.request !== undefined && object.request !== null)
            ? MsgCreateUnstakeRequest.fromPartial(object.request)
            : undefined;
        return message;
    },
};
function createBaseQueryGetRaoStakedBalanceRequest() {
    return {};
}
export const QueryGetRaoStakedBalanceRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return QueryGetRaoStakedBalanceRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetRaoStakedBalanceRequest();
        return message;
    },
};
function createBaseQueryGetRaoStakedBalanceResponse() {
    return { raoStakedBalance: 0 };
}
export const QueryGetRaoStakedBalanceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.raoStakedBalance !== 0) {
            writer.uint32(8).uint64(message.raoStakedBalance);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.raoStakedBalance = longToNumber(reader.uint64());
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
        return { raoStakedBalance: isSet(object.raoStakedBalance) ? Number(object.raoStakedBalance) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.raoStakedBalance !== 0) {
            obj.raoStakedBalance = Math.round(message.raoStakedBalance);
        }
        return obj;
    },
    create(base) {
        return QueryGetRaoStakedBalanceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetRaoStakedBalanceResponse();
        message.raoStakedBalance = object.raoStakedBalance ?? 0;
        return message;
    },
};
function createBaseQueryGetSigtaoRateDRequest() {
    return {};
}
export const QueryGetSigtaoRateDRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return QueryGetSigtaoRateDRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetSigtaoRateDRequest();
        return message;
    },
};
function createBaseQueryGetSigtaoRateDResponse() {
    return { sigtaoRateD: 0 };
}
export const QueryGetSigtaoRateDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sigtaoRateD !== 0) {
            writer.uint32(8).uint64(message.sigtaoRateD);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.sigtaoRateD = longToNumber(reader.uint64());
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
        return { sigtaoRateD: isSet(object.sigtaoRateD) ? Number(object.sigtaoRateD) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.sigtaoRateD !== 0) {
            obj.sigtaoRateD = Math.round(message.sigtaoRateD);
        }
        return obj;
    },
    create(base) {
        return QueryGetSigtaoRateDResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetSigtaoRateDResponse();
        message.sigtaoRateD = object.sigtaoRateD ?? 0;
        return message;
    },
};
function createBaseQueryGetPendingBridgeRequestRequest() {
    return {};
}
export const QueryGetPendingBridgeRequestRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetPendingBridgeRequestRequest();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return QueryGetPendingBridgeRequestRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetPendingBridgeRequestRequest();
        return message;
    },
};
function createBaseQueryGetPendingBridgeRequestResponse() {
    return { request: undefined };
}
export const QueryGetPendingBridgeRequestResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.request !== undefined) {
            MsgCreateBridgeRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetPendingBridgeRequestResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.request = MsgCreateBridgeRequest.decode(reader, reader.uint32());
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
        return { request: isSet(object.request) ? MsgCreateBridgeRequest.fromJSON(object.request) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.request !== undefined) {
            obj.request = MsgCreateBridgeRequest.toJSON(message.request);
        }
        return obj;
    },
    create(base) {
        return QueryGetPendingBridgeRequestResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetPendingBridgeRequestResponse();
        message.request = (object.request !== undefined && object.request !== null)
            ? MsgCreateBridgeRequest.fromPartial(object.request)
            : undefined;
        return message;
    },
};
function createBaseQueryGetLatestProcessedEthBlockRequest() {
    return {};
}
export const QueryGetLatestProcessedEthBlockRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetLatestProcessedEthBlockRequest();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return QueryGetLatestProcessedEthBlockRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetLatestProcessedEthBlockRequest();
        return message;
    },
};
function createBaseQueryGetLatestProcessedEthBlockResponse() {
    return { blockNumber: "" };
}
export const QueryGetLatestProcessedEthBlockResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockNumber !== "") {
            writer.uint32(10).string(message.blockNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetLatestProcessedEthBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.blockNumber = reader.string();
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
        return { blockNumber: isSet(object.blockNumber) ? String(object.blockNumber) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.blockNumber !== "") {
            obj.blockNumber = message.blockNumber;
        }
        return obj;
    },
    create(base) {
        return QueryGetLatestProcessedEthBlockResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetLatestProcessedEthBlockResponse();
        message.blockNumber = object.blockNumber ?? "";
        return message;
    },
};
function createBaseQueryGetFrontPendingStakeRequestRequest() {
    return { address: "" };
}
export const QueryGetFrontPendingStakeRequestRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { address: isSet(object.address) ? String(object.address) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        return obj;
    },
    create(base) {
        return QueryGetFrontPendingStakeRequestRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetFrontPendingStakeRequestRequest();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseQueryGetFrontPendingStakeRequestResponse() {
    return { request: undefined };
}
export const QueryGetFrontPendingStakeRequestResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.request !== undefined) {
            Request.encode(message.request, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { request: isSet(object.request) ? Request.fromJSON(object.request) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.request !== undefined) {
            obj.request = Request.toJSON(message.request);
        }
        return obj;
    },
    create(base) {
        return QueryGetFrontPendingStakeRequestResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetFrontPendingStakeRequestResponse();
        message.request = (object.request !== undefined && object.request !== null)
            ? Request.fromPartial(object.request)
            : undefined;
        return message;
    },
};
function createBaseQueryGetFrontPendingUnstakeRequestRequest() {
    return { address: "" };
}
export const QueryGetFrontPendingUnstakeRequestRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { address: isSet(object.address) ? String(object.address) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        return obj;
    },
    create(base) {
        return QueryGetFrontPendingUnstakeRequestRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetFrontPendingUnstakeRequestRequest();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseQueryGetFrontPendingUnstakeRequestResponse() {
    return { request: undefined };
}
export const QueryGetFrontPendingUnstakeRequestResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.request !== undefined) {
            Request.encode(message.request, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { request: isSet(object.request) ? Request.fromJSON(object.request) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.request !== undefined) {
            obj.request = Request.toJSON(message.request);
        }
        return obj;
    },
    create(base) {
        return QueryGetFrontPendingUnstakeRequestResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetFrontPendingUnstakeRequestResponse();
        message.request = (object.request !== undefined && object.request !== null)
            ? Request.fromPartial(object.request)
            : undefined;
        return message;
    },
};
export const QueryServiceName = "sigmoid.sigmoid.Query";
export class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || QueryServiceName;
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.GetAmount = this.GetAmount.bind(this);
        this.GetLastProcessed = this.GetLastProcessed.bind(this);
        this.GetPendingUnstakeRequest = this.GetPendingUnstakeRequest.bind(this);
        this.GetRaoStakedBalance = this.GetRaoStakedBalance.bind(this);
        this.GetSigtaoRateD = this.GetSigtaoRateD.bind(this);
        this.GetPendingBridgeRequest = this.GetPendingBridgeRequest.bind(this);
        this.GetLatestProcessedEthBlock = this.GetLatestProcessedEthBlock.bind(this);
        this.GetFrontPendingStakeRequest = this.GetFrontPendingStakeRequest.bind(this);
        this.GetFrontPendingUnstakeRequest = this.GetFrontPendingUnstakeRequest.bind(this);
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
    }
    GetAmount(request) {
        const data = QueryGetAmountRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetAmount", data);
        return promise.then((data) => QueryGetAmountResponse.decode(_m0.Reader.create(data)));
    }
    GetLastProcessed(request) {
        const data = QueryGetLastProcessedRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetLastProcessed", data);
        return promise.then((data) => QueryGetLastProcessedResponse.decode(_m0.Reader.create(data)));
    }
    GetPendingUnstakeRequest(request) {
        const data = QueryGetPendingUnstakeRequestRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetPendingUnstakeRequest", data);
        return promise.then((data) => QueryGetPendingUnstakeRequestResponse.decode(_m0.Reader.create(data)));
    }
    GetRaoStakedBalance(request) {
        const data = QueryGetRaoStakedBalanceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetRaoStakedBalance", data);
        return promise.then((data) => QueryGetRaoStakedBalanceResponse.decode(_m0.Reader.create(data)));
    }
    GetSigtaoRateD(request) {
        const data = QueryGetSigtaoRateDRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetSigtaoRateD", data);
        return promise.then((data) => QueryGetSigtaoRateDResponse.decode(_m0.Reader.create(data)));
    }
    GetPendingBridgeRequest(request) {
        const data = QueryGetPendingBridgeRequestRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetPendingBridgeRequest", data);
        return promise.then((data) => QueryGetPendingBridgeRequestResponse.decode(_m0.Reader.create(data)));
    }
    GetLatestProcessedEthBlock(request) {
        const data = QueryGetLatestProcessedEthBlockRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetLatestProcessedEthBlock", data);
        return promise.then((data) => QueryGetLatestProcessedEthBlockResponse.decode(_m0.Reader.create(data)));
    }
    GetFrontPendingStakeRequest(request) {
        const data = QueryGetFrontPendingStakeRequestRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetFrontPendingStakeRequest", data);
        return promise.then((data) => QueryGetFrontPendingStakeRequestResponse.decode(_m0.Reader.create(data)));
    }
    GetFrontPendingUnstakeRequest(request) {
        const data = QueryGetFrontPendingUnstakeRequestRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetFrontPendingUnstakeRequest", data);
        return promise.then((data) => QueryGetFrontPendingUnstakeRequestResponse.decode(_m0.Reader.create(data)));
    }
}
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
