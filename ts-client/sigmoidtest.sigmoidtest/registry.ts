import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgApproveRequest } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgApproveRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgProcessTransactionResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryParamsRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetAmountResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetLastProcessedRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { GenesisState } from "./types/sigmoidtest/sigmoidtest/genesis";
import { QueryGetAmountRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgUpdateParams } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryGetLastProcessedResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { Params } from "./types/sigmoidtest/sigmoidtest/params";
import { Request } from "./types/sigmoidtest/sigmoidtest/request";
import { MsgUpdateParamsResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgCreateRequest } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryParamsResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { FrontStakeRequest } from "./types/sigmoidtest/sigmoidtest/front_stake_request";
import { MsgProcessTransaction } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgCreateRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoidtest.sigmoidtest.MsgApproveRequest", MsgApproveRequest],
    ["/sigmoidtest.sigmoidtest.MsgApproveRequestResponse", MsgApproveRequestResponse],
    ["/sigmoidtest.sigmoidtest.MsgProcessTransactionResponse", MsgProcessTransactionResponse],
    ["/sigmoidtest.sigmoidtest.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoidtest.sigmoidtest.QueryGetAmountResponse", QueryGetAmountResponse],
    ["/sigmoidtest.sigmoidtest.QueryGetLastProcessedRequest", QueryGetLastProcessedRequest],
    ["/sigmoidtest.sigmoidtest.GenesisState", GenesisState],
    ["/sigmoidtest.sigmoidtest.QueryGetAmountRequest", QueryGetAmountRequest],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoidtest.sigmoidtest.QueryGetLastProcessedResponse", QueryGetLastProcessedResponse],
    ["/sigmoidtest.sigmoidtest.Params", Params],
    ["/sigmoidtest.sigmoidtest.Request", Request],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoidtest.sigmoidtest.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoidtest.sigmoidtest.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoidtest.sigmoidtest.FrontStakeRequest", FrontStakeRequest],
    ["/sigmoidtest.sigmoidtest.MsgProcessTransaction", MsgProcessTransaction],
    ["/sigmoidtest.sigmoidtest.MsgCreateRequestResponse", MsgCreateRequestResponse],
    
];

export { msgTypes }