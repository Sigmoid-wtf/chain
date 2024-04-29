// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { GenesisState } from "./types/cosmos/feegrant/v1beta1/genesis";
import { QueryAllowanceResponse } from "./types/cosmos/feegrant/v1beta1/query";
import { QueryAllowancesRequest } from "./types/cosmos/feegrant/v1beta1/query";
import { QueryAllowanceRequest } from "./types/cosmos/feegrant/v1beta1/query";
import { QueryAllowancesByGranterResponse } from "./types/cosmos/feegrant/v1beta1/query";
import { BasicAllowance } from "./types/cosmos/feegrant/v1beta1/feegrant";
import { PeriodicAllowance } from "./types/cosmos/feegrant/v1beta1/feegrant";
import { MsgRevokeAllowance } from "./types/cosmos/feegrant/v1beta1/tx";
import { MsgPruneAllowances } from "./types/cosmos/feegrant/v1beta1/tx";
import { MsgPruneAllowancesResponse } from "./types/cosmos/feegrant/v1beta1/tx";
import { QueryAllowancesResponse } from "./types/cosmos/feegrant/v1beta1/query";
import { AllowedMsgAllowance } from "./types/cosmos/feegrant/v1beta1/feegrant";
import { Grant } from "./types/cosmos/feegrant/v1beta1/feegrant";
import { MsgGrantAllowanceResponse } from "./types/cosmos/feegrant/v1beta1/tx";
import { QueryAllowancesByGranterRequest } from "./types/cosmos/feegrant/v1beta1/query";
import { MsgGrantAllowance } from "./types/cosmos/feegrant/v1beta1/tx";
import { MsgRevokeAllowanceResponse } from "./types/cosmos/feegrant/v1beta1/tx";
export { GenesisState, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowanceRequest, QueryAllowancesByGranterResponse, BasicAllowance, PeriodicAllowance, MsgRevokeAllowance, MsgPruneAllowances, MsgPruneAllowancesResponse, QueryAllowancesResponse, AllowedMsgAllowance, Grant, MsgGrantAllowanceResponse, QueryAllowancesByGranterRequest, MsgGrantAllowance, MsgRevokeAllowanceResponse };
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
        async sendGenesisState({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.genesisState({ value: GenesisState.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAllowanceResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAllowanceResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAllowanceResponse({ value: QueryAllowanceResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAllowanceResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAllowancesRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAllowancesRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAllowancesRequest({ value: QueryAllowancesRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAllowancesRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAllowanceRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAllowanceRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAllowanceRequest({ value: QueryAllowanceRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAllowanceRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAllowancesByGranterResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAllowancesByGranterResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAllowancesByGranterResponse({ value: QueryAllowancesByGranterResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAllowancesByGranterResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendBasicAllowance({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendBasicAllowance: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.basicAllowance({ value: BasicAllowance.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendBasicAllowance: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendPeriodicAllowance({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendPeriodicAllowance: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.periodicAllowance({ value: PeriodicAllowance.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendPeriodicAllowance: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgRevokeAllowance({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgRevokeAllowance: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgRevokeAllowance({ value: MsgRevokeAllowance.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgRevokeAllowance: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgPruneAllowances({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgPruneAllowances: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgPruneAllowances({ value: MsgPruneAllowances.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgPruneAllowances: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgPruneAllowancesResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgPruneAllowancesResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgPruneAllowancesResponse({ value: MsgPruneAllowancesResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgPruneAllowancesResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAllowancesResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAllowancesResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAllowancesResponse({ value: QueryAllowancesResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAllowancesResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendAllowedMsgAllowance({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendAllowedMsgAllowance: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.allowedMsgAllowance({ value: AllowedMsgAllowance.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendAllowedMsgAllowance: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGrant({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGrant: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.grant({ value: Grant.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGrant: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgGrantAllowanceResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgGrantAllowanceResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgGrantAllowanceResponse({ value: MsgGrantAllowanceResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgGrantAllowanceResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAllowancesByGranterRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAllowancesByGranterRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAllowancesByGranterRequest({ value: QueryAllowancesByGranterRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAllowancesByGranterRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgGrantAllowance({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgGrantAllowance: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgGrantAllowance({ value: MsgGrantAllowance.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgGrantAllowance: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgRevokeAllowanceResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgRevokeAllowanceResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgRevokeAllowanceResponse({ value: MsgRevokeAllowanceResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgRevokeAllowanceResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        genesisState({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.GenesisState", value: GenesisState.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
            }
        },
        queryAllowanceResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse", value: QueryAllowanceResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAllowanceResponse: Could not create message: ' + e.message);
            }
        },
        queryAllowancesRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest", value: QueryAllowancesRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAllowancesRequest: Could not create message: ' + e.message);
            }
        },
        queryAllowanceRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest", value: QueryAllowanceRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAllowanceRequest: Could not create message: ' + e.message);
            }
        },
        queryAllowancesByGranterResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse", value: QueryAllowancesByGranterResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAllowancesByGranterResponse: Could not create message: ' + e.message);
            }
        },
        basicAllowance({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance", value: BasicAllowance.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:BasicAllowance: Could not create message: ' + e.message);
            }
        },
        periodicAllowance({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance", value: PeriodicAllowance.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:PeriodicAllowance: Could not create message: ' + e.message);
            }
        },
        msgRevokeAllowance({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance", value: MsgRevokeAllowance.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgRevokeAllowance: Could not create message: ' + e.message);
            }
        },
        msgPruneAllowances({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances", value: MsgPruneAllowances.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgPruneAllowances: Could not create message: ' + e.message);
            }
        },
        msgPruneAllowancesResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse", value: MsgPruneAllowancesResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgPruneAllowancesResponse: Could not create message: ' + e.message);
            }
        },
        queryAllowancesResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse", value: QueryAllowancesResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAllowancesResponse: Could not create message: ' + e.message);
            }
        },
        allowedMsgAllowance({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance", value: AllowedMsgAllowance.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:AllowedMsgAllowance: Could not create message: ' + e.message);
            }
        },
        grant({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.Grant", value: Grant.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Grant: Could not create message: ' + e.message);
            }
        },
        msgGrantAllowanceResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse", value: MsgGrantAllowanceResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgGrantAllowanceResponse: Could not create message: ' + e.message);
            }
        },
        queryAllowancesByGranterRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest", value: QueryAllowancesByGranterRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAllowancesByGranterRequest: Could not create message: ' + e.message);
            }
        },
        msgGrantAllowance({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance", value: MsgGrantAllowance.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgGrantAllowance: Could not create message: ' + e.message);
            }
        },
        msgRevokeAllowanceResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse", value: MsgRevokeAllowanceResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgRevokeAllowanceResponse: Could not create message: ' + e.message);
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
            CosmosFeegrantV1Beta1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;
