import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryGetAmountRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingStakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { MsgCreateUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransaction } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryParamsResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetAmountResponse } from "./types/sigmoid/sigmoid/query";
import { MsgCreateRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLatestProcessedEthBlockRequest } from "./types/sigmoid/sigmoid/query";
import { MsgApproveBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { GenesisState } from "./types/sigmoid/sigmoid/genesis";
import { Request } from "./types/sigmoid/sigmoid/request";
import { MsgUpdateParams } from "./types/sigmoid/sigmoid/tx";
import { MsgUpdateParamsResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetPendingBridgeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgIncomeBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestSignedResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransactionResponse } from "./types/sigmoid/sigmoid/tx";
import { Params } from "./types/sigmoid/sigmoid/params";
import { QueryGetPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetSigtaoRateDRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetLatestProcessedEthBlockResponse } from "./types/sigmoid/sigmoid/query";
import { MsgApproveRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryGetPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetRaoStakedBalanceResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetSigtaoRateDResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingStakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgApproveRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryParamsRequest } from "./types/sigmoid/sigmoid/query";
import { MsgCreateUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetRaoStakedBalanceRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingBridgeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { MsgSetRaoCurrentStakedBalance } from "./types/sigmoid/sigmoid/tx";
import { MsgSetLatestProcessedEthBlockResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestSigned } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLastProcessedResponse } from "./types/sigmoid/sigmoid/query";
import { MsgSetRaoCurrentStakedBalanceResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgIncomeBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgSetLatestProcessedEthBlock } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLastProcessedRequest } from "./types/sigmoid/sigmoid/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoid.sigmoid.QueryGetAmountRequest", QueryGetAmountRequest],
    ["/sigmoid.sigmoid.QueryGetFrontPendingStakeRequestRequest", QueryGetFrontPendingStakeRequestRequest],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequest", MsgCreateUnstakeRequest],
    ["/sigmoid.sigmoid.MsgCreateBridgeRequestResponse", MsgCreateBridgeRequestResponse],
    ["/sigmoid.sigmoid.MsgProcessTransaction", MsgProcessTransaction],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequest", MsgApproveUnstakeRequest],
    ["/sigmoid.sigmoid.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoid.sigmoid.QueryGetAmountResponse", QueryGetAmountResponse],
    ["/sigmoid.sigmoid.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoid.sigmoid.QueryGetLatestProcessedEthBlockRequest", QueryGetLatestProcessedEthBlockRequest],
    ["/sigmoid.sigmoid.MsgApproveBridgeRequest", MsgApproveBridgeRequest],
    ["/sigmoid.sigmoid.GenesisState", GenesisState],
    ["/sigmoid.sigmoid.Request", Request],
    ["/sigmoid.sigmoid.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoid.sigmoid.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoid.sigmoid.MsgCreateRequestResponse", MsgCreateRequestResponse],
    ["/sigmoid.sigmoid.QueryGetPendingBridgeRequestResponse", QueryGetPendingBridgeRequestResponse],
    ["/sigmoid.sigmoid.MsgIncomeBridgeRequestResponse", MsgIncomeBridgeRequestResponse],
    ["/sigmoid.sigmoid.MsgCreateRequestSignedResponse", MsgCreateRequestSignedResponse],
    ["/sigmoid.sigmoid.MsgProcessTransactionResponse", MsgProcessTransactionResponse],
    ["/sigmoid.sigmoid.Params", Params],
    ["/sigmoid.sigmoid.QueryGetPendingUnstakeRequestRequest", QueryGetPendingUnstakeRequestRequest],
    ["/sigmoid.sigmoid.QueryGetSigtaoRateDRequest", QueryGetSigtaoRateDRequest],
    ["/sigmoid.sigmoid.QueryGetLatestProcessedEthBlockResponse", QueryGetLatestProcessedEthBlockResponse],
    ["/sigmoid.sigmoid.MsgApproveRequestResponse", MsgApproveRequestResponse],
    ["/sigmoid.sigmoid.MsgCreateBridgeRequest", MsgCreateBridgeRequest],
    ["/sigmoid.sigmoid.QueryGetPendingUnstakeRequestResponse", QueryGetPendingUnstakeRequestResponse],
    ["/sigmoid.sigmoid.QueryGetRaoStakedBalanceResponse", QueryGetRaoStakedBalanceResponse],
    ["/sigmoid.sigmoid.QueryGetSigtaoRateDResponse", QueryGetSigtaoRateDResponse],
    ["/sigmoid.sigmoid.QueryGetFrontPendingStakeRequestResponse", QueryGetFrontPendingStakeRequestResponse],
    ["/sigmoid.sigmoid.MsgApproveRequest", MsgApproveRequest],
    ["/sigmoid.sigmoid.MsgApproveBridgeRequestResponse", MsgApproveBridgeRequestResponse],
    ["/sigmoid.sigmoid.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequestResponse", MsgCreateUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequestResponse", MsgApproveUnstakeRequestResponse],
    ["/sigmoid.sigmoid.QueryGetRaoStakedBalanceRequest", QueryGetRaoStakedBalanceRequest],
    ["/sigmoid.sigmoid.QueryGetPendingBridgeRequestRequest", QueryGetPendingBridgeRequestRequest],
    ["/sigmoid.sigmoid.MsgSetRaoCurrentStakedBalance", MsgSetRaoCurrentStakedBalance],
    ["/sigmoid.sigmoid.MsgSetLatestProcessedEthBlockResponse", MsgSetLatestProcessedEthBlockResponse],
    ["/sigmoid.sigmoid.MsgCreateRequestSigned", MsgCreateRequestSigned],
    ["/sigmoid.sigmoid.QueryGetLastProcessedResponse", QueryGetLastProcessedResponse],
    ["/sigmoid.sigmoid.MsgSetRaoCurrentStakedBalanceResponse", MsgSetRaoCurrentStakedBalanceResponse],
    ["/sigmoid.sigmoid.MsgIncomeBridgeRequest", MsgIncomeBridgeRequest],
    ["/sigmoid.sigmoid.MsgSetLatestProcessedEthBlock", MsgSetLatestProcessedEthBlock],
    ["/sigmoid.sigmoid.QueryGetLastProcessedRequest", QueryGetLastProcessedRequest],
    
];

export { msgTypes }