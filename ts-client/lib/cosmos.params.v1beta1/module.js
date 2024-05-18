// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { ParamChange } from "./types/cosmos/params/v1beta1/params";
import { QueryParamsRequest } from "./types/cosmos/params/v1beta1/query";
import { QuerySubspacesRequest } from "./types/cosmos/params/v1beta1/query";
import { ParameterChangeProposal } from "./types/cosmos/params/v1beta1/params";
import { QueryParamsResponse } from "./types/cosmos/params/v1beta1/query";
import { QuerySubspacesResponse } from "./types/cosmos/params/v1beta1/query";
import { Subspace } from "./types/cosmos/params/v1beta1/query";
export { ParamChange, QueryParamsRequest, QuerySubspacesRequest, ParameterChangeProposal, QueryParamsResponse, QuerySubspacesResponse, Subspace };
export const registry = new Registry(msgTypes);
function getStructure(template) {
    const structure = { fields: [] };
    for (let [key, value] of Object.entries(template)) {
        let field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
const defaultFee = {
    amount: [],
    gas: "200000",
};
export const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {
        async sendParamChange({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendParamChange: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.paramChange({ value: ParamChange.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendParamChange: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQuerySubspacesRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQuerySubspacesRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.querySubspacesRequest({ value: QuerySubspacesRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQuerySubspacesRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendParameterChangeProposal({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendParameterChangeProposal: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.parameterChangeProposal({ value: ParameterChangeProposal.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendParameterChangeProposal: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQuerySubspacesResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQuerySubspacesResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.querySubspacesResponse({ value: QuerySubspacesResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQuerySubspacesResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendSubspace({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendSubspace: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.subspace({ value: Subspace.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendSubspace: Could not broadcast Tx: ' + e.message);
            }
        },
        paramChange({ value }) {
            try {
                return { typeUrl: "/cosmos.params.v1beta1.ParamChange", value: ParamChange.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:ParamChange: Could not create message: ' + e.message);
            }
        },
        queryParamsRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest", value: QueryParamsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message);
            }
        },
        querySubspacesRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest", value: QuerySubspacesRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QuerySubspacesRequest: Could not create message: ' + e.message);
            }
        },
        parameterChangeProposal({ value }) {
            try {
                return { typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal", value: ParameterChangeProposal.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:ParameterChangeProposal: Could not create message: ' + e.message);
            }
        },
        queryParamsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse", value: QueryParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
            }
        },
        querySubspacesResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse", value: QuerySubspacesResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QuerySubspacesResponse: Could not create message: ' + e.message);
            }
        },
        subspace({ value }) {
            try {
                return { typeUrl: "/cosmos.params.v1beta1.Subspace", value: Subspace.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Subspace: Could not create message: ' + e.message);
            }
        },
    };
};
export const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseURL: addr });
};
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = queryClient({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {};
        client.on('signer-changed', (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        const methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: client.env.prefix ?? "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
;
const IgntModule = (test) => {
    return {
        module: {
            CosmosParamsV1Beta1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;
