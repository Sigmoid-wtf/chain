import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryDenomsMetadataResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomMetadataResponse } from "./types/cosmos/bank/v1beta1/query";
import { SendEnabled } from "./types/cosmos/bank/v1beta1/bank";
import { MsgMultiSend } from "./types/cosmos/bank/v1beta1/tx";
import { QueryBalanceRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryAllBalancesRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryAllBalancesResponse } from "./types/cosmos/bank/v1beta1/query";
import { MsgSetSendEnabled } from "./types/cosmos/bank/v1beta1/tx";
import { Params } from "./types/cosmos/bank/v1beta1/bank";
import { QueryDenomOwnersByQueryRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomOwnersByQueryResponse } from "./types/cosmos/bank/v1beta1/query";
import { QuerySendEnabledResponse } from "./types/cosmos/bank/v1beta1/query";
import { MsgUpdateParams } from "./types/cosmos/bank/v1beta1/tx";
import { Output } from "./types/cosmos/bank/v1beta1/bank";
import { MsgUpdateParamsResponse } from "./types/cosmos/bank/v1beta1/tx";
import { QuerySupplyOfResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomMetadataByQueryStringRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySupplyOfRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalancesRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalanceByDenomRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalanceByDenomResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryParamsResponse } from "./types/cosmos/bank/v1beta1/query";
import { MsgSetSendEnabledResponse } from "./types/cosmos/bank/v1beta1/tx";
import { QueryTotalSupplyRequest } from "./types/cosmos/bank/v1beta1/query";
import { MsgSendResponse } from "./types/cosmos/bank/v1beta1/tx";
import { DenomUnit } from "./types/cosmos/bank/v1beta1/bank";
import { Balance } from "./types/cosmos/bank/v1beta1/genesis";
import { QueryTotalSupplyResponse } from "./types/cosmos/bank/v1beta1/query";
import { DenomOwner } from "./types/cosmos/bank/v1beta1/query";
import { Input } from "./types/cosmos/bank/v1beta1/bank";
import { QuerySendEnabledRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomMetadataRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomMetadataByQueryStringResponse } from "./types/cosmos/bank/v1beta1/query";
import { MsgMultiSendResponse } from "./types/cosmos/bank/v1beta1/tx";
import { QueryDenomOwnersResponse } from "./types/cosmos/bank/v1beta1/query";
import { Metadata } from "./types/cosmos/bank/v1beta1/bank";
import { QueryBalanceResponse } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalancesResponse } from "./types/cosmos/bank/v1beta1/query";
import { SendAuthorization } from "./types/cosmos/bank/v1beta1/authz";
import { Supply } from "./types/cosmos/bank/v1beta1/bank";
import { QueryDenomsMetadataRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomOwnersRequest } from "./types/cosmos/bank/v1beta1/query";
import { MsgSend } from "./types/cosmos/bank/v1beta1/tx";
import { GenesisState } from "./types/cosmos/bank/v1beta1/genesis";
export { QueryDenomsMetadataResponse, QueryDenomMetadataResponse, SendEnabled, MsgMultiSend, QueryBalanceRequest, QueryAllBalancesRequest, QueryAllBalancesResponse, MsgSetSendEnabled, Params, QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryResponse, QuerySendEnabledResponse, MsgUpdateParams, Output, MsgUpdateParamsResponse, QuerySupplyOfResponse, QueryParamsRequest, QueryDenomMetadataByQueryStringRequest, QuerySupplyOfRequest, QuerySpendableBalancesRequest, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryParamsResponse, MsgSetSendEnabledResponse, QueryTotalSupplyRequest, MsgSendResponse, DenomUnit, Balance, QueryTotalSupplyResponse, DenomOwner, Input, QuerySendEnabledRequest, QueryDenomMetadataRequest, QueryDenomMetadataByQueryStringResponse, MsgMultiSendResponse, QueryDenomOwnersResponse, Metadata, QueryBalanceResponse, QuerySpendableBalancesResponse, SendAuthorization, Supply, QueryDenomsMetadataRequest, QueryDenomOwnersRequest, MsgSend, GenesisState };
type sendQueryDenomsMetadataResponseParams = {
    value: QueryDenomsMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataResponseParams = {
    value: QueryDenomMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSendEnabledParams = {
    value: SendEnabled;
    fee?: StdFee;
    memo?: string;
};
type sendMsgMultiSendParams = {
    value: MsgMultiSend;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceRequestParams = {
    value: QueryBalanceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllBalancesRequestParams = {
    value: QueryAllBalancesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllBalancesResponseParams = {
    value: QueryAllBalancesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetSendEnabledParams = {
    value: MsgSetSendEnabled;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersByQueryRequestParams = {
    value: QueryDenomOwnersByQueryRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersByQueryResponseParams = {
    value: QueryDenomOwnersByQueryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySendEnabledResponseParams = {
    value: QuerySendEnabledResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendOutputParams = {
    value: Output;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyOfResponseParams = {
    value: QuerySupplyOfResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataByQueryStringRequestParams = {
    value: QueryDenomMetadataByQueryStringRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyOfRequestParams = {
    value: QuerySupplyOfRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalancesRequestParams = {
    value: QuerySpendableBalancesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalanceByDenomRequestParams = {
    value: QuerySpendableBalanceByDenomRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalanceByDenomResponseParams = {
    value: QuerySpendableBalanceByDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetSendEnabledResponseParams = {
    value: MsgSetSendEnabledResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalSupplyRequestParams = {
    value: QueryTotalSupplyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendResponseParams = {
    value: MsgSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDenomUnitParams = {
    value: DenomUnit;
    fee?: StdFee;
    memo?: string;
};
type sendBalanceParams = {
    value: Balance;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalSupplyResponseParams = {
    value: QueryTotalSupplyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDenomOwnerParams = {
    value: DenomOwner;
    fee?: StdFee;
    memo?: string;
};
type sendInputParams = {
    value: Input;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySendEnabledRequestParams = {
    value: QuerySendEnabledRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataRequestParams = {
    value: QueryDenomMetadataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataByQueryStringResponseParams = {
    value: QueryDenomMetadataByQueryStringResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgMultiSendResponseParams = {
    value: MsgMultiSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersResponseParams = {
    value: QueryDenomOwnersResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMetadataParams = {
    value: Metadata;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceResponseParams = {
    value: QueryBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalancesResponseParams = {
    value: QuerySpendableBalancesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSendAuthorizationParams = {
    value: SendAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendSupplyParams = {
    value: Supply;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomsMetadataRequestParams = {
    value: QueryDenomsMetadataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersRequestParams = {
    value: QueryDenomOwnersRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendParams = {
    value: MsgSend;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type queryDenomsMetadataResponseParams = {
    value: QueryDenomsMetadataResponse;
};
type queryDenomMetadataResponseParams = {
    value: QueryDenomMetadataResponse;
};
type sendEnabledParams = {
    value: SendEnabled;
};
type msgMultiSendParams = {
    value: MsgMultiSend;
};
type queryBalanceRequestParams = {
    value: QueryBalanceRequest;
};
type queryAllBalancesRequestParams = {
    value: QueryAllBalancesRequest;
};
type queryAllBalancesResponseParams = {
    value: QueryAllBalancesResponse;
};
type msgSetSendEnabledParams = {
    value: MsgSetSendEnabled;
};
type paramsParams = {
    value: Params;
};
type queryDenomOwnersByQueryRequestParams = {
    value: QueryDenomOwnersByQueryRequest;
};
type queryDenomOwnersByQueryResponseParams = {
    value: QueryDenomOwnersByQueryResponse;
};
type querySendEnabledResponseParams = {
    value: QuerySendEnabledResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type outputParams = {
    value: Output;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type querySupplyOfResponseParams = {
    value: QuerySupplyOfResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryDenomMetadataByQueryStringRequestParams = {
    value: QueryDenomMetadataByQueryStringRequest;
};
type querySupplyOfRequestParams = {
    value: QuerySupplyOfRequest;
};
type querySpendableBalancesRequestParams = {
    value: QuerySpendableBalancesRequest;
};
type querySpendableBalanceByDenomRequestParams = {
    value: QuerySpendableBalanceByDenomRequest;
};
type querySpendableBalanceByDenomResponseParams = {
    value: QuerySpendableBalanceByDenomResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgSetSendEnabledResponseParams = {
    value: MsgSetSendEnabledResponse;
};
type queryTotalSupplyRequestParams = {
    value: QueryTotalSupplyRequest;
};
type msgSendResponseParams = {
    value: MsgSendResponse;
};
type denomUnitParams = {
    value: DenomUnit;
};
type balanceParams = {
    value: Balance;
};
type queryTotalSupplyResponseParams = {
    value: QueryTotalSupplyResponse;
};
type denomOwnerParams = {
    value: DenomOwner;
};
type inputParams = {
    value: Input;
};
type querySendEnabledRequestParams = {
    value: QuerySendEnabledRequest;
};
type queryDenomMetadataRequestParams = {
    value: QueryDenomMetadataRequest;
};
type queryDenomMetadataByQueryStringResponseParams = {
    value: QueryDenomMetadataByQueryStringResponse;
};
type msgMultiSendResponseParams = {
    value: MsgMultiSendResponse;
};
type queryDenomOwnersResponseParams = {
    value: QueryDenomOwnersResponse;
};
type metadataParams = {
    value: Metadata;
};
type queryBalanceResponseParams = {
    value: QueryBalanceResponse;
};
type querySpendableBalancesResponseParams = {
    value: QuerySpendableBalancesResponse;
};
type sendAuthorizationParams = {
    value: SendAuthorization;
};
type supplyParams = {
    value: Supply;
};
type queryDenomsMetadataRequestParams = {
    value: QueryDenomsMetadataRequest;
};
type queryDenomOwnersRequestParams = {
    value: QueryDenomOwnersRequest;
};
type msgSendParams = {
    value: MsgSend;
};
type genesisStateParams = {
    value: GenesisState;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryDenomsMetadataResponse({ value, fee, memo }: sendQueryDenomsMetadataResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataResponse({ value, fee, memo }: sendQueryDenomMetadataResponseParams): Promise<DeliverTxResponse>;
    sendSendEnabled({ value, fee, memo }: sendSendEnabledParams): Promise<DeliverTxResponse>;
    sendMsgMultiSend({ value, fee, memo }: sendMsgMultiSendParams): Promise<DeliverTxResponse>;
    sendQueryBalanceRequest({ value, fee, memo }: sendQueryBalanceRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllBalancesRequest({ value, fee, memo }: sendQueryAllBalancesRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllBalancesResponse({ value, fee, memo }: sendQueryAllBalancesResponseParams): Promise<DeliverTxResponse>;
    sendMsgSetSendEnabled({ value, fee, memo }: sendMsgSetSendEnabledParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersByQueryRequest({ value, fee, memo }: sendQueryDenomOwnersByQueryRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersByQueryResponse({ value, fee, memo }: sendQueryDenomOwnersByQueryResponseParams): Promise<DeliverTxResponse>;
    sendQuerySendEnabledResponse({ value, fee, memo }: sendQuerySendEnabledResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendOutput({ value, fee, memo }: sendOutputParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQuerySupplyOfResponse({ value, fee, memo }: sendQuerySupplyOfResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataByQueryStringRequest({ value, fee, memo }: sendQueryDenomMetadataByQueryStringRequestParams): Promise<DeliverTxResponse>;
    sendQuerySupplyOfRequest({ value, fee, memo }: sendQuerySupplyOfRequestParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalancesRequest({ value, fee, memo }: sendQuerySpendableBalancesRequestParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalanceByDenomRequest({ value, fee, memo }: sendQuerySpendableBalanceByDenomRequestParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalanceByDenomResponse({ value, fee, memo }: sendQuerySpendableBalanceByDenomResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgSetSendEnabledResponse({ value, fee, memo }: sendMsgSetSendEnabledResponseParams): Promise<DeliverTxResponse>;
    sendQueryTotalSupplyRequest({ value, fee, memo }: sendQueryTotalSupplyRequestParams): Promise<DeliverTxResponse>;
    sendMsgSendResponse({ value, fee, memo }: sendMsgSendResponseParams): Promise<DeliverTxResponse>;
    sendDenomUnit({ value, fee, memo }: sendDenomUnitParams): Promise<DeliverTxResponse>;
    sendBalance({ value, fee, memo }: sendBalanceParams): Promise<DeliverTxResponse>;
    sendQueryTotalSupplyResponse({ value, fee, memo }: sendQueryTotalSupplyResponseParams): Promise<DeliverTxResponse>;
    sendDenomOwner({ value, fee, memo }: sendDenomOwnerParams): Promise<DeliverTxResponse>;
    sendInput({ value, fee, memo }: sendInputParams): Promise<DeliverTxResponse>;
    sendQuerySendEnabledRequest({ value, fee, memo }: sendQuerySendEnabledRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataRequest({ value, fee, memo }: sendQueryDenomMetadataRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataByQueryStringResponse({ value, fee, memo }: sendQueryDenomMetadataByQueryStringResponseParams): Promise<DeliverTxResponse>;
    sendMsgMultiSendResponse({ value, fee, memo }: sendMsgMultiSendResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersResponse({ value, fee, memo }: sendQueryDenomOwnersResponseParams): Promise<DeliverTxResponse>;
    sendMetadata({ value, fee, memo }: sendMetadataParams): Promise<DeliverTxResponse>;
    sendQueryBalanceResponse({ value, fee, memo }: sendQueryBalanceResponseParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalancesResponse({ value, fee, memo }: sendQuerySpendableBalancesResponseParams): Promise<DeliverTxResponse>;
    sendSendAuthorization({ value, fee, memo }: sendSendAuthorizationParams): Promise<DeliverTxResponse>;
    sendSupply({ value, fee, memo }: sendSupplyParams): Promise<DeliverTxResponse>;
    sendQueryDenomsMetadataRequest({ value, fee, memo }: sendQueryDenomsMetadataRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersRequest({ value, fee, memo }: sendQueryDenomOwnersRequestParams): Promise<DeliverTxResponse>;
    sendMsgSend({ value, fee, memo }: sendMsgSendParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    queryDenomsMetadataResponse({ value }: queryDenomsMetadataResponseParams): EncodeObject;
    queryDenomMetadataResponse({ value }: queryDenomMetadataResponseParams): EncodeObject;
    sendEnabled({ value }: sendEnabledParams): EncodeObject;
    msgMultiSend({ value }: msgMultiSendParams): EncodeObject;
    queryBalanceRequest({ value }: queryBalanceRequestParams): EncodeObject;
    queryAllBalancesRequest({ value }: queryAllBalancesRequestParams): EncodeObject;
    queryAllBalancesResponse({ value }: queryAllBalancesResponseParams): EncodeObject;
    msgSetSendEnabled({ value }: msgSetSendEnabledParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryDenomOwnersByQueryRequest({ value }: queryDenomOwnersByQueryRequestParams): EncodeObject;
    queryDenomOwnersByQueryResponse({ value }: queryDenomOwnersByQueryResponseParams): EncodeObject;
    querySendEnabledResponse({ value }: querySendEnabledResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    output({ value }: outputParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    querySupplyOfResponse({ value }: querySupplyOfResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryDenomMetadataByQueryStringRequest({ value }: queryDenomMetadataByQueryStringRequestParams): EncodeObject;
    querySupplyOfRequest({ value }: querySupplyOfRequestParams): EncodeObject;
    querySpendableBalancesRequest({ value }: querySpendableBalancesRequestParams): EncodeObject;
    querySpendableBalanceByDenomRequest({ value }: querySpendableBalanceByDenomRequestParams): EncodeObject;
    querySpendableBalanceByDenomResponse({ value }: querySpendableBalanceByDenomResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgSetSendEnabledResponse({ value }: msgSetSendEnabledResponseParams): EncodeObject;
    queryTotalSupplyRequest({ value }: queryTotalSupplyRequestParams): EncodeObject;
    msgSendResponse({ value }: msgSendResponseParams): EncodeObject;
    denomUnit({ value }: denomUnitParams): EncodeObject;
    balance({ value }: balanceParams): EncodeObject;
    queryTotalSupplyResponse({ value }: queryTotalSupplyResponseParams): EncodeObject;
    denomOwner({ value }: denomOwnerParams): EncodeObject;
    input({ value }: inputParams): EncodeObject;
    querySendEnabledRequest({ value }: querySendEnabledRequestParams): EncodeObject;
    queryDenomMetadataRequest({ value }: queryDenomMetadataRequestParams): EncodeObject;
    queryDenomMetadataByQueryStringResponse({ value }: queryDenomMetadataByQueryStringResponseParams): EncodeObject;
    msgMultiSendResponse({ value }: msgMultiSendResponseParams): EncodeObject;
    queryDenomOwnersResponse({ value }: queryDenomOwnersResponseParams): EncodeObject;
    metadata({ value }: metadataParams): EncodeObject;
    queryBalanceResponse({ value }: queryBalanceResponseParams): EncodeObject;
    querySpendableBalancesResponse({ value }: querySpendableBalancesResponseParams): EncodeObject;
    sendAuthorization({ value }: sendAuthorizationParams): EncodeObject;
    supply({ value }: supplyParams): EncodeObject;
    queryDenomsMetadataRequest({ value }: queryDenomsMetadataRequestParams): EncodeObject;
    queryDenomOwnersRequest({ value }: queryDenomOwnersRequestParams): EncodeObject;
    msgSend({ value }: msgSendParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
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
        CosmosBankV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;