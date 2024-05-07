/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Any {
  "@type"?: string;
}

export interface Status {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: { "@type"?: string }[];
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

export interface QueryGetLastProcessedResponse {
  transactionId?: string;
}

export interface QueryGetPendingBridgeRequestResponse {
  request?: { creator?: string; erc20Address?: string; amount?: string };
}

export interface QueryGetPendingUnstakeRequestResponse {
  request?: { creator?: string; unstakeAddress?: string; amount?: string };
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

export type MsgApproveBridgeRequestResponse = object;

export type MsgApproveRequestResponse = object;

export type MsgApproveUnstakeRequestResponse = object;

export type MsgCreateBridgeRequestResponse = object;

export type MsgCreateRequestResponse = object;

export type MsgCreateUnstakeRequestResponse = object;

export type MsgIncomeBridgeRequestResponse = object;

export type MsgProcessTransactionResponse = object;

export type MsgSetRaoCurrentStakedBalanceResponse = object;

export type MsgUpdateParamsResponse = object;

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

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
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title HTTP API Console sigmoid.sigmoid
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryGetAmount
   * @request GET:/sigmoid/sigmoid/get_amount/{senderAddress}
   */
  queryGetAmount = (senderAddress: string, params: RequestParams = {}) =>
    this.request<{ amount?: string }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/sigmoid/sigmoid/get_amount/${senderAddress}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetLastProcessed
   * @request GET:/sigmoid/sigmoid/get_last_processed
   */
  queryGetLastProcessed = (params: RequestParams = {}) =>
    this.request<{ transactionId?: string }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/sigmoid/sigmoid/get_last_processed`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetPendingBridgeRequest
   * @request GET:/sigmoid/sigmoid/get_pending_bridge_request
   */
  queryGetPendingBridgeRequest = (params: RequestParams = {}) =>
    this.request<
      { request?: { creator?: string; erc20Address?: string; amount?: string } },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/sigmoid/sigmoid/get_pending_bridge_request`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetPendingUnstakeRequest
   * @request GET:/sigmoid/sigmoid/get_pending_unstake_request
   */
  queryGetPendingUnstakeRequest = (params: RequestParams = {}) =>
    this.request<
      { request?: { creator?: string; unstakeAddress?: string; amount?: string } },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/sigmoid/sigmoid/get_pending_unstake_request`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetRaoStakedBalance
   * @request GET:/sigmoid/sigmoid/get_rao_staked_balance
   */
  queryGetRaoStakedBalance = (params: RequestParams = {}) =>
    this.request<{ raoStakedBalance?: string }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/sigmoid/sigmoid/get_rao_staked_balance`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetSigtaoRateD
   * @request GET:/sigmoid/sigmoid/get_sigtao_rate_d
   */
  queryGetSigtaoRateD = (params: RequestParams = {}) =>
    this.request<{ sigtaoRateD?: string }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/sigmoid/sigmoid/get_sigtao_rate_d`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @request GET:/sigmoid/sigmoid/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<{ params?: object }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/sigmoid/sigmoid/params`,
      method: "GET",
      ...params,
    });
}
