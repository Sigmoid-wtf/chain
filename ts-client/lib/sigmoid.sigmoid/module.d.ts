import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgCreateUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetAmountResponse } from "./types/sigmoid/sigmoid/query";
import { Request } from "./types/sigmoid/sigmoid/request";
import { MsgUpdateParams } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransactionResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLastProcessedResponse } from "./types/sigmoid/sigmoid/query";
import { QueryParamsResponse } from "./types/sigmoid/sigmoid/query";
import { GenesisState } from "./types/sigmoid/sigmoid/genesis";
import { Params } from "./types/sigmoid/sigmoid/params";
import { MsgCreateUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLastProcessedRequest } from "./types/sigmoid/sigmoid/query";
import { QueryParamsRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { MsgApproveRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgUpdateParamsResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryGetAmountRequest } from "./types/sigmoid/sigmoid/query";
import { MsgProcessTransaction } from "./types/sigmoid/sigmoid/tx";
import { QueryGetPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
export { MsgCreateUnstakeRequestResponse, QueryGetAmountResponse, Request, MsgUpdateParams, MsgApproveUnstakeRequestResponse, MsgProcessTransactionResponse, QueryGetLastProcessedResponse, QueryParamsResponse, GenesisState, Params, MsgCreateUnstakeRequest, MsgCreateRequestResponse, MsgApproveRequestResponse, QueryGetLastProcessedRequest, QueryParamsRequest, QueryGetPendingUnstakeRequestRequest, MsgApproveRequest, MsgUpdateParamsResponse, MsgCreateRequest, MsgApproveUnstakeRequest, QueryGetAmountRequest, MsgProcessTransaction, QueryGetPendingUnstakeRequestResponse };
type sendMsgCreateUnstakeRequestResponseParams = {
    value: MsgCreateUnstakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAmountResponseParams = {
    value: QueryGetAmountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendRequestParams = {
    value: Request;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveUnstakeRequestResponseParams = {
    value: MsgApproveUnstakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgProcessTransactionResponseParams = {
    value: MsgProcessTransactionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLastProcessedResponseParams = {
    value: QueryGetLastProcessedResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUnstakeRequestParams = {
    value: MsgCreateUnstakeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestResponseParams = {
    value: MsgCreateRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveRequestResponseParams = {
    value: MsgApproveRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLastProcessedRequestParams = {
    value: QueryGetLastProcessedRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingUnstakeRequestRequestParams = {
    value: QueryGetPendingUnstakeRequestRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveRequestParams = {
    value: MsgApproveRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRequestParams = {
    value: MsgCreateRequest;
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
type sendMsgProcessTransactionParams = {
    value: MsgProcessTransaction;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingUnstakeRequestResponseParams = {
    value: QueryGetPendingUnstakeRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type msgCreateUnstakeRequestResponseParams = {
    value: MsgCreateUnstakeRequestResponse;
};
type queryGetAmountResponseParams = {
    value: QueryGetAmountResponse;
};
type requestParams = {
    value: Request;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgApproveUnstakeRequestResponseParams = {
    value: MsgApproveUnstakeRequestResponse;
};
type msgProcessTransactionResponseParams = {
    value: MsgProcessTransactionResponse;
};
type queryGetLastProcessedResponseParams = {
    value: QueryGetLastProcessedResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type paramsParams = {
    value: Params;
};
type msgCreateUnstakeRequestParams = {
    value: MsgCreateUnstakeRequest;
};
type msgCreateRequestResponseParams = {
    value: MsgCreateRequestResponse;
};
type msgApproveRequestResponseParams = {
    value: MsgApproveRequestResponse;
};
type queryGetLastProcessedRequestParams = {
    value: QueryGetLastProcessedRequest;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetPendingUnstakeRequestRequestParams = {
    value: QueryGetPendingUnstakeRequestRequest;
};
type msgApproveRequestParams = {
    value: MsgApproveRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgCreateRequestParams = {
    value: MsgCreateRequest;
};
type msgApproveUnstakeRequestParams = {
    value: MsgApproveUnstakeRequest;
};
type queryGetAmountRequestParams = {
    value: QueryGetAmountRequest;
};
type msgProcessTransactionParams = {
    value: MsgProcessTransaction;
};
type queryGetPendingUnstakeRequestResponseParams = {
    value: QueryGetPendingUnstakeRequestResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgCreateUnstakeRequestResponse({ value, fee, memo }: sendMsgCreateUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAmountResponse({ value, fee, memo }: sendQueryGetAmountResponseParams): Promise<DeliverTxResponse>;
    sendRequest({ value, fee, memo }: sendRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgApproveUnstakeRequestResponse({ value, fee, memo }: sendMsgApproveUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgProcessTransactionResponse({ value, fee, memo }: sendMsgProcessTransactionResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetLastProcessedResponse({ value, fee, memo }: sendQueryGetLastProcessedResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgCreateUnstakeRequest({ value, fee, memo }: sendMsgCreateUnstakeRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequestResponse({ value, fee, memo }: sendMsgCreateRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgApproveRequestResponse({ value, fee, memo }: sendMsgApproveRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetLastProcessedRequest({ value, fee, memo }: sendQueryGetLastProcessedRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingUnstakeRequestRequest({ value, fee, memo }: sendQueryGetPendingUnstakeRequestRequestParams): Promise<DeliverTxResponse>;
    sendMsgApproveRequest({ value, fee, memo }: sendMsgApproveRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateRequest({ value, fee, memo }: sendMsgCreateRequestParams): Promise<DeliverTxResponse>;
    sendMsgApproveUnstakeRequest({ value, fee, memo }: sendMsgApproveUnstakeRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAmountRequest({ value, fee, memo }: sendQueryGetAmountRequestParams): Promise<DeliverTxResponse>;
    sendMsgProcessTransaction({ value, fee, memo }: sendMsgProcessTransactionParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingUnstakeRequestResponse({ value, fee, memo }: sendQueryGetPendingUnstakeRequestResponseParams): Promise<DeliverTxResponse>;
    msgCreateUnstakeRequestResponse({ value }: msgCreateUnstakeRequestResponseParams): EncodeObject;
    queryGetAmountResponse({ value }: queryGetAmountResponseParams): EncodeObject;
    request({ value }: requestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgApproveUnstakeRequestResponse({ value }: msgApproveUnstakeRequestResponseParams): EncodeObject;
    msgProcessTransactionResponse({ value }: msgProcessTransactionResponseParams): EncodeObject;
    queryGetLastProcessedResponse({ value }: queryGetLastProcessedResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgCreateUnstakeRequest({ value }: msgCreateUnstakeRequestParams): EncodeObject;
    msgCreateRequestResponse({ value }: msgCreateRequestResponseParams): EncodeObject;
    msgApproveRequestResponse({ value }: msgApproveRequestResponseParams): EncodeObject;
    queryGetLastProcessedRequest({ value }: queryGetLastProcessedRequestParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetPendingUnstakeRequestRequest({ value }: queryGetPendingUnstakeRequestRequestParams): EncodeObject;
    msgApproveRequest({ value }: msgApproveRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgCreateRequest({ value }: msgCreateRequestParams): EncodeObject;
    msgApproveUnstakeRequest({ value }: msgApproveUnstakeRequestParams): EncodeObject;
    queryGetAmountRequest({ value }: queryGetAmountRequestParams): EncodeObject;
    msgProcessTransaction({ value }: msgProcessTransactionParams): EncodeObject;
    queryGetPendingUnstakeRequestResponse({ value }: queryGetPendingUnstakeRequestResponseParams): EncodeObject;
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
