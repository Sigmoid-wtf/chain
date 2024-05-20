import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgSetRaoCurrentStakedBalance } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLastProcessedRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetPendingBridgeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetLatestProcessedEthBlockRequest } from "./types/sigmoid/sigmoid/query";
import { GenesisState } from "./types/sigmoid/sigmoid/genesis";
import { MsgUpdateParams } from "./types/sigmoid/sigmoid/tx";
import { QueryParamsResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetAmountRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetAmountResponse } from "./types/sigmoid/sigmoid/query";
import { MsgCreateBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetPendingBridgeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { MsgProcessTransaction } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestSigned } from "./types/sigmoid/sigmoid/tx";
import { MsgSetRaoCurrentStakedBalanceResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryParamsRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetLastProcessedResponse } from "./types/sigmoid/sigmoid/query";
import { QueryGetRaoStakedBalanceResponse } from "./types/sigmoid/sigmoid/query";
import { MsgCreateRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { Request } from "./types/sigmoid/sigmoid/request";
import { MsgCreateUnstakeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgUpdateParamsResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgIncomeBridgeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetRaoStakedBalanceRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingStakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgApproveRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgApproveUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateRequestSignedResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetLatestProcessedEthBlockResponse } from "./types/sigmoid/sigmoid/query";
import { MsgApproveBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgCreateUnstakeRequestResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetFrontPendingStakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetFrontPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { MsgIncomeBridgeRequest } from "./types/sigmoid/sigmoid/tx";
import { MsgSetLatestProcessedEthBlock } from "./types/sigmoid/sigmoid/tx";
import { MsgProcessTransactionResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetPendingUnstakeRequestRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetSigtaoRateDRequest } from "./types/sigmoid/sigmoid/query";
import { QueryGetSigtaoRateDResponse } from "./types/sigmoid/sigmoid/query";
import { MsgSetLatestProcessedEthBlockResponse } from "./types/sigmoid/sigmoid/tx";
import { QueryGetPendingUnstakeRequestResponse } from "./types/sigmoid/sigmoid/query";
import { Params } from "./types/sigmoid/sigmoid/params";
import { MsgApproveUnstakeRequest } from "./types/sigmoid/sigmoid/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sigmoid.sigmoid.MsgCreateBridgeRequest", MsgCreateBridgeRequest],
    ["/sigmoid.sigmoid.MsgCreateRequestResponse", MsgCreateRequestResponse],
    ["/sigmoid.sigmoid.MsgSetRaoCurrentStakedBalance", MsgSetRaoCurrentStakedBalance],
    ["/sigmoid.sigmoid.QueryGetLastProcessedRequest", QueryGetLastProcessedRequest],
    ["/sigmoid.sigmoid.QueryGetPendingBridgeRequestRequest", QueryGetPendingBridgeRequestRequest],
    ["/sigmoid.sigmoid.QueryGetLatestProcessedEthBlockRequest", QueryGetLatestProcessedEthBlockRequest],
    ["/sigmoid.sigmoid.GenesisState", GenesisState],
    ["/sigmoid.sigmoid.MsgUpdateParams", MsgUpdateParams],
    ["/sigmoid.sigmoid.QueryParamsResponse", QueryParamsResponse],
    ["/sigmoid.sigmoid.QueryGetAmountRequest", QueryGetAmountRequest],
    ["/sigmoid.sigmoid.QueryGetAmountResponse", QueryGetAmountResponse],
    ["/sigmoid.sigmoid.MsgCreateBridgeRequestResponse", MsgCreateBridgeRequestResponse],
    ["/sigmoid.sigmoid.QueryGetPendingBridgeRequestResponse", QueryGetPendingBridgeRequestResponse],
    ["/sigmoid.sigmoid.QueryGetFrontPendingUnstakeRequestRequest", QueryGetFrontPendingUnstakeRequestRequest],
    ["/sigmoid.sigmoid.MsgProcessTransaction", MsgProcessTransaction],
    ["/sigmoid.sigmoid.MsgCreateRequestSigned", MsgCreateRequestSigned],
    ["/sigmoid.sigmoid.MsgSetRaoCurrentStakedBalanceResponse", MsgSetRaoCurrentStakedBalanceResponse],
    ["/sigmoid.sigmoid.QueryParamsRequest", QueryParamsRequest],
    ["/sigmoid.sigmoid.QueryGetLastProcessedResponse", QueryGetLastProcessedResponse],
    ["/sigmoid.sigmoid.QueryGetRaoStakedBalanceResponse", QueryGetRaoStakedBalanceResponse],
    ["/sigmoid.sigmoid.MsgCreateRequest", MsgCreateRequest],
    ["/sigmoid.sigmoid.MsgApproveBridgeRequestResponse", MsgApproveBridgeRequestResponse],
    ["/sigmoid.sigmoid.Request", Request],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequest", MsgCreateUnstakeRequest],
    ["/sigmoid.sigmoid.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/sigmoid.sigmoid.MsgApproveRequestResponse", MsgApproveRequestResponse],
    ["/sigmoid.sigmoid.MsgIncomeBridgeRequestResponse", MsgIncomeBridgeRequestResponse],
    ["/sigmoid.sigmoid.QueryGetRaoStakedBalanceRequest", QueryGetRaoStakedBalanceRequest],
    ["/sigmoid.sigmoid.QueryGetFrontPendingStakeRequestResponse", QueryGetFrontPendingStakeRequestResponse],
    ["/sigmoid.sigmoid.MsgApproveRequest", MsgApproveRequest],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequestResponse", MsgApproveUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgCreateRequestSignedResponse", MsgCreateRequestSignedResponse],
    ["/sigmoid.sigmoid.QueryGetLatestProcessedEthBlockResponse", QueryGetLatestProcessedEthBlockResponse],
    ["/sigmoid.sigmoid.MsgApproveBridgeRequest", MsgApproveBridgeRequest],
    ["/sigmoid.sigmoid.MsgCreateUnstakeRequestResponse", MsgCreateUnstakeRequestResponse],
    ["/sigmoid.sigmoid.QueryGetFrontPendingStakeRequestRequest", QueryGetFrontPendingStakeRequestRequest],
    ["/sigmoid.sigmoid.QueryGetFrontPendingUnstakeRequestResponse", QueryGetFrontPendingUnstakeRequestResponse],
    ["/sigmoid.sigmoid.MsgIncomeBridgeRequest", MsgIncomeBridgeRequest],
    ["/sigmoid.sigmoid.MsgSetLatestProcessedEthBlock", MsgSetLatestProcessedEthBlock],
    ["/sigmoid.sigmoid.MsgProcessTransactionResponse", MsgProcessTransactionResponse],
    ["/sigmoid.sigmoid.QueryGetPendingUnstakeRequestRequest", QueryGetPendingUnstakeRequestRequest],
    ["/sigmoid.sigmoid.QueryGetSigtaoRateDRequest", QueryGetSigtaoRateDRequest],
    ["/sigmoid.sigmoid.QueryGetSigtaoRateDResponse", QueryGetSigtaoRateDResponse],
    ["/sigmoid.sigmoid.MsgSetLatestProcessedEthBlockResponse", MsgSetLatestProcessedEthBlockResponse],
    ["/sigmoid.sigmoid.QueryGetPendingUnstakeRequestResponse", QueryGetPendingUnstakeRequestResponse],
    ["/sigmoid.sigmoid.Params", Params],
    ["/sigmoid.sigmoid.MsgApproveUnstakeRequest", MsgApproveUnstakeRequest],
    
];

export { msgTypes }