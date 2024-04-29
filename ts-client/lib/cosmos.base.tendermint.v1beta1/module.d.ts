import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { GetLatestValidatorSetResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ABCIQueryResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestValidatorSetRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Header } from "./types/cosmos/base/tendermint/v1beta1/types";
import { GetValidatorSetByHeightResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestBlockResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetSyncingResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetNodeInfoRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetNodeInfoResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { VersionInfo } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ABCIQueryRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ProofOps } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetValidatorSetByHeightRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetBlockByHeightResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestBlockRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Module } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ProofOp } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Validator } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetBlockByHeightRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetSyncingRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Block } from "./types/cosmos/base/tendermint/v1beta1/types";
export { GetLatestValidatorSetResponse, ABCIQueryResponse, GetLatestValidatorSetRequest, Header, GetValidatorSetByHeightResponse, GetLatestBlockResponse, GetSyncingResponse, GetNodeInfoRequest, GetNodeInfoResponse, VersionInfo, ABCIQueryRequest, ProofOps, GetValidatorSetByHeightRequest, GetBlockByHeightResponse, GetLatestBlockRequest, Module, ProofOp, Validator, GetBlockByHeightRequest, GetSyncingRequest, Block };
type sendGetLatestValidatorSetResponseParams = {
    value: GetLatestValidatorSetResponse;
    fee?: StdFee;
    memo?: string;
};
type sendABCIQueryResponseParams = {
    value: ABCIQueryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGetLatestValidatorSetRequestParams = {
    value: GetLatestValidatorSetRequest;
    fee?: StdFee;
    memo?: string;
};
type sendHeaderParams = {
    value: Header;
    fee?: StdFee;
    memo?: string;
};
type sendGetValidatorSetByHeightResponseParams = {
    value: GetValidatorSetByHeightResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGetLatestBlockResponseParams = {
    value: GetLatestBlockResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGetSyncingResponseParams = {
    value: GetSyncingResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGetNodeInfoRequestParams = {
    value: GetNodeInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGetNodeInfoResponseParams = {
    value: GetNodeInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendVersionInfoParams = {
    value: VersionInfo;
    fee?: StdFee;
    memo?: string;
};
type sendABCIQueryRequestParams = {
    value: ABCIQueryRequest;
    fee?: StdFee;
    memo?: string;
};
type sendProofOpsParams = {
    value: ProofOps;
    fee?: StdFee;
    memo?: string;
};
type sendGetValidatorSetByHeightRequestParams = {
    value: GetValidatorSetByHeightRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGetBlockByHeightResponseParams = {
    value: GetBlockByHeightResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGetLatestBlockRequestParams = {
    value: GetLatestBlockRequest;
    fee?: StdFee;
    memo?: string;
};
type sendModuleParams = {
    value: Module;
    fee?: StdFee;
    memo?: string;
};
type sendProofOpParams = {
    value: ProofOp;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorParams = {
    value: Validator;
    fee?: StdFee;
    memo?: string;
};
type sendGetBlockByHeightRequestParams = {
    value: GetBlockByHeightRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGetSyncingRequestParams = {
    value: GetSyncingRequest;
    fee?: StdFee;
    memo?: string;
};
type sendBlockParams = {
    value: Block;
    fee?: StdFee;
    memo?: string;
};
type getLatestValidatorSetResponseParams = {
    value: GetLatestValidatorSetResponse;
};
type abciqueryResponseParams = {
    value: ABCIQueryResponse;
};
type getLatestValidatorSetRequestParams = {
    value: GetLatestValidatorSetRequest;
};
type headerParams = {
    value: Header;
};
type getValidatorSetByHeightResponseParams = {
    value: GetValidatorSetByHeightResponse;
};
type getLatestBlockResponseParams = {
    value: GetLatestBlockResponse;
};
type getSyncingResponseParams = {
    value: GetSyncingResponse;
};
type getNodeInfoRequestParams = {
    value: GetNodeInfoRequest;
};
type getNodeInfoResponseParams = {
    value: GetNodeInfoResponse;
};
type versionInfoParams = {
    value: VersionInfo;
};
type abciqueryRequestParams = {
    value: ABCIQueryRequest;
};
type proofOpsParams = {
    value: ProofOps;
};
type getValidatorSetByHeightRequestParams = {
    value: GetValidatorSetByHeightRequest;
};
type getBlockByHeightResponseParams = {
    value: GetBlockByHeightResponse;
};
type getLatestBlockRequestParams = {
    value: GetLatestBlockRequest;
};
type moduleParams = {
    value: Module;
};
type proofOpParams = {
    value: ProofOp;
};
type validatorParams = {
    value: Validator;
};
type getBlockByHeightRequestParams = {
    value: GetBlockByHeightRequest;
};
type getSyncingRequestParams = {
    value: GetSyncingRequest;
};
type blockParams = {
    value: Block;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendGetLatestValidatorSetResponse({ value, fee, memo }: sendGetLatestValidatorSetResponseParams): Promise<DeliverTxResponse>;
    sendABCIQueryResponse({ value, fee, memo }: sendABCIQueryResponseParams): Promise<DeliverTxResponse>;
    sendGetLatestValidatorSetRequest({ value, fee, memo }: sendGetLatestValidatorSetRequestParams): Promise<DeliverTxResponse>;
    sendHeader({ value, fee, memo }: sendHeaderParams): Promise<DeliverTxResponse>;
    sendGetValidatorSetByHeightResponse({ value, fee, memo }: sendGetValidatorSetByHeightResponseParams): Promise<DeliverTxResponse>;
    sendGetLatestBlockResponse({ value, fee, memo }: sendGetLatestBlockResponseParams): Promise<DeliverTxResponse>;
    sendGetSyncingResponse({ value, fee, memo }: sendGetSyncingResponseParams): Promise<DeliverTxResponse>;
    sendGetNodeInfoRequest({ value, fee, memo }: sendGetNodeInfoRequestParams): Promise<DeliverTxResponse>;
    sendGetNodeInfoResponse({ value, fee, memo }: sendGetNodeInfoResponseParams): Promise<DeliverTxResponse>;
    sendVersionInfo({ value, fee, memo }: sendVersionInfoParams): Promise<DeliverTxResponse>;
    sendABCIQueryRequest({ value, fee, memo }: sendABCIQueryRequestParams): Promise<DeliverTxResponse>;
    sendProofOps({ value, fee, memo }: sendProofOpsParams): Promise<DeliverTxResponse>;
    sendGetValidatorSetByHeightRequest({ value, fee, memo }: sendGetValidatorSetByHeightRequestParams): Promise<DeliverTxResponse>;
    sendGetBlockByHeightResponse({ value, fee, memo }: sendGetBlockByHeightResponseParams): Promise<DeliverTxResponse>;
    sendGetLatestBlockRequest({ value, fee, memo }: sendGetLatestBlockRequestParams): Promise<DeliverTxResponse>;
    sendModule({ value, fee, memo }: sendModuleParams): Promise<DeliverTxResponse>;
    sendProofOp({ value, fee, memo }: sendProofOpParams): Promise<DeliverTxResponse>;
    sendValidator({ value, fee, memo }: sendValidatorParams): Promise<DeliverTxResponse>;
    sendGetBlockByHeightRequest({ value, fee, memo }: sendGetBlockByHeightRequestParams): Promise<DeliverTxResponse>;
    sendGetSyncingRequest({ value, fee, memo }: sendGetSyncingRequestParams): Promise<DeliverTxResponse>;
    sendBlock({ value, fee, memo }: sendBlockParams): Promise<DeliverTxResponse>;
    getLatestValidatorSetResponse({ value }: getLatestValidatorSetResponseParams): EncodeObject;
    abciqueryResponse({ value }: abciqueryResponseParams): EncodeObject;
    getLatestValidatorSetRequest({ value }: getLatestValidatorSetRequestParams): EncodeObject;
    header({ value }: headerParams): EncodeObject;
    getValidatorSetByHeightResponse({ value }: getValidatorSetByHeightResponseParams): EncodeObject;
    getLatestBlockResponse({ value }: getLatestBlockResponseParams): EncodeObject;
    getSyncingResponse({ value }: getSyncingResponseParams): EncodeObject;
    getNodeInfoRequest({ value }: getNodeInfoRequestParams): EncodeObject;
    getNodeInfoResponse({ value }: getNodeInfoResponseParams): EncodeObject;
    versionInfo({ value }: versionInfoParams): EncodeObject;
    abciqueryRequest({ value }: abciqueryRequestParams): EncodeObject;
    proofOps({ value }: proofOpsParams): EncodeObject;
    getValidatorSetByHeightRequest({ value }: getValidatorSetByHeightRequestParams): EncodeObject;
    getBlockByHeightResponse({ value }: getBlockByHeightResponseParams): EncodeObject;
    getLatestBlockRequest({ value }: getLatestBlockRequestParams): EncodeObject;
    module({ value }: moduleParams): EncodeObject;
    proofOp({ value }: proofOpParams): EncodeObject;
    validator({ value }: validatorParams): EncodeObject;
    getBlockByHeightRequest({ value }: getBlockByHeightRequestParams): EncodeObject;
    getSyncingRequest({ value }: getSyncingRequestParams): EncodeObject;
    block({ value }: blockParams): EncodeObject;
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
        CosmosBaseTendermintV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
