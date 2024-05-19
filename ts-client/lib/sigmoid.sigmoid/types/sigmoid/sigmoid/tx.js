/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export const protobufPackage = "sigmoid.sigmoid";
function createBaseMsgUpdateParams() {
    return { authority: "", params: undefined };
}
export const MsgUpdateParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.authority !== "") {
            obj.authority = message.authority;
        }
        if (message.params !== undefined) {
            obj.params = Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return MsgUpdateParams.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgUpdateParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
function createBaseMsgCreateRequest() {
    return { creator: "", senderAddress: "", amount: 0 };
}
export const MsgCreateRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
            amount: isSet(object.amount) ? Number(object.amount) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return MsgCreateRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateRequest();
        message.creator = object.creator ?? "";
        message.senderAddress = object.senderAddress ?? "";
        message.amount = object.amount ?? 0;
        return message;
    },
};
function createBaseMsgCreateRequestResponse() {
    return {};
}
export const MsgCreateRequestResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgCreateRequestResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateRequestResponse();
        return message;
    },
};
function createBaseMsgApproveRequest() {
    return { creator: "", senderAddress: "", transactionId: "" };
}
export const MsgApproveRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
            transactionId: isSet(object.transactionId) ? String(object.transactionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return MsgApproveRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgApproveRequest();
        message.creator = object.creator ?? "";
        message.senderAddress = object.senderAddress ?? "";
        message.transactionId = object.transactionId ?? "";
        return message;
    },
};
function createBaseMsgApproveRequestResponse() {
    return {};
}
export const MsgApproveRequestResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgApproveRequestResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgApproveRequestResponse();
        return message;
    },
};
function createBaseMsgProcessTransaction() {
    return { creator: "", transactionId: "" };
}
export const MsgProcessTransaction = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.transactionId !== "") {
            writer.uint32(18).string(message.transactionId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            transactionId: isSet(object.transactionId) ? String(object.transactionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.transactionId !== "") {
            obj.transactionId = message.transactionId;
        }
        return obj;
    },
    create(base) {
        return MsgProcessTransaction.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgProcessTransaction();
        message.creator = object.creator ?? "";
        message.transactionId = object.transactionId ?? "";
        return message;
    },
};
function createBaseMsgProcessTransactionResponse() {
    return {};
}
export const MsgProcessTransactionResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgProcessTransactionResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgProcessTransactionResponse();
        return message;
    },
};
function createBaseMsgCreateUnstakeRequest() {
    return { creator: "", unstakeAddress: "", amount: 0 };
}
export const MsgCreateUnstakeRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            unstakeAddress: isSet(object.unstakeAddress) ? String(object.unstakeAddress) : "",
            amount: isSet(object.amount) ? Number(object.amount) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return MsgCreateUnstakeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateUnstakeRequest();
        message.creator = object.creator ?? "";
        message.unstakeAddress = object.unstakeAddress ?? "";
        message.amount = object.amount ?? 0;
        return message;
    },
};
function createBaseMsgCreateUnstakeRequestResponse() {
    return {};
}
export const MsgCreateUnstakeRequestResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgCreateUnstakeRequestResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateUnstakeRequestResponse();
        return message;
    },
};
function createBaseMsgApproveUnstakeRequest() {
    return { creator: "", unstakeAddress: "", transactionId: "" };
}
export const MsgApproveUnstakeRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            unstakeAddress: isSet(object.unstakeAddress) ? String(object.unstakeAddress) : "",
            transactionId: isSet(object.transactionId) ? String(object.transactionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return MsgApproveUnstakeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgApproveUnstakeRequest();
        message.creator = object.creator ?? "";
        message.unstakeAddress = object.unstakeAddress ?? "";
        message.transactionId = object.transactionId ?? "";
        return message;
    },
};
function createBaseMsgApproveUnstakeRequestResponse() {
    return {};
}
export const MsgApproveUnstakeRequestResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgApproveUnstakeRequestResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgApproveUnstakeRequestResponse();
        return message;
    },
};
function createBaseMsgSetRaoCurrentStakedBalance() {
    return { creator: "", raoCurrentStakedBalance: 0 };
}
export const MsgSetRaoCurrentStakedBalance = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.raoCurrentStakedBalance !== 0) {
            writer.uint32(16).uint64(message.raoCurrentStakedBalance);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.raoCurrentStakedBalance = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            raoCurrentStakedBalance: isSet(object.raoCurrentStakedBalance) ? Number(object.raoCurrentStakedBalance) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.raoCurrentStakedBalance !== 0) {
            obj.raoCurrentStakedBalance = Math.round(message.raoCurrentStakedBalance);
        }
        return obj;
    },
    create(base) {
        return MsgSetRaoCurrentStakedBalance.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgSetRaoCurrentStakedBalance();
        message.creator = object.creator ?? "";
        message.raoCurrentStakedBalance = object.raoCurrentStakedBalance ?? 0;
        return message;
    },
};
function createBaseMsgSetRaoCurrentStakedBalanceResponse() {
    return {};
}
export const MsgSetRaoCurrentStakedBalanceResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgSetRaoCurrentStakedBalanceResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgSetRaoCurrentStakedBalanceResponse();
        return message;
    },
};
function createBaseMsgCreateBridgeRequest() {
    return { creator: "", erc20Address: "", amount: 0 };
}
export const MsgCreateBridgeRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            erc20Address: isSet(object.erc20Address) ? String(object.erc20Address) : "",
            amount: isSet(object.amount) ? Number(object.amount) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return MsgCreateBridgeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateBridgeRequest();
        message.creator = object.creator ?? "";
        message.erc20Address = object.erc20Address ?? "";
        message.amount = object.amount ?? 0;
        return message;
    },
};
function createBaseMsgCreateBridgeRequestResponse() {
    return {};
}
export const MsgCreateBridgeRequestResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgCreateBridgeRequestResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateBridgeRequestResponse();
        return message;
    },
};
function createBaseMsgApproveBridgeRequest() {
    return { creator: "", address: "" };
}
export const MsgApproveBridgeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.address !== "") {
            obj.address = message.address;
        }
        return obj;
    },
    create(base) {
        return MsgApproveBridgeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgApproveBridgeRequest();
        message.creator = object.creator ?? "";
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseMsgApproveBridgeRequestResponse() {
    return {};
}
export const MsgApproveBridgeRequestResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgApproveBridgeRequestResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgApproveBridgeRequestResponse();
        return message;
    },
};
function createBaseMsgIncomeBridgeRequest() {
    return { creator: "", address: "", amount: 0 };
}
export const MsgIncomeBridgeRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            address: isSet(object.address) ? String(object.address) : "",
            amount: isSet(object.amount) ? Number(object.amount) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return MsgIncomeBridgeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgIncomeBridgeRequest();
        message.creator = object.creator ?? "";
        message.address = object.address ?? "";
        message.amount = object.amount ?? 0;
        return message;
    },
};
function createBaseMsgIncomeBridgeRequestResponse() {
    return {};
}
export const MsgIncomeBridgeRequestResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgIncomeBridgeRequestResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgIncomeBridgeRequestResponse();
        return message;
    },
};
function createBaseMsgCreateRequestSigned() {
    return { creator: "", senderAddress: "", signature: "", amount: 0, timestamp: 0 };
}
export const MsgCreateRequestSigned = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.senderAddress !== "") {
            writer.uint32(18).string(message.senderAddress);
        }
        if (message.signature !== "") {
            writer.uint32(26).string(message.signature);
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
        const message = createBaseMsgCreateRequestSigned();
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
                    message.signature = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
            signature: isSet(object.signature) ? String(object.signature) : "",
            amount: isSet(object.amount) ? Number(object.amount) : 0,
            timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.senderAddress !== "") {
            obj.senderAddress = message.senderAddress;
        }
        if (message.signature !== "") {
            obj.signature = message.signature;
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
        return MsgCreateRequestSigned.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateRequestSigned();
        message.creator = object.creator ?? "";
        message.senderAddress = object.senderAddress ?? "";
        message.signature = object.signature ?? "";
        message.amount = object.amount ?? 0;
        message.timestamp = object.timestamp ?? 0;
        return message;
    },
};
function createBaseMsgCreateRequestSignedResponse() {
    return {};
}
export const MsgCreateRequestSignedResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateRequestSignedResponse();
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
        return MsgCreateRequestSignedResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateRequestSignedResponse();
        return message;
    },
};
function createBaseMsgSetLatestProcessedEthBlock() {
    return { creator: "", blockNumber: "" };
}
export const MsgSetLatestProcessedEthBlock = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.blockNumber !== "") {
            writer.uint32(18).string(message.blockNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetLatestProcessedEthBlock();
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
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            blockNumber: isSet(object.blockNumber) ? String(object.blockNumber) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.blockNumber !== "") {
            obj.blockNumber = message.blockNumber;
        }
        return obj;
    },
    create(base) {
        return MsgSetLatestProcessedEthBlock.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgSetLatestProcessedEthBlock();
        message.creator = object.creator ?? "";
        message.blockNumber = object.blockNumber ?? "";
        return message;
    },
};
function createBaseMsgSetLatestProcessedEthBlockResponse() {
    return {};
}
export const MsgSetLatestProcessedEthBlockResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetLatestProcessedEthBlockResponse();
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
        return MsgSetLatestProcessedEthBlockResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgSetLatestProcessedEthBlockResponse();
        return message;
    },
};
export const MsgServiceName = "sigmoid.sigmoid.Msg";
export class MsgClientImpl {
    constructor(rpc, opts) {
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
        this.CreateRequestSigned = this.CreateRequestSigned.bind(this);
        this.SetLatestProcessedEthBlock = this.SetLatestProcessedEthBlock.bind(this);
    }
    UpdateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
    }
    CreateRequest(request) {
        const data = MsgCreateRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateRequest", data);
        return promise.then((data) => MsgCreateRequestResponse.decode(_m0.Reader.create(data)));
    }
    ApproveRequest(request) {
        const data = MsgApproveRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ApproveRequest", data);
        return promise.then((data) => MsgApproveRequestResponse.decode(_m0.Reader.create(data)));
    }
    ProcessTransaction(request) {
        const data = MsgProcessTransaction.encode(request).finish();
        const promise = this.rpc.request(this.service, "ProcessTransaction", data);
        return promise.then((data) => MsgProcessTransactionResponse.decode(_m0.Reader.create(data)));
    }
    CreateUnstakeRequest(request) {
        const data = MsgCreateUnstakeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateUnstakeRequest", data);
        return promise.then((data) => MsgCreateUnstakeRequestResponse.decode(_m0.Reader.create(data)));
    }
    ApproveUnstakeRequest(request) {
        const data = MsgApproveUnstakeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ApproveUnstakeRequest", data);
        return promise.then((data) => MsgApproveUnstakeRequestResponse.decode(_m0.Reader.create(data)));
    }
    SetRaoCurrentStakedBalance(request) {
        const data = MsgSetRaoCurrentStakedBalance.encode(request).finish();
        const promise = this.rpc.request(this.service, "SetRaoCurrentStakedBalance", data);
        return promise.then((data) => MsgSetRaoCurrentStakedBalanceResponse.decode(_m0.Reader.create(data)));
    }
    CreateBridgeRequest(request) {
        const data = MsgCreateBridgeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateBridgeRequest", data);
        return promise.then((data) => MsgCreateBridgeRequestResponse.decode(_m0.Reader.create(data)));
    }
    ApproveBridgeRequest(request) {
        const data = MsgApproveBridgeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ApproveBridgeRequest", data);
        return promise.then((data) => MsgApproveBridgeRequestResponse.decode(_m0.Reader.create(data)));
    }
    IncomeBridgeRequest(request) {
        const data = MsgIncomeBridgeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "IncomeBridgeRequest", data);
        return promise.then((data) => MsgIncomeBridgeRequestResponse.decode(_m0.Reader.create(data)));
    }
    CreateRequestSigned(request) {
        const data = MsgCreateRequestSigned.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateRequestSigned", data);
        return promise.then((data) => MsgCreateRequestSignedResponse.decode(_m0.Reader.create(data)));
    }
    SetLatestProcessedEthBlock(request) {
        const data = MsgSetLatestProcessedEthBlock.encode(request).finish();
        const promise = this.rpc.request(this.service, "SetLatestProcessedEthBlock", data);
        return promise.then((data) => MsgSetLatestProcessedEthBlockResponse.decode(_m0.Reader.create(data)));
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
