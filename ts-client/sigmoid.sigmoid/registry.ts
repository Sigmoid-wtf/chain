import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransaction } from "./types/sigmoid/sigmoid/tx";
import { Params } from "./types/sigmoid/sigmoid/params";
import { QueryGetLastProcessedRequest } from "./types/sigmoid/sigmoid/query";
import { MsgUpdateParams } from "./types/sigmoid/sigmoid/tx";
import { MsgUpdateParamsResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveRequest } from "./types/sigmoid/sigmoid/tx";
import { Request } from "./types/sigmoid/sigmoid/request";
import { QueryGetLastProcessedResponse } from "./types/sigmoid/sigmoid/query";
import { MsgApproveRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransactionResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryParamsResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetAmountResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { QueryParamsRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { MsgCreateUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { GenesisState } from "./types/sigmoid/sigmoid/genesis";
import { MsgCreateRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryGetAmountRequest } from "./types/sigmoid/sigmoid/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoid.sigmoid.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoid.sigmoid.MsgProcessTransaction", MsgProcessTransaction],
    ["/sigmoid.sigmoid.Params", Params],
    ["/sigmoid.sigmoid.QueryGetLastProcessedRequest", QueryGetLastProcessedRequest],
    ["/sigmoid.sigmoid.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoid.sigmoid.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoid.sigmoid.MsgApproveRequest", MsgApproveRequest],
    ["/sigmoid.sigmoid.Request", Request],
    ["/sigmoid.sigmoid.QueryGetLastProcessedResponse", QueryGetLastProcessedResponse],
    ["/sigmoid.sigmoid.MsgApproveRequestResponse", MsgApproveRequestResponse],
    ["/sigmoid.sigmoid.MsgProcessTransactionResponse", MsgProcessTransactionResponse],
    ["/sigmoid.sigmoid.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoid.sigmoid.QueryGetAmountResponse", QueryGetAmountResponse],
    ["/sigmoid.sigmoid.QueryGetPendingUnstakeRequestResponse", QueryGetPendingUnstakeRequestResponse],
    ["/sigmoid.sigmoid.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoid.sigmoid.QueryGetPendingUnstakeRequestRequest", QueryGetPendingUnstakeRequestRequest],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequest", MsgCreateUnstakeRequest],
    ["/sigmoid.sigmoid.GenesisState", GenesisState],
    ["/sigmoid.sigmoid.MsgCreateRequestResponse", MsgCreateRequestResponse],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequestResponse", MsgApproveUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequestResponse", MsgCreateUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequest", MsgApproveUnstakeRequest],
    ["/sigmoid.sigmoid.QueryGetAmountRequest", QueryGetAmountRequest],
    
];

export { msgTypes }