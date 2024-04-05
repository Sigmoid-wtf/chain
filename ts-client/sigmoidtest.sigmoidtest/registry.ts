import { GeneratedType } from "@cosmjs/proto-signing";
import { Request } from "./types/sigmoidtest/sigmoidtest/request";
import { MsgApproveRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryGetAmountRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetAmountResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetLastProcessedResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgCreateRequest } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgUpdateParamsResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { GenesisState } from "./types/sigmoidtest/sigmoidtest/genesis";
import { QueryParamsResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { Params } from "./types/sigmoidtest/sigmoidtest/params";
import { MsgCreateRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryParamsRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetLastProcessedRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgUpdateParams } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgApproveRequest } from "./types/sigmoidtest/sigmoidtest/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoidtest.sigmoidtest.Request", Request],
    ["/sigmoidtest.sigmoidtest.MsgApproveRequestResponse", MsgApproveRequestResponse],
    ["/sigmoidtest.sigmoidtest.QueryGetAmountRequest", QueryGetAmountRequest],
    ["/sigmoidtest.sigmoidtest.QueryGetAmountResponse", QueryGetAmountResponse],
    ["/sigmoidtest.sigmoidtest.QueryGetLastProcessedResponse", QueryGetLastProcessedResponse],
    ["/sigmoidtest.sigmoidtest.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoidtest.sigmoidtest.GenesisState", GenesisState],
    ["/sigmoidtest.sigmoidtest.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoidtest.sigmoidtest.Params", Params],
    ["/sigmoidtest.sigmoidtest.MsgCreateRequestResponse", MsgCreateRequestResponse],
    ["/sigmoidtest.sigmoidtest.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoidtest.sigmoidtest.QueryGetLastProcessedRequest", QueryGetLastProcessedRequest],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoidtest.sigmoidtest.MsgApproveRequest", MsgApproveRequest],
    
];

export { msgTypes }