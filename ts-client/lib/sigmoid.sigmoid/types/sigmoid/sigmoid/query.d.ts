import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Request } from "./request";
import { MsgCreateBridgeRequest, MsgCreateUnstakeRequest } from "./tx";
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
export interface QueryGetPendingBridgeRequestRequest {
}
export interface QueryGetPendingBridgeRequestResponse {
    request: MsgCreateBridgeRequest | undefined;
}
export interface QueryGetLatestProcessedEthBlockRequest {
}
export interface QueryGetLatestProcessedEthBlockResponse {
    blockNumber: string;
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
export declare const QueryGetRaoStakedBalanceRequest: {
    encode(_: QueryGetRaoStakedBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRaoStakedBalanceRequest;
    fromJSON(_: any): QueryGetRaoStakedBalanceRequest;
    toJSON(_: QueryGetRaoStakedBalanceRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryGetRaoStakedBalanceRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryGetRaoStakedBalanceRequest;
};
export declare const QueryGetRaoStakedBalanceResponse: {
    encode(message: QueryGetRaoStakedBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRaoStakedBalanceResponse;
    fromJSON(object: any): QueryGetRaoStakedBalanceResponse;
    toJSON(message: QueryGetRaoStakedBalanceResponse): unknown;
    create<I extends {
        raoStakedBalance?: number;
    } & {
        raoStakedBalance?: number;
    } & { [K in Exclude<keyof I, "raoStakedBalance">]: never; }>(base?: I): QueryGetRaoStakedBalanceResponse;
    fromPartial<I_1 extends {
        raoStakedBalance?: number;
    } & {
        raoStakedBalance?: number;
    } & { [K_1 in Exclude<keyof I_1, "raoStakedBalance">]: never; }>(object: I_1): QueryGetRaoStakedBalanceResponse;
};
export declare const QueryGetSigtaoRateDRequest: {
    encode(_: QueryGetSigtaoRateDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSigtaoRateDRequest;
    fromJSON(_: any): QueryGetSigtaoRateDRequest;
    toJSON(_: QueryGetSigtaoRateDRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryGetSigtaoRateDRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryGetSigtaoRateDRequest;
};
export declare const QueryGetSigtaoRateDResponse: {
    encode(message: QueryGetSigtaoRateDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSigtaoRateDResponse;
    fromJSON(object: any): QueryGetSigtaoRateDResponse;
    toJSON(message: QueryGetSigtaoRateDResponse): unknown;
    create<I extends {
        sigtaoRateD?: number;
    } & {
        sigtaoRateD?: number;
    } & { [K in Exclude<keyof I, "sigtaoRateD">]: never; }>(base?: I): QueryGetSigtaoRateDResponse;
    fromPartial<I_1 extends {
        sigtaoRateD?: number;
    } & {
        sigtaoRateD?: number;
    } & { [K_1 in Exclude<keyof I_1, "sigtaoRateD">]: never; }>(object: I_1): QueryGetSigtaoRateDResponse;
};
export declare const QueryGetPendingBridgeRequestRequest: {
    encode(_: QueryGetPendingBridgeRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingBridgeRequestRequest;
    fromJSON(_: any): QueryGetPendingBridgeRequestRequest;
    toJSON(_: QueryGetPendingBridgeRequestRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryGetPendingBridgeRequestRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryGetPendingBridgeRequestRequest;
};
export declare const QueryGetPendingBridgeRequestResponse: {
    encode(message: QueryGetPendingBridgeRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingBridgeRequestResponse;
    fromJSON(object: any): QueryGetPendingBridgeRequestResponse;
    toJSON(message: QueryGetPendingBridgeRequestResponse): unknown;
    create<I extends {
        request?: {
            creator?: string;
            erc20Address?: string;
            amount?: number;
        };
    } & {
        request?: {
            creator?: string;
            erc20Address?: string;
            amount?: number;
        } & {
            creator?: string;
            erc20Address?: string;
            amount?: number;
        } & { [K in Exclude<keyof I["request"], keyof MsgCreateBridgeRequest>]: never; };
    } & { [K_1 in Exclude<keyof I, "request">]: never; }>(base?: I): QueryGetPendingBridgeRequestResponse;
    fromPartial<I_1 extends {
        request?: {
            creator?: string;
            erc20Address?: string;
            amount?: number;
        };
    } & {
        request?: {
            creator?: string;
            erc20Address?: string;
            amount?: number;
        } & {
            creator?: string;
            erc20Address?: string;
            amount?: number;
        } & { [K_2 in Exclude<keyof I_1["request"], keyof MsgCreateBridgeRequest>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "request">]: never; }>(object: I_1): QueryGetPendingBridgeRequestResponse;
};
export declare const QueryGetLatestProcessedEthBlockRequest: {
    encode(_: QueryGetLatestProcessedEthBlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLatestProcessedEthBlockRequest;
    fromJSON(_: any): QueryGetLatestProcessedEthBlockRequest;
    toJSON(_: QueryGetLatestProcessedEthBlockRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryGetLatestProcessedEthBlockRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryGetLatestProcessedEthBlockRequest;
};
export declare const QueryGetLatestProcessedEthBlockResponse: {
    encode(message: QueryGetLatestProcessedEthBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLatestProcessedEthBlockResponse;
    fromJSON(object: any): QueryGetLatestProcessedEthBlockResponse;
    toJSON(message: QueryGetLatestProcessedEthBlockResponse): unknown;
    create<I extends {
        blockNumber?: string;
    } & {
        blockNumber?: string;
    } & { [K in Exclude<keyof I, "blockNumber">]: never; }>(base?: I): QueryGetLatestProcessedEthBlockResponse;
    fromPartial<I_1 extends {
        blockNumber?: string;
    } & {
        blockNumber?: string;
    } & { [K_1 in Exclude<keyof I_1, "blockNumber">]: never; }>(object: I_1): QueryGetLatestProcessedEthBlockResponse;
};
export declare const QueryGetFrontPendingStakeRequestRequest: {
    encode(message: QueryGetFrontPendingStakeRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFrontPendingStakeRequestRequest;
    fromJSON(object: any): QueryGetFrontPendingStakeRequestRequest;
    toJSON(message: QueryGetFrontPendingStakeRequestRequest): unknown;
    create<I extends {
        address?: string;
    } & {
        address?: string;
    } & { [K in Exclude<keyof I, "address">]: never; }>(base?: I): QueryGetFrontPendingStakeRequestRequest;
    fromPartial<I_1 extends {
        address?: string;
    } & {
        address?: string;
    } & { [K_1 in Exclude<keyof I_1, "address">]: never; }>(object: I_1): QueryGetFrontPendingStakeRequestRequest;
};
export declare const QueryGetFrontPendingStakeRequestResponse: {
    encode(message: QueryGetFrontPendingStakeRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFrontPendingStakeRequestResponse;
    fromJSON(object: any): QueryGetFrontPendingStakeRequestResponse;
    toJSON(message: QueryGetFrontPendingStakeRequestResponse): unknown;
    create<I extends {
        request?: {
            senderAddress?: string;
            mintAddress?: string;
            status?: number;
            amount?: number;
            timestamp?: number;
        };
    } & {
        request?: {
            senderAddress?: string;
            mintAddress?: string;
            status?: number;
            amount?: number;
            timestamp?: number;
        } & {
            senderAddress?: string;
            mintAddress?: string;
            status?: number;
            amount?: number;
            timestamp?: number;
        } & { [K in Exclude<keyof I["request"], keyof Request>]: never; };
    } & { [K_1 in Exclude<keyof I, "request">]: never; }>(base?: I): QueryGetFrontPendingStakeRequestResponse;
    fromPartial<I_1 extends {
        request?: {
            senderAddress?: string;
            mintAddress?: string;
            status?: number;
            amount?: number;
            timestamp?: number;
        };
    } & {
        request?: {
            senderAddress?: string;
            mintAddress?: string;
            status?: number;
            amount?: number;
            timestamp?: number;
        } & {
            senderAddress?: string;
            mintAddress?: string;
            status?: number;
            amount?: number;
            timestamp?: number;
        } & { [K_2 in Exclude<keyof I_1["request"], keyof Request>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "request">]: never; }>(object: I_1): QueryGetFrontPendingStakeRequestResponse;
};
export declare const QueryGetFrontPendingUnstakeRequestRequest: {
    encode(message: QueryGetFrontPendingUnstakeRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFrontPendingUnstakeRequestRequest;
    fromJSON(object: any): QueryGetFrontPendingUnstakeRequestRequest;
    toJSON(message: QueryGetFrontPendingUnstakeRequestRequest): unknown;
    create<I extends {
        address?: string;
    } & {
        address?: string;
    } & { [K in Exclude<keyof I, "address">]: never; }>(base?: I): QueryGetFrontPendingUnstakeRequestRequest;
    fromPartial<I_1 extends {
        address?: string;
    } & {
        address?: string;
    } & { [K_1 in Exclude<keyof I_1, "address">]: never; }>(object: I_1): QueryGetFrontPendingUnstakeRequestRequest;
};
export declare const QueryGetFrontPendingUnstakeRequestResponse: {
    encode(message: QueryGetFrontPendingUnstakeRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFrontPendingUnstakeRequestResponse;
    fromJSON(object: any): QueryGetFrontPendingUnstakeRequestResponse;
    toJSON(message: QueryGetFrontPendingUnstakeRequestResponse): unknown;
    create<I extends {
        request?: {
            senderAddress?: string;
            mintAddress?: string;
            status?: number;
            amount?: number;
            timestamp?: number;
        };
    } & {
        request?: {
            senderAddress?: string;
            mintAddress?: string;
            status?: number;
            amount?: number;
            timestamp?: number;
        } & {
            senderAddress?: string;
            mintAddress?: string;
            status?: number;
            amount?: number;
            timestamp?: number;
        } & { [K in Exclude<keyof I["request"], keyof Request>]: never; };
    } & { [K_1 in Exclude<keyof I, "request">]: never; }>(base?: I): QueryGetFrontPendingUnstakeRequestResponse;
    fromPartial<I_1 extends {
        request?: {
            senderAddress?: string;
            mintAddress?: string;
            status?: number;
            amount?: number;
            timestamp?: number;
        };
    } & {
        request?: {
            senderAddress?: string;
            mintAddress?: string;
            status?: number;
            amount?: number;
            timestamp?: number;
        } & {
            senderAddress?: string;
            mintAddress?: string;
            status?: number;
            amount?: number;
            timestamp?: number;
        } & { [K_2 in Exclude<keyof I_1["request"], keyof Request>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "request">]: never; }>(object: I_1): QueryGetFrontPendingUnstakeRequestResponse;
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
    /** Queries a list of GetRaoStakedBalance items. */
    GetRaoStakedBalance(request: QueryGetRaoStakedBalanceRequest): Promise<QueryGetRaoStakedBalanceResponse>;
    /** Queries a list of GetSigtaoRateD items. */
    GetSigtaoRateD(request: QueryGetSigtaoRateDRequest): Promise<QueryGetSigtaoRateDResponse>;
    /** Queries a list of GetPendingBridgeRequest items. */
    GetPendingBridgeRequest(request: QueryGetPendingBridgeRequestRequest): Promise<QueryGetPendingBridgeRequestResponse>;
    /** Queries a list of GetLatestProcessedEthBlock items. */
    GetLatestProcessedEthBlock(request: QueryGetLatestProcessedEthBlockRequest): Promise<QueryGetLatestProcessedEthBlockResponse>;
    /** Queries a list of GetFrontPendingStakeRequest items. */
    GetFrontPendingStakeRequest(request: QueryGetFrontPendingStakeRequestRequest): Promise<QueryGetFrontPendingStakeRequestResponse>;
    /** Queries a list of GetFrontPendingUnstakeRequest items. */
    GetFrontPendingUnstakeRequest(request: QueryGetFrontPendingUnstakeRequestRequest): Promise<QueryGetFrontPendingUnstakeRequestResponse>;
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
    GetRaoStakedBalance(request: QueryGetRaoStakedBalanceRequest): Promise<QueryGetRaoStakedBalanceResponse>;
    GetSigtaoRateD(request: QueryGetSigtaoRateDRequest): Promise<QueryGetSigtaoRateDResponse>;
    GetPendingBridgeRequest(request: QueryGetPendingBridgeRequestRequest): Promise<QueryGetPendingBridgeRequestResponse>;
    GetLatestProcessedEthBlock(request: QueryGetLatestProcessedEthBlockRequest): Promise<QueryGetLatestProcessedEthBlockResponse>;
    GetFrontPendingStakeRequest(request: QueryGetFrontPendingStakeRequestRequest): Promise<QueryGetFrontPendingStakeRequestResponse>;
    GetFrontPendingUnstakeRequest(request: QueryGetFrontPendingUnstakeRequestRequest): Promise<QueryGetFrontPendingUnstakeRequestResponse>;
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
