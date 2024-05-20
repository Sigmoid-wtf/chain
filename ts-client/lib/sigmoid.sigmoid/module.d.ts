import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgCreateBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgSetRaoCurrentStakedBalance } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLastProcessedRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingBridgeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetLatestProcessedEthBlockRequest } from "./types/sigmoid/sigmoid/query";
import { GenesisState } from "./types/sigmoid/sigmoid/genesis";
import { MsgUpdateParams } from "./types/sigmoid/sigmoid/tx";
import { QueryParamsResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetAmountRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetAmountResponse } from "./types/sigmoid/sigmoid/query";
import { MsgCreateBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetPendingBridgeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { MsgProcessTransaction } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestSigned } from "./types/sigmoid/sigmoid/tx";
import { MsgSetRaoCurrentStakedBalanceResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryParamsRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetLastProcessedResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetRaoStakedBalanceResponse } from "./types/sigmoid/sigmoid/query";
import { MsgCreateRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { Request } from "./types/sigmoid/sigmoid/request";
import { MsgCreateUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgUpdateParamsResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgIncomeBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetRaoStakedBalanceRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingStakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgApproveRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestSignedResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLatestProcessedEthBlockResponse } from "./types/sigmoid/sigmoid/query";
import { MsgApproveBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetFrontPendingStakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgIncomeBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgSetLatestProcessedEthBlock } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransactionResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetSigtaoRateDRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetSigtaoRateDResponse } from "./types/sigmoid/sigmoid/query";
import { MsgSetLatestProcessedEthBlockResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { Params } from "./types/sigmoid/sigmoid/params";
import { MsgApproveUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
export { MsgCreateBridgeRequest, MsgCreateRequestResponse, MsgSetRaoCurrentStakedBalance, QueryGetLastProcessedRequest, QueryGetPendingBridgeRequestRequest, QueryGetLatestProcessedEthBlockRequest, GenesisState, MsgUpdateParams, QueryParamsResponse, QueryGetAmountRequest, QueryGetAmountResponse, MsgCreateBridgeRequestResponse, QueryGetPendingBridgeRequestResponse, QueryGetFrontPendingUnstakeRequestRequest, MsgProcessTransaction, MsgCreateRequestSigned, MsgSetRaoCurrentStakedBalanceResponse, QueryParamsRequest, QueryGetLastProcessedResponse, QueryGetRaoStakedBalanceResponse, MsgCreateRequest, MsgApproveBridgeRequestResponse, Request, MsgCreateUnstakeRequest, MsgUpdateParamsResponse, MsgApproveRequestResponse, MsgIncomeBridgeRequestResponse, QueryGetRaoStakedBalanceRequest, QueryGetFrontPendingStakeRequestResponse, MsgApproveRequest, MsgApproveUnstakeRequestResponse, MsgCreateRequestSignedResponse, QueryGetLatestProcessedEthBlockResponse, MsgApproveBridgeRequest, MsgCreateUnstakeRequestResponse, QueryGetFrontPendingStakeRequestRequest, QueryGetFrontPendingUnstakeRequestResponse, MsgIncomeBridgeRequest, MsgSetLatestProcessedEthBlock, MsgProcessTransactionResponse, QueryGetPendingUnstakeRequestRequest, QueryGetSigtaoRateDRequest, QueryGetSigtaoRateDResponse, MsgSetLatestProcessedEthBlockResponse, QueryGetPendingUnstakeRequestResponse, Params, MsgApproveUnstakeRequest };
type sendMsgCreateBridgeRequestParams = {
    value: MsgCreateBridgeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestResponseParams = {
    value: MsgCreateRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetRaoCurrentStakedBalanceParams = {
    value: MsgSetRaoCurrentStakedBalance;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLastProcessedRequestParams = {
    value: QueryGetLastProcessedRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingBridgeRequestRequestParams = {
    value: QueryGetPendingBridgeRequestRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLatestProcessedEthBlockRequestParams = {
    value: QueryGetLatestProcessedEthBlockRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAmountRequestParams = {
    value: QueryGetAmountRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAmountResponseParams = {
    value: QueryGetAmountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateBridgeRequestResponseParams = {
    value: MsgCreateBridgeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingBridgeRequestResponseParams = {
    value: QueryGetPendingBridgeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetFrontPendingUnstakeRequestRequestParams = {
    value: QueryGetFrontPendingUnstakeRequestRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgProcessTransactionParams = {
    value: MsgProcessTransaction;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestSignedParams = {
    value: MsgCreateRequestSigned;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetRaoCurrentStakedBalanceResponseParams = {
    value: MsgSetRaoCurrentStakedBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLastProcessedResponseParams = {
    value: QueryGetLastProcessedResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetRaoStakedBalanceResponseParams = {
    value: QueryGetRaoStakedBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestParams = {
    value: MsgCreateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveBridgeRequestResponseParams = {
    value: MsgApproveBridgeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendRequestParams = {
    value: Request;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUnstakeRequestParams = {
    value: MsgCreateUnstakeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveRequestResponseParams = {
    value: MsgApproveRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgIncomeBridgeRequestResponseParams = {
    value: MsgIncomeBridgeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetRaoStakedBalanceRequestParams = {
    value: QueryGetRaoStakedBalanceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetFrontPendingStakeRequestResponseParams = {
    value: QueryGetFrontPendingStakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveRequestParams = {
    value: MsgApproveRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveUnstakeRequestResponseParams = {
    value: MsgApproveUnstakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestSignedResponseParams = {
    value: MsgCreateRequestSignedResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLatestProcessedEthBlockResponseParams = {
    value: QueryGetLatestProcessedEthBlockResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveBridgeRequestParams = {
    value: MsgApproveBridgeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUnstakeRequestResponseParams = {
    value: MsgCreateUnstakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetFrontPendingStakeRequestRequestParams = {
    value: QueryGetFrontPendingStakeRequestRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetFrontPendingUnstakeRequestResponseParams = {
    value: QueryGetFrontPendingUnstakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgIncomeBridgeRequestParams = {
    value: MsgIncomeBridgeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetLatestProcessedEthBlockParams = {
    value: MsgSetLatestProcessedEthBlock;
    fee?: StdFee;
    memo?: string;
};
type sendMsgProcessTransactionResponseParams = {
    value: MsgProcessTransactionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingUnstakeRequestRequestParams = {
    value: QueryGetPendingUnstakeRequestRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSigtaoRateDRequestParams = {
    value: QueryGetSigtaoRateDRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSigtaoRateDResponseParams = {
    value: QueryGetSigtaoRateDResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetLatestProcessedEthBlockResponseParams = {
    value: MsgSetLatestProcessedEthBlockResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingUnstakeRequestResponseParams = {
    value: QueryGetPendingUnstakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveUnstakeRequestParams = {
    value: MsgApproveUnstakeRequest;
    fee?: StdFee;
    memo?: string;
};
type msgCreateBridgeRequestParams = {
    value: MsgCreateBridgeRequest;
};
type msgCreateRequestResponseParams = {
    value: MsgCreateRequestResponse;
};
type msgSetRaoCurrentStakedBalanceParams = {
    value: MsgSetRaoCurrentStakedBalance;
};
type queryGetLastProcessedRequestParams = {
    value: QueryGetLastProcessedRequest;
};
type queryGetPendingBridgeRequestRequestParams = {
    value: QueryGetPendingBridgeRequestRequest;
};
type queryGetLatestProcessedEthBlockRequestParams = {
    value: QueryGetLatestProcessedEthBlockRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetAmountRequestParams = {
    value: QueryGetAmountRequest;
};
type queryGetAmountResponseParams = {
    value: QueryGetAmountResponse;
};
type msgCreateBridgeRequestResponseParams = {
    value: MsgCreateBridgeRequestResponse;
};
type queryGetPendingBridgeRequestResponseParams = {
    value: QueryGetPendingBridgeRequestResponse;
};
type queryGetFrontPendingUnstakeRequestRequestParams = {
    value: QueryGetFrontPendingUnstakeRequestRequest;
};
type msgProcessTransactionParams = {
    value: MsgProcessTransaction;
};
type msgCreateRequestSignedParams = {
    value: MsgCreateRequestSigned;
};
type msgSetRaoCurrentStakedBalanceResponseParams = {
    value: MsgSetRaoCurrentStakedBalanceResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetLastProcessedResponseParams = {
    value: QueryGetLastProcessedResponse;
};
type queryGetRaoStakedBalanceResponseParams = {
    value: QueryGetRaoStakedBalanceResponse;
};
type msgCreateRequestParams = {
    value: MsgCreateRequest;
};
type msgApproveBridgeRequestResponseParams = {
    value: MsgApproveBridgeRequestResponse;
};
type requestParams = {
    value: Request;
};
type msgCreateUnstakeRequestParams = {
    value: MsgCreateUnstakeRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgApproveRequestResponseParams = {
    value: MsgApproveRequestResponse;
};
type msgIncomeBridgeRequestResponseParams = {
    value: MsgIncomeBridgeRequestResponse;
};
type queryGetRaoStakedBalanceRequestParams = {
    value: QueryGetRaoStakedBalanceRequest;
};
type queryGetFrontPendingStakeRequestResponseParams = {
    value: QueryGetFrontPendingStakeRequestResponse;
};
type msgApproveRequestParams = {
    value: MsgApproveRequest;
};
type msgApproveUnstakeRequestResponseParams = {
    value: MsgApproveUnstakeRequestResponse;
};
type msgCreateRequestSignedResponseParams = {
    value: MsgCreateRequestSignedResponse;
};
type queryGetLatestProcessedEthBlockResponseParams = {
    value: QueryGetLatestProcessedEthBlockResponse;
};
type msgApproveBridgeRequestParams = {
    value: MsgApproveBridgeRequest;
};
type msgCreateUnstakeRequestResponseParams = {
    value: MsgCreateUnstakeRequestResponse;
};
type queryGetFrontPendingStakeRequestRequestParams = {
    value: QueryGetFrontPendingStakeRequestRequest;
};
type queryGetFrontPendingUnstakeRequestResponseParams = {
    value: QueryGetFrontPendingUnstakeRequestResponse;
};
type msgIncomeBridgeRequestParams = {
    value: MsgIncomeBridgeRequest;
};
type msgSetLatestProcessedEthBlockParams = {
    value: MsgSetLatestProcessedEthBlock;
};
type msgProcessTransactionResponseParams = {
    value: MsgProcessTransactionResponse;
};
type queryGetPendingUnstakeRequestRequestParams = {
    value: QueryGetPendingUnstakeRequestRequest;
};
type queryGetSigtaoRateDrequestParams = {
    value: QueryGetSigtaoRateDRequest;
};
type queryGetSigtaoRateDresponseParams = {
    value: QueryGetSigtaoRateDResponse;
};
type msgSetLatestProcessedEthBlockResponseParams = {
    value: MsgSetLatestProcessedEthBlockResponse;
};
type queryGetPendingUnstakeRequestResponseParams = {
    value: QueryGetPendingUnstakeRequestResponse;
};
type paramsParams = {
    value: Params;
};
type msgApproveUnstakeRequestParams = {
    value: MsgApproveUnstakeRequest;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgCreateBridgeRequest({ value, fee, memo }: sendMsgCreateBridgeRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequestResponse({ value, fee, memo }: sendMsgCreateRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgSetRaoCurrentStakedBalance({ value, fee, memo }: sendMsgSetRaoCurrentStakedBalanceParams): Promise<DeliverTxResponse>;
    sendQueryGetLastProcessedRequest({ value, fee, memo }: sendQueryGetLastProcessedRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingBridgeRequestRequest({ value, fee, memo }: sendQueryGetPendingBridgeRequestRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetLatestProcessedEthBlockRequest({ value, fee, memo }: sendQueryGetLatestProcessedEthBlockRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAmountRequest({ value, fee, memo }: sendQueryGetAmountRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAmountResponse({ value, fee, memo }: sendQueryGetAmountResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateBridgeRequestResponse({ value, fee, memo }: sendMsgCreateBridgeRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingBridgeRequestResponse({ value, fee, memo }: sendQueryGetPendingBridgeRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetFrontPendingUnstakeRequestRequest({ value, fee, memo }: sendQueryGetFrontPendingUnstakeRequestRequestParams): Promise<DeliverTxResponse>;
    sendMsgProcessTransaction({ value, fee, memo }: sendMsgProcessTransactionParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequestSigned({ value, fee, memo }: sendMsgCreateRequestSignedParams): Promise<DeliverTxResponse>;
    sendMsgSetRaoCurrentStakedBalanceResponse({ value, fee, memo }: sendMsgSetRaoCurrentStakedBalanceResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetLastProcessedResponse({ value, fee, memo }: sendQueryGetLastProcessedResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetRaoStakedBalanceResponse({ value, fee, memo }: sendQueryGetRaoStakedBalanceResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequest({ value, fee, memo }: sendMsgCreateRequestParams): Promise<DeliverTxResponse>;
    sendMsgApproveBridgeRequestResponse({ value, fee, memo }: sendMsgApproveBridgeRequestResponseParams): Promise<DeliverTxResponse>;
    sendRequest({ value, fee, memo }: sendRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateUnstakeRequest({ value, fee, memo }: sendMsgCreateUnstakeRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgApproveRequestResponse({ value, fee, memo }: sendMsgApproveRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgIncomeBridgeRequestResponse({ value, fee, memo }: sendMsgIncomeBridgeRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetRaoStakedBalanceRequest({ value, fee, memo }: sendQueryGetRaoStakedBalanceRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetFrontPendingStakeRequestResponse({ value, fee, memo }: sendQueryGetFrontPendingStakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgApproveRequest({ value, fee, memo }: sendMsgApproveRequestParams): Promise<DeliverTxResponse>;
    sendMsgApproveUnstakeRequestResponse({ value, fee, memo }: sendMsgApproveUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequestSignedResponse({ value, fee, memo }: sendMsgCreateRequestSignedResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetLatestProcessedEthBlockResponse({ value, fee, memo }: sendQueryGetLatestProcessedEthBlockResponseParams): Promise<DeliverTxResponse>;
    sendMsgApproveBridgeRequest({ value, fee, memo }: sendMsgApproveBridgeRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateUnstakeRequestResponse({ value, fee, memo }: sendMsgCreateUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetFrontPendingStakeRequestRequest({ value, fee, memo }: sendQueryGetFrontPendingStakeRequestRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetFrontPendingUnstakeRequestResponse({ value, fee, memo }: sendQueryGetFrontPendingUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgIncomeBridgeRequest({ value, fee, memo }: sendMsgIncomeBridgeRequestParams): Promise<DeliverTxResponse>;
    sendMsgSetLatestProcessedEthBlock({ value, fee, memo }: sendMsgSetLatestProcessedEthBlockParams): Promise<DeliverTxResponse>;
    sendMsgProcessTransactionResponse({ value, fee, memo }: sendMsgProcessTransactionResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingUnstakeRequestRequest({ value, fee, memo }: sendQueryGetPendingUnstakeRequestRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSigtaoRateDRequest({ value, fee, memo }: sendQueryGetSigtaoRateDRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSigtaoRateDResponse({ value, fee, memo }: sendQueryGetSigtaoRateDResponseParams): Promise<DeliverTxResponse>;
    sendMsgSetLatestProcessedEthBlockResponse({ value, fee, memo }: sendMsgSetLatestProcessedEthBlockResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingUnstakeRequestResponse({ value, fee, memo }: sendQueryGetPendingUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgApproveUnstakeRequest({ value, fee, memo }: sendMsgApproveUnstakeRequestParams): Promise<DeliverTxResponse>;
    msgCreateBridgeRequest({ value }: msgCreateBridgeRequestParams): EncodeObject;
    msgCreateRequestResponse({ value }: msgCreateRequestResponseParams): EncodeObject;
    msgSetRaoCurrentStakedBalance({ value }: msgSetRaoCurrentStakedBalanceParams): EncodeObject;
    queryGetLastProcessedRequest({ value }: queryGetLastProcessedRequestParams): EncodeObject;
    queryGetPendingBridgeRequestRequest({ value }: queryGetPendingBridgeRequestRequestParams): EncodeObject;
    queryGetLatestProcessedEthBlockRequest({ value }: queryGetLatestProcessedEthBlockRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetAmountRequest({ value }: queryGetAmountRequestParams): EncodeObject;
    queryGetAmountResponse({ value }: queryGetAmountResponseParams): EncodeObject;
    msgCreateBridgeRequestResponse({ value }: msgCreateBridgeRequestResponseParams): EncodeObject;
    queryGetPendingBridgeRequestResponse({ value }: queryGetPendingBridgeRequestResponseParams): EncodeObject;
    queryGetFrontPendingUnstakeRequestRequest({ value }: queryGetFrontPendingUnstakeRequestRequestParams): EncodeObject;
    msgProcessTransaction({ value }: msgProcessTransactionParams): EncodeObject;
    msgCreateRequestSigned({ value }: msgCreateRequestSignedParams): EncodeObject;
    msgSetRaoCurrentStakedBalanceResponse({ value }: msgSetRaoCurrentStakedBalanceResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetLastProcessedResponse({ value }: queryGetLastProcessedResponseParams): EncodeObject;
    queryGetRaoStakedBalanceResponse({ value }: queryGetRaoStakedBalanceResponseParams): EncodeObject;
    msgCreateRequest({ value }: msgCreateRequestParams): EncodeObject;
    msgApproveBridgeRequestResponse({ value }: msgApproveBridgeRequestResponseParams): EncodeObject;
    request({ value }: requestParams): EncodeObject;
    msgCreateUnstakeRequest({ value }: msgCreateUnstakeRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgApproveRequestResponse({ value }: msgApproveRequestResponseParams): EncodeObject;
    msgIncomeBridgeRequestResponse({ value }: msgIncomeBridgeRequestResponseParams): EncodeObject;
    queryGetRaoStakedBalanceRequest({ value }: queryGetRaoStakedBalanceRequestParams): EncodeObject;
    queryGetFrontPendingStakeRequestResponse({ value }: queryGetFrontPendingStakeRequestResponseParams): EncodeObject;
    msgApproveRequest({ value }: msgApproveRequestParams): EncodeObject;
    msgApproveUnstakeRequestResponse({ value }: msgApproveUnstakeRequestResponseParams): EncodeObject;
    msgCreateRequestSignedResponse({ value }: msgCreateRequestSignedResponseParams): EncodeObject;
    queryGetLatestProcessedEthBlockResponse({ value }: queryGetLatestProcessedEthBlockResponseParams): EncodeObject;
    msgApproveBridgeRequest({ value }: msgApproveBridgeRequestParams): EncodeObject;
    msgCreateUnstakeRequestResponse({ value }: msgCreateUnstakeRequestResponseParams): EncodeObject;
    queryGetFrontPendingStakeRequestRequest({ value }: queryGetFrontPendingStakeRequestRequestParams): EncodeObject;
    queryGetFrontPendingUnstakeRequestResponse({ value }: queryGetFrontPendingUnstakeRequestResponseParams): EncodeObject;
    msgIncomeBridgeRequest({ value }: msgIncomeBridgeRequestParams): EncodeObject;
    msgSetLatestProcessedEthBlock({ value }: msgSetLatestProcessedEthBlockParams): EncodeObject;
    msgProcessTransactionResponse({ value }: msgProcessTransactionResponseParams): EncodeObject;
    queryGetPendingUnstakeRequestRequest({ value }: queryGetPendingUnstakeRequestRequestParams): EncodeObject;
    queryGetSigtaoRateDrequest({ value }: queryGetSigtaoRateDrequestParams): EncodeObject;
    queryGetSigtaoRateDresponse({ value }: queryGetSigtaoRateDresponseParams): EncodeObject;
    msgSetLatestProcessedEthBlockResponse({ value }: msgSetLatestProcessedEthBlockResponseParams): EncodeObject;
    queryGetPendingUnstakeRequestResponse({ value }: queryGetPendingUnstakeRequestResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgApproveUnstakeRequest({ value }: msgApproveUnstakeRequestParams): EncodeObject;
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
        SigmoidSigmoid: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
