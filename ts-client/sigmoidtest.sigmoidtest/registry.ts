import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgCreateRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgUpdateParamsResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { Params } from "./types/sigmoidtest/sigmoidtest/params";
import { GenesisState } from "./types/sigmoidtest/sigmoidtest/genesis";
import { MsgCreateRequest } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryParamsRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryParamsResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { Request } from "./types/sigmoidtest/sigmoidtest/request";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoidtest.sigmoidtest.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoidtest.sigmoidtest.MsgCreateRequestResponse", MsgCreateRequestResponse],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoidtest.sigmoidtest.Params", Params],
    ["/sigmoidtest.sigmoidtest.GenesisState", GenesisState],
    ["/sigmoidtest.sigmoidtest.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoidtest.sigmoidtest.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoidtest.sigmoidtest.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoidtest.sigmoidtest.Request", Request],
    
];

export { msgTypes }