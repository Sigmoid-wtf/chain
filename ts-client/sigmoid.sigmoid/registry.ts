import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgProcessTransaction } from "./types/sigmoid/sigmoid/tx";
import { QueryParamsResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetLastProcessedResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgCreateUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetSigtaoRateDRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingBridgeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { GenesisState } from "./types/sigmoid/sigmoid/genesis";
import { MsgCreateRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryGetAmountResponse } from "./types/sigmoid/sigmoid/query";
import { MsgCreateRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransactionResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryParamsRequest } from "./types/sigmoid/sigmoid/query";
import { Params } from "./types/sigmoid/sigmoid/params";
import { MsgCreateBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetRaoStakedBalanceResponse } from "./types/sigmoid/sigmoid/query";
import { MsgUpdateParams } from "./types/sigmoid/sigmoid/tx";
import { MsgUpdateParamsResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgSetRaoCurrentStakedBalance } from "./types/sigmoid/sigmoid/tx";
import { QueryGetRaoStakedBalanceRequest } from "./types/sigmoid/sigmoid/query";
import { Request } from "./types/sigmoid/sigmoid/request";
import { MsgApproveRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgSetRaoCurrentStakedBalanceResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryGetAmountRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetLastProcessedRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetSigtaoRateDResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingBridgeRequestRequest } from "./types/sigmoid/sigmoid/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoid.sigmoid.MsgProcessTransaction", MsgProcessTransaction],
    ["/sigmoid.sigmoid.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoid.sigmoid.QueryGetLastProcessedResponse", QueryGetLastProcessedResponse],
    ["/sigmoid.sigmoid.QueryGetPendingUnstakeRequestRequest", QueryGetPendingUnstakeRequestRequest],
    ["/sigmoid.sigmoid.QueryGetPendingUnstakeRequestResponse", QueryGetPendingUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequestResponse", MsgCreateUnstakeRequestResponse],
    ["/sigmoid.sigmoid.QueryGetSigtaoRateDRequest", QueryGetSigtaoRateDRequest],
    ["/sigmoid.sigmoid.QueryGetPendingBridgeRequestResponse", QueryGetPendingBridgeRequestResponse],
    ["/sigmoid.sigmoid.GenesisState", GenesisState],
    ["/sigmoid.sigmoid.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequest", MsgApproveUnstakeRequest],
    ["/sigmoid.sigmoid.QueryGetAmountResponse", QueryGetAmountResponse],
    ["/sigmoid.sigmoid.MsgCreateRequestResponse", MsgCreateRequestResponse],
    ["/sigmoid.sigmoid.MsgApproveRequest", MsgApproveRequest],
    ["/sigmoid.sigmoid.MsgProcessTransactionResponse", MsgProcessTransactionResponse],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequest", MsgCreateUnstakeRequest],
    ["/sigmoid.sigmoid.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoid.sigmoid.Params", Params],
    ["/sigmoid.sigmoid.MsgCreateBridgeRequestResponse", MsgCreateBridgeRequestResponse],
    ["/sigmoid.sigmoid.QueryGetRaoStakedBalanceResponse", QueryGetRaoStakedBalanceResponse],
    ["/sigmoid.sigmoid.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoid.sigmoid.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequestResponse", MsgApproveUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgSetRaoCurrentStakedBalance", MsgSetRaoCurrentStakedBalance],
    ["/sigmoid.sigmoid.QueryGetRaoStakedBalanceRequest", QueryGetRaoStakedBalanceRequest],
    ["/sigmoid.sigmoid.Request", Request],
    ["/sigmoid.sigmoid.MsgApproveRequestResponse", MsgApproveRequestResponse],
    ["/sigmoid.sigmoid.MsgSetRaoCurrentStakedBalanceResponse", MsgSetRaoCurrentStakedBalanceResponse],
    ["/sigmoid.sigmoid.MsgCreateBridgeRequest", MsgCreateBridgeRequest],
    ["/sigmoid.sigmoid.QueryGetAmountRequest", QueryGetAmountRequest],
    ["/sigmoid.sigmoid.QueryGetLastProcessedRequest", QueryGetLastProcessedRequest],
    ["/sigmoid.sigmoid.QueryGetSigtaoRateDResponse", QueryGetSigtaoRateDResponse],
    ["/sigmoid.sigmoid.QueryGetPendingBridgeRequestRequest", QueryGetPendingBridgeRequestRequest],
    
];

export { msgTypes }