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
export interface MsgSetRaoCurrentStakedBalance {
    creator: string;
    raoCurrentStakedBalance: number;
}
export interface MsgSetRaoCurrentStakedBalanceResponse {
}
export interface MsgCreateBridgeRequest {
    creator: string;
    erc20Address: string;
    amount: number;
}
export interface MsgCreateBridgeRequestResponse {
}
export interface MsgApproveBridgeRequest {
    creator: string;
    address: string;
}
export interface MsgApproveBridgeRequestResponse {
}
export interface MsgIncomeBridgeRequest {
    creator: string;
    address: string;
    amount: number;
}
export interface MsgIncomeBridgeRequestResponse {
}
export interface MsgCreateRequestSigned {
    creator: string;
    senderAddress: string;
    signature: string;
    amount: number;
    timestamp: number;
}
export interface MsgCreateRequestSignedResponse {
}
export interface MsgSetLatestProcessedEthBlock {
    creator: string;
    blockNumber: string;
}
export interface MsgSetLatestProcessedEthBlockResponse {
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
export declare const MsgSetRaoCurrentStakedBalance: {
    encode(message: MsgSetRaoCurrentStakedBalance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRaoCurrentStakedBalance;
    fromJSON(object: any): MsgSetRaoCurrentStakedBalance;
    toJSON(message: MsgSetRaoCurrentStakedBalance): unknown;
    create<I extends {
        creator?: string;
        raoCurrentStakedBalance?: number;
    } & {
        creator?: string;
        raoCurrentStakedBalance?: number;
    } & { [K in Exclude<keyof I, keyof MsgSetRaoCurrentStakedBalance>]: never; }>(base?: I): MsgSetRaoCurrentStakedBalance;
    fromPartial<I_1 extends {
        creator?: string;
        raoCurrentStakedBalance?: number;
    } & {
        creator?: string;
        raoCurrentStakedBalance?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgSetRaoCurrentStakedBalance>]: never; }>(object: I_1): MsgSetRaoCurrentStakedBalance;
};
export declare const MsgSetRaoCurrentStakedBalanceResponse: {
    encode(_: MsgSetRaoCurrentStakedBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRaoCurrentStakedBalanceResponse;
    fromJSON(_: any): MsgSetRaoCurrentStakedBalanceResponse;
    toJSON(_: MsgSetRaoCurrentStakedBalanceResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgSetRaoCurrentStakedBalanceResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgSetRaoCurrentStakedBalanceResponse;
};
export declare const MsgCreateBridgeRequest: {
    encode(message: MsgCreateBridgeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBridgeRequest;
    fromJSON(object: any): MsgCreateBridgeRequest;
    toJSON(message: MsgCreateBridgeRequest): unknown;
    create<I extends {
        creator?: string;
        erc20Address?: string;
        amount?: number;
    } & {
        creator?: string;
        erc20Address?: string;
        amount?: number;
    } & { [K in Exclude<keyof I, keyof MsgCreateBridgeRequest>]: never; }>(base?: I): MsgCreateBridgeRequest;
    fromPartial<I_1 extends {
        creator?: string;
        erc20Address?: string;
        amount?: number;
    } & {
        creator?: string;
        erc20Address?: string;
        amount?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCreateBridgeRequest>]: never; }>(object: I_1): MsgCreateBridgeRequest;
};
export declare const MsgCreateBridgeRequestResponse: {
    encode(_: MsgCreateBridgeRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBridgeRequestResponse;
    fromJSON(_: any): MsgCreateBridgeRequestResponse;
    toJSON(_: MsgCreateBridgeRequestResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgCreateBridgeRequestResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgCreateBridgeRequestResponse;
};
export declare const MsgApproveBridgeRequest: {
    encode(message: MsgApproveBridgeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveBridgeRequest;
    fromJSON(object: any): MsgApproveBridgeRequest;
    toJSON(message: MsgApproveBridgeRequest): unknown;
    create<I extends {
        creator?: string;
        address?: string;
    } & {
        creator?: string;
        address?: string;
    } & { [K in Exclude<keyof I, keyof MsgApproveBridgeRequest>]: never; }>(base?: I): MsgApproveBridgeRequest;
    fromPartial<I_1 extends {
        creator?: string;
        address?: string;
    } & {
        creator?: string;
        address?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgApproveBridgeRequest>]: never; }>(object: I_1): MsgApproveBridgeRequest;
};
export declare const MsgApproveBridgeRequestResponse: {
    encode(_: MsgApproveBridgeRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveBridgeRequestResponse;
    fromJSON(_: any): MsgApproveBridgeRequestResponse;
    toJSON(_: MsgApproveBridgeRequestResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgApproveBridgeRequestResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgApproveBridgeRequestResponse;
};
export declare const MsgIncomeBridgeRequest: {
    encode(message: MsgIncomeBridgeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncomeBridgeRequest;
    fromJSON(object: any): MsgIncomeBridgeRequest;
    toJSON(message: MsgIncomeBridgeRequest): unknown;
    create<I extends {
        creator?: string;
        address?: string;
        amount?: number;
    } & {
        creator?: string;
        address?: string;
        amount?: number;
    } & { [K in Exclude<keyof I, keyof MsgIncomeBridgeRequest>]: never; }>(base?: I): MsgIncomeBridgeRequest;
    fromPartial<I_1 extends {
        creator?: string;
        address?: string;
        amount?: number;
    } & {
        creator?: string;
        address?: string;
        amount?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgIncomeBridgeRequest>]: never; }>(object: I_1): MsgIncomeBridgeRequest;
};
export declare const MsgIncomeBridgeRequestResponse: {
    encode(_: MsgIncomeBridgeRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncomeBridgeRequestResponse;
    fromJSON(_: any): MsgIncomeBridgeRequestResponse;
    toJSON(_: MsgIncomeBridgeRequestResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgIncomeBridgeRequestResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgIncomeBridgeRequestResponse;
};
export declare const MsgCreateRequestSigned: {
    encode(message: MsgCreateRequestSigned, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRequestSigned;
    fromJSON(object: any): MsgCreateRequestSigned;
    toJSON(message: MsgCreateRequestSigned): unknown;
    create<I extends {
        creator?: string;
        senderAddress?: string;
        signature?: string;
        amount?: number;
        timestamp?: number;
    } & {
        creator?: string;
        senderAddress?: string;
        signature?: string;
        amount?: number;
        timestamp?: number;
    } & { [K in Exclude<keyof I, keyof MsgCreateRequestSigned>]: never; }>(base?: I): MsgCreateRequestSigned;
    fromPartial<I_1 extends {
        creator?: string;
        senderAddress?: string;
        signature?: string;
        amount?: number;
        timestamp?: number;
    } & {
        creator?: string;
        senderAddress?: string;
        signature?: string;
        amount?: number;
        timestamp?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCreateRequestSigned>]: never; }>(object: I_1): MsgCreateRequestSigned;
};
export declare const MsgCreateRequestSignedResponse: {
    encode(_: MsgCreateRequestSignedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRequestSignedResponse;
    fromJSON(_: any): MsgCreateRequestSignedResponse;
    toJSON(_: MsgCreateRequestSignedResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgCreateRequestSignedResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgCreateRequestSignedResponse;
};
export declare const MsgSetLatestProcessedEthBlock: {
    encode(message: MsgSetLatestProcessedEthBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLatestProcessedEthBlock;
    fromJSON(object: any): MsgSetLatestProcessedEthBlock;
    toJSON(message: MsgSetLatestProcessedEthBlock): unknown;
    create<I extends {
        creator?: string;
        blockNumber?: string;
    } & {
        creator?: string;
        blockNumber?: string;
    } & { [K in Exclude<keyof I, keyof MsgSetLatestProcessedEthBlock>]: never; }>(base?: I): MsgSetLatestProcessedEthBlock;
    fromPartial<I_1 extends {
        creator?: string;
        blockNumber?: string;
    } & {
        creator?: string;
        blockNumber?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgSetLatestProcessedEthBlock>]: never; }>(object: I_1): MsgSetLatestProcessedEthBlock;
};
export declare const MsgSetLatestProcessedEthBlockResponse: {
    encode(_: MsgSetLatestProcessedEthBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLatestProcessedEthBlockResponse;
    fromJSON(_: any): MsgSetLatestProcessedEthBlockResponse;
    toJSON(_: MsgSetLatestProcessedEthBlockResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgSetLatestProcessedEthBlockResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgSetLatestProcessedEthBlockResponse;
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
    SetRaoCurrentStakedBalance(request: MsgSetRaoCurrentStakedBalance): Promise<MsgSetRaoCurrentStakedBalanceResponse>;
    CreateBridgeRequest(request: MsgCreateBridgeRequest): Promise<MsgCreateBridgeRequestResponse>;
    ApproveBridgeRequest(request: MsgApproveBridgeRequest): Promise<MsgApproveBridgeRequestResponse>;
    IncomeBridgeRequest(request: MsgIncomeBridgeRequest): Promise<MsgIncomeBridgeRequestResponse>;
    CreateRequestSigned(request: MsgCreateRequestSigned): Promise<MsgCreateRequestSignedResponse>;
    SetLatestProcessedEthBlock(request: MsgSetLatestProcessedEthBlock): Promise<MsgSetLatestProcessedEthBlockResponse>;
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
    SetRaoCurrentStakedBalance(request: MsgSetRaoCurrentStakedBalance): Promise<MsgSetRaoCurrentStakedBalanceResponse>;
    CreateBridgeRequest(request: MsgCreateBridgeRequest): Promise<MsgCreateBridgeRequestResponse>;
    ApproveBridgeRequest(request: MsgApproveBridgeRequest): Promise<MsgApproveBridgeRequestResponse>;
    IncomeBridgeRequest(request: MsgIncomeBridgeRequest): Promise<MsgIncomeBridgeRequestResponse>;
    CreateRequestSigned(request: MsgCreateRequestSigned): Promise<MsgCreateRequestSignedResponse>;
    SetLatestProcessedEthBlock(request: MsgSetLatestProcessedEthBlock): Promise<MsgSetLatestProcessedEthBlockResponse>;
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
