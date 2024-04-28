import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "sigmoid.sigmoid";
export interface Request {
    senderAddress: string;
    mintAddress: string;
    status: number;
    amount: number;
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    create<I extends {
        senderAddress?: string;
        mintAddress?: string;
        status?: number;
        amount?: number;
    } & {
        senderAddress?: string;
        mintAddress?: string;
        status?: number;
        amount?: number;
    } & { [K in Exclude<keyof I, keyof Request>]: never; }>(base?: I): Request;
    fromPartial<I_1 extends {
        senderAddress?: string;
        mintAddress?: string;
        status?: number;
        amount?: number;
    } & {
        senderAddress?: string;
        mintAddress?: string;
        status?: number;
        amount?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Request>]: never; }>(object: I_1): Request;
};
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
