import { GeneratedType } from "@cosmjs/proto-signing";
import { DisabledListResponse } from "./types/cosmos/circuit/v1/query";
import { MsgAuthorizeCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { QueryAccountsRequest } from "./types/cosmos/circuit/v1/query";
import { QueryAccountRequest } from "./types/cosmos/circuit/v1/query";
import { MsgAuthorizeCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { MsgTripCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { MsgTripCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { GenesisState } from "./types/cosmos/circuit/v1/types";
import { GenesisAccountPermissions } from "./types/cosmos/circuit/v1/types";
import { AccountsResponse } from "./types/cosmos/circuit/v1/query";
import { QueryDisabledListRequest } from "./types/cosmos/circuit/v1/query";
import { MsgResetCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { MsgResetCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { Permissions } from "./types/cosmos/circuit/v1/types";
import { AccountResponse } from "./types/cosmos/circuit/v1/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.circuit.v1.DisabledListResponse", DisabledListResponse],
    ["/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker", MsgAuthorizeCircuitBreaker],
    ["/cosmos.circuit.v1.QueryAccountsRequest", QueryAccountsRequest],
    ["/cosmos.circuit.v1.QueryAccountRequest", QueryAccountRequest],
    ["/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse", MsgAuthorizeCircuitBreakerResponse],
    ["/cosmos.circuit.v1.MsgTripCircuitBreaker", MsgTripCircuitBreaker],
    ["/cosmos.circuit.v1.MsgTripCircuitBreakerResponse", MsgTripCircuitBreakerResponse],
    ["/cosmos.circuit.v1.GenesisState", GenesisState],
    ["/cosmos.circuit.v1.GenesisAccountPermissions", GenesisAccountPermissions],
    ["/cosmos.circuit.v1.AccountsResponse", AccountsResponse],
    ["/cosmos.circuit.v1.QueryDisabledListRequest", QueryDisabledListRequest],
    ["/cosmos.circuit.v1.MsgResetCircuitBreaker", MsgResetCircuitBreaker],
    ["/cosmos.circuit.v1.MsgResetCircuitBreakerResponse", MsgResetCircuitBreakerResponse],
    ["/cosmos.circuit.v1.Permissions", Permissions],
    ["/cosmos.circuit.v1.AccountResponse", AccountResponse],
    
];

export { msgTypes }