import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateRequest } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgApproveRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { FrontStakeRequest } from "./types/sigmoidtest/sigmoidtest/front_stake_request";
import { QueryGetAmountResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetLastProcessedResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetFrontStakeRequestResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgProcessTransactionResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { Params } from "./types/sigmoidtest/sigmoidtest/params";
import { QueryParamsResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetAmountRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetFrontStakeRequestRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgProcessTransaction } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgUpdateParamsResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgCreateRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgApproveRequest } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryParamsRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetLastProcessedRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgUpdateParams } from "./types/sigmoidtest/sigmoidtest/tx";
import { GenesisState } from "./types/sigmoidtest/sigmoidtest/genesis";
import { Request } from "./types/sigmoidtest/sigmoidtest/request";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoidtest.sigmoidtest.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoidtest.sigmoidtest.MsgApproveRequestResponse", MsgApproveRequestResponse],
    ["/sigmoidtest.sigmoidtest.FrontStakeRequest", FrontStakeRequest],
    ["/sigmoidtest.sigmoidtest.QueryGetAmountResponse", QueryGetAmountResponse],
    ["/sigmoidtest.sigmoidtest.QueryGetLastProcessedResponse", QueryGetLastProcessedResponse],
    ["/sigmoidtest.sigmoidtest.QueryGetFrontStakeRequestResponse", QueryGetFrontStakeRequestResponse],
    ["/sigmoidtest.sigmoidtest.MsgProcessTransactionResponse", MsgProcessTransactionResponse],
    ["/sigmoidtest.sigmoidtest.Params", Params],
    ["/sigmoidtest.sigmoidtest.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoidtest.sigmoidtest.QueryGetAmountRequest", QueryGetAmountRequest],
    ["/sigmoidtest.sigmoidtest.QueryGetFrontStakeRequestRequest", QueryGetFrontStakeRequestRequest],
    ["/sigmoidtest.sigmoidtest.MsgProcessTransaction", MsgProcessTransaction],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoidtest.sigmoidtest.MsgCreateRequestResponse", MsgCreateRequestResponse],
    ["/sigmoidtest.sigmoidtest.MsgApproveRequest", MsgApproveRequest],
    ["/sigmoidtest.sigmoidtest.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoidtest.sigmoidtest.QueryGetLastProcessedRequest", QueryGetLastProcessedRequest],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoidtest.sigmoidtest.GenesisState", GenesisState],
    ["/sigmoidtest.sigmoidtest.Request", Request],
    
];

export { msgTypes }