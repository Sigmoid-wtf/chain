import { GeneratedType } from "@cosmjs/proto-signing";
import { Params } from "./types/sigmoid/sigmoid/params";
import { QueryParamsResponse } from "./types/sigmoid/sigmoid/query";
import { MsgApproveRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransactionResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgSetRaoCurrentStakedBalance } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetRaoStakedBalanceRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetLastProcessedResponse } from "./types/sigmoid/sigmoid/query";
import { MsgProcessTransaction } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryParamsRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetRaoStakedBalanceResponse } from "./types/sigmoid/sigmoid/query";
import { Request } from "./types/sigmoid/sigmoid/request";
import { MsgCreateRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgUpdateParams } from "./types/sigmoid/sigmoid/tx";
import { QueryGetAmountResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetAmountRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgUpdateParamsResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgSetRaoCurrentStakedBalanceResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLastProcessedRequest } from "./types/sigmoid/sigmoid/query";
import { GenesisState } from "./types/sigmoid/sigmoid/genesis";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoid.sigmoid.Params", Params],
    ["/sigmoid.sigmoid.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoid.sigmoid.MsgApproveRequest", MsgApproveRequest],
    ["/sigmoid.sigmoid.MsgProcessTransactionResponse", MsgProcessTransactionResponse],
    ["/sigmoid.sigmoid.MsgSetRaoCurrentStakedBalance", MsgSetRaoCurrentStakedBalance],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequest", MsgCreateUnstakeRequest],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequestResponse", MsgCreateUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequestResponse", MsgApproveUnstakeRequestResponse],
    ["/sigmoid.sigmoid.QueryGetRaoStakedBalanceRequest", QueryGetRaoStakedBalanceRequest],
    ["/sigmoid.sigmoid.QueryGetLastProcessedResponse", QueryGetLastProcessedResponse],
    ["/sigmoid.sigmoid.MsgProcessTransaction", MsgProcessTransaction],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequest", MsgApproveUnstakeRequest],
    ["/sigmoid.sigmoid.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoid.sigmoid.QueryGetRaoStakedBalanceResponse", QueryGetRaoStakedBalanceResponse],
    ["/sigmoid.sigmoid.Request", Request],
    ["/sigmoid.sigmoid.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoid.sigmoid.MsgCreateRequestResponse", MsgCreateRequestResponse],
    ["/sigmoid.sigmoid.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoid.sigmoid.QueryGetAmountResponse", QueryGetAmountResponse],
    ["/sigmoid.sigmoid.QueryGetAmountRequest", QueryGetAmountRequest],
    ["/sigmoid.sigmoid.QueryGetPendingUnstakeRequestRequest", QueryGetPendingUnstakeRequestRequest],
    ["/sigmoid.sigmoid.QueryGetPendingUnstakeRequestResponse", QueryGetPendingUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoid.sigmoid.MsgApproveRequestResponse", MsgApproveRequestResponse],
    ["/sigmoid.sigmoid.MsgSetRaoCurrentStakedBalanceResponse", MsgSetRaoCurrentStakedBalanceResponse],
    ["/sigmoid.sigmoid.QueryGetLastProcessedRequest", QueryGetLastProcessedRequest],
    ["/sigmoid.sigmoid.GenesisState", GenesisState],
    
];

export { msgTypes }