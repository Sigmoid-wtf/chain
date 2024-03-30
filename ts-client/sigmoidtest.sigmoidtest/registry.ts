import { GeneratedType } from "@cosmjs/proto-signing";
import { Postt } from "./types/sigmoidtest/sigmoidtest/postt";
import { AddressStackTransaction } from "./types/sigmoidtest/sigmoidtest/address_stack_transaction";
import { QueryParamsRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { GenesisState } from "./types/sigmoidtest/sigmoidtest/genesis";
import { StackTransaction } from "./types/sigmoidtest/sigmoidtest/stack_transaction";
import { MsgUpdateParams } from "./types/sigmoidtest/sigmoidtest/tx";
import { Post } from "./types/sigmoidtest/sigmoidtest/post";
import { Posttt } from "./types/sigmoidtest/sigmoidtest/posttt";
import { QueryParamsResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgUpdateParamsResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { Params } from "./types/sigmoidtest/sigmoidtest/params";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoidtest.sigmoidtest.Postt", Postt],
    ["/sigmoidtest.sigmoidtest.AddressStackTransaction", AddressStackTransaction],
    ["/sigmoidtest.sigmoidtest.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoidtest.sigmoidtest.GenesisState", GenesisState],
    ["/sigmoidtest.sigmoidtest.StackTransaction", StackTransaction],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoidtest.sigmoidtest.Post", Post],
    ["/sigmoidtest.sigmoidtest.Posttt", Posttt],
    ["/sigmoidtest.sigmoidtest.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoidtest.sigmoidtest.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoidtest.sigmoidtest.Params", Params],
    
];

export { msgTypes }