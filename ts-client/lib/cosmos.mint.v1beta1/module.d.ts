import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgUpdateParamsResponse } from "./types/cosmos/mint/v1beta1/tx";
import { GenesisState } from "./types/cosmos/mint/v1beta1/genesis";
import { QueryParamsResponse } from "./types/cosmos/mint/v1beta1/query";
import { QueryAnnualProvisionsResponse } from "./types/cosmos/mint/v1beta1/query";
import { QueryInflationResponse } from "./types/cosmos/mint/v1beta1/query";
import { Minter } from "./types/cosmos/mint/v1beta1/mint";
import { Params } from "./types/cosmos/mint/v1beta1/mint";
import { QueryParamsRequest } from "./types/cosmos/mint/v1beta1/query";
import { QueryInflationRequest } from "./types/cosmos/mint/v1beta1/query";
import { MsgUpdateParams } from "./types/cosmos/mint/v1beta1/tx";
import { QueryAnnualProvisionsRequest } from "./types/cosmos/mint/v1beta1/query";
export { MsgUpdateParamsResponse, GenesisState, QueryParamsResponse, QueryAnnualProvisionsResponse, QueryInflationResponse, Minter, Params, QueryParamsRequest, QueryInflationRequest, MsgUpdateParams, QueryAnnualProvisionsRequest };
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAnnualProvisionsResponseParams = {
    value: QueryAnnualProvisionsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryInflationResponseParams = {
    value: QueryInflationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMinterParams = {
    value: Minter;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryInflationRequestParams = {
    value: QueryInflationRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAnnualProvisionsRequestParams = {
    value: QueryAnnualProvisionsRequest;
    fee?: StdFee;
    memo?: string;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryAnnualProvisionsResponseParams = {
    value: QueryAnnualProvisionsResponse;
};
type queryInflationResponseParams = {
    value: QueryInflationResponse;
};
type minterParams = {
    value: Minter;
};
type paramsParams = {
    value: Params;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryInflationRequestParams = {
    value: QueryInflationRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryAnnualProvisionsRequestParams = {
    value: QueryAnnualProvisionsRequest;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryAnnualProvisionsResponse({ value, fee, memo }: sendQueryAnnualProvisionsResponseParams): Promise<DeliverTxResponse>;
    sendQueryInflationResponse({ value, fee, memo }: sendQueryInflationResponseParams): Promise<DeliverTxResponse>;
    sendMinter({ value, fee, memo }: sendMinterParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryInflationRequest({ value, fee, memo }: sendQueryInflationRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryAnnualProvisionsRequest({ value, fee, memo }: sendQueryAnnualProvisionsRequestParams): Promise<DeliverTxResponse>;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryAnnualProvisionsResponse({ value }: queryAnnualProvisionsResponseParams): EncodeObject;
    queryInflationResponse({ value }: queryInflationResponseParams): EncodeObject;
    minter({ value }: minterParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryInflationRequest({ value }: queryInflationRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryAnnualProvisionsRequest({ value }: queryAnnualProvisionsRequestParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        CosmosMintV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
