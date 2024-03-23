import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParamsResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { Params } from "./types/sigmoidtest/sigmoidtest/params";
import { GenesisState } from "./types/sigmoidtest/sigmoidtest/genesis";
import { QueryParamsRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryParamsResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgUpdateParams } from "./types/sigmoidtest/sigmoidtest/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoidtest.sigmoidtest.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoidtest.sigmoidtest.Params", Params],
    ["/sigmoidtest.sigmoidtest.GenesisState", GenesisState],
    ["/sigmoidtest.sigmoidtest.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoidtest.sigmoidtest.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParams", MsgUpdateParams],
    
];

export { msgTypes }