export interface Any {
    "@type"?: string;
}
export interface Status {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: {
        "@type"?: string;
    }[];
}
export interface MsgCreateBridgeRequest {
    creator?: string;
    erc20Address?: string;
    /** @format uint64 */
    amount?: string;
}
export interface MsgCreateUnstakeRequest {
    creator?: string;
    unstakeAddress?: string;
    /** @format uint64 */
    amount?: string;
}
export type Params = object;
export interface QueryGetAmountResponse {
    /** @format uint64 */
    amount?: string;
}
export interface QueryGetFrontPendingStakeRequestResponse {
    request?: {
        senderAddress?: string;
        mintAddress?: string;
        status?: string;
        amount?: string;
        timestamp?: string;
    };
}
export interface QueryGetFrontPendingUnstakeRequestResponse {
    request?: {
        senderAddress?: string;
        mintAddress?: string;
        status?: string;
        amount?: string;
        timestamp?: string;
    };
}
export interface QueryGetLastProcessedResponse {
    transactionId?: string;
}
export interface QueryGetLatestProcessedEthBlockResponse {
    blockNumber?: string;
}
export interface QueryGetPendingBridgeRequestResponse {
    request?: {
        creator?: string;
        erc20Address?: string;
        amount?: string;
    };
}
export interface QueryGetPendingUnstakeRequestResponse {
    request?: {
        creator?: string;
        unstakeAddress?: string;
        amount?: string;
    };
}
export interface QueryGetRaoStakedBalanceResponse {
    /** @format uint64 */
    raoStakedBalance?: string;
}
export interface QueryGetSigtaoRateDResponse {
    /** @format uint64 */
    sigtaoRateD?: string;
}
export interface QueryParamsResponse {
    params?: object;
}
export interface Request {
    senderAddress?: string;
    mintAddress?: string;
    /** @format uint64 */
    status?: string;
    /** @format uint64 */
    amount?: string;
    /** @format uint64 */
    timestamp?: string;
}
export type MsgApproveBridgeRequestResponse = object;
export type MsgApproveRequestResponse = object;
export type MsgApproveUnstakeRequestResponse = object;
export type MsgCreateBridgeRequestResponse = object;
export type MsgCreateRequestResponse = object;
export type MsgCreateRequestSignedResponse = object;
export type MsgCreateUnstakeRequestResponse = object;
export type MsgIncomeBridgeRequestResponse = object;
export type MsgProcessTransactionResponse = object;
export type MsgSetLatestProcessedEthBlockResponse = object;
export type MsgSetRaoCurrentStakedBalanceResponse = object;
export type MsgUpdateParamsResponse = object;
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    private mergeRequestParams;
    private createFormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title HTTP API Console sigmoid.sigmoid
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryGetAmount
     * @request GET:/sigmoid/sigmoid/get_amount/{senderAddress}
     */
    queryGetAmount: (senderAddress: string, params?: RequestParams) => Promise<AxiosResponse<{
        amount?: string;
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGetFrontPendingStakeRequest
     * @request GET:/sigmoid/sigmoid/get_front_pending_stake_request/{address}
     */
    queryGetFrontPendingStakeRequest: (address: string, params?: RequestParams) => Promise<AxiosResponse<{
        request?: {
            senderAddress?: string;
            mintAddress?: string;
            status?: string;
            amount?: string;
            timestamp?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGetFrontPendingUnstakeRequest
     * @request GET:/sigmoid/sigmoid/get_front_pending_unstake_request/{address}
     */
    queryGetFrontPendingUnstakeRequest: (address: string, params?: RequestParams) => Promise<AxiosResponse<{
        request?: {
            senderAddress?: string;
            mintAddress?: string;
            status?: string;
            amount?: string;
            timestamp?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGetLastProcessed
     * @request GET:/sigmoid/sigmoid/get_last_processed
     */
    queryGetLastProcessed: (params?: RequestParams) => Promise<AxiosResponse<{
        transactionId?: string;
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGetLatestProcessedEthBlock
     * @request GET:/sigmoid/sigmoid/get_latest_processed_eth_block
     */
    queryGetLatestProcessedEthBlock: (params?: RequestParams) => Promise<AxiosResponse<{
        blockNumber?: string;
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGetPendingBridgeRequest
     * @request GET:/sigmoid/sigmoid/get_pending_bridge_request
     */
    queryGetPendingBridgeRequest: (params?: RequestParams) => Promise<AxiosResponse<{
        request?: {
            creator?: string;
            erc20Address?: string;
            amount?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGetPendingUnstakeRequest
     * @request GET:/sigmoid/sigmoid/get_pending_unstake_request
     */
    queryGetPendingUnstakeRequest: (params?: RequestParams) => Promise<AxiosResponse<{
        request?: {
            creator?: string;
            unstakeAddress?: string;
            amount?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGetRaoStakedBalance
     * @request GET:/sigmoid/sigmoid/get_rao_staked_balance
     */
    queryGetRaoStakedBalance: (params?: RequestParams) => Promise<AxiosResponse<{
        raoStakedBalance?: string;
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGetSigtaoRateD
     * @request GET:/sigmoid/sigmoid/get_sigtao_rate_d
     */
    queryGetSigtaoRateD: (params?: RequestParams) => Promise<AxiosResponse<{
        sigtaoRateD?: string;
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @request GET:/sigmoid/sigmoid/params
     */
    queryParams: (params?: RequestParams) => Promise<AxiosResponse<{
        params?: object;
    }>>;
}
