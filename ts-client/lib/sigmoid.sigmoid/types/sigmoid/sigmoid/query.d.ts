import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { MsgCreateUnstakeRequest } from "./tx";
export declare const protobufPackage = "sigmoid.sigmoid";
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
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create<I extends {
        params?: {};
    } & {
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, "params">]: never; }>(base?: I): QueryParamsResponse;
    fromPartial<I_1 extends {
        params?: {};
    } & {
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "params">]: never; }>(object: I_1): QueryParamsResponse;
};
export declare const QueryGetAmountRequest: {
    encode(message: QueryGetAmountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAmountRequest;
    fromJSON(object: any): QueryGetAmountRequest;
    toJSON(message: QueryGetAmountRequest): unknown;
    create<I extends {
        senderAddress?: string;
    } & {
        senderAddress?: string;
    } & { [K in Exclude<keyof I, "senderAddress">]: never; }>(base?: I): QueryGetAmountRequest;
    fromPartial<I_1 extends {
        senderAddress?: string;
    } & {
        senderAddress?: string;
    } & { [K_1 in Exclude<keyof I_1, "senderAddress">]: never; }>(object: I_1): QueryGetAmountRequest;
};
export declare const QueryGetAmountResponse: {
    encode(message: QueryGetAmountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAmountResponse;
    fromJSON(object: any): QueryGetAmountResponse;
    toJSON(message: QueryGetAmountResponse): unknown;
    create<I extends {
        amount?: number;
    } & {
        amount?: number;
    } & { [K in Exclude<keyof I, "amount">]: never; }>(base?: I): QueryGetAmountResponse;
    fromPartial<I_1 extends {
        amount?: number;
    } & {
        amount?: number;
    } & { [K_1 in Exclude<keyof I_1, "amount">]: never; }>(object: I_1): QueryGetAmountResponse;
};
export declare const QueryGetLastProcessedRequest: {
    encode(_: QueryGetLastProcessedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLastProcessedRequest;
    fromJSON(_: any): QueryGetLastProcessedRequest;
    toJSON(_: QueryGetLastProcessedRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryGetLastProcessedRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryGetLastProcessedRequest;
};
export declare const QueryGetLastProcessedResponse: {
    encode(message: QueryGetLastProcessedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLastProcessedResponse;
    fromJSON(object: any): QueryGetLastProcessedResponse;
    toJSON(message: QueryGetLastProcessedResponse): unknown;
    create<I extends {
        transactionId?: string;
    } & {
        transactionId?: string;
    } & { [K in Exclude<keyof I, "transactionId">]: never; }>(base?: I): QueryGetLastProcessedResponse;
    fromPartial<I_1 extends {
        transactionId?: string;
    } & {
        transactionId?: string;
    } & { [K_1 in Exclude<keyof I_1, "transactionId">]: never; }>(object: I_1): QueryGetLastProcessedResponse;
};
export declare const QueryGetPendingUnstakeRequestRequest: {
    encode(_: QueryGetPendingUnstakeRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingUnstakeRequestRequest;
    fromJSON(_: any): QueryGetPendingUnstakeRequestRequest;
    toJSON(_: QueryGetPendingUnstakeRequestRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryGetPendingUnstakeRequestRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryGetPendingUnstakeRequestRequest;
};
export declare const QueryGetPendingUnstakeRequestResponse: {
    encode(message: QueryGetPendingUnstakeRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingUnstakeRequestResponse;
    fromJSON(object: any): QueryGetPendingUnstakeRequestResponse;
    toJSON(message: QueryGetPendingUnstakeRequestResponse): unknown;
    create<I extends {
        request?: {
            creator?: string;
            unstakeAddress?: string;
            amount?: number;
        };
    } & {
        request?: {
            creator?: string;
            unstakeAddress?: string;
            amount?: number;
        } & {
            creator?: string;
            unstakeAddress?: string;
            amount?: number;
        } & { [K in Exclude<keyof I["request"], keyof MsgCreateUnstakeRequest>]: never; };
    } & { [K_1 in Exclude<keyof I, "request">]: never; }>(base?: I): QueryGetPendingUnstakeRequestResponse;
    fromPartial<I_1 extends {
        request?: {
            creator?: string;
            unstakeAddress?: string;
            amount?: number;
        };
    } & {
        request?: {
            creator?: string;
            unstakeAddress?: string;
            amount?: number;
        } & {
            creator?: string;
            unstakeAddress?: string;
            amount?: number;
        } & { [K_2 in Exclude<keyof I_1["request"], keyof MsgCreateUnstakeRequest>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "request">]: never; }>(object: I_1): QueryGetPendingUnstakeRequestResponse;
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
    GetPendingUnstakeRequest(request: QueryGetPendingUnstakeRequestRequest): Promise<QueryGetPendingUnstakeRequestResponse>;
}
export declare const QueryServiceName = "sigmoid.sigmoid.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    GetAmount(request: QueryGetAmountRequest): Promise<QueryGetAmountResponse>;
    GetLastProcessed(request: QueryGetLastProcessedRequest): Promise<QueryGetLastProcessedResponse>;
    GetPendingUnstakeRequest(request: QueryGetPendingUnstakeRequestRequest): Promise<QueryGetPendingUnstakeRequestResponse>;
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
