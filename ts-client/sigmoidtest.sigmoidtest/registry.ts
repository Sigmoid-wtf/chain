import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgUpdateParams } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgUpdateParamsResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { GenesisState } from "./types/sigmoidtest/sigmoidtest/genesis";
import { Params } from "./types/sigmoidtest/sigmoidtest/params";
import { QueryParamsRequest } from "./types/sigmoidtest/sigmoidtest/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoidtest.sigmoidtest.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoidtest.sigmoidtest.GenesisState", GenesisState],
    ["/sigmoidtest.sigmoidtest.Params", Params],
    ["/sigmoidtest.sigmoidtest.QueryParamsRequest", QueryParamsRequest],
    
];

export { msgTypes }