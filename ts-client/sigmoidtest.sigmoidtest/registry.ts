import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgApproveRequest } from "./types/sigmoidtest/sigmoidtest/tx";
import { Params } from "./types/sigmoidtest/sigmoidtest/params";
import { QueryGetLastProcessedResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgProcessTransactionResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { GenesisState } from "./types/sigmoidtest/sigmoidtest/genesis";
import { MsgCreateRequest } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgProcessTransaction } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryParamsResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetAmountResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgApproveRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { Request } from "./types/sigmoidtest/sigmoidtest/request";
import { QueryParamsRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetLastProcessedRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgUpdateParamsResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgCreateRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgUpdateParams } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryGetAmountRequest } from "./types/sigmoidtest/sigmoidtest/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoidtest.sigmoidtest.MsgApproveRequest", MsgApproveRequest],
    ["/sigmoidtest.sigmoidtest.Params", Params],
    ["/sigmoidtest.sigmoidtest.QueryGetLastProcessedResponse", QueryGetLastProcessedResponse],
    ["/sigmoidtest.sigmoidtest.MsgProcessTransactionResponse", MsgProcessTransactionResponse],
    ["/sigmoidtest.sigmoidtest.GenesisState", GenesisState],
    ["/sigmoidtest.sigmoidtest.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoidtest.sigmoidtest.MsgProcessTransaction", MsgProcessTransaction],
    ["/sigmoidtest.sigmoidtest.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoidtest.sigmoidtest.QueryGetAmountResponse", QueryGetAmountResponse],
    ["/sigmoidtest.sigmoidtest.MsgApproveRequestResponse", MsgApproveRequestResponse],
    ["/sigmoidtest.sigmoidtest.Request", Request],
    ["/sigmoidtest.sigmoidtest.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoidtest.sigmoidtest.QueryGetLastProcessedRequest", QueryGetLastProcessedRequest],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoidtest.sigmoidtest.MsgCreateRequestResponse", MsgCreateRequestResponse],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoidtest.sigmoidtest.QueryGetAmountRequest", QueryGetAmountRequest],
    
];

export { msgTypes }