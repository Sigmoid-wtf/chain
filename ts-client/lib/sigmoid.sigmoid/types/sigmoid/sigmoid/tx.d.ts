import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "sigmoid.sigmoid";
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
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    create<I extends {
        authority?: string;
        params?: {};
    } & {
        authority?: string;
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof MsgUpdateParams>]: never; }>(base?: I): MsgUpdateParams;
    fromPartial<I_1 extends {
        authority?: string;
        params?: {};
    } & {
        authority?: string;
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof MsgUpdateParams>]: never; }>(object: I_1): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgUpdateParamsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgUpdateParamsResponse;
};
export declare const MsgCreateRequest: {
    encode(message: MsgCreateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRequest;
    fromJSON(object: any): MsgCreateRequest;
    toJSON(message: MsgCreateRequest): unknown;
    create<I extends {
        creator?: string;
        senderAddress?: string;
        amount?: number;
    } & {
        creator?: string;
        senderAddress?: string;
        amount?: number;
    } & { [K in Exclude<keyof I, keyof MsgCreateRequest>]: never; }>(base?: I): MsgCreateRequest;
    fromPartial<I_1 extends {
        creator?: string;
        senderAddress?: string;
        amount?: number;
    } & {
        creator?: string;
        senderAddress?: string;
        amount?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCreateRequest>]: never; }>(object: I_1): MsgCreateRequest;
};
export declare const MsgCreateRequestResponse: {
    encode(_: MsgCreateRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRequestResponse;
    fromJSON(_: any): MsgCreateRequestResponse;
    toJSON(_: MsgCreateRequestResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgCreateRequestResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgCreateRequestResponse;
};
export declare const MsgApproveRequest: {
    encode(message: MsgApproveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveRequest;
    fromJSON(object: any): MsgApproveRequest;
    toJSON(message: MsgApproveRequest): unknown;
    create<I extends {
        creator?: string;
        senderAddress?: string;
        transactionId?: string;
    } & {
        creator?: string;
        senderAddress?: string;
        transactionId?: string;
    } & { [K in Exclude<keyof I, keyof MsgApproveRequest>]: never; }>(base?: I): MsgApproveRequest;
    fromPartial<I_1 extends {
        creator?: string;
        senderAddress?: string;
        transactionId?: string;
    } & {
        creator?: string;
        senderAddress?: string;
        transactionId?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgApproveRequest>]: never; }>(object: I_1): MsgApproveRequest;
};
export declare const MsgApproveRequestResponse: {
    encode(_: MsgApproveRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveRequestResponse;
    fromJSON(_: any): MsgApproveRequestResponse;
    toJSON(_: MsgApproveRequestResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgApproveRequestResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgApproveRequestResponse;
};
export declare const MsgProcessTransaction: {
    encode(message: MsgProcessTransaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgProcessTransaction;
    fromJSON(object: any): MsgProcessTransaction;
    toJSON(message: MsgProcessTransaction): unknown;
    create<I extends {
        creator?: string;
        transactionId?: string;
    } & {
        creator?: string;
        transactionId?: string;
    } & { [K in Exclude<keyof I, keyof MsgProcessTransaction>]: never; }>(base?: I): MsgProcessTransaction;
    fromPartial<I_1 extends {
        creator?: string;
        transactionId?: string;
    } & {
        creator?: string;
        transactionId?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgProcessTransaction>]: never; }>(object: I_1): MsgProcessTransaction;
};
export declare const MsgProcessTransactionResponse: {
    encode(_: MsgProcessTransactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgProcessTransactionResponse;
    fromJSON(_: any): MsgProcessTransactionResponse;
    toJSON(_: MsgProcessTransactionResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgProcessTransactionResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgProcessTransactionResponse;
};
export declare const MsgCreateUnstakeRequest: {
    encode(message: MsgCreateUnstakeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUnstakeRequest;
    fromJSON(object: any): MsgCreateUnstakeRequest;
    toJSON(message: MsgCreateUnstakeRequest): unknown;
    create<I extends {
        creator?: string;
        unstakeAddress?: string;
        amount?: number;
    } & {
        creator?: string;
        unstakeAddress?: string;
        amount?: number;
    } & { [K in Exclude<keyof I, keyof MsgCreateUnstakeRequest>]: never; }>(base?: I): MsgCreateUnstakeRequest;
    fromPartial<I_1 extends {
        creator?: string;
        unstakeAddress?: string;
        amount?: number;
    } & {
        creator?: string;
        unstakeAddress?: string;
        amount?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCreateUnstakeRequest>]: never; }>(object: I_1): MsgCreateUnstakeRequest;
};
export declare const MsgCreateUnstakeRequestResponse: {
    encode(_: MsgCreateUnstakeRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUnstakeRequestResponse;
    fromJSON(_: any): MsgCreateUnstakeRequestResponse;
    toJSON(_: MsgCreateUnstakeRequestResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgCreateUnstakeRequestResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgCreateUnstakeRequestResponse;
};
export declare const MsgApproveUnstakeRequest: {
    encode(message: MsgApproveUnstakeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveUnstakeRequest;
    fromJSON(object: any): MsgApproveUnstakeRequest;
    toJSON(message: MsgApproveUnstakeRequest): unknown;
    create<I extends {
        creator?: string;
        unstakeAddress?: string;
        transactionId?: string;
    } & {
        creator?: string;
        unstakeAddress?: string;
        transactionId?: string;
    } & { [K in Exclude<keyof I, keyof MsgApproveUnstakeRequest>]: never; }>(base?: I): MsgApproveUnstakeRequest;
    fromPartial<I_1 extends {
        creator?: string;
        unstakeAddress?: string;
        transactionId?: string;
    } & {
        creator?: string;
        unstakeAddress?: string;
        transactionId?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgApproveUnstakeRequest>]: never; }>(object: I_1): MsgApproveUnstakeRequest;
};
export declare const MsgApproveUnstakeRequestResponse: {
    encode(_: MsgApproveUnstakeRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveUnstakeRequestResponse;
    fromJSON(_: any): MsgApproveUnstakeRequestResponse;
    toJSON(_: MsgApproveUnstakeRequestResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgApproveUnstakeRequestResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgApproveUnstakeRequestResponse;
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
}
export declare const MsgServiceName = "sigmoid.sigmoid.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    CreateRequest(request: MsgCreateRequest): Promise<MsgCreateRequestResponse>;
    ApproveRequest(request: MsgApproveRequest): Promise<MsgApproveRequestResponse>;
    ProcessTransaction(request: MsgProcessTransaction): Promise<MsgProcessTransactionResponse>;
    CreateUnstakeRequest(request: MsgCreateUnstakeRequest): Promise<MsgCreateUnstakeRequestResponse>;
    ApproveUnstakeRequest(request: MsgApproveUnstakeRequest): Promise<MsgApproveUnstakeRequestResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
