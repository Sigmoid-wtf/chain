import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgIncomeBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryGetPendingBridgeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingStakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgApproveRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgSetRaoCurrentStakedBalanceResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryGetAmountRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetRaoStakedBalanceResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingStakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { MsgCreateUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgSetLatestProcessedEthBlockResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransaction } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransactionResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgIncomeBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLastProcessedRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { MsgUpdateParams } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestSigned } from "./types/sigmoid/sigmoid/tx";
import { QueryGetAmountResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetLatestProcessedEthBlockResponse } from "./types/sigmoid/sigmoid/query";
import { Request } from "./types/sigmoid/sigmoid/request";
import { MsgCreateRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { Params } from "./types/sigmoid/sigmoid/params";
import { MsgSetLatestProcessedEthBlock } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLastProcessedResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetRaoStakedBalanceRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetSigtaoRateDRequest } from "./types/sigmoid/sigmoid/query";
import { GenesisState } from "./types/sigmoid/sigmoid/genesis";
import { MsgApproveBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgSetRaoCurrentStakedBalance } from "./types/sigmoid/sigmoid/tx";
import { QueryGetPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingBridgeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetLatestProcessedEthBlockRequest } from "./types/sigmoid/sigmoid/query";
import { MsgUpdateParamsResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryParamsResponse } from "./types/sigmoid/sigmoid/query";
import { QueryParamsRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetSigtaoRateDResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgCreateRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestSignedResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateBridgeRequest } from "./types/sigmoid/sigmoid/tx";
export { MsgIncomeBridgeRequest, QueryGetPendingBridgeRequestResponse, QueryGetFrontPendingStakeRequestResponse, MsgApproveRequestResponse, MsgSetRaoCurrentStakedBalanceResponse, MsgApproveUnstakeRequest, QueryGetAmountRequest, QueryGetPendingUnstakeRequestRequest, QueryGetRaoStakedBalanceResponse, QueryGetFrontPendingStakeRequestRequest, MsgCreateUnstakeRequestResponse, MsgSetLatestProcessedEthBlockResponse, MsgProcessTransaction, MsgProcessTransactionResponse, MsgIncomeBridgeRequestResponse, MsgCreateUnstakeRequest, QueryGetLastProcessedRequest, QueryGetFrontPendingUnstakeRequestRequest, MsgUpdateParams, MsgApproveRequest, MsgCreateRequestSigned, QueryGetAmountResponse, QueryGetLatestProcessedEthBlockResponse, Request, MsgCreateRequestResponse, MsgApproveBridgeRequestResponse, Params, MsgSetLatestProcessedEthBlock, QueryGetLastProcessedResponse, QueryGetRaoStakedBalanceRequest, QueryGetSigtaoRateDRequest, GenesisState, MsgApproveBridgeRequest, MsgSetRaoCurrentStakedBalance, QueryGetPendingUnstakeRequestResponse, QueryGetPendingBridgeRequestRequest, QueryGetLatestProcessedEthBlockRequest, MsgUpdateParamsResponse, MsgCreateBridgeRequestResponse, QueryParamsResponse, QueryParamsRequest, QueryGetSigtaoRateDResponse, QueryGetFrontPendingUnstakeRequestResponse, MsgCreateRequest, MsgApproveUnstakeRequestResponse, MsgCreateRequestSignedResponse, MsgCreateBridgeRequest };
type sendMsgIncomeBridgeRequestParams = {
    value: MsgIncomeBridgeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingBridgeRequestResponseParams = {
    value: QueryGetPendingBridgeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetFrontPendingStakeRequestResponseParams = {
    value: QueryGetFrontPendingStakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveRequestResponseParams = {
    value: MsgApproveRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetRaoCurrentStakedBalanceResponseParams = {
    value: MsgSetRaoCurrentStakedBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveUnstakeRequestParams = {
    value: MsgApproveUnstakeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAmountRequestParams = {
    value: QueryGetAmountRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingUnstakeRequestRequestParams = {
    value: QueryGetPendingUnstakeRequestRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetRaoStakedBalanceResponseParams = {
    value: QueryGetRaoStakedBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetFrontPendingStakeRequestRequestParams = {
    value: QueryGetFrontPendingStakeRequestRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUnstakeRequestResponseParams = {
    value: MsgCreateUnstakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetLatestProcessedEthBlockResponseParams = {
    value: MsgSetLatestProcessedEthBlockResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgProcessTransactionParams = {
    value: MsgProcessTransaction;
    fee?: StdFee;
    memo?: string;
};
type sendMsgProcessTransactionResponseParams = {
    value: MsgProcessTransactionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgIncomeBridgeRequestResponseParams = {
    value: MsgIncomeBridgeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUnstakeRequestParams = {
    value: MsgCreateUnstakeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLastProcessedRequestParams = {
    value: QueryGetLastProcessedRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetFrontPendingUnstakeRequestRequestParams = {
    value: QueryGetFrontPendingUnstakeRequestRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveRequestParams = {
    value: MsgApproveRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestSignedParams = {
    value: MsgCreateRequestSigned;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAmountResponseParams = {
    value: QueryGetAmountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLatestProcessedEthBlockResponseParams = {
    value: QueryGetLatestProcessedEthBlockResponse;
    fee?: StdFee;
    memo?: string;
};
type sendRequestParams = {
    value: Request;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestResponseParams = {
    value: MsgCreateRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveBridgeRequestResponseParams = {
    value: MsgApproveBridgeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetLatestProcessedEthBlockParams = {
    value: MsgSetLatestProcessedEthBlock;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLastProcessedResponseParams = {
    value: QueryGetLastProcessedResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetRaoStakedBalanceRequestParams = {
    value: QueryGetRaoStakedBalanceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSigtaoRateDRequestParams = {
    value: QueryGetSigtaoRateDRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveBridgeRequestParams = {
    value: MsgApproveBridgeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetRaoCurrentStakedBalanceParams = {
    value: MsgSetRaoCurrentStakedBalance;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingUnstakeRequestResponseParams = {
    value: QueryGetPendingUnstakeRequestResponse;
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
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateBridgeRequestResponseParams = {
    value: MsgCreateBridgeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSigtaoRateDResponseParams = {
    value: QueryGetSigtaoRateDResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetFrontPendingUnstakeRequestResponseParams = {
    value: QueryGetFrontPendingUnstakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestParams = {
    value: MsgCreateRequest;
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
type sendMsgCreateBridgeRequestParams = {
    value: MsgCreateBridgeRequest;
    fee?: StdFee;
    memo?: string;
};
type msgIncomeBridgeRequestParams = {
    value: MsgIncomeBridgeRequest;
};
type queryGetPendingBridgeRequestResponseParams = {
    value: QueryGetPendingBridgeRequestResponse;
};
type queryGetFrontPendingStakeRequestResponseParams = {
    value: QueryGetFrontPendingStakeRequestResponse;
};
type msgApproveRequestResponseParams = {
    value: MsgApproveRequestResponse;
};
type msgSetRaoCurrentStakedBalanceResponseParams = {
    value: MsgSetRaoCurrentStakedBalanceResponse;
};
type msgApproveUnstakeRequestParams = {
    value: MsgApproveUnstakeRequest;
};
type queryGetAmountRequestParams = {
    value: QueryGetAmountRequest;
};
type queryGetPendingUnstakeRequestRequestParams = {
    value: QueryGetPendingUnstakeRequestRequest;
};
type queryGetRaoStakedBalanceResponseParams = {
    value: QueryGetRaoStakedBalanceResponse;
};
type queryGetFrontPendingStakeRequestRequestParams = {
    value: QueryGetFrontPendingStakeRequestRequest;
};
type msgCreateUnstakeRequestResponseParams = {
    value: MsgCreateUnstakeRequestResponse;
};
type msgSetLatestProcessedEthBlockResponseParams = {
    value: MsgSetLatestProcessedEthBlockResponse;
};
type msgProcessTransactionParams = {
    value: MsgProcessTransaction;
};
type msgProcessTransactionResponseParams = {
    value: MsgProcessTransactionResponse;
};
type msgIncomeBridgeRequestResponseParams = {
    value: MsgIncomeBridgeRequestResponse;
};
type msgCreateUnstakeRequestParams = {
    value: MsgCreateUnstakeRequest;
};
type queryGetLastProcessedRequestParams = {
    value: QueryGetLastProcessedRequest;
};
type queryGetFrontPendingUnstakeRequestRequestParams = {
    value: QueryGetFrontPendingUnstakeRequestRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgApproveRequestParams = {
    value: MsgApproveRequest;
};
type msgCreateRequestSignedParams = {
    value: MsgCreateRequestSigned;
};
type queryGetAmountResponseParams = {
    value: QueryGetAmountResponse;
};
type queryGetLatestProcessedEthBlockResponseParams = {
    value: QueryGetLatestProcessedEthBlockResponse;
};
type requestParams = {
    value: Request;
};
type msgCreateRequestResponseParams = {
    value: MsgCreateRequestResponse;
};
type msgApproveBridgeRequestResponseParams = {
    value: MsgApproveBridgeRequestResponse;
};
type paramsParams = {
    value: Params;
};
type msgSetLatestProcessedEthBlockParams = {
    value: MsgSetLatestProcessedEthBlock;
};
type queryGetLastProcessedResponseParams = {
    value: QueryGetLastProcessedResponse;
};
type queryGetRaoStakedBalanceRequestParams = {
    value: QueryGetRaoStakedBalanceRequest;
};
type queryGetSigtaoRateDrequestParams = {
    value: QueryGetSigtaoRateDRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgApproveBridgeRequestParams = {
    value: MsgApproveBridgeRequest;
};
type msgSetRaoCurrentStakedBalanceParams = {
    value: MsgSetRaoCurrentStakedBalance;
};
type queryGetPendingUnstakeRequestResponseParams = {
    value: QueryGetPendingUnstakeRequestResponse;
};
type queryGetPendingBridgeRequestRequestParams = {
    value: QueryGetPendingBridgeRequestRequest;
};
type queryGetLatestProcessedEthBlockRequestParams = {
    value: QueryGetLatestProcessedEthBlockRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgCreateBridgeRequestResponseParams = {
    value: MsgCreateBridgeRequestResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetSigtaoRateDresponseParams = {
    value: QueryGetSigtaoRateDResponse;
};
type queryGetFrontPendingUnstakeRequestResponseParams = {
    value: QueryGetFrontPendingUnstakeRequestResponse;
};
type msgCreateRequestParams = {
    value: MsgCreateRequest;
};
type msgApproveUnstakeRequestResponseParams = {
    value: MsgApproveUnstakeRequestResponse;
};
type msgCreateRequestSignedResponseParams = {
    value: MsgCreateRequestSignedResponse;
};
type msgCreateBridgeRequestParams = {
    value: MsgCreateBridgeRequest;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgIncomeBridgeRequest({ value, fee, memo }: sendMsgIncomeBridgeRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingBridgeRequestResponse({ value, fee, memo }: sendQueryGetPendingBridgeRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetFrontPendingStakeRequestResponse({ value, fee, memo }: sendQueryGetFrontPendingStakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgApproveRequestResponse({ value, fee, memo }: sendMsgApproveRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgSetRaoCurrentStakedBalanceResponse({ value, fee, memo }: sendMsgSetRaoCurrentStakedBalanceResponseParams): Promise<DeliverTxResponse>;
    sendMsgApproveUnstakeRequest({ value, fee, memo }: sendMsgApproveUnstakeRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAmountRequest({ value, fee, memo }: sendQueryGetAmountRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingUnstakeRequestRequest({ value, fee, memo }: sendQueryGetPendingUnstakeRequestRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetRaoStakedBalanceResponse({ value, fee, memo }: sendQueryGetRaoStakedBalanceResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetFrontPendingStakeRequestRequest({ value, fee, memo }: sendQueryGetFrontPendingStakeRequestRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateUnstakeRequestResponse({ value, fee, memo }: sendMsgCreateUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgSetLatestProcessedEthBlockResponse({ value, fee, memo }: sendMsgSetLatestProcessedEthBlockResponseParams): Promise<DeliverTxResponse>;
    sendMsgProcessTransaction({ value, fee, memo }: sendMsgProcessTransactionParams): Promise<DeliverTxResponse>;
    sendMsgProcessTransactionResponse({ value, fee, memo }: sendMsgProcessTransactionResponseParams): Promise<DeliverTxResponse>;
    sendMsgIncomeBridgeRequestResponse({ value, fee, memo }: sendMsgIncomeBridgeRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateUnstakeRequest({ value, fee, memo }: sendMsgCreateUnstakeRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetLastProcessedRequest({ value, fee, memo }: sendQueryGetLastProcessedRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetFrontPendingUnstakeRequestRequest({ value, fee, memo }: sendQueryGetFrontPendingUnstakeRequestRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgApproveRequest({ value, fee, memo }: sendMsgApproveRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequestSigned({ value, fee, memo }: sendMsgCreateRequestSignedParams): Promise<DeliverTxResponse>;
    sendQueryGetAmountResponse({ value, fee, memo }: sendQueryGetAmountResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetLatestProcessedEthBlockResponse({ value, fee, memo }: sendQueryGetLatestProcessedEthBlockResponseParams): Promise<DeliverTxResponse>;
    sendRequest({ value, fee, memo }: sendRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequestResponse({ value, fee, memo }: sendMsgCreateRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgApproveBridgeRequestResponse({ value, fee, memo }: sendMsgApproveBridgeRequestResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgSetLatestProcessedEthBlock({ value, fee, memo }: sendMsgSetLatestProcessedEthBlockParams): Promise<DeliverTxResponse>;
    sendQueryGetLastProcessedResponse({ value, fee, memo }: sendQueryGetLastProcessedResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetRaoStakedBalanceRequest({ value, fee, memo }: sendQueryGetRaoStakedBalanceRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSigtaoRateDRequest({ value, fee, memo }: sendQueryGetSigtaoRateDRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgApproveBridgeRequest({ value, fee, memo }: sendMsgApproveBridgeRequestParams): Promise<DeliverTxResponse>;
    sendMsgSetRaoCurrentStakedBalance({ value, fee, memo }: sendMsgSetRaoCurrentStakedBalanceParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingUnstakeRequestResponse({ value, fee, memo }: sendQueryGetPendingUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingBridgeRequestRequest({ value, fee, memo }: sendQueryGetPendingBridgeRequestRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetLatestProcessedEthBlockRequest({ value, fee, memo }: sendQueryGetLatestProcessedEthBlockRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateBridgeRequestResponse({ value, fee, memo }: sendMsgCreateBridgeRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSigtaoRateDResponse({ value, fee, memo }: sendQueryGetSigtaoRateDResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetFrontPendingUnstakeRequestResponse({ value, fee, memo }: sendQueryGetFrontPendingUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequest({ value, fee, memo }: sendMsgCreateRequestParams): Promise<DeliverTxResponse>;
    sendMsgApproveUnstakeRequestResponse({ value, fee, memo }: sendMsgApproveUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequestSignedResponse({ value, fee, memo }: sendMsgCreateRequestSignedResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateBridgeRequest({ value, fee, memo }: sendMsgCreateBridgeRequestParams): Promise<DeliverTxResponse>;
    msgIncomeBridgeRequest({ value }: msgIncomeBridgeRequestParams): EncodeObject;
    queryGetPendingBridgeRequestResponse({ value }: queryGetPendingBridgeRequestResponseParams): EncodeObject;
    queryGetFrontPendingStakeRequestResponse({ value }: queryGetFrontPendingStakeRequestResponseParams): EncodeObject;
    msgApproveRequestResponse({ value }: msgApproveRequestResponseParams): EncodeObject;
    msgSetRaoCurrentStakedBalanceResponse({ value }: msgSetRaoCurrentStakedBalanceResponseParams): EncodeObject;
    msgApproveUnstakeRequest({ value }: msgApproveUnstakeRequestParams): EncodeObject;
    queryGetAmountRequest({ value }: queryGetAmountRequestParams): EncodeObject;
    queryGetPendingUnstakeRequestRequest({ value }: queryGetPendingUnstakeRequestRequestParams): EncodeObject;
    queryGetRaoStakedBalanceResponse({ value }: queryGetRaoStakedBalanceResponseParams): EncodeObject;
    queryGetFrontPendingStakeRequestRequest({ value }: queryGetFrontPendingStakeRequestRequestParams): EncodeObject;
    msgCreateUnstakeRequestResponse({ value }: msgCreateUnstakeRequestResponseParams): EncodeObject;
    msgSetLatestProcessedEthBlockResponse({ value }: msgSetLatestProcessedEthBlockResponseParams): EncodeObject;
    msgProcessTransaction({ value }: msgProcessTransactionParams): EncodeObject;
    msgProcessTransactionResponse({ value }: msgProcessTransactionResponseParams): EncodeObject;
    msgIncomeBridgeRequestResponse({ value }: msgIncomeBridgeRequestResponseParams): EncodeObject;
    msgCreateUnstakeRequest({ value }: msgCreateUnstakeRequestParams): EncodeObject;
    queryGetLastProcessedRequest({ value }: queryGetLastProcessedRequestParams): EncodeObject;
    queryGetFrontPendingUnstakeRequestRequest({ value }: queryGetFrontPendingUnstakeRequestRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgApproveRequest({ value }: msgApproveRequestParams): EncodeObject;
    msgCreateRequestSigned({ value }: msgCreateRequestSignedParams): EncodeObject;
    queryGetAmountResponse({ value }: queryGetAmountResponseParams): EncodeObject;
    queryGetLatestProcessedEthBlockResponse({ value }: queryGetLatestProcessedEthBlockResponseParams): EncodeObject;
    request({ value }: requestParams): EncodeObject;
    msgCreateRequestResponse({ value }: msgCreateRequestResponseParams): EncodeObject;
    msgApproveBridgeRequestResponse({ value }: msgApproveBridgeRequestResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgSetLatestProcessedEthBlock({ value }: msgSetLatestProcessedEthBlockParams): EncodeObject;
    queryGetLastProcessedResponse({ value }: queryGetLastProcessedResponseParams): EncodeObject;
    queryGetRaoStakedBalanceRequest({ value }: queryGetRaoStakedBalanceRequestParams): EncodeObject;
    queryGetSigtaoRateDrequest({ value }: queryGetSigtaoRateDrequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgApproveBridgeRequest({ value }: msgApproveBridgeRequestParams): EncodeObject;
    msgSetRaoCurrentStakedBalance({ value }: msgSetRaoCurrentStakedBalanceParams): EncodeObject;
    queryGetPendingUnstakeRequestResponse({ value }: queryGetPendingUnstakeRequestResponseParams): EncodeObject;
    queryGetPendingBridgeRequestRequest({ value }: queryGetPendingBridgeRequestRequestParams): EncodeObject;
    queryGetLatestProcessedEthBlockRequest({ value }: queryGetLatestProcessedEthBlockRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgCreateBridgeRequestResponse({ value }: msgCreateBridgeRequestResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetSigtaoRateDresponse({ value }: queryGetSigtaoRateDresponseParams): EncodeObject;
    queryGetFrontPendingUnstakeRequestResponse({ value }: queryGetFrontPendingUnstakeRequestResponseParams): EncodeObject;
    msgCreateRequest({ value }: msgCreateRequestParams): EncodeObject;
    msgApproveUnstakeRequestResponse({ value }: msgApproveUnstakeRequestResponseParams): EncodeObject;
    msgCreateRequestSignedResponse({ value }: msgCreateRequestSignedResponseParams): EncodeObject;
    msgCreateBridgeRequest({ value }: msgCreateBridgeRequestParams): EncodeObject;
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
