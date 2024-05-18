import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Request } from "./types/sigmoid/sigmoid/request";
import { QueryGetAmountResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgSetRaoCurrentStakedBalance } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetRaoStakedBalanceRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingBridgeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingBridgeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { GenesisState } from "./types/sigmoid/sigmoid/genesis";
import { MsgUpdateParams } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgSetLatestProcessedEthBlockResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLastProcessedResponse } from "./types/sigmoid/sigmoid/query";
import { MsgProcessTransaction } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestSignedResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgIncomeBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestSigned } from "./types/sigmoid/sigmoid/tx";
import { QueryGetAmountRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetLatestProcessedEthBlockResponse } from "./types/sigmoid/sigmoid/query";
import { MsgUpdateParamsResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgSetRaoCurrentStakedBalanceResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetSigtaoRateDRequest } from "./types/sigmoid/sigmoid/query";
import { MsgCreateRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { Params } from "./types/sigmoid/sigmoid/params";
import { MsgIncomeBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransactionResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetRaoStakedBalanceResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetLastProcessedRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetSigtaoRateDResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetLatestProcessedEthBlockRequest } from "./types/sigmoid/sigmoid/query";
import { MsgSetLatestProcessedEthBlock } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryParamsRequest } from "./types/sigmoid/sigmoid/query";
import { QueryParamsResponse } from "./types/sigmoid/sigmoid/query";
export { Request, QueryGetAmountResponse, QueryGetPendingUnstakeRequestResponse, MsgSetRaoCurrentStakedBalance, MsgApproveRequestResponse, MsgCreateBridgeRequest, MsgCreateBridgeRequestResponse, QueryGetRaoStakedBalanceRequest, QueryGetPendingBridgeRequestRequest, QueryGetPendingBridgeRequestResponse, GenesisState, MsgUpdateParams, MsgApproveBridgeRequest, MsgSetLatestProcessedEthBlockResponse, QueryGetLastProcessedResponse, MsgProcessTransaction, MsgCreateUnstakeRequest, MsgCreateRequestSignedResponse, MsgIncomeBridgeRequestResponse, MsgCreateRequestSigned, QueryGetAmountRequest, QueryGetLatestProcessedEthBlockResponse, MsgUpdateParamsResponse, MsgCreateRequestResponse, MsgSetRaoCurrentStakedBalanceResponse, MsgApproveBridgeRequestResponse, QueryGetSigtaoRateDRequest, MsgCreateRequest, MsgApproveRequest, MsgCreateUnstakeRequestResponse, QueryGetPendingUnstakeRequestRequest, Params, MsgIncomeBridgeRequest, MsgProcessTransactionResponse, MsgApproveUnstakeRequestResponse, QueryGetRaoStakedBalanceResponse, QueryGetLastProcessedRequest, QueryGetSigtaoRateDResponse, QueryGetLatestProcessedEthBlockRequest, MsgSetLatestProcessedEthBlock, MsgApproveUnstakeRequest, QueryParamsRequest, QueryParamsResponse };
type sendRequestParams = {
    value: Request;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAmountResponseParams = {
    value: QueryGetAmountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingUnstakeRequestResponseParams = {
    value: QueryGetPendingUnstakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetRaoCurrentStakedBalanceParams = {
    value: MsgSetRaoCurrentStakedBalance;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveRequestResponseParams = {
    value: MsgApproveRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateBridgeRequestParams = {
    value: MsgCreateBridgeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateBridgeRequestResponseParams = {
    value: MsgCreateBridgeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetRaoStakedBalanceRequestParams = {
    value: QueryGetRaoStakedBalanceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingBridgeRequestRequestParams = {
    value: QueryGetPendingBridgeRequestRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingBridgeRequestResponseParams = {
    value: QueryGetPendingBridgeRequestResponse;
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
type sendMsgApproveBridgeRequestParams = {
    value: MsgApproveBridgeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetLatestProcessedEthBlockResponseParams = {
    value: MsgSetLatestProcessedEthBlockResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLastProcessedResponseParams = {
    value: QueryGetLastProcessedResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgProcessTransactionParams = {
    value: MsgProcessTransaction;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUnstakeRequestParams = {
    value: MsgCreateUnstakeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestSignedResponseParams = {
    value: MsgCreateRequestSignedResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgIncomeBridgeRequestResponseParams = {
    value: MsgIncomeBridgeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestSignedParams = {
    value: MsgCreateRequestSigned;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAmountRequestParams = {
    value: QueryGetAmountRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLatestProcessedEthBlockResponseParams = {
    value: QueryGetLatestProcessedEthBlockResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestResponseParams = {
    value: MsgCreateRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetRaoCurrentStakedBalanceResponseParams = {
    value: MsgSetRaoCurrentStakedBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveBridgeRequestResponseParams = {
    value: MsgApproveBridgeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSigtaoRateDRequestParams = {
    value: QueryGetSigtaoRateDRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestParams = {
    value: MsgCreateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveRequestParams = {
    value: MsgApproveRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUnstakeRequestResponseParams = {
    value: MsgCreateUnstakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingUnstakeRequestRequestParams = {
    value: QueryGetPendingUnstakeRequestRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgIncomeBridgeRequestParams = {
    value: MsgIncomeBridgeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgProcessTransactionResponseParams = {
    value: MsgProcessTransactionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveUnstakeRequestResponseParams = {
    value: MsgApproveUnstakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetRaoStakedBalanceResponseParams = {
    value: QueryGetRaoStakedBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLastProcessedRequestParams = {
    value: QueryGetLastProcessedRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSigtaoRateDResponseParams = {
    value: QueryGetSigtaoRateDResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLatestProcessedEthBlockRequestParams = {
    value: QueryGetLatestProcessedEthBlockRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetLatestProcessedEthBlockParams = {
    value: MsgSetLatestProcessedEthBlock;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveUnstakeRequestParams = {
    value: MsgApproveUnstakeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type requestParams = {
    value: Request;
};
type queryGetAmountResponseParams = {
    value: QueryGetAmountResponse;
};
type queryGetPendingUnstakeRequestResponseParams = {
    value: QueryGetPendingUnstakeRequestResponse;
};
type msgSetRaoCurrentStakedBalanceParams = {
    value: MsgSetRaoCurrentStakedBalance;
};
type msgApproveRequestResponseParams = {
    value: MsgApproveRequestResponse;
};
type msgCreateBridgeRequestParams = {
    value: MsgCreateBridgeRequest;
};
type msgCreateBridgeRequestResponseParams = {
    value: MsgCreateBridgeRequestResponse;
};
type queryGetRaoStakedBalanceRequestParams = {
    value: QueryGetRaoStakedBalanceRequest;
};
type queryGetPendingBridgeRequestRequestParams = {
    value: QueryGetPendingBridgeRequestRequest;
};
type queryGetPendingBridgeRequestResponseParams = {
    value: QueryGetPendingBridgeRequestResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgApproveBridgeRequestParams = {
    value: MsgApproveBridgeRequest;
};
type msgSetLatestProcessedEthBlockResponseParams = {
    value: MsgSetLatestProcessedEthBlockResponse;
};
type queryGetLastProcessedResponseParams = {
    value: QueryGetLastProcessedResponse;
};
type msgProcessTransactionParams = {
    value: MsgProcessTransaction;
};
type msgCreateUnstakeRequestParams = {
    value: MsgCreateUnstakeRequest;
};
type msgCreateRequestSignedResponseParams = {
    value: MsgCreateRequestSignedResponse;
};
type msgIncomeBridgeRequestResponseParams = {
    value: MsgIncomeBridgeRequestResponse;
};
type msgCreateRequestSignedParams = {
    value: MsgCreateRequestSigned;
};
type queryGetAmountRequestParams = {
    value: QueryGetAmountRequest;
};
type queryGetLatestProcessedEthBlockResponseParams = {
    value: QueryGetLatestProcessedEthBlockResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgCreateRequestResponseParams = {
    value: MsgCreateRequestResponse;
};
type msgSetRaoCurrentStakedBalanceResponseParams = {
    value: MsgSetRaoCurrentStakedBalanceResponse;
};
type msgApproveBridgeRequestResponseParams = {
    value: MsgApproveBridgeRequestResponse;
};
type queryGetSigtaoRateDrequestParams = {
    value: QueryGetSigtaoRateDRequest;
};
type msgCreateRequestParams = {
    value: MsgCreateRequest;
};
type msgApproveRequestParams = {
    value: MsgApproveRequest;
};
type msgCreateUnstakeRequestResponseParams = {
    value: MsgCreateUnstakeRequestResponse;
};
type queryGetPendingUnstakeRequestRequestParams = {
    value: QueryGetPendingUnstakeRequestRequest;
};
type paramsParams = {
    value: Params;
};
type msgIncomeBridgeRequestParams = {
    value: MsgIncomeBridgeRequest;
};
type msgProcessTransactionResponseParams = {
    value: MsgProcessTransactionResponse;
};
type msgApproveUnstakeRequestResponseParams = {
    value: MsgApproveUnstakeRequestResponse;
};
type queryGetRaoStakedBalanceResponseParams = {
    value: QueryGetRaoStakedBalanceResponse;
};
type queryGetLastProcessedRequestParams = {
    value: QueryGetLastProcessedRequest;
};
type queryGetSigtaoRateDresponseParams = {
    value: QueryGetSigtaoRateDResponse;
};
type queryGetLatestProcessedEthBlockRequestParams = {
    value: QueryGetLatestProcessedEthBlockRequest;
};
type msgSetLatestProcessedEthBlockParams = {
    value: MsgSetLatestProcessedEthBlock;
};
type msgApproveUnstakeRequestParams = {
    value: MsgApproveUnstakeRequest;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendRequest({ value, fee, memo }: sendRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAmountResponse({ value, fee, memo }: sendQueryGetAmountResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingUnstakeRequestResponse({ value, fee, memo }: sendQueryGetPendingUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgSetRaoCurrentStakedBalance({ value, fee, memo }: sendMsgSetRaoCurrentStakedBalanceParams): Promise<DeliverTxResponse>;
    sendMsgApproveRequestResponse({ value, fee, memo }: sendMsgApproveRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateBridgeRequest({ value, fee, memo }: sendMsgCreateBridgeRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateBridgeRequestResponse({ value, fee, memo }: sendMsgCreateBridgeRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetRaoStakedBalanceRequest({ value, fee, memo }: sendQueryGetRaoStakedBalanceRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingBridgeRequestRequest({ value, fee, memo }: sendQueryGetPendingBridgeRequestRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingBridgeRequestResponse({ value, fee, memo }: sendQueryGetPendingBridgeRequestResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgApproveBridgeRequest({ value, fee, memo }: sendMsgApproveBridgeRequestParams): Promise<DeliverTxResponse>;
    sendMsgSetLatestProcessedEthBlockResponse({ value, fee, memo }: sendMsgSetLatestProcessedEthBlockResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetLastProcessedResponse({ value, fee, memo }: sendQueryGetLastProcessedResponseParams): Promise<DeliverTxResponse>;
    sendMsgProcessTransaction({ value, fee, memo }: sendMsgProcessTransactionParams): Promise<DeliverTxResponse>;
    sendMsgCreateUnstakeRequest({ value, fee, memo }: sendMsgCreateUnstakeRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequestSignedResponse({ value, fee, memo }: sendMsgCreateRequestSignedResponseParams): Promise<DeliverTxResponse>;
    sendMsgIncomeBridgeRequestResponse({ value, fee, memo }: sendMsgIncomeBridgeRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequestSigned({ value, fee, memo }: sendMsgCreateRequestSignedParams): Promise<DeliverTxResponse>;
    sendQueryGetAmountRequest({ value, fee, memo }: sendQueryGetAmountRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetLatestProcessedEthBlockResponse({ value, fee, memo }: sendQueryGetLatestProcessedEthBlockResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequestResponse({ value, fee, memo }: sendMsgCreateRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgSetRaoCurrentStakedBalanceResponse({ value, fee, memo }: sendMsgSetRaoCurrentStakedBalanceResponseParams): Promise<DeliverTxResponse>;
    sendMsgApproveBridgeRequestResponse({ value, fee, memo }: sendMsgApproveBridgeRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSigtaoRateDRequest({ value, fee, memo }: sendQueryGetSigtaoRateDRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequest({ value, fee, memo }: sendMsgCreateRequestParams): Promise<DeliverTxResponse>;
    sendMsgApproveRequest({ value, fee, memo }: sendMsgApproveRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateUnstakeRequestResponse({ value, fee, memo }: sendMsgCreateUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingUnstakeRequestRequest({ value, fee, memo }: sendQueryGetPendingUnstakeRequestRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgIncomeBridgeRequest({ value, fee, memo }: sendMsgIncomeBridgeRequestParams): Promise<DeliverTxResponse>;
    sendMsgProcessTransactionResponse({ value, fee, memo }: sendMsgProcessTransactionResponseParams): Promise<DeliverTxResponse>;
    sendMsgApproveUnstakeRequestResponse({ value, fee, memo }: sendMsgApproveUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetRaoStakedBalanceResponse({ value, fee, memo }: sendQueryGetRaoStakedBalanceResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetLastProcessedRequest({ value, fee, memo }: sendQueryGetLastProcessedRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSigtaoRateDResponse({ value, fee, memo }: sendQueryGetSigtaoRateDResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetLatestProcessedEthBlockRequest({ value, fee, memo }: sendQueryGetLatestProcessedEthBlockRequestParams): Promise<DeliverTxResponse>;
    sendMsgSetLatestProcessedEthBlock({ value, fee, memo }: sendMsgSetLatestProcessedEthBlockParams): Promise<DeliverTxResponse>;
    sendMsgApproveUnstakeRequest({ value, fee, memo }: sendMsgApproveUnstakeRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    request({ value }: requestParams): EncodeObject;
    queryGetAmountResponse({ value }: queryGetAmountResponseParams): EncodeObject;
    queryGetPendingUnstakeRequestResponse({ value }: queryGetPendingUnstakeRequestResponseParams): EncodeObject;
    msgSetRaoCurrentStakedBalance({ value }: msgSetRaoCurrentStakedBalanceParams): EncodeObject;
    msgApproveRequestResponse({ value }: msgApproveRequestResponseParams): EncodeObject;
    msgCreateBridgeRequest({ value }: msgCreateBridgeRequestParams): EncodeObject;
    msgCreateBridgeRequestResponse({ value }: msgCreateBridgeRequestResponseParams): EncodeObject;
    queryGetRaoStakedBalanceRequest({ value }: queryGetRaoStakedBalanceRequestParams): EncodeObject;
    queryGetPendingBridgeRequestRequest({ value }: queryGetPendingBridgeRequestRequestParams): EncodeObject;
    queryGetPendingBridgeRequestResponse({ value }: queryGetPendingBridgeRequestResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgApproveBridgeRequest({ value }: msgApproveBridgeRequestParams): EncodeObject;
    msgSetLatestProcessedEthBlockResponse({ value }: msgSetLatestProcessedEthBlockResponseParams): EncodeObject;
    queryGetLastProcessedResponse({ value }: queryGetLastProcessedResponseParams): EncodeObject;
    msgProcessTransaction({ value }: msgProcessTransactionParams): EncodeObject;
    msgCreateUnstakeRequest({ value }: msgCreateUnstakeRequestParams): EncodeObject;
    msgCreateRequestSignedResponse({ value }: msgCreateRequestSignedResponseParams): EncodeObject;
    msgIncomeBridgeRequestResponse({ value }: msgIncomeBridgeRequestResponseParams): EncodeObject;
    msgCreateRequestSigned({ value }: msgCreateRequestSignedParams): EncodeObject;
    queryGetAmountRequest({ value }: queryGetAmountRequestParams): EncodeObject;
    queryGetLatestProcessedEthBlockResponse({ value }: queryGetLatestProcessedEthBlockResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgCreateRequestResponse({ value }: msgCreateRequestResponseParams): EncodeObject;
    msgSetRaoCurrentStakedBalanceResponse({ value }: msgSetRaoCurrentStakedBalanceResponseParams): EncodeObject;
    msgApproveBridgeRequestResponse({ value }: msgApproveBridgeRequestResponseParams): EncodeObject;
    queryGetSigtaoRateDrequest({ value }: queryGetSigtaoRateDrequestParams): EncodeObject;
    msgCreateRequest({ value }: msgCreateRequestParams): EncodeObject;
    msgApproveRequest({ value }: msgApproveRequestParams): EncodeObject;
    msgCreateUnstakeRequestResponse({ value }: msgCreateUnstakeRequestResponseParams): EncodeObject;
    queryGetPendingUnstakeRequestRequest({ value }: queryGetPendingUnstakeRequestRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgIncomeBridgeRequest({ value }: msgIncomeBridgeRequestParams): EncodeObject;
    msgProcessTransactionResponse({ value }: msgProcessTransactionResponseParams): EncodeObject;
    msgApproveUnstakeRequestResponse({ value }: msgApproveUnstakeRequestResponseParams): EncodeObject;
    queryGetRaoStakedBalanceResponse({ value }: queryGetRaoStakedBalanceResponseParams): EncodeObject;
    queryGetLastProcessedRequest({ value }: queryGetLastProcessedRequestParams): EncodeObject;
    queryGetSigtaoRateDresponse({ value }: queryGetSigtaoRateDresponseParams): EncodeObject;
    queryGetLatestProcessedEthBlockRequest({ value }: queryGetLatestProcessedEthBlockRequestParams): EncodeObject;
    msgSetLatestProcessedEthBlock({ value }: msgSetLatestProcessedEthBlockParams): EncodeObject;
    msgApproveUnstakeRequest({ value }: msgApproveUnstakeRequestParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
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
