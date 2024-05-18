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
import axios from "axios";
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = async ({ secure, path, type, query, format, body, ...params }) => {
            const secureParams = ((typeof secure === "boolean" ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const responseFormat = (format && this.format) || void 0;
            if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
                requestParams.headers.common = { Accept: "*/*" };
                requestParams.headers.post = {};
                requestParams.headers.put = {};
                body = this.createFormData(body);
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
        this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    mergeRequestParams(params1, params2) {
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
    createFormData(input) {
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            formData.append(key, property instanceof Blob
                ? property
                : typeof property === "object" && property !== null
                    ? JSON.stringify(property)
                    : `${property}`);
            return formData;
        }, new FormData());
    }
}
/**
 * @title HTTP API Console sigmoid.sigmoid
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryGetAmount
         * @request GET:/sigmoid/sigmoid/get_amount/{senderAddress}
         */
        this.queryGetAmount = (senderAddress, params = {}) => this.request({
            path: `/sigmoid/sigmoid/get_amount/${senderAddress}`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryGetFrontPendingStakeRequest
         * @request GET:/sigmoid/sigmoid/get_front_pending_stake_request/{address}
         */
        this.queryGetFrontPendingStakeRequest = (address, params = {}) => this.request({
            path: `/sigmoid/sigmoid/get_front_pending_stake_request/${address}`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryGetFrontPendingUnstakeRequest
         * @request GET:/sigmoid/sigmoid/get_front_pending_unstake_request/{address}
         */
        this.queryGetFrontPendingUnstakeRequest = (address, params = {}) => this.request({
            path: `/sigmoid/sigmoid/get_front_pending_unstake_request/${address}`,
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
        this.queryGetLastProcessed = (params = {}) => this.request({
            path: `/sigmoid/sigmoid/get_last_processed`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryGetLatestProcessedEthBlock
         * @request GET:/sigmoid/sigmoid/get_latest_processed_eth_block
         */
        this.queryGetLatestProcessedEthBlock = (params = {}) => this.request({
            path: `/sigmoid/sigmoid/get_latest_processed_eth_block`,
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
        this.queryGetPendingBridgeRequest = (params = {}) => this.request({
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
        this.queryGetPendingUnstakeRequest = (params = {}) => this.request({
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
        this.queryGetRaoStakedBalance = (params = {}) => this.request({
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
        this.queryGetSigtaoRateD = (params = {}) => this.request({
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
        this.queryParams = (params = {}) => this.request({
            path: `/sigmoid/sigmoid/params`,
            method: "GET",
            ...params,
        });
    }
}
