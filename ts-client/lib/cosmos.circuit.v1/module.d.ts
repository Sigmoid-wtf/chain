import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgTripCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { Permissions } from "./types/cosmos/circuit/v1/types";
import { DisabledListResponse } from "./types/cosmos/circuit/v1/query";
import { MsgTripCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { GenesisAccountPermissions } from "./types/cosmos/circuit/v1/types";
import { AccountResponse } from "./types/cosmos/circuit/v1/query";
import { QueryAccountsRequest } from "./types/cosmos/circuit/v1/query";
import { MsgResetCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { QueryAccountRequest } from "./types/cosmos/circuit/v1/query";
import { QueryDisabledListRequest } from "./types/cosmos/circuit/v1/query";
import { MsgAuthorizeCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { MsgResetCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { GenesisState } from "./types/cosmos/circuit/v1/types";
import { AccountsResponse } from "./types/cosmos/circuit/v1/query";
import { MsgAuthorizeCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
export { MsgTripCircuitBreakerResponse, Permissions, DisabledListResponse, MsgTripCircuitBreaker, GenesisAccountPermissions, AccountResponse, QueryAccountsRequest, MsgResetCircuitBreakerResponse, QueryAccountRequest, QueryDisabledListRequest, MsgAuthorizeCircuitBreakerResponse, MsgResetCircuitBreaker, GenesisState, AccountsResponse, MsgAuthorizeCircuitBreaker };
type sendMsgTripCircuitBreakerResponseParams = {
    value: MsgTripCircuitBreakerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendPermissionsParams = {
    value: Permissions;
    fee?: StdFee;
    memo?: string;
};
type sendDisabledListResponseParams = {
    value: DisabledListResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTripCircuitBreakerParams = {
    value: MsgTripCircuitBreaker;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisAccountPermissionsParams = {
    value: GenesisAccountPermissions;
    fee?: StdFee;
    memo?: string;
};
type sendAccountResponseParams = {
    value: AccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountsRequestParams = {
    value: QueryAccountsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgResetCircuitBreakerResponseParams = {
    value: MsgResetCircuitBreakerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountRequestParams = {
    value: QueryAccountRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDisabledListRequestParams = {
    value: QueryDisabledListRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAuthorizeCircuitBreakerResponseParams = {
    value: MsgAuthorizeCircuitBreakerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgResetCircuitBreakerParams = {
    value: MsgResetCircuitBreaker;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendAccountsResponseParams = {
    value: AccountsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAuthorizeCircuitBreakerParams = {
    value: MsgAuthorizeCircuitBreaker;
    fee?: StdFee;
    memo?: string;
};
type msgTripCircuitBreakerResponseParams = {
    value: MsgTripCircuitBreakerResponse;
};
type permissionsParams = {
    value: Permissions;
};
type disabledListResponseParams = {
    value: DisabledListResponse;
};
type msgTripCircuitBreakerParams = {
    value: MsgTripCircuitBreaker;
};
type genesisAccountPermissionsParams = {
    value: GenesisAccountPermissions;
};
type accountResponseParams = {
    value: AccountResponse;
};
type queryAccountsRequestParams = {
    value: QueryAccountsRequest;
};
type msgResetCircuitBreakerResponseParams = {
    value: MsgResetCircuitBreakerResponse;
};
type queryAccountRequestParams = {
    value: QueryAccountRequest;
};
type queryDisabledListRequestParams = {
    value: QueryDisabledListRequest;
};
type msgAuthorizeCircuitBreakerResponseParams = {
    value: MsgAuthorizeCircuitBreakerResponse;
};
type msgResetCircuitBreakerParams = {
    value: MsgResetCircuitBreaker;
};
type genesisStateParams = {
    value: GenesisState;
};
type accountsResponseParams = {
    value: AccountsResponse;
};
type msgAuthorizeCircuitBreakerParams = {
    value: MsgAuthorizeCircuitBreaker;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgTripCircuitBreakerResponse({ value, fee, memo }: sendMsgTripCircuitBreakerResponseParams): Promise<DeliverTxResponse>;
    sendPermissions({ value, fee, memo }: sendPermissionsParams): Promise<DeliverTxResponse>;
    sendDisabledListResponse({ value, fee, memo }: sendDisabledListResponseParams): Promise<DeliverTxResponse>;
    sendMsgTripCircuitBreaker({ value, fee, memo }: sendMsgTripCircuitBreakerParams): Promise<DeliverTxResponse>;
    sendGenesisAccountPermissions({ value, fee, memo }: sendGenesisAccountPermissionsParams): Promise<DeliverTxResponse>;
    sendAccountResponse({ value, fee, memo }: sendAccountResponseParams): Promise<DeliverTxResponse>;
    sendQueryAccountsRequest({ value, fee, memo }: sendQueryAccountsRequestParams): Promise<DeliverTxResponse>;
    sendMsgResetCircuitBreakerResponse({ value, fee, memo }: sendMsgResetCircuitBreakerResponseParams): Promise<DeliverTxResponse>;
    sendQueryAccountRequest({ value, fee, memo }: sendQueryAccountRequestParams): Promise<DeliverTxResponse>;
    sendQueryDisabledListRequest({ value, fee, memo }: sendQueryDisabledListRequestParams): Promise<DeliverTxResponse>;
    sendMsgAuthorizeCircuitBreakerResponse({ value, fee, memo }: sendMsgAuthorizeCircuitBreakerResponseParams): Promise<DeliverTxResponse>;
    sendMsgResetCircuitBreaker({ value, fee, memo }: sendMsgResetCircuitBreakerParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendAccountsResponse({ value, fee, memo }: sendAccountsResponseParams): Promise<DeliverTxResponse>;
    sendMsgAuthorizeCircuitBreaker({ value, fee, memo }: sendMsgAuthorizeCircuitBreakerParams): Promise<DeliverTxResponse>;
    msgTripCircuitBreakerResponse({ value }: msgTripCircuitBreakerResponseParams): EncodeObject;
    permissions({ value }: permissionsParams): EncodeObject;
    disabledListResponse({ value }: disabledListResponseParams): EncodeObject;
    msgTripCircuitBreaker({ value }: msgTripCircuitBreakerParams): EncodeObject;
    genesisAccountPermissions({ value }: genesisAccountPermissionsParams): EncodeObject;
    accountResponse({ value }: accountResponseParams): EncodeObject;
    queryAccountsRequest({ value }: queryAccountsRequestParams): EncodeObject;
    msgResetCircuitBreakerResponse({ value }: msgResetCircuitBreakerResponseParams): EncodeObject;
    queryAccountRequest({ value }: queryAccountRequestParams): EncodeObject;
    queryDisabledListRequest({ value }: queryDisabledListRequestParams): EncodeObject;
    msgAuthorizeCircuitBreakerResponse({ value }: msgAuthorizeCircuitBreakerResponseParams): EncodeObject;
    msgResetCircuitBreaker({ value }: msgResetCircuitBreakerParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    accountsResponse({ value }: accountsResponseParams): EncodeObject;
    msgAuthorizeCircuitBreaker({ value }: msgAuthorizeCircuitBreakerParams): EncodeObject;
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
        CosmosCircuitV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
