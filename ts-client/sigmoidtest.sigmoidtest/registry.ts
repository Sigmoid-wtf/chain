import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgProcessTransaction } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgUpdateParams } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryParamsResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgProcessTransactionResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgApproveRequest } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryGetLastProcessedRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetLastProcessedResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgCreateRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryParamsRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetAmountResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { GenesisState } from "./types/sigmoidtest/sigmoidtest/genesis";
import { MsgUpdateParamsResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { Request } from "./types/sigmoidtest/sigmoidtest/request";
import { QueryGetAmountRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { Params } from "./types/sigmoidtest/sigmoidtest/params";
import { MsgCreateRequest } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgApproveRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoidtest.sigmoidtest.MsgProcessTransaction", MsgProcessTransaction],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoidtest.sigmoidtest.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoidtest.sigmoidtest.MsgProcessTransactionResponse", MsgProcessTransactionResponse],
    ["/sigmoidtest.sigmoidtest.MsgApproveRequest", MsgApproveRequest],
    ["/sigmoidtest.sigmoidtest.QueryGetLastProcessedRequest", QueryGetLastProcessedRequest],
    ["/sigmoidtest.sigmoidtest.QueryGetLastProcessedResponse", QueryGetLastProcessedResponse],
    ["/sigmoidtest.sigmoidtest.MsgCreateRequestResponse", MsgCreateRequestResponse],
    ["/sigmoidtest.sigmoidtest.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoidtest.sigmoidtest.QueryGetAmountResponse", QueryGetAmountResponse],
    ["/sigmoidtest.sigmoidtest.GenesisState", GenesisState],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoidtest.sigmoidtest.Request", Request],
    ["/sigmoidtest.sigmoidtest.QueryGetAmountRequest", QueryGetAmountRequest],
    ["/sigmoidtest.sigmoidtest.Params", Params],
    ["/sigmoidtest.sigmoidtest.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoidtest.sigmoidtest.MsgApproveRequestResponse", MsgApproveRequestResponse],
    
];

export { msgTypes }