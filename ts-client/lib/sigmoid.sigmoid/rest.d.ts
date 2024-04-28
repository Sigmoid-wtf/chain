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
export interface QueryGetLastProcessedResponse {
    transactionId?: string;
}
export interface QueryGetPendingUnstakeRequestResponse {
    request?: {
        creator?: string;
        unstakeAddress?: string;
        amount?: string;
    };
}
export interface QueryParamsResponse {
    params?: object;
}
export type MsgApproveRequestResponse = object;
export type MsgApproveUnstakeRequestResponse = object;
export type MsgCreateRequestResponse = object;
export type MsgCreateUnstakeRequestResponse = object;
export type MsgProcessTransactionResponse = object;
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
     * @name QueryParams
     * @request GET:/sigmoid/sigmoid/params
     */
    queryParams: (params?: RequestParams) => Promise<AxiosResponse<{
        params?: object;
    }>>;
}
