import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetAmountRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetAmountResponse } from "./types/sigmoid/sigmoid/query";
import { MsgCreateRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLastProcessedRequest } from "./types/sigmoid/sigmoid/query";
import { MsgUpdateParamsResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLastProcessedResponse } from "./types/sigmoid/sigmoid/query";
import { Params } from "./types/sigmoid/sigmoid/params";
import { MsgCreateRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { Request } from "./types/sigmoid/sigmoid/request";
import { QueryParamsResponse } from "./types/sigmoid/sigmoid/query";
import { GenesisState } from "./types/sigmoid/sigmoid/genesis";
import { MsgProcessTransaction } from "./types/sigmoid/sigmoid/tx";
import { MsgUpdateParams } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransactionResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoid.sigmoid.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoid.sigmoid.QueryGetAmountRequest", QueryGetAmountRequest],
    ["/sigmoid.sigmoid.QueryGetAmountResponse", QueryGetAmountResponse],
    ["/sigmoid.sigmoid.MsgCreateRequestResponse", MsgCreateRequestResponse],
    ["/sigmoid.sigmoid.MsgApproveRequest", MsgApproveRequest],
    ["/sigmoid.sigmoid.MsgApproveRequestResponse", MsgApproveRequestResponse],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequest", MsgCreateUnstakeRequest],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequest", MsgApproveUnstakeRequest],
    ["/sigmoid.sigmoid.QueryGetLastProcessedRequest", QueryGetLastProcessedRequest],
    ["/sigmoid.sigmoid.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoid.sigmoid.QueryGetLastProcessedResponse", QueryGetLastProcessedResponse],
    ["/sigmoid.sigmoid.Params", Params],
    ["/sigmoid.sigmoid.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequestResponse", MsgApproveUnstakeRequestResponse],
    ["/sigmoid.sigmoid.Request", Request],
    ["/sigmoid.sigmoid.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoid.sigmoid.GenesisState", GenesisState],
    ["/sigmoid.sigmoid.MsgProcessTransaction", MsgProcessTransaction],
    ["/sigmoid.sigmoid.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoid.sigmoid.MsgProcessTransactionResponse", MsgProcessTransactionResponse],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequestResponse", MsgCreateUnstakeRequestResponse],
    
];

export { msgTypes }