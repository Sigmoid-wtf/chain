import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgApproveBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { Params } from "./types/sigmoid/sigmoid/params";
import { Request } from "./types/sigmoid/sigmoid/request";
import { QueryGetPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgUpdateParamsResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetAmountRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingStakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { MsgApproveRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgIncomeBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestSignedResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLastProcessedRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetRaoStakedBalanceResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingBridgeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgCreateBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransaction } from "./types/sigmoid/sigmoid/tx";
import { MsgSetRaoCurrentStakedBalance } from "./types/sigmoid/sigmoid/tx";
import { MsgIncomeBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryGetAmountResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetSigtaoRateDRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetSigtaoRateDResponse } from "./types/sigmoid/sigmoid/query";
import { MsgSetLatestProcessedEthBlock } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgSetRaoCurrentStakedBalanceResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetRaoStakedBalanceRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingBridgeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetLatestProcessedEthBlockRequest } from "./types/sigmoid/sigmoid/query";
import { MsgCreateRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { GenesisState } from "./types/sigmoid/sigmoid/genesis";
import { MsgUpdateParams } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransactionResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgSetLatestProcessedEthBlockResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLastProcessedResponse } from "./types/sigmoid/sigmoid/query";
import { MsgApproveRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestSigned } from "./types/sigmoid/sigmoid/tx";
import { QueryParamsRequest } from "./types/sigmoid/sigmoid/query";
import { QueryParamsResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetLatestProcessedEthBlockResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingStakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgCreateUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { QueryGetFrontPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoid.sigmoid.MsgApproveBridgeRequest", MsgApproveBridgeRequest],
    ["/sigmoid.sigmoid.MsgApproveBridgeRequestResponse", MsgApproveBridgeRequestResponse],
    ["/sigmoid.sigmoid.Params", Params],
    ["/sigmoid.sigmoid.Request", Request],
    ["/sigmoid.sigmoid.QueryGetPendingUnstakeRequestResponse", QueryGetPendingUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoid.sigmoid.QueryGetAmountRequest", QueryGetAmountRequest],
    ["/sigmoid.sigmoid.QueryGetFrontPendingStakeRequestRequest", QueryGetFrontPendingStakeRequestRequest],
    ["/sigmoid.sigmoid.MsgApproveRequestResponse", MsgApproveRequestResponse],
    ["/sigmoid.sigmoid.MsgIncomeBridgeRequestResponse", MsgIncomeBridgeRequestResponse],
    ["/sigmoid.sigmoid.MsgCreateRequestSignedResponse", MsgCreateRequestSignedResponse],
    ["/sigmoid.sigmoid.QueryGetLastProcessedRequest", QueryGetLastProcessedRequest],
    ["/sigmoid.sigmoid.QueryGetPendingUnstakeRequestRequest", QueryGetPendingUnstakeRequestRequest],
    ["/sigmoid.sigmoid.QueryGetRaoStakedBalanceResponse", QueryGetRaoStakedBalanceResponse],
    ["/sigmoid.sigmoid.QueryGetPendingBridgeRequestResponse", QueryGetPendingBridgeRequestResponse],
    ["/sigmoid.sigmoid.MsgCreateBridgeRequest", MsgCreateBridgeRequest],
    ["/sigmoid.sigmoid.MsgProcessTransaction", MsgProcessTransaction],
    ["/sigmoid.sigmoid.MsgSetRaoCurrentStakedBalance", MsgSetRaoCurrentStakedBalance],
    ["/sigmoid.sigmoid.MsgIncomeBridgeRequest", MsgIncomeBridgeRequest],
    ["/sigmoid.sigmoid.QueryGetAmountResponse", QueryGetAmountResponse],
    ["/sigmoid.sigmoid.QueryGetSigtaoRateDRequest", QueryGetSigtaoRateDRequest],
    ["/sigmoid.sigmoid.QueryGetSigtaoRateDResponse", QueryGetSigtaoRateDResponse],
    ["/sigmoid.sigmoid.MsgSetLatestProcessedEthBlock", MsgSetLatestProcessedEthBlock],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequestResponse", MsgApproveUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgSetRaoCurrentStakedBalanceResponse", MsgSetRaoCurrentStakedBalanceResponse],
    ["/sigmoid.sigmoid.QueryGetRaoStakedBalanceRequest", QueryGetRaoStakedBalanceRequest],
    ["/sigmoid.sigmoid.QueryGetPendingBridgeRequestRequest", QueryGetPendingBridgeRequestRequest],
    ["/sigmoid.sigmoid.QueryGetLatestProcessedEthBlockRequest", QueryGetLatestProcessedEthBlockRequest],
    ["/sigmoid.sigmoid.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequest", MsgApproveUnstakeRequest],
    ["/sigmoid.sigmoid.MsgCreateRequestResponse", MsgCreateRequestResponse],
    ["/sigmoid.sigmoid.GenesisState", GenesisState],
    ["/sigmoid.sigmoid.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoid.sigmoid.MsgProcessTransactionResponse", MsgProcessTransactionResponse],
    ["/sigmoid.sigmoid.MsgSetLatestProcessedEthBlockResponse", MsgSetLatestProcessedEthBlockResponse],
    ["/sigmoid.sigmoid.QueryGetLastProcessedResponse", QueryGetLastProcessedResponse],
    ["/sigmoid.sigmoid.MsgApproveRequest", MsgApproveRequest],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequestResponse", MsgCreateUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgCreateBridgeRequestResponse", MsgCreateBridgeRequestResponse],
    ["/sigmoid.sigmoid.MsgCreateRequestSigned", MsgCreateRequestSigned],
    ["/sigmoid.sigmoid.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoid.sigmoid.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoid.sigmoid.QueryGetLatestProcessedEthBlockResponse", QueryGetLatestProcessedEthBlockResponse],
    ["/sigmoid.sigmoid.QueryGetFrontPendingStakeRequestResponse", QueryGetFrontPendingStakeRequestResponse],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequest", MsgCreateUnstakeRequest],
    ["/sigmoid.sigmoid.QueryGetFrontPendingUnstakeRequestResponse", QueryGetFrontPendingUnstakeRequestResponse],
    ["/sigmoid.sigmoid.QueryGetFrontPendingUnstakeRequestRequest", QueryGetFrontPendingUnstakeRequestRequest],
    
];

export { msgTypes }