import { GeneratedType } from "@cosmjs/proto-signing";
import { Params } from "./types/sigmoidtest/sigmoidtest/params";
import { MsgUpdateParams } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgUpdateParamsResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryParamsRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryParamsResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { GenesisState } from "./types/sigmoidtest/sigmoidtest/genesis";
import { Request } from "./types/sigmoidtest/sigmoidtest/request";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoidtest.sigmoidtest.Params", Params],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoidtest.sigmoidtest.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoidtest.sigmoidtest.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoidtest.sigmoidtest.GenesisState", GenesisState],
    ["/sigmoidtest.sigmoidtest.Request", Request],
    
];

export { msgTypes }