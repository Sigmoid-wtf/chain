import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgCreateRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryGetLastProcessedResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgApproveRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgProcessTransaction } from "./types/sigmoidtest/sigmoidtest/tx";
import { GenesisState } from "./types/sigmoidtest/sigmoidtest/genesis";
import { MsgUpdateParamsResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgProcessTransactionResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgApproveRequest } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryParamsResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetAmountResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { Request } from "./types/sigmoidtest/sigmoidtest/request";
import { QueryGetAmountRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetLastProcessedRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgUpdateParams } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgCreateRequest } from "./types/sigmoidtest/sigmoidtest/tx";
import { Params } from "./types/sigmoidtest/sigmoidtest/params";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoidtest.sigmoidtest.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoidtest.sigmoidtest.MsgCreateRequestResponse", MsgCreateRequestResponse],
    ["/sigmoidtest.sigmoidtest.QueryGetLastProcessedResponse", QueryGetLastProcessedResponse],
    ["/sigmoidtest.sigmoidtest.MsgApproveRequestResponse", MsgApproveRequestResponse],
    ["/sigmoidtest.sigmoidtest.MsgProcessTransaction", MsgProcessTransaction],
    ["/sigmoidtest.sigmoidtest.GenesisState", GenesisState],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoidtest.sigmoidtest.MsgProcessTransactionResponse", MsgProcessTransactionResponse],
    ["/sigmoidtest.sigmoidtest.MsgApproveRequest", MsgApproveRequest],
    ["/sigmoidtest.sigmoidtest.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoidtest.sigmoidtest.QueryGetAmountResponse", QueryGetAmountResponse],
    ["/sigmoidtest.sigmoidtest.Request", Request],
    ["/sigmoidtest.sigmoidtest.QueryGetAmountRequest", QueryGetAmountRequest],
    ["/sigmoidtest.sigmoidtest.QueryGetLastProcessedRequest", QueryGetLastProcessedRequest],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoidtest.sigmoidtest.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoidtest.sigmoidtest.Params", Params],
    
];

export { msgTypes }