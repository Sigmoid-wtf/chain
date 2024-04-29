import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { GenesisState } from "./types/sigmoid/sigmoid/genesis";
import { MsgApproveUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgUpdateParams } from "./types/sigmoid/sigmoid/tx";
import { Params } from "./types/sigmoid/sigmoid/params";
import { QueryParamsRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetLastProcessedResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingStakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgProcessTransaction } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransactionResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetAmountResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetLastProcessedRequest } from "./types/sigmoid/sigmoid/query";
import { Request } from "./types/sigmoid/sigmoid/request";
import { QueryParamsResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { MsgUpdateParamsResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetFrontPendingStakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetAmountRequest } from "./types/sigmoid/sigmoid/query";
import { MsgApproveRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryGetFrontPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { MsgCreateRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
export { GenesisState, MsgApproveUnstakeRequestResponse, MsgCreateRequest, MsgUpdateParams, Params, QueryParamsRequest, QueryGetLastProcessedResponse, QueryGetPendingUnstakeRequestResponse, QueryGetFrontPendingStakeRequestRequest, QueryGetFrontPendingUnstakeRequestResponse, MsgProcessTransaction, MsgProcessTransactionResponse, QueryGetAmountResponse, QueryGetLastProcessedRequest, Request, QueryParamsResponse, QueryGetPendingUnstakeRequestRequest, MsgUpdateParamsResponse, QueryGetFrontPendingStakeRequestResponse, QueryGetAmountRequest, MsgApproveRequest, MsgApproveRequestResponse, MsgCreateUnstakeRequest, QueryGetFrontPendingUnstakeRequestRequest, MsgCreateRequestResponse, MsgCreateUnstakeRequestResponse, MsgApproveUnstakeRequest };
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveUnstakeRequestResponseParams = {
    value: MsgApproveUnstakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestParams = {
    value: MsgCreateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
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
type sendQueryGetLastProcessedResponseParams = {
    value: QueryGetLastProcessedResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingUnstakeRequestResponseParams = {
    value: QueryGetPendingUnstakeRequestResponse;
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
type sendQueryGetAmountResponseParams = {
    value: QueryGetAmountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLastProcessedRequestParams = {
    value: QueryGetLastProcessedRequest;
    fee?: StdFee;
    memo?: string;
};
type sendRequestParams = {
    value: Request;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingUnstakeRequestRequestParams = {
    value: QueryGetPendingUnstakeRequestRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetFrontPendingStakeRequestResponseParams = {
    value: QueryGetFrontPendingStakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAmountRequestParams = {
    value: QueryGetAmountRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveRequestParams = {
    value: MsgApproveRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveRequestResponseParams = {
    value: MsgApproveRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUnstakeRequestParams = {
    value: MsgCreateUnstakeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetFrontPendingUnstakeRequestRequestParams = {
    value: QueryGetFrontPendingUnstakeRequestRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestResponseParams = {
    value: MsgCreateRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUnstakeRequestResponseParams = {
    value: MsgCreateUnstakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveUnstakeRequestParams = {
    value: MsgApproveUnstakeRequest;
    fee?: StdFee;
    memo?: string;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgApproveUnstakeRequestResponseParams = {
    value: MsgApproveUnstakeRequestResponse;
};
type msgCreateRequestParams = {
    value: MsgCreateRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type paramsParams = {
    value: Params;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetLastProcessedResponseParams = {
    value: QueryGetLastProcessedResponse;
};
type queryGetPendingUnstakeRequestResponseParams = {
    value: QueryGetPendingUnstakeRequestResponse;
};
type queryGetFrontPendingStakeRequestRequestParams = {
    value: QueryGetFrontPendingStakeRequestRequest;
};
type queryGetFrontPendingUnstakeRequestResponseParams = {
    value: QueryGetFrontPendingUnstakeRequestResponse;
};
type msgProcessTransactionParams = {
    value: MsgProcessTransaction;
};
type msgProcessTransactionResponseParams = {
    value: MsgProcessTransactionResponse;
};
type queryGetAmountResponseParams = {
    value: QueryGetAmountResponse;
};
type queryGetLastProcessedRequestParams = {
    value: QueryGetLastProcessedRequest;
};
type requestParams = {
    value: Request;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetPendingUnstakeRequestRequestParams = {
    value: QueryGetPendingUnstakeRequestRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryGetFrontPendingStakeRequestResponseParams = {
    value: QueryGetFrontPendingStakeRequestResponse;
};
type queryGetAmountRequestParams = {
    value: QueryGetAmountRequest;
};
type msgApproveRequestParams = {
    value: MsgApproveRequest;
};
type msgApproveRequestResponseParams = {
    value: MsgApproveRequestResponse;
};
type msgCreateUnstakeRequestParams = {
    value: MsgCreateUnstakeRequest;
};
type queryGetFrontPendingUnstakeRequestRequestParams = {
    value: QueryGetFrontPendingUnstakeRequestRequest;
};
type msgCreateRequestResponseParams = {
    value: MsgCreateRequestResponse;
};
type msgCreateUnstakeRequestResponseParams = {
    value: MsgCreateUnstakeRequestResponse;
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
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgApproveUnstakeRequestResponse({ value, fee, memo }: sendMsgApproveUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequest({ value, fee, memo }: sendMsgCreateRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetLastProcessedResponse({ value, fee, memo }: sendQueryGetLastProcessedResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingUnstakeRequestResponse({ value, fee, memo }: sendQueryGetPendingUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetFrontPendingStakeRequestRequest({ value, fee, memo }: sendQueryGetFrontPendingStakeRequestRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetFrontPendingUnstakeRequestResponse({ value, fee, memo }: sendQueryGetFrontPendingUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgProcessTransaction({ value, fee, memo }: sendMsgProcessTransactionParams): Promise<DeliverTxResponse>;
    sendMsgProcessTransactionResponse({ value, fee, memo }: sendMsgProcessTransactionResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAmountResponse({ value, fee, memo }: sendQueryGetAmountResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetLastProcessedRequest({ value, fee, memo }: sendQueryGetLastProcessedRequestParams): Promise<DeliverTxResponse>;
    sendRequest({ value, fee, memo }: sendRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingUnstakeRequestRequest({ value, fee, memo }: sendQueryGetPendingUnstakeRequestRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetFrontPendingStakeRequestResponse({ value, fee, memo }: sendQueryGetFrontPendingStakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAmountRequest({ value, fee, memo }: sendQueryGetAmountRequestParams): Promise<DeliverTxResponse>;
    sendMsgApproveRequest({ value, fee, memo }: sendMsgApproveRequestParams): Promise<DeliverTxResponse>;
    sendMsgApproveRequestResponse({ value, fee, memo }: sendMsgApproveRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateUnstakeRequest({ value, fee, memo }: sendMsgCreateUnstakeRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetFrontPendingUnstakeRequestRequest({ value, fee, memo }: sendQueryGetFrontPendingUnstakeRequestRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequestResponse({ value, fee, memo }: sendMsgCreateRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateUnstakeRequestResponse({ value, fee, memo }: sendMsgCreateUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgApproveUnstakeRequest({ value, fee, memo }: sendMsgApproveUnstakeRequestParams): Promise<DeliverTxResponse>;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgApproveUnstakeRequestResponse({ value }: msgApproveUnstakeRequestResponseParams): EncodeObject;
    msgCreateRequest({ value }: msgCreateRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetLastProcessedResponse({ value }: queryGetLastProcessedResponseParams): EncodeObject;
    queryGetPendingUnstakeRequestResponse({ value }: queryGetPendingUnstakeRequestResponseParams): EncodeObject;
    queryGetFrontPendingStakeRequestRequest({ value }: queryGetFrontPendingStakeRequestRequestParams): EncodeObject;
    queryGetFrontPendingUnstakeRequestResponse({ value }: queryGetFrontPendingUnstakeRequestResponseParams): EncodeObject;
    msgProcessTransaction({ value }: msgProcessTransactionParams): EncodeObject;
    msgProcessTransactionResponse({ value }: msgProcessTransactionResponseParams): EncodeObject;
    queryGetAmountResponse({ value }: queryGetAmountResponseParams): EncodeObject;
    queryGetLastProcessedRequest({ value }: queryGetLastProcessedRequestParams): EncodeObject;
    request({ value }: requestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetPendingUnstakeRequestRequest({ value }: queryGetPendingUnstakeRequestRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryGetFrontPendingStakeRequestResponse({ value }: queryGetFrontPendingStakeRequestResponseParams): EncodeObject;
    queryGetAmountRequest({ value }: queryGetAmountRequestParams): EncodeObject;
    msgApproveRequest({ value }: msgApproveRequestParams): EncodeObject;
    msgApproveRequestResponse({ value }: msgApproveRequestResponseParams): EncodeObject;
    msgCreateUnstakeRequest({ value }: msgCreateUnstakeRequestParams): EncodeObject;
    queryGetFrontPendingUnstakeRequestRequest({ value }: queryGetFrontPendingUnstakeRequestRequestParams): EncodeObject;
    msgCreateRequestResponse({ value }: msgCreateRequestResponseParams): EncodeObject;
    msgCreateUnstakeRequestResponse({ value }: msgCreateUnstakeRequestResponseParams): EncodeObject;
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
