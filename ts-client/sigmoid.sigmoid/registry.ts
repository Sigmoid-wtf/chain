import { GeneratedType } from "@cosmjs/proto-signing";
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

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoid.sigmoid.GenesisState", GenesisState],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequestResponse", MsgApproveUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoid.sigmoid.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoid.sigmoid.Params", Params],
    ["/sigmoid.sigmoid.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoid.sigmoid.QueryGetLastProcessedResponse", QueryGetLastProcessedResponse],
    ["/sigmoid.sigmoid.QueryGetPendingUnstakeRequestResponse", QueryGetPendingUnstakeRequestResponse],
    ["/sigmoid.sigmoid.QueryGetFrontPendingStakeRequestRequest", QueryGetFrontPendingStakeRequestRequest],
    ["/sigmoid.sigmoid.QueryGetFrontPendingUnstakeRequestResponse", QueryGetFrontPendingUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgProcessTransaction", MsgProcessTransaction],
    ["/sigmoid.sigmoid.MsgProcessTransactionResponse", MsgProcessTransactionResponse],
    ["/sigmoid.sigmoid.QueryGetAmountResponse", QueryGetAmountResponse],
    ["/sigmoid.sigmoid.QueryGetLastProcessedRequest", QueryGetLastProcessedRequest],
    ["/sigmoid.sigmoid.Request", Request],
    ["/sigmoid.sigmoid.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoid.sigmoid.QueryGetPendingUnstakeRequestRequest", QueryGetPendingUnstakeRequestRequest],
    ["/sigmoid.sigmoid.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoid.sigmoid.QueryGetFrontPendingStakeRequestResponse", QueryGetFrontPendingStakeRequestResponse],
    ["/sigmoid.sigmoid.QueryGetAmountRequest", QueryGetAmountRequest],
    ["/sigmoid.sigmoid.MsgApproveRequest", MsgApproveRequest],
    ["/sigmoid.sigmoid.MsgApproveRequestResponse", MsgApproveRequestResponse],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequest", MsgCreateUnstakeRequest],
    ["/sigmoid.sigmoid.QueryGetFrontPendingUnstakeRequestRequest", QueryGetFrontPendingUnstakeRequestRequest],
    ["/sigmoid.sigmoid.MsgCreateRequestResponse", MsgCreateRequestResponse],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequestResponse", MsgCreateUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequest", MsgApproveUnstakeRequest],
    
];

export { msgTypes }